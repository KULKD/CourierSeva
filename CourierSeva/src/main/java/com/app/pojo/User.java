package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "User")
@NoArgsConstructor
@Getter
@Setter
@Inheritance(strategy = InheritanceType.JOINED)

@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING,name = "role",columnDefinition = "varchar(20)")
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userid;
	@Column(name = "username")
	private String username;
	@Column(name = "phonenumber")
	private String contactno;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "district")
	private String district;
	@Column(name="state")
	private String state;
	@Column(name = "pincode")
	private String pincode;
	
	
	
}
