package example.cluster;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import example.Listener;
import example.SensorData;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.json.JsonObject;

public class Instance2 {


	private static final Logger logger = LoggerFactory.getLogger(Instance2.class);

	public static void main(String[] args) {

		Vertx.clusteredVertx(new VertxOptions(), ar -> {

			if (ar.succeeded()) {
				logger.info("First instance has been started");
				Vertx vertx=ar.result();
				vertx.deployVerticle("example.HeatSensor", new DeploymentOptions().setInstances(4));
				vertx.deployVerticle("example.HttpServer", new DeploymentOptions().setConfig(new JsonObject().put("port", 8082)));
				vertx.deployVerticle(new Listener());
				vertx.deployVerticle(new SensorData());
			}

		});

	}

}
