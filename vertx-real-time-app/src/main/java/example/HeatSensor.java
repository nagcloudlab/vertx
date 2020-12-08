package example;

import java.util.Random;
import java.util.UUID;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;

public class HeatSensor extends AbstractVerticle {

	// state
	private final String sensorId = UUID.randomUUID().toString();
	private final Random random = new Random();
	private double temperature = 21.0;

	@Override
	public void start() throws Exception {
		scheduleNextUpdate();
	}

	private void scheduleNextUpdate() {
		vertx.setTimer(random.nextInt(5000) + 1000, this::update);
	}

	private void update(long timerId) {
		temperature = temperature + (delta() / 10);
		JsonObject payload = new JsonObject();
		payload.put("id", sensorId);
		payload.put("temp", temperature);
		vertx.eventBus().publish("sensor.updates", payload);
		scheduleNextUpdate();
	}

	private double delta() {
		if (random.nextInt() > 0) {
			return random.nextGaussian();
		} else {
			return -random.nextGaussian();
		}
	}

}