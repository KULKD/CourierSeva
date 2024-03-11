package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ShippingDetails")
@Getter
@Setter
@NoArgsConstructor
public class ShippingDetails {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private Long Shpiment_id;
	
	@Column(name = "weight")
	private int weight;       // done
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@Column(name = "Senders_name")
	private LocalDate Sender_name;  //done
	
	
	@Column(name = "Date_of_delivery")
	private LocalDate deliver_By;
	
	@Column(name = "tracking_id",unique = true)
	private String tracking_Id;
	

	
	
    @Column(name="pickup_date")
	private LocalDate pickup_Date; //done 
    
    
    @Column(name="pickup_pincode")
	private String pickup_pincode;  //done
    
    @Column(name="pickup_address")
	private String pickup_address;  // done
    
    @Column(name="content_desc")
	private String content_desc;   // done
    
    
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	@OneToOne(mappedBy = "shipment")
	private Payment payment; 
	
	@OneToOne
	@JoinColumn(name = "reciever_id")
	private Reciever_table reciever;
	
	
   
	

}
