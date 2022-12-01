package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Bill;
import com.bean.Supplier;
import com.dao.SupplierRepository;
import com.dao.SupplierTallyDao;

@Service
public class SupplierService {

	@Autowired
	SupplierRepository supplierRepository;
	@Autowired
	SupplierTallyDao supplierTallyDao;


public List<Supplier> displaySupplier()
{
	return supplierRepository.findAll();
}

public String addSupplier(Supplier sup)
{
		supplierRepository.save(sup);
		return "Request Successful!";
}
public List<Supplier> getSupplierTallyDetails() {
	return supplierTallyDao.getSupplierTally();
}
}