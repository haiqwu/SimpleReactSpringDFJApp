package com.dfj.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dfj.backend.beans.Part;
import com.dfj.backend.daos.PartDao;
import com.dfj.backend.http.Response;

@Service
public class PartService {
	
	@Autowired
	private PartDao partDao;
	
	public List<Part> getAll() {
		List<Part> parts = partDao.findAll();
		// optionally sort by name:
		parts.sort( (Part p1, Part p2) -> p1.getName().compareToIgnoreCase( p2.getName()) );
		// optionally prints out to the console
		parts.stream().forEach(System.out::println);

		return parts;
	}
	
	public Response<Object> addPart(Part part) {
		if( part.getName().equals("")) 
			return new Response<>(false, "Part name can't be empty");
		partDao.save(part);
		return new Response<>(true);
	}
	

}
