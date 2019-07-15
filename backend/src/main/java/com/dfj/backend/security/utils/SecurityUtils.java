package com.dfj.backend.security.utils;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import com.dfj.backend.beans.User;
import com.dfj.backend.http.Response;
import com.dfj.backend.security.AuthenticationSuccessResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SecurityUtils {
	
	private static final ObjectMapper mapper = new ObjectMapper();
	
	
	public static void sendAuthenticationSuccessResponse(HttpServletResponse httpServletResponse, int status, String message, Exception exception, User user)
			throws IOException {
		Response response = new AuthenticationSuccessResponse(exception == null ? true : false, status, message, user);
		System.out.println(response);
		flushResponse(httpServletResponse, response);
	}
	public static void flushResponse(HttpServletResponse httpServletResponse, Response response) throws IOException {
		httpServletResponse.setContentType("application/json;charset=UTF-8");
		httpServletResponse.setStatus(response.getCode());
		PrintWriter writer = httpServletResponse.getWriter();
		writer.write(mapper.writeValueAsString(response));
		writer.flush();
		writer.close();
	}

    public static void sendResponse(HttpServletResponse response, int status, String message, Exception exception) throws IOException {
    // define a response that can be sent to user
    	// write into the response that provided in the arg
    	response.setContentType("application/json;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        writer.write(mapper.writeValueAsString(new Response(exception == null ? true : false, status, message)));
        response.setStatus(status);
        
        writer.flush();
        writer.close();
    }
	
}
