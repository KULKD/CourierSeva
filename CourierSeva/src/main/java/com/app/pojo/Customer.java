package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Customer")
@Getter
@Setter
@DiscriminatorValue("Customer")
@NoArgsConstructor
public class Customer extends User {
	
	
	

	

	@Column(name = "firstname")
	private String firstname;
	@Column(name="lastname")
	private String lastname;
    
	

@OneToMany(mappedBy = "customer",cascade =CascadeType.ALL,orphanRemoval = true)
   private List<ShippingDetails> slist=new ArrayList<>();





public void addShipment(ShippingDetails sdetails)
{
	 slist.add(sdetails);
	 sdetails.setCustomer(this);
}

public void removeShipment(ShippingDetails sdetails)
{
	slist.remove(sdetails);
	sdetails.setCustomer(null);
	
}

public Customer(Long userid, String username, String contactno, String email, String password, String district,
		String state, String pincode, String firstname, String lastname, List<ShippingDetails> slist) {
	super(userid, username, contactno, email, password, district, state, pincode);
	this.firstname = firstname;
	this.lastname = lastname;
	this.slist = slist;
}
   

}
