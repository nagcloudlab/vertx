package co.example.service;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import co.example.entity.Account;

@ApplicationScoped
public class TxrService {

	@Transactional
	public boolean txr(double amount, String fromAccNumber, String toAccNumber) {

		Account fromAccount = Account.findById(fromAccNumber);
		Account toAccount = Account.findById(toAccNumber);

		fromAccount.setBalance(fromAccount.getBalance() - amount);
		toAccount.setBalance(toAccount.getBalance() + amount);

		Account.update("balance=?1 where number=?2", fromAccount.getBalance(), fromAccount.getNumber());
		Account.update("balance=?1 where number=?2", toAccount.getBalance(), toAccount.getNumber());

		return true;

	}

}
