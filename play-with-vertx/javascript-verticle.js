



var eb=vertx.eventBus();

eb.consumer('sensor.updates',function (message){
	var body=message.body()
	console.log("avg : "+body)
});