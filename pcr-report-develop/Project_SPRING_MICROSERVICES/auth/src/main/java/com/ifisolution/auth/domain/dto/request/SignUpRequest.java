package com.ifisolution.auth.domain.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignUpRequest {


  private String username;

  private String rolename;

  private String password;


  public String getRoleName(){return rolename;}
  public void setRolename(String rolename){
    this.rolename = rolename;
  }
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
