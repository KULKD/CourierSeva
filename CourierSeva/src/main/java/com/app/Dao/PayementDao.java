package com.app.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Payment;

public interface PayementDao extends JpaRepository<Payment, Long> {

}
