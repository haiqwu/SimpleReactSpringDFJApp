package com.dfj.backend.http;


public class Response<T> {

	private boolean success;
	private int code;
	private String message;
	private T payload;
	

	public Response() {
		super();
	}
	
	public Response(boolean success) {
		super();
		this.success = success;
		this.code = success ? 200 : 400;
		this.message = "";
	}
	
	public Response(boolean success, String message) {
		super();
		this.success = success;
		this.code = success ? 200 : 400;
		this.message = message;
	}
	
	public Response(boolean success, String message, T payload) {
		super();
		this.success = success;
		this.code = success ? 200 : 400;
		this.message = message;
		this.payload=payload;
	}

	public Response(boolean success, int code, String message) {
		super();
		this.success = success;
		this.code = code;
		this.message = message;
	}
	

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	

	public T getPayload() {
		return payload;
	}

	public void setPayload(T payload) {
		this.payload = payload;
	}

	@Override
	public String toString() {
		return "Response [success=" + success + ", code=" + code + ", message=" + message + ", payload=" + payload
				+ "]";
	}

	

}
