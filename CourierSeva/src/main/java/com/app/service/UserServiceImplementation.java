package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.LoginDTO;
import com.app.DTO.UserDTO;
import com.app.Dao.CustmerDao;
import com.app.Dao.UserDao;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojo.Customer;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImplementation implements UserService {
    
	@Autowired
	private CustmerDao udao;
	
	@Autowired
	private  ModelMapper mapper;
	
	@Override
	public UserDTO validatelogin(LoginDTO log) {
	    
	      Customer user=udao.findByEmailAndPassword(log.getEmail(),log.getPassword()).orElseThrow((() ->
			 new ResourceNotFoundException("Invalid email or password!!!!")));
	    
	      return mapper.map(user,UserDTO.class);
	      
	         
	}
       
	 
}
