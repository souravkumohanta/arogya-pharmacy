package com.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Stock;
import com.bean.cart;
import com.bean.Bill;
import com.bean.Cartnation;


@Repository
public class BillDao {
	
	@Autowired
	EntityManagerFactory fact;
	
	public int addToBill(cart c)
	{
		
		EntityManager emf=fact.createEntityManager();
		
		int c_id=c.getCid();
		int b_id=c.getBid();
		Stock s=emf.find(Stock.class, b_id);
		if(s==null)
		{
			return 2;
		}
		else
		{
			
			int custid=c_id;
			String itemname=s.getItem_name();
			System.out.println(itemname);
			float i=s.getPrice();
			int amt=Math.round(i);
			s.setQuantity(s.getQuantity()-1);
			emf.getTransaction().begin();
			String INSERT_SQL = "insert into bill values(?1,?2,?3,?4,?5)";
			emf.createNativeQuery(INSERT_SQL).setParameter(1, null)
			.setParameter(2, itemname)
			.setParameter(3, amt)
			.setParameter(4, 1)
			.setParameter(5, custid)
			.executeUpdate();
			
			emf.getTransaction().commit();
			emf.close();
			
			/*
			int custid=c_id;
			String itemname=s.getItem_name();
			float i=s.getPrice();
			int amt=Math.round(i);
			s.setQuantity(s.getQuantity()-1);
			emf.getTransaction().begin();
			
			
			String INSERT_SQL = "insert into cartnation values(?1,?2,?3,?4,?5)";
			
			emf.createNativeQuery(INSERT_SQL).setParameter(1, custid)
			.setParameter(2, itemname)
			.setParameter(3, 1)
			.setParameter(4, i)
			.setParameter(5, i)
			
			.executeUpdate();
			
			emf.getTransaction().commit();
			emf.close();
			*/
			
			
			
			/*
	
			int billid=n;
			int custid=c_id;
			String itemname=s.getItem_name();
			System.out.println(itemname);
			float i=s.getPrice();
			int amt=Math.round(i);
			s.setQuantity(s.getQuantity()-1);
		
			Query qry=emf.createQuery("select * from bill");
			
			qry.setParameter(1,n);
			n++;
			qry.setParameter(2,itemname);
			qry.setParameter(3, amt);
			qry.setParameter(4, 1);
			qry.setParameter(5, custid);
			*/
			return 1;
			
			
		}
		
	
	}
	
	public List<Bill> findBycust_id(int id)
	{
		
		
		List<Bill> listofBill=new ArrayList<Bill>();
		
		
		EntityManager emf=fact.createEntityManager();
		listofBill=emf.createQuery("select b from Bill b where b.cust_id=?1",Bill.class).setParameter(1, id).getResultList();
	
		System.out.println(listofBill);
		return listofBill;
		
		/*
		List<Cartnation> listofBill = new ArrayList<Cartnation>();
		
		EntityManager emf=fact.createEntityManager();
		
		
		listofBill=emf.createQuery("select c from Cartnation c where c.item_no=?1",Cartnation.class).setParameter(1, id).getResultList();
		
		return listofBill;
		*/
		
		/*
		
		EntityManager emf=fact.createEntityManager();
		emf.getTransaction().begin();
		String FIND_SQL = "select * from bill where cust_id = ?";
		
		 emf.createNativeQuery(FIND_SQL).setParameter(1, id).executeUpdate();
		emf.getTransaction().commit();
		emf.close();
		*/
	}

}


/*
 public int addToBill(cart c)
	{
		
		EntityManager emf=fact.createEntityManager();
		
		int c_id=c.getCid();
		int b_id=c.getBid();
		Stock s=emf.find(Stock.class, b_id);
		if(s==null)
		{
			return 2;
		}
		else
		{
			
			int custid=c_id;
			String itemname=s.getItem_name();
			System.out.println(itemname);
			float i=s.getPrice();
			int amt=Math.round(i);
			s.setQuantity(s.getQuantity()-1);
			emf.getTransaction().begin();
			String INSERT_SQL = "insert into bill values(?1,?2,?3,?4,?5)";
			emf.createNativeQuery(INSERT_SQL).setParameter(1, null)
			.setParameter(2, itemname)
			.setParameter(3, amt)
			.setParameter(4, 1)
			.setParameter(5, custid)
			.executeUpdate();
			
			emf.getTransaction().commit();
			emf.close();
			
			
	etho comment si
			int billid=n;
			int custid=c_id;
			String itemname=s.getItem_name();
			System.out.println(itemname);
			float i=s.getPrice();
			int amt=Math.round(i);
			s.setQuantity(s.getQuantity()-1);
		
			Query qry=emf.createQuery("select * from bill");
			
			qry.setParameter(1,n);
			n++;
			qry.setParameter(2,itemname);
			qry.setParameter(3, amt);
			qry.setParameter(4, 1);
			qry.setParameter(5, custid);
			
			ethe tak comment si
			return 1;
			
			
		}
		
	
	}
  */
  
