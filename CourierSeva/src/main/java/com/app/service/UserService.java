package com.app.service;

import com.app.DTO.LoginDTO;
import com.app.DTO.UserDTO;

public interface UserService {
   
	 UserDTO validatelogin(LoginDTO log);
}
