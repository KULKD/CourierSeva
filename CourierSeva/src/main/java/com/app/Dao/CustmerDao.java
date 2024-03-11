package com.app.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Customer;
import java.lang.String;
import java.util.List;

public interface CustmerDao extends JpaRepository<Customer,Long> {
   
	  Optional<Customer> findByEmailAndPassword(String email,String password);
}
