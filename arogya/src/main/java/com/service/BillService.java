package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Bill;
import com.bean.Cartnation;
import com.bean.cart;
import com.dao.BillDao;
import com.dao.BillRepository;

@Service
public class BillService {

	@Autowired
	BillRepository billRepository;
	
	@Autowired
	BillDao bd;
	public String addBill(Bill bi)
	{
		Optional<Bill> bl=billRepository.findById(bi.getBill_id());
		if(bl.isPresent())
		{
			return "BILL ALREADY EXISTS";
		}
		else {
			billRepository.save(bi);
			return "NEW BILL ADDED !";
		}
	}
	
	public List<Bill> displayBill()
	{
		return billRepository.findAll();
	}
	
	public String updateBill(Bill bi)
	{
		Optional<Bill> bl = billRepository.findById(bi.getBill_id());
		
		if(bl.isPresent())
		{
			billRepository.saveAndFlush(bi);
			return "BILL NUMBER "+bi.getBill_id()+" UPDATED ";
		}
		else
		{
			return "BILL NOT FOUND, PLEASE ENTER THE VALID ID";
		}
	}
	
	public String deleteBill(int id)
	{
		if(billRepository.existsById(id))
		{
			billRepository.deleteById(id);
			return "BILL DELETED";
		}
		else
		{
			return "BILL NOT FOUND, PLEASE ENTER THE VALID ID";
		}
	}
	
	public Bill findBillById(int bill_id) {
		Optional<Bill> op= billRepository.findById(bill_id);
		if(op.isPresent()) {
			return op.get();
		}else {
			return null;
		}
	}
	
	public int addToBillTable(cart cv)
	{
		
		 return bd.addToBill(cv);
		
	}
	
	/*public List<Bill> findBycustIdservice(int cust_id) {
		return bd.findBycust_id(cust_id);
		
	}
	*/
	
	public List<Bill> findBycustIdservice(int cust_id) {
		return bd.findBycust_id(cust_id);
		
	}
	
}
