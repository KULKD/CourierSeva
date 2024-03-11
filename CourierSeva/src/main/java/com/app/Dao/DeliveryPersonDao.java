package com.app.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.DeliveryPerson;

public interface DeliveryPersonDao extends JpaRepository<DeliveryPerson, Long> {

}
