package example.cluster;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.json.JsonObject;

public class SecondInstance {
	

	private static final Logger logger = LoggerFactory.getLogger(FirstInstance.class);
	public static void main(String[] args) {
		
		Vertx.clusteredVertx(new VertxOptions(), ar->{
			if(ar.succeeded()) {
				Vertx vertx=ar.result();
				vertx.deployVerticle("example.HeatSensor", new DeploymentOptions().setInstances(4));
				vertx.deployVerticle("example.Listener");
				vertx.deployVerticle("example.SensorData");
				JsonObject config=new JsonObject().put("port", 8081);
				vertx.deployVerticle("example.HttpServer",new DeploymentOptions().setConfig(config));
			}else {
				logger.error("error "+ar.cause());
			}
		});
		
	}

}
