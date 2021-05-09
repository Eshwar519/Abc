package com.cg.service;

import com.cg.entity.Admin;
import com.cg.entity.Client;
import com.cg.entity.Engineer;

public interface LoginServiceInterface {
	Admin loginAdmin(int adminId,String password);
	Engineer loginEngineer(int employeeId,String password);
	Client loginClient(String clientId,String password) ;

}