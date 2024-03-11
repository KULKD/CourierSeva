package com.app.pojo;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Vehicle")
@Getter
@Setter
@AllArgsConstructor
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long vehicle_Id;
	
	private String vehicle_No;
	
	

}
