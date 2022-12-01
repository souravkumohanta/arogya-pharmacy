package com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.stereotype.Service;

import com.bean.orders;
import com.dao.OrdersRepository;
import com.dao.orderDao;


@Service
public class orderService {
	@Autowired
	OrdersRepository OR;
	orders od;
	
	@Autowired
	orderDao ordao;
	
	public List<orders> displayAllOrders()
	{
		return OR.findAll();
	}
	
	public String addOrder(orders od)
	{
		Optional<orders> op=OR.findById(od.getOrder_id());
		if(op.isPresent())
		{
			return"RECORD ALREADY PRESENT";
		}
		else
		{
			OR.save(od);
			return "RECORD SAVED";
		}
	}
	
	public String updateOrder(orders od)
	{
		Optional<orders> op=OR.findById(od.getOrder_id());
		if(op.isPresent())
		{
			OR.saveAndFlush(od);
			return"RECORD updated";
		}
		else
		{
			return "RECORD NOT FOUND";
		}
		
	}
	
	public String deleteOrder(int oid)
	{
		if(OR.existsById(oid))
		{
			OR.deleteById(oid);
			return "record deleted";
		}
		else
		{
			return "id not found";
		}
	}
	

	public List<orders> getAllOrdersByQuantity()
	{
		// return null;
			
		
       // return OR.findAll().stream().sorted().collect(Collectors.toList());
		
	//return OR.findAll().stream().filter(ord->ord.getAmount()>ord.getAmount()).collect(Collectors.toList());
		     
		//	return OR.findAll().stream().sorted().
	
		 
	//	 return OR.findAll().stream().sorted(
		 
		 
		 
	//return OR.findAll().sort(null);	
	
	//	return OR.findAll(Sort.by(od.getItems()));
//return OR.findAll().stream().filter().collect(Collectors.toCollection(ArrayList::new));	
	/// galatreturn OR.findAll().sort(Sort.Order.by(od.getItems())));
	/*
	List<orders> ordrec= new ArrayList<>();
	
	OR.findAll().forEach(ordrec::add);
	*/
		//System.out.println(OR.findAll().stream().sorted().collect(Collectors.toList()));
		
		
	 return ordao.getAllOrdersByQuantity();
		
	
	}
	
	
	public List<orders> getAllOrdersByDate()
	{
		
		return ordao.getAllOrdersByDate();
	
	}
	
	
	public List<orders> getAllOrdersSaleByMonth(int year, int month)
	{
		return ordao.getAllOrdersSaleByMonth(year, month);
		
	}
	
	
	
	
}
