package com.dfj.backend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dfj.backend.beans.User;
import com.dfj.backend.daos.UserDao;

@Service
public class UserDetailsSecurityService implements UserDetailsService{
	@Autowired
	private UserDao userDao;

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//Only load, not compare 
		User user = userDao.findUserByUsername(username);
		if(user == null) {
			throw new UsernameNotFoundException("username: " + username + "does not exist");
		}
		return user;
	}

}
