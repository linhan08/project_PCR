package com.ifisolution.pcrangular.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ThongTinChung implements Serializable {
    private static final long serialVersionUID = 1L;
    private String tên_Đơn_Vị;
    private String địa_Chỉ;
    private String tên_Trưởng_Khoa_Xét_Nghiệm;
    private String email;
    private String đơn_Vị_Triển_Khai_Xét_Nghiệm;
    private int số_điện_thoại;
    private String là_đơn_Vị_Xét_Nghiệm;

    public ThongTinChung(){

    }
    
	public ThongTinChung(String tên_Đơn_Vị, String địa_Chỉ, String tên_Trưởng_Khoa_Xét_Nghiệm, String email,
			String đơn_Vị_Triển_Khai_Xét_Nghiệm, int số_điện_thoại, String là_đơn_Vị_Xét_Nghiệm) {
		super();
		this.tên_Đơn_Vị = tên_Đơn_Vị;
		this.địa_Chỉ = địa_Chỉ;
		this.tên_Trưởng_Khoa_Xét_Nghiệm = tên_Trưởng_Khoa_Xét_Nghiệm;
		this.email = email;
		this.đơn_Vị_Triển_Khai_Xét_Nghiệm = đơn_Vị_Triển_Khai_Xét_Nghiệm;
		this.số_điện_thoại = số_điện_thoại;
		this.là_đơn_Vị_Xét_Nghiệm = là_đơn_Vị_Xét_Nghiệm;
	}


	public String getTên_Đơn_Vị() {
		return tên_Đơn_Vị;
	}

	public void setTên_Đơn_Vị(String tên_Đơn_Vị) {
		this.tên_Đơn_Vị = tên_Đơn_Vị;
	}

	public String getĐịa_Chỉ() {
		return địa_Chỉ;
	}

	public void setĐịa_Chỉ(String địa_Chỉ) {
		this.địa_Chỉ = địa_Chỉ;
	}

	public String getTên_Trưởng_Khoa_Xét_Nghiệm() {
		return tên_Trưởng_Khoa_Xét_Nghiệm;
	}

	public void setTên_Trưởng_Khoa_Xét_Nghiệm(String tên_Trưởng_Khoa_Xét_Nghiệm) {
		this.tên_Trưởng_Khoa_Xét_Nghiệm = tên_Trưởng_Khoa_Xét_Nghiệm;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getĐơn_Vị_Triển_Khai_Xét_Nghiệm() {
		return đơn_Vị_Triển_Khai_Xét_Nghiệm;
	}

	public void setĐơn_Vị_Triển_Khai_Xét_Nghiệm(String đơn_Vị_Triển_Khai_Xét_Nghiệm) {
		this.đơn_Vị_Triển_Khai_Xét_Nghiệm = đơn_Vị_Triển_Khai_Xét_Nghiệm;
	}

	public int getSố_điện_thoại() {
		return số_điện_thoại;
	}

	public void setSố_điện_thoại(int số_điện_thoại) {
		this.số_điện_thoại = số_điện_thoại;
	}

	public String getLà_đơn_Vị_Xét_Nghiệm() {
		return là_đơn_Vị_Xét_Nghiệm;
	}

	public void setLà_đơn_Vị_Xét_Nghiệm(String là_đơn_Vị_Xét_Nghiệm) {
		this.là_đơn_Vị_Xét_Nghiệm = là_đơn_Vị_Xét_Nghiệm;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
    
    
}
