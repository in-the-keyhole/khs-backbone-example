package com.khs.example.authentication.service;

import com.khs.sherpa.json.service.AuthenticationException;
import com.khs.sherpa.json.service.UserService;

/** 
 * Example UserService implementation. Registered in sherpa.properties
 * and will be called to authenticate authenticated @Endpoints
 * 
 * In reality this implementation will engage a real user repo (i.e. LDAP,etc)
 * @author dpitt 
 * 
 * www.keyholesoftware.com
 *
 */

public class TestUserService implements UserService {

	public String[] authenticate(String userid, String password)
			throws AuthenticationException {
		// only valid userid password
		if ("dpitt".equals(userid) && "password".equals(password)) {
			return new String[]{};
		}
		
		throw new AuthenticationException();
		
	}

	public void adminAuthenticate(String userid, String password)
			throws AuthenticationException {
		
		
		// only valid admin userid password
		if ("dpitt".equals(userid) && "password".equals(password)) {
			return;
		}
		
		throw new AuthenticationException();
		
	}

}
