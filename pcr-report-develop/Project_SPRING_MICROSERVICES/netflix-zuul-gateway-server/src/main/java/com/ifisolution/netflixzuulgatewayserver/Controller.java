package com.ifisolution.netflixzuulgatewayserver;

import com.ifisolution.netflixzuulgatewayserver.config.JwtConfig;
import com.ifisolution.netflixzuulgatewayserver.config.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/images")
public class Controller {

    @Autowired
    JwtConfig jwtConfig;
    private final static Logger logger = Logger.getLogger(SecurityConfig.class.getName());
    @GetMapping
    @RequestMapping("/")
    public String getString(){
        return  jwtConfig.getUri() + "Hello";
    }
}
