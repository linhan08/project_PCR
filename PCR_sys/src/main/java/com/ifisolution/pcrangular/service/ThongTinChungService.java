package com.ifisolution.pcrangular.service;

import com.ifisolution.pcrangular.entities.ThongTinChung;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThongTinChungService extends JpaRepository<ThongTinChung, String> {
}
