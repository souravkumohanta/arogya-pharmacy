package com.dao;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bean.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
	
	
		//public List<Bill> findBycust_id(int cust_id);
	

}



	
