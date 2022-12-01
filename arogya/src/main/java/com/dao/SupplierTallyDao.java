package com.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Supplier;

@Repository
public class SupplierTallyDao {
@Autowired
EntityManagerFactory factory;

public List<Supplier> getSupplierTally() {
					EntityManager manager  = factory.createEntityManager();
			//		Query qry =manager.createNativeQuery("select year(delivery_date) as year,month(delivery_date) as month,sum(quantity) as total_quantity,sum(price) as total_amount from supplier group by year(delivery_date),month(delivery_date) order by year(delivery_date),month(delivery_date)");
					
					Query qry =manager.createQuery("select t from Supplier t order by delivery_date");			
					
					List<Supplier> list = qry.getResultList();
					return list;
}

}