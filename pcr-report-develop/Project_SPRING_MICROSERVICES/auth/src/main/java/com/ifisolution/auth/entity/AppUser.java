package com.ifisolution.auth.entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.management.relation.Role;
import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

/**
 * App User Entity
 */
@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "user")
public class AppUser {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }

    @Column(name = "user_name")
    @NotBlank
    private String username;

    @Column(name = "user_password")
    @NotBlank
    private String password;
    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Roles roles;

    public AppUser(Integer id, String username, String password, Roles role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = role;
    }
    public AppUser(String username,String password,Roles role){
        this.username = username;
        this.password = password;
        this.roles = role;
    }
    public AppUser(String username,String password){
        this.username = username;
        this.password = password;
    }
}

