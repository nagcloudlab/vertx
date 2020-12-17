package io.vertx.guides.wiki;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Promise;
import io.vertx.guides.wiki.database.WikiDatabaseVerticle;

public class MainVerticle extends AbstractVerticle {
	

	  @Override
	  public void start(Promise<Void> promise) throws Exception {

	    Promise<String> dbVerticleDeployment = Promise.promise();  // <1>
	    vertx.deployVerticle(new WikiDatabaseVerticle(), dbVerticleDeployment);  // <2>

	    dbVerticleDeployment.future().compose(id -> {  // <3>

	      Promise<String> httpVerticleDeployment = Promise.promise();
	      vertx.deployVerticle(
	        "io.vertx.guides.wiki.http.HttpServerVerticle",  // <4>
	        new DeploymentOptions().setInstances(1),    // <5>
	        httpVerticleDeployment);

	      return httpVerticleDeployment.future();  // <6>

	    })
	    .onSuccess(v->promise.complete())
	    .onFailure(e->promise.fail("failed"));
	  }

}
