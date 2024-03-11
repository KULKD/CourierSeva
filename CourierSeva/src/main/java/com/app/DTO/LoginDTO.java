package com.app.DTO;



import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Data
public class LoginDTO {
	
	
	private String email;
	
	
	private String password;

}
