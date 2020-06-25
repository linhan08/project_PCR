package com.ifisolution.pcrreport.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "chemical")
public class Chemical {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "chemical_id", nullable = false)
    private Integer chemical_id;
    @NotEmpty
    @Size(max = 50)

    @Column(name = "chemical_name", nullable = false)
    private String chemical_name;
    
    public Chemical() {
    	
    }
	public Chemical(Integer chemical_id, @NotEmpty @Size(max = 50) String chemical_name) {
		this.chemical_id = chemical_id;
		this.chemical_name = chemical_name;
	}
	public Integer getChemical_id() {
		return chemical_id;
	}
	public void setChemical_id(Integer chemical_id) {
		this.chemical_id = chemical_id;
	}
	public String getChemical_name() {
		return chemical_name;
	}
	public void setChemical_name(String chemical_name) {
		this.chemical_name = chemical_name;
	}
    
    
}
