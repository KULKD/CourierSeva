package com.app.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Admin")
@NoArgsConstructor
@Getter
@Setter
@Inheritance(strategy = InheritanceType.JOINED)

@DiscriminatorValue("Admin")
@AllArgsConstructor
public class Admin extends User {
	
	
	@Column(name = "Date_of_Birth")
	private LocalDate DOB;
	
	@Column(name = "Adhar_No")
	private String Adhar_no;
	
	
	@OneToMany(mappedBy = "admin",cascade =CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
	List<Warehouse> warehouseList=new ArrayList<Warehouse>();
	
	public void addWarehouse(Warehouse whouse)
	{
		this.warehouseList.add(whouse);
		whouse.setAdmin(this);
	}
	
	public void removeWarehouse(Warehouse whouse)
	{
		this.warehouseList.remove(whouse);
		whouse.setAdmin(null);
	}
	
	
}


