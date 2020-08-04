package com.ifisolution.auth.controller;

import com.ifisolution.auth.domain.dto.request.LoginRequest;
import com.ifisolution.auth.domain.dto.request.SignUpRequest;
import com.ifisolution.auth.domain.dto.response.ApiResponse;
import com.ifisolution.auth.entity.AppUser;
import com.ifisolution.auth.entity.Roles;
import com.ifisolution.auth.exception.AuthException;
import com.ifisolution.auth.repo.RoleRepository;
import com.ifisolution.auth.repo.UserRepository;
import com.ifisolution.auth.services.UserDetailsServiceImpl;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;
import java.util.List;

@RestController
public class AuthenticationController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    final int port = 9100;
    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String test(){
        return "Hello From auth Service" + port;
    }
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userRepo.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        AppUser user = new AppUser(signUpRequest.getUsername(),
                 signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Roles userRole = roleRepo.findByRoleName(signUpRequest.getRoleName())
                .orElseThrow(() -> new AuthException("User Role not set."));


        user.setRoles(userRole);
        AppUser result = userRepo.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();
        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "User registered successfully"));
    }

}
