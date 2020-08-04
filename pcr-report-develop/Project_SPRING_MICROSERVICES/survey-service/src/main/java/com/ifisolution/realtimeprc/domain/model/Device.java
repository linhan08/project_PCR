package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Device table
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "device")
public class Device {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int deviceId;

    @Column(name = "device_type_id")
    private int deviceTypeId;

    @Column(name = "device_name")
    private String deviceName;
    public Device(String name ){
        this.deviceName = name;
    }
}
