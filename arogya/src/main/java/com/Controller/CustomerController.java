package com.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

import com.bean.Customer;
import com.service.customerService;
@RestController
@RequestMapping(value="customer")
@CrossOrigin
public class CustomerController {
	
	
	@Autowired
	customerService cs;
	
	@GetMapping(value="display",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getAllcustomer()
	{
		return cs.showCustomers();
	}
	
	@PostMapping(value="insert",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String insertCust(@RequestBody Customer ct )
	{
		return cs.addCustomer(ct);
	}
	
	@PutMapping(value="update",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateCust(@RequestBody Customer ct)
	{
		return cs.updateCustomer(ct);
	}
	
	@DeleteMapping(value="delete/{id}")
	public String deleteCust(@PathVariable("id") int cust_id)
	{
		return cs.deleteCustomer(cust_id);
	}
	
	@GetMapping(value="sortbyid",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getCustomerbyId()
	{
		return cs.sortById();
	}
	@GetMapping(value="sortbyname",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getCustomerbyName()
	{
		return cs.sortByname();
	}
	@GetMapping(value="sortbyAdd",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getCustomerbyAdd()
	{
		return cs.sortByAddress();
	}
	
	@PostMapping(value="login",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer loginCustomer(@RequestBody Customer c,HttpServletRequest request)
	{
		Customer cust=cs.loginCustomer(c);
		if(cust==null)
		{
			System.out.print("NULL CAME");
			return null;
			
		}
		else
		{
		HttpSession session=request.getSession();
		session.setAttribute("username", cust.getCust_login());
		session.setAttribute("password",cust.getPass());
		System.out.print("RAN");
		return cust;
		}
		
		
	}

}
