package com.dfj.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.dfj.backend.beans.User;
import com.dfj.backend.daos.UserDao;
import com.dfj.backend.http.Response;

@Service
public class UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<User> getAll(){
		return userDao.findAll();
	}
	
	public Response<Object> addUser(User user) {
		//System.out.println(user);
		if( user.getUsername().equals("") ) {
			return new Response<>(false, "User name can't be empty");
		}
		
		if(user.getPassword().equals("")) {
			return new Response<>(false, "Password can't be empty");
		}
		User u = userDao.findUserByUsername(user.getUsername());
		if(u != null) {
			return new Response<>(false, "User name already exist");
		}
		user.setPassword(passwordEncoder.encode( user.getPassword()) );
		userDao.save(user);
		return new Response<>(true);
	}
	
	
	public User getUserByUsername(String username) {
		// first way:
		// User u = userDao.findUserByUsername(username);
		// second way:
		List<User> users = getAll();
		User user = users.stream()
			.filter(u -> u.getUsername().equals(username))
			.findAny().get();		
		return user;
	}
	
	
	
	

}
