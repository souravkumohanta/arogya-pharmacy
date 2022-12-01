package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class cart {
	
	
	int cid,bid;

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	@Override
	public String toString() {
		return "cart [cid=" + cid + ", bid=" + bid + "]";
	}
	

}
