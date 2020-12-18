package co.example.web;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class TxrRequest {

	@Min(value = 1)
	private double amount;
	@NotBlank
	private String fromAccNumber;
	@NotBlank
	private String toAccNumber;

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getFromAccNumber() {
		return fromAccNumber;
	}

	public void setFromAccNumber(String fromAccNumber) {
		this.fromAccNumber = fromAccNumber;
	}

	public String getToAccNumber() {
		return toAccNumber;
	}

	public void setToAccNumber(String toAccNumber) {
		this.toAccNumber = toAccNumber;
	}

}