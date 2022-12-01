package com.bean;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="stock")
public class Stock {

		@Id
		private int stock_id;
		private String item_name;
		private LocalDate expiry ;
		private int quantity;
		private float price;
		private String type;
		@Override
		public String toString() {
			return "stock [stock_id=" + stock_id + ", item_name=" + item_name + ", expiry=" + expiry + ", quantity="
					+ quantity + ", price=" + price + ", type=" + type + "]";
		}
		public int getStock_id() {
			return stock_id;
		}
		public void setStock_id(int stock_id) {
			this.stock_id = stock_id;
		}
		public String getItem_name() {
			return item_name;
		}
		public void setItem_name(String item_name) {
			this.item_name = item_name;
		}
		public LocalDate getExpiry() {
			return expiry;
		}
		public void setExpiry(LocalDate expiry) {
			this.expiry = expiry;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public float getPrice() {
			return price;
		}
		public void setPrice(float price) {
			this.price = price;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}





	}

