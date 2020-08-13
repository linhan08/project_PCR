package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "unit")
public class Unit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int unitId;

    @Column(name = "unit_name")
    @Size(max = 255)
    private String unitName;

    @Column(name = "user_id")
    private int userId;
    public Unit(String unitName,int userId){
        this.unitName = unitName;
        this.userId = userId;
    }

}
