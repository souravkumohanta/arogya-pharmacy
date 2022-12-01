package com.dao;

import java.util.List;
import java.util.Map;

import javax.persistence.Cache;
import javax.persistence.EntityGraph;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnitUtil;
import javax.persistence.Query;
import javax.persistence.SynchronizationType;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.metamodel.Metamodel;

import org.hibernate.sql.QuerySelect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Customer;



@Repository
public class CustomerDao {
	
	@Autowired
	EntityManagerFactory fact;
	
	public List<Customer> sortByName()
	{
		EntityManager emf=fact.createEntityManager();
//		Query qr=emf.createNativeQuery("select * from customer order by cust_name");
		Query qr=emf.createQuery("select c from Customer c order by cust_name ");
	
		
		 List<Customer> list=qr.getResultList();
		 return list;
			
	}
	public List<Customer> sortByAddr()
	{
		EntityManager emf=fact.createEntityManager();
//		Query qr=emf.createNativeQuery("select * from customer order by cust_addr");
		Query qr=emf.createQuery("select c from Customer c order by cust_addr ");
		
		 List<Customer> list=qr.getResultList();
		 return list;
			
	}
	public List<Customer> sortById()
	{
		EntityManager emf=fact.createEntityManager();
//		Query qr=emf.createNativeQuery(" select * from customer order by cust_id");
		Query qr=emf.createQuery("select c from Customer c order by cust_id");
		
		 List<Customer> list=qr.getResultList();
		 return list;
			
	}

}
