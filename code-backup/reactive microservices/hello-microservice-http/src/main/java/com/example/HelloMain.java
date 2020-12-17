package com.example;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;

public class HelloMain {

	public static void main(String[] args) {

		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle("com.example.HelloMicroService", new DeploymentOptions());
		
		

	}

}
