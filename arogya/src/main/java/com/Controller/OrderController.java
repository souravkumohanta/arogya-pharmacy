package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.SortDefault;
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

import com.bean.orders;
import com.service.orderService;

@RestController
@RequestMapping(value="order")
@CrossOrigin
public class OrderController {

	@Autowired
	orderService OS;
	
	
	//order button mapping left
	//joins left between bill and order 
 	// join between bill and customer
	//delete button link without path variable
	
	@GetMapping(value="display",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<orders> getAllorders()
	{
		return OS.displayAllOrders();
	}
	
	@PostMapping(value="insert",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String insertCust(@RequestBody orders od )
	{
		return OS.addOrder(od);
	}
	
	@PutMapping(value="update",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateCust(@RequestBody orders od)
	{
		return OS.updateOrder(od);
	}
	
	@DeleteMapping(value="delete/{id}")
	public String deleteCust(@PathVariable("id") int order_id)
	{
		return OS.deleteOrder(order_id);
	}
	
	@GetMapping(value="displayquan",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<orders> getAllOrderByQuantity()
	{
		return OS.getAllOrdersByQuantity();
	}
	@GetMapping(value="displaydate",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<orders> getAllOrderByDate()
	{
		return OS.getAllOrdersByDate();
	}
	
	@GetMapping(value="month/{year}/{month}", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<orders> getAllOrdersSaleByMonth(@PathVariable("year") int year,@PathVariable("month") int month )
	{
		return OS.getAllOrdersSaleByMonth(year,month);
	}

}

