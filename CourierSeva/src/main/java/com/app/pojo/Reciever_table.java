package com.app.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "Reciever")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reciever_table {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reciever_id;
    
	@Column(name = "reciever_name")
    private String reciever_name;
    
	@Column(name = "contact_no")
    private String contact_no;
	
    @Column(name = "email")
    private String email;
    
    @Column(name = "address")
    private String address;
    
    @Column(name = "pincode")
    private String pincode;
    
    
    @OneToOne(mappedBy = "reciever",cascade =CascadeType.ALL )
    private ShippingDetails shipdetail;

}
