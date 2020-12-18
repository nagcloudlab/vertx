package co.example.web;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import co.example.service.TxrService;


@Path("/api/txr")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TxrController {

	@Inject
	TxrService txrService;

	@ConfigProperty(name = "service.name", defaultValue = "")
	String serviceName;

	@GET
	@Path("/info")
	public String getInfo() {
		return serviceName;
	}

	@POST
	public TxrResponse doTxr(@Valid TxrRequest request) {
		boolean b = txrService.txr(request.getAmount(), request.getFromAccNumber(), request.getToAccNumber());
		TxrResponse response = new TxrResponse();
		response.setMessage(b ? "transfer success" : "oops");
		return response;
	}

}