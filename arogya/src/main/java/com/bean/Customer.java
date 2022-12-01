package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	private int cust_id;
	private String cust_name;
    private String cust_phone;
	private String cust_addr;
	private String cust_pass;
	private String cust_login;
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getCust_name() {
		return cust_name;
	}
	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	public String getCust_addr() {
		return cust_addr;
	}
	public void setCust_addr(String cust_addr) {
		this.cust_addr = cust_addr;
	}
	public String getPass() {
		return cust_pass;
	}
	public void setPass(String pass) {
		this.cust_pass = pass;
	}
	public String getCust_login() {
		return cust_login;
	}
	public void setCust_login(String cust_login) {
		this.cust_login = cust_login;
	}
	public String getCust_phone() {
		return cust_phone;
	}
	public void setCust_phone(String cust_phone) {
		this.cust_phone = cust_phone;
	}
	@Override
	public String toString() {
		return "Customer [cust_id=" + cust_id + ", cust_name=" + cust_name + ", cust_phone=" + cust_phone
				+ ", cust_addr=" + cust_addr + ", pass=" + cust_pass + ", cust_login=" + cust_login + "]";
	}
	
	
}
