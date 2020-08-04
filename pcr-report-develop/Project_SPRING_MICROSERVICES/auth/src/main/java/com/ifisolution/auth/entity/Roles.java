package com.ifisolution.auth.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "role")
@Data
public class Roles {
    @Id
    @NotNull
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roleId;

    @Column(name = "area_id")
    private Integer areaId;

    @Column(name = "province_id")
    private Integer countryId;

    @Column(name = "role_type")
    private Integer roleType;

    @Column(name = "role_name")
    private String roleName;

}
