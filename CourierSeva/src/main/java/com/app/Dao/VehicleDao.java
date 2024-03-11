package com.app.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Vehicle;

public interface VehicleDao extends JpaRepository<Vehicle, Long>{

}
