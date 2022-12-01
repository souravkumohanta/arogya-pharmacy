package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bean.Supplier;
import com.service.SupplierService;

@RestController
@RequestMapping(value="supplier")
@CrossOrigin
public class SupplierController {

	@Autowired
	SupplierService supplierService;
	
	@GetMapping(value="display",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Supplier> getSupplier(){
		return supplierService.displaySupplier();
	}
	
	@PostMapping(value="add",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String addSupplier(@RequestBody Supplier sup) {
		return supplierService.addSupplier(sup);
	}
	@GetMapping(value = "tally",produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Supplier> getSupplierTallyInfo(){
		return supplierService.getSupplierTallyDetails();
					
	}

}
