package com.couriermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class CourierSaveFailedException extends RuntimeException {

	

	public CourierSaveFailedException(String message) {
		super(message);
	}

}
