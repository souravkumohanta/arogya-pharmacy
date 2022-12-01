package com.bean;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.domain.Sort;

@Entity
@Table(name="orders")
public class orders {
	
	@Id
	private int order_id;
	private int items;
	private int amount;
	private int bill_id;
	private int cust_id;
	private LocalDate order_date;

	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public int getItems() {
		return items;
	}
	public void setItems(int items) {
		this.items = items;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getBill_id() {
		return bill_id;
	}
	public void setBill_id(int bill_id) {
		this.bill_id = bill_id;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public LocalDate getOrder_date() {
		return order_date;
	}
	public void setOrder_date(LocalDate order_date) {
		this.order_date = order_date;
	}
	
	@Override
	public String toString() {
		return "orders [order_id=" + order_id + ", items=" + items + ", amount=" + amount + ", bill_id=" + bill_id
				+ ", cust_id=" + cust_id + ", order_date=" + order_date + "]";
	}
	
}
