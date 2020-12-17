package com.example;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;

public class HelloMain {

	public static void main(String[] args) {

		Vertx.clusteredVertx(new VertxOptions(), ar -> {
			if (ar.succeeded()) {
				Vertx vertx = ar.result();
				vertx.deployVerticle("com.example.HelloMicroService", new DeploymentOptions());
			}
		});

	}

}
