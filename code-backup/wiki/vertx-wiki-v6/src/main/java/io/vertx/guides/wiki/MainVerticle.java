package io.vertx.guides.wiki;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Future;
import io.vertx.core.Promise;
import io.vertx.guides.wiki.database.WikiDatabaseVerticle;
import io.vertx.guides.wiki.http.AuthInitializerVerticle;

public class MainVerticle extends AbstractVerticle {
	

	  @Override
	  public void start(Promise<Void> promise) throws Exception {


		    Promise<String> dbDeploymentPromise = Promise.promise();
		    vertx.deployVerticle(new WikiDatabaseVerticle(), dbDeploymentPromise);

		    Future<String> authDeploymentFuture = dbDeploymentPromise.future().compose(id -> {
		      Promise<String> deployPromise = Promise.promise();
		      vertx.deployVerticle(new AuthInitializerVerticle(), deployPromise);
		      return deployPromise.future();
		    });

		    Future<String> deployHttpFuture = authDeploymentFuture.compose(id -> {
		      Promise<String> deployPromise = Promise.promise();
		      vertx.deployVerticle("io.vertx.guides.wiki.http.HttpServerVerticle", new DeploymentOptions().setInstances(1), deployPromise);
		      return deployPromise.future();
		    });

		    deployHttpFuture.setHandler(ar -> {
		      if (ar.succeeded()) {
		        promise.complete();
		      } else {
		        promise.fail(ar.cause());
		      }
		    });
		    
	  }

}
