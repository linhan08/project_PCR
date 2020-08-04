package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.TestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestResultRepo extends JpaRepository<TestResult,Integer> {


}
