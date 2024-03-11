package com.app.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.User;
import java.lang.String;
import java.util.List;
import java.util.Optional;

public interface UserDao extends JpaRepository<User,Long> {
   
	Optional<User> findByEmailAndPassword(String email,String password);
}
