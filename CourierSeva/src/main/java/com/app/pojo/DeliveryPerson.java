package com.app.pojo;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "delivery_person")
@Getter
@Setter
@DiscriminatorValue("delivery_person")
public class DeliveryPerson extends User {
	
	
	
	
	private String adhar_No;
	
	@OneToOne
    @JoinColumn(name="vehicle_id")
	private Vehicle vehicle_Id;
	
	public DeliveryPerson(Long userid, String username, String contactno, String email, String password,
			String district, String state, String pincode, String adhar_No, Vehicle vehicle_Id, Status status,
			Availbility_Status astatus) {
		super(userid, username, contactno, email, password, district, state, pincode);
		this.adhar_No = adhar_No;
		this.vehicle_Id = vehicle_Id;
		this.status = status;
		this.astatus = astatus;
	}

	@Enumerated(EnumType.STRING)
	private Status status;
	
	@Enumerated(EnumType.STRING)
	private Availbility_Status astatus;
	
	
	

}
