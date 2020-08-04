package com.ifisolution.realtimeprc.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chemical info from front-end
 * Contain all the information
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChemicalDTO {
    @JsonProperty(value = "chemicalTypeId")
    private int chemicalTypeId;
    @JsonProperty(value = "chemicalName")
    private String chemicalName;
    @JsonProperty(value = "chemicalNumberUsed")
    private int chemicalNumberUsed;
    @JsonProperty(value = "chemicalNumberLeft")
    private int chemicalNumberLeft;
    @JsonProperty(value = "chemicalnumberNeed")
    private int chemicalnumberNeed;
    @JsonProperty(value = "note")
    private String note;
}
