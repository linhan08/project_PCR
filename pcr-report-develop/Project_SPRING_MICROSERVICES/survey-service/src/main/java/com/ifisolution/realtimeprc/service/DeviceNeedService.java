package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.DeviceNeedDTO;
import com.ifisolution.realtimeprc.domain.model.DeviceNeed;

/**
 * DeviceNeed
 */
public interface DeviceNeedService {
    /**
     * Save device need record to database
     * @param unitReportId Id of unit Report
     * @param deviceNeedDTO deviceNeed data from front-end
     * @return Device need record
     */
    public DeviceNeed saveDeviceNeed(int unitReportId, DeviceNeedDTO deviceNeedDTO);
}
