package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.dao.CustomerDao;
import com.dao.CustomerRepository;
@Service
public class customerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	CustomerDao cd;
	
	public List<Customer> sortById()
	{
		return cd.sortById();
	}
	public List<Customer> sortByname()
	{
		return cd.sortByName();
	}
	public List<Customer> sortByAddress()
	{
		return cd.sortByAddr();
	}



	
	public String addCustomer(Customer cust)
	{
		Optional<Customer> ct=customerRepository.findById(cust.getCust_id());
		if(ct.isPresent())
		{
			return "Username Exists";
		}
		else
		{
			customerRepository.save(cust);
			return "Registration Successful!!";
		}
	}
	
	public List<Customer> showCustomers()
	{
		return customerRepository.findAll();
	}
	
	public String updateCustomer(Customer cust)
	{
		Optional<Customer> ct=customerRepository.findById(cust.getCust_id());
		
		if(ct.isPresent())
		{
			customerRepository.saveAndFlush(cust);
			return "Customer Details Changed Successfully "+cust.getCust_id();
		}
		else
		{
			return "Customer Not Found";
		}
	}
	public String deleteCustomer(int id)
	{
		if(customerRepository.existsById(id))
		{
			customerRepository.deleteById(id);
			return "Customer Deleted";
		}
		else
		{
			return "Customer not found";
		}
	}
	
	public Customer loginCustomer(Customer c) {
		List<Customer> listofC=customerRepository.findAll();
		Customer cust1=null;
		int flag=0;
		for(Customer cust:listofC)
		{
			//if(cust.getCust_id()==c.getCust_id()) {
			if((cust.getCust_login().equals(c.getCust_login()))&&(cust.getPass().equals(c.getPass()))) {
				cust1=cust;
				flag=1;
			}
		}
		
		return cust1;
	}

}
