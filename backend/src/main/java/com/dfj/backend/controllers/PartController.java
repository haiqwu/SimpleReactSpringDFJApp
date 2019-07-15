package com.dfj.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dfj.backend.beans.Part;
import com.dfj.backend.http.Response;
import com.dfj.backend.services.PartService;

@RestController
@RequestMapping("/parts")
public class PartController {
	@Autowired
	private PartService partService;
	
	@GetMapping
	public List<Part> getAll() {
		return partService.getAll();
	}
	
	@PostMapping
	public Response<Object> addPart(@RequestBody Part part) {
		return partService.addPart(part);
	}

}
