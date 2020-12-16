package example.callback;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;

public class Main {
	
	public static void main(String[] args) {
		
		Vertx vertx = Vertx.vertx();
		
		vertx.deployVerticle("example.sensor.HeatSensor",
				new DeploymentOptions().setConfig(new JsonObject()
						.put("http.port", 3000)));
		
		vertx.deployVerticle("example.sensor.HeatSensor",
				new DeploymentOptions().setConfig(new JsonObject()
						.put("http.port", 3001)));
		
		vertx.deployVerticle("example.sensor.HeatSensor",
				new DeploymentOptions().setConfig(new JsonObject()
						.put("http.port", 3002)));
		
		
		vertx.deployVerticle("example.snapshot.SnapshotService");
		vertx.deployVerticle("example.callback.CollectorService");
		
	}

}
