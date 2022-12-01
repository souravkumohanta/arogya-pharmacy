package com.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Stock;

import com.dao.StockRepository;
import com.dao.orderDao;
import com.dao.stockDao;

@Service
public class StockService {

	@Autowired
	StockRepository stockRepository;
	Stock sk;
	
	@Autowired
	stockDao stockdao;
	
	//add the record
	public String addStock(Stock sk)
	{
		Optional<Stock> st = stockRepository.findById(sk.getStock_id());
		
		if(st.isPresent())
		{
			return "Product Exists";
		}
		else 
		{
			stockRepository.save(sk);
			return "Product Added Successfully";
		}
	}
	
	
	//see all the record
	public List<Stock> showAllRecord()
	{
		return stockRepository.findAll();
	}
	
	// delete the record
	
	public String deleteRecord(int id)
	{
		Optional<Stock> st = stockRepository.findById(id);
		
		if(st.isPresent())
		{
			stockRepository.deleteById(id);
			return "Product deleted";
		}
		else
		{
			return "Product not found";
		}
	}
	
	//updating    ****** useless*****
	public String updateRecord(Stock sk)
	{
		Optional<Stock> op = stockRepository.findById(sk.getStock_id());
		if(op.isPresent())
		{    
			stockRepository.saveAndFlush(sk);
			return " Product Updated ";
		}
		else
		{
			return "Product not found";
		}
	}
	
	public List<Stock> displayByName()
	{
		return stockdao.getAllStockByname();
	}

	public List<Stock> displayByNameDesc()
	{
		return stockdao.getAllStockBynameDesc();
	}
	
}
