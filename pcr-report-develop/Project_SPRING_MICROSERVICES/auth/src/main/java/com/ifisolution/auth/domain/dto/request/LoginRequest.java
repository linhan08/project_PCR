package com.ifisolution.auth.domain.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
// A (temporary) class just to represent the user credentials
// a class dùng để thể hiện user credential
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
  private Integer id;

  @NotBlank
  private String username;

  @NotBlank
  private String password;
}
