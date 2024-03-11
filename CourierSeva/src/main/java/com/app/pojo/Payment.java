package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Payment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long payment_id;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "payment_method")
	private String payment_method;
	
	@Column(name = "billing_details")
	private String billing_details; 
    
    @OneToOne
    @JoinColumn(name="shpiment_id")
	private ShippingDetails shipment;
	
    

}
