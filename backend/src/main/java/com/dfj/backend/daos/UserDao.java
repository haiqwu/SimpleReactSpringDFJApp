package com.dfj.backend.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dfj.backend.beans.User;

public interface UserDao extends JpaRepository<User, Integer>{
	public User findUserByUsername(String username);
	
	

}
