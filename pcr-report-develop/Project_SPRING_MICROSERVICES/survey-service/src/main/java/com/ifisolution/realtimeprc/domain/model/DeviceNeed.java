package com.ifisolution.realtimeprc.domain.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Device need by unit id
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "devices_need_report")
public class DeviceNeed {
    @Id
    @NotNull
    private int unitReportId;

    @Column(name = "device_type_id")
    private int deviceTypeId;

    @Column(name = "is_need_more_machine")
    private int isNeedMoreMachine;

    @Column(name = "number_of_machine_need")
    private int numberOfMachineNeed;


}
