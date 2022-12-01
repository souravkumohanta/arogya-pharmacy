package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.orders;

@Repository
public class orderDao {

	@Autowired
	EntityManagerFactory factory;
	
	
	
	public List<orders> getAllOrdersByQuantity()
	{
		EntityManager emf = factory.createEntityManager();
		//Query qry = emf.createNativeQuery("select * from orders order by items desc");
		Query qry =emf.createQuery("select o from orders o order by items desc");
		
		List<orders> list = qry.getResultList();
		return list;
	}

	
	public List<orders> getAllOrdersByDate()
	{
		EntityManager em = factory.createEntityManager();
		//Query qry = em.createNativeQuery("select * from orders order by order_date desc");
		Query qry =em.createQuery("select o from orders o order by order_date desc");
		
		List<orders> list = qry.getResultList();
		return list;
	}
	
	
	public List<orders> getAllOrdersSaleByMonth(int year, int month)
	{int a=year;
	int b= month;
		EntityManager em = factory.createEntityManager();
		//Query qry = em.createNativeQuery("select * from orders where order_date like 'year-month-%'");
		Query qry =em.createQuery("select o from orders o where order_date like ''a'-'b'-%'");
		//select * from orders where order_date like '2020-12-%'
		//select p from orders where p.order_date like 'year-month-%'
		List<orders> list = qry.getResultList(); 
		return list;
	}
	
}
