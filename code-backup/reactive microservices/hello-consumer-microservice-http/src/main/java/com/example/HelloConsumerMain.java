package com.example;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;

public class HelloConsumerMain {

	public static void main(String[] args) {

		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle("com.example.HelloConsumerMicroService", new DeploymentOptions());
		
		

	}

}
