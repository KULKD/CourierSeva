package com.app.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.ShippingDetails;

public interface ShippingDao extends JpaRepository<ShippingDetails, Long>{

}
