package com.ifisolution.netflixzuulgatewayserver.enums;

public enum RoleName {
  ROLE_USER("User"),
  ROLE_ADMIN("Admin"),
  ROLE_SUPERADMIN("Super Admin");

  private String role;

  RoleName(String role) {
    this.role = role;
  }

  public String getRole(){
    return role;
  }
}
