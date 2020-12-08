package example.local;

import example.Listener;
import example.SensorData;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;

public class Main {

	public static void main(String[] args) {

		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle("example.HeatSensor", new DeploymentOptions().setInstances(4)); //
		vertx.deployVerticle(new Listener());
		vertx.deployVerticle(new SensorData());
		vertx.deployVerticle("example.HttpServer",
				new DeploymentOptions().setConfig(new JsonObject().put("port", 8181)));

	}

}
