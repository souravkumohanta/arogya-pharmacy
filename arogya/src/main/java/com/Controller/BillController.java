package com.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Bill;
import com.bean.Cartnation;
import com.bean.cart;
import com.service.BillService;

@CrossOrigin
@RestController
@RequestMapping(value="bill")
public class BillController {
	@Autowired
	BillService billService;
	
	
	
	@GetMapping(value="display",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Bill> getAllbill(){
		return billService.displayBill();
	}
	
	@PostMapping(value="add",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String addBill(@RequestBody Bill bi) {
		return billService.addBill(bi);
	}
	
	@PutMapping(value="update",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateBill(@RequestBody Bill bi)
	{
		return billService.updateBill(bi);
	}
	
	@DeleteMapping(value="delete/{id}")
	public String deleteBill(@PathVariable("id") int bill_id) {
		return billService.deleteBill(bill_id);
	}
	
	@GetMapping(value="findBill/{bill_id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public Bill getBillById(@PathVariable("bill_id") int bill_id) {
		return billService.findBillById(bill_id);
	}
	
	@PostMapping(value="cart",consumes = MediaType.APPLICATION_JSON_VALUE)
	public int addToCart(@RequestBody cart ct)
	{
		int res= billService.addToBillTable(ct);
		return res;
	
	}
	@GetMapping(value="findcust/{cust_id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Bill> getBillbyCustID(@PathVariable("cust_id") int cust_id) {
		return billService.findBycustIdservice(cust_id);
	}

	
	/*
	@GetMapping(value="findcust/{cust_id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Cartnation> getBillbyCustID(@PathVariable("cust_id") int cust_id) {
		return billService.findBycustIdservice(cust_id);
	}
	*/
	
}
