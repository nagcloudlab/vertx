package example.local;

import example.HttpServer;
import example.Listener;
import example.SensorData;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;

public class Main {

	public static void main(String[] args) {

		Vertx vertx = Vertx.vertx();
		DeploymentOptions options = new DeploymentOptions().setInstances(4);
		vertx.deployVerticle("example.HeatSensor", options);
		vertx.deployVerticle(new Listener());
		vertx.deployVerticle(new HttpServer());
		vertx.deployVerticle(new SensorData());

	}

}
