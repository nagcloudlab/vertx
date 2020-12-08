package example;

import java.util.HashMap;
import java.util.stream.Collectors;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;

public class SensorData extends AbstractVerticle {

	private final HashMap<String, Double> lastValues = new HashMap<>();

	@Override
	public void start() throws Exception {
		EventBus bus = vertx.eventBus();
		bus.consumer("sensor.updates", this::update);
		bus.consumer("sensor.average", this::average);
	}

	private void update(Message<JsonObject> message) {
		JsonObject json = message.body();
		lastValues.put(json.getString("id"), json.getDouble("temp"));
	}

	private void average(Message<JsonObject> message) {
		double avg = lastValues.values().stream().collect(Collectors.averagingDouble(Double::doubleValue));
		JsonObject json = new JsonObject().put("average", avg);
		message.reply(json);
	}

}
