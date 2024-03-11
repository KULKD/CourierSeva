package com.app.pojo;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Warehouse {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long warehouseId;
	
	@NotNull
	@Column(length=100)
	private String warehouseaddress;
	
	@NotNull
	private String warehousePincode;
	
	@ManyToOne 
	@JoinColumn(name="admin_id")
	private Admin admin;
	
	
	

}
