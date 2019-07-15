package com.dfj.backend.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired  
	private UserDetailsSecurityService userDetailsSecurityService;
	
	@Autowired
	private AuthenticationEntryPointImpl authenticationEntryPointImpl;
	@Autowired
	private AccessDeniedHandlerImpl accessDeniedHandlerImpl;
	@Autowired
	private AuthenticationSuccessHandlerImpl authenticationSuccessHandlerImpl;
	@Autowired
	private AuthenticationFailureHandlerImpl authenticationFailureHandlerImpl;
	
	@Autowired
	private LogoutSuccessHandlerImpl logoutSuccessHandlerImpl;

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
			.cors()
    			.and()
			.csrf().disable()
			
			.authorizeRequests()
			
			//.antMatchers("/*").permitAll()  
			//.antMatchers("/h2-console").permitAll()  
			
				.anyRequest().authenticated()//Specify that URLs are allowed by any authenticated user.
				.and()
				.exceptionHandling().accessDeniedHandler(accessDeniedHandlerImpl)
				.and()
				.exceptionHandling().authenticationEntryPoint(authenticationEntryPointImpl)
				.and()
				
				
			.formLogin() // provide page to enter pswd and username 
			.usernameParameter("username") 
			.passwordParameter("password") 
			.failureHandler(authenticationFailureHandlerImpl)
			.successHandler(authenticationSuccessHandlerImpl)
			.and()
			
			
			.logout()
			.permitAll()
			.logoutUrl("/logout") //destroy session
			.logoutSuccessHandler(logoutSuccessHandlerImpl)
			.and()
			
			
			.rememberMe(); //additional remembermeID in the session - long term key unless shut down server
			//.and()
 		    //.headers().frameOptions().disable(); // permit h2 console to display
 		    // To enable H2-Console need: 1. disable frameOptions 2. permitAll() to the "/h2-console" URL
	}
	
	@Bean		 
	public PasswordEncoder passwordEncoder() { 
		return new BCryptPasswordEncoder(11); 
	}
	
	@Autowired	 
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsSecurityService).passwordEncoder(passwordEncoder());
	}
	
	// CORS CONFIG
	@Bean
    public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*"); 
        configuration.setAllowedMethods( Arrays.asList("GET","POST","PUT","DELETE","HEAD","OPTIONS") );
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
	

}
