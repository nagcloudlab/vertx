package io.vertx.guides.wiki.http;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.github.rjeschke.txtmark.Processor;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.templ.freemarker.FreeMarkerTemplateEngine;
import io.vertx.guides.wiki.database.WikiDatabaseService;

public class HttpServerVerticle extends AbstractVerticle {
	

	  public static final String CONFIG_HTTP_SERVER_PORT = "http.server.port";
	  public static final String CONFIG_WIKIDB_QUEUE = "wikidb.queue";

	  private static final Logger LOGGER = LoggerFactory.getLogger(HttpServerVerticle.class);

	  private FreeMarkerTemplateEngine templateEngine;

	  private static final String EMPTY_PAGE_MARKDOWN =
	    "# A new page\n" +
	      "\n" +
	      "Feel-free to write in Markdown!\n";

	  // tag::db-consume[]
	  private WikiDatabaseService dbService;
	  

	  @Override
	  public void start(Promise<Void> promise) throws Exception {

	    String wikiDbQueue = config().getString(CONFIG_WIKIDB_QUEUE, "wikidb.queue"); // <1>
	    dbService = WikiDatabaseService.createProxy(vertx, wikiDbQueue);

	    HttpServer server = vertx.createHttpServer();
	    // (...)
	  // end::db-consume[]

	    Router router = Router.router(vertx);
	    router.get("/").handler(this::indexHandler);
	    router.get("/wiki/:page").handler(this::pageRenderingHandler);
	    router.post().handler(BodyHandler.create());
	    router.post("/save").handler(this::pageUpdateHandler);
	    router.post("/create").handler(this::pageCreateHandler);
	    router.post("/delete").handler(this::pageDeletionHandler);

	    templateEngine = FreeMarkerTemplateEngine.create(vertx);

	    int portNumber = config().getInteger(CONFIG_HTTP_SERVER_PORT, 8080);
	    server
	      .requestHandler(router)
	      .listen(portNumber, ar -> {
	        if (ar.succeeded()) {
	          LOGGER.info("HTTP server running on port " + portNumber);
	          promise.complete();
	        } else {
	          LOGGER.error("Could not start a HTTP server", ar.cause());
	          promise.fail(ar.cause());
	        }
	      });
	  }
	  
	  

	  // tag::db-service-calls[]
	  private void indexHandler(RoutingContext context) {
	    dbService.fetchAllPages(reply -> {
	      if (reply.succeeded()) {
	        context.put("title", "Wiki home");
	        context.put("pages", reply.result().getList());
	        templateEngine.render(context.data(), "templates/index.ftl", ar -> {
	          if (ar.succeeded()) {
	            context.response().putHeader("Content-Type", "text/html");
	            context.response().end(ar.result());
	          } else {
	            context.fail(ar.cause());
	          }
	        });
	      } else {
	        context.fail(reply.cause());
	      }
	    });
	  }

	  private void pageRenderingHandler(RoutingContext context) {
	    String requestedPage = context.request().getParam("page");
	    dbService.fetchPage(requestedPage, reply -> {
	      if (reply.succeeded()) {

	        JsonObject payLoad = reply.result();
	        boolean found = payLoad.getBoolean("found");
	        String rawContent = payLoad.getString("rawContent", EMPTY_PAGE_MARKDOWN);
	        context.put("title", requestedPage);
	        context.put("id", payLoad.getInteger("id", -1));
	        context.put("newPage", found ? "no" : "yes");
	        context.put("rawContent", rawContent);
	        context.put("content", Processor.process(rawContent));
	        context.put("timestamp", new Date().toString());

	        templateEngine.render(context.data(), "templates/page.ftl", ar -> {
	          if (ar.succeeded()) {
	            context.response().putHeader("Content-Type", "text/html");
	            context.response().end(ar.result());
	          } else {
	            context.fail(ar.cause());
	          }
	        });

	      } else {
	        context.fail(reply.cause());
	      }
	    });
	  }

	  private void pageUpdateHandler(RoutingContext context) {
	    String title = context.request().getParam("title");

	    Handler<AsyncResult<Void>> handler = reply -> {
	      if (reply.succeeded()) {
	        context.response().setStatusCode(303);
	        context.response().putHeader("Location", "/wiki/" + title);
	        context.response().end();
	      } else {
	        context.fail(reply.cause());
	      }
	    };

	    String markdown = context.request().getParam("markdown");
	    if ("yes".equals(context.request().getParam("newPage"))) {
	      dbService.createPage(title, markdown, handler);
	    } else {
	      dbService.savePage(Integer.valueOf(context.request().getParam("id")), markdown, handler);
	    }
	  }

	  private void pageCreateHandler(RoutingContext context) {
	    String pageName = context.request().getParam("name");
	    String location = "/wiki/" + pageName;
	    if (pageName == null || pageName.isEmpty()) {
	      location = "/";
	    }
	    context.response().setStatusCode(303);
	    context.response().putHeader("Location", location);
	    context.response().end();
	  }

	  private void pageDeletionHandler(RoutingContext context) {
	    dbService.deletePage(Integer.valueOf(context.request().getParam("id")), reply -> {
	      if (reply.succeeded()) {
	        context.response().setStatusCode(303);
	        context.response().putHeader("Location", "/");
	        context.response().end();
	      } else {
	        context.fail(reply.cause());
	      }
	    });
	  }
	  
	  

}
