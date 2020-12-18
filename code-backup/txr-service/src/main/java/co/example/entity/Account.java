package co.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
public class Account extends PanacheEntityBase {

	@Id
	@Column(name = "acc_number")
	private String number;
	@Column(name = "acc_balance")
	private double balance;

	public Account(String number, double balance) {
		super();
		this.number = number;
		this.balance = balance;
	}

	public Account() {
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
}
