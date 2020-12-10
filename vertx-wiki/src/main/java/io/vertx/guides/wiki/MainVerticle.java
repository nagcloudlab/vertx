package io.vertx.guides.wiki;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.jdbc.JDBCClient;
import io.vertx.ext.sql.SQLConnection;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.templ.freemarker.FreeMarkerTemplateEngine;

public class MainVerticle extends AbstractVerticle {
	
	private static final String SQL_CREATE_PAGES_TABLE = "create table if not exists Pages (Id integer identity primary key, Name varchar(255) unique, Content clob)";
	private static final String SQL_GET_PAGE = "select Id, Content from Pages where Name = ?";
	private static final String SQL_CREATE_PAGE = "insert into Pages values (NULL, ?, ?)";
	private static final String SQL_SAVE_PAGE = "update Pages set Content = ? where Id = ?";
	private static final String SQL_ALL_PAGES = "select Name from Pages";
	private static final String SQL_DELETE_PAGE = "delete from Pages where Id = ?";
	
	private JDBCClient dbClient;

	private static final Logger LOGGER = LoggerFactory.getLogger(MainVerticle.class);

	@Override
	public void start(Promise<Void> promise) {

		Future<Void> steps = prepareDatabase().compose(v -> startHttpServer());
		steps
		.onSuccess(promise::complete)
		.onFailure(promise::fail);

	}

	private Future<Void> prepareDatabase() {
		Promise<Void> promise = Promise.promise();
		
		dbClient = JDBCClient.createShared(vertx, new JsonObject()  
			    .put("url", "jdbc:hsqldb:file:db/wiki")   
			    .put("driver_class", "org.hsqldb.jdbcDriver")   
			    .put("max_pool_size", 30));   
		
		dbClient.getConnection(ar -> {    // <5>
		      if (ar.failed()) {
		        LOGGER.error("Could not open a database connection", ar.cause());
		        promise.fail(ar.cause());    // <6>
		      } else {
		        SQLConnection connection = ar.result();   // <7>
		        connection.execute(SQL_CREATE_PAGES_TABLE, create -> {
		          connection.close();   // <8>
		          if (create.failed()) {
		            LOGGER.error("Database preparation error", create.cause());
		            promise.fail(create.cause());
		          } else {
		            promise.complete();  // <9>
		          }
		        });
		      }
		    });
		
		return promise.future();
	}

	
	 // tag::startHttpServer[]
	private FreeMarkerTemplateEngine templateEngine;
	  
	private Future<Void> startHttpServer() {
		Promise<Void> promise = Promise.promise();
		
		HttpServer server = vertx.createHttpServer();   // <1>
		
		Router router = Router.router(vertx);   // <2>
		router.get("/").handler(this::indexHandler);
	    router.get("/wiki/:page").handler(this::pageRenderingHandler); // <3>
	    router.post().handler(BodyHandler.create());  // <4>
	    router.post("/create").handler(this::pageCreateHandler);
	    router.post("/save").handler(this::pageUpdateHandler);
	    router.post("/delete").handler(this::pageDeletionHandler);
	    
	    templateEngine = FreeMarkerTemplateEngine.create(vertx);
	    
	    server
	      .requestHandler(router)
	      .listen(8080, ar -> {   // <6>
	          if (ar.succeeded()) {
	            LOGGER.info("HTTP server running on port 8080");
	            promise.complete();
	          } else {
	            LOGGER.error("Could not start a HTTP server", ar.cause());
	            promise.fail(ar.cause());
	          }
	        });
		
		return promise.future();
	}
	
	
	private void indexHandler(RoutingContext context) {
		
		dbClient.getConnection(car -> {
			if (car.succeeded()) {
				SQLConnection connection = car.result();
				connection.query(SQL_ALL_PAGES, res -> {
					connection.close();

					if (res.succeeded()) {

						List<String> pages = res.result().getResults().stream().map(json -> json.getString(0)).sorted()
								.collect(Collectors.toList());

						context.put("title", "Wiki home");
						context.put("pages", pages);

						templateEngine.render(context.data(), "templates/index.ftl", ar -> {
							if (ar.succeeded()) {
								context.response().putHeader("Content-Type", "text/html");
								context.response().end(ar.result());
							} else {
								context.fail(ar.cause());
							}
						});

					} else {
						context.fail(res.cause());
					}
				});
			} else {
				context.fail(car.cause());
			}
		});
		
	}
	private void pageRenderingHandler(RoutingContext context) {
	
	}
	private void pageUpdateHandler(RoutingContext context) {
		
	}
	private void pageCreateHandler(RoutingContext context) {
		
	}
	private void pageDeletionHandler(RoutingContext context) {
		
	}
	

}
