package com.dfj.backend.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dfj.backend.beans.Part;

public interface PartDao extends JpaRepository<Part, Integer> {
	

}
