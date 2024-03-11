package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.LoginDTO;
import com.app.custom_exceptions.ApiResponse;
import com.app.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins ="http://localhost:3000")
public class UserController {
   
	@Autowired
	private UserService uservice;
	
	@CrossOrigin(origins ="http://localhost:3000")
	@PostMapping("/login")
	public ResponseEntity<?> validatelogin( @org.springframework.web.bind.annotation.RequestBody LoginDTO log )
	{
		try {
			
			System.out.println(log);
		
			return ResponseEntity.ok
					(uservice.validatelogin(log));
			} catch (Exception e) {
			
				return ResponseEntity
						.status(HttpStatus.NOT_FOUND)
						.body(new ApiResponse(e.getMessage()));
						
			}
		   
	}
}
