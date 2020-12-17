package io.vertx.guides.wiki;

import io.vertx.core.Vertx;

public class Main {

	public static void main(String[] args) {
		
		Vertx vertx=Vertx.vertx();
		vertx.deployVerticle(new MainVerticle());
		
	}
	
}
