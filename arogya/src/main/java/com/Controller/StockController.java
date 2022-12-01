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

import com.bean.Stock;
import com.service.StockService;

@RestController
@RequestMapping(value="medstock")
@CrossOrigin
public class StockController {

	@Autowired
	StockService ss;
	
	@GetMapping(value="displayall", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Stock> getAllValues()
	{
		return ss.showAllRecord();
	}
	
	
	@PostMapping(value="insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String addStock(@RequestBody Stock sk)
	{
	     return	ss.addStock(sk);
	}
	
	@PutMapping(value="update", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateStock(@RequestBody Stock sk)
	{
		return ss.updateRecord(sk);
	}

	@DeleteMapping(value="delete/{id}")
	public String deleteStock(@PathVariable("id") int id)
	{
		return ss.deleteRecord(id);
		
	}

	@GetMapping(value="displayname", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Stock> displayByname()
	{
		return ss.displayByName();
	}
	
	@GetMapping(value="displaynamedesc", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Stock> displayBynameDesc()
	{
		return ss.displayByNameDesc();
	}

}


