package com.s207.cloudy.domain.learning.service;

import com.s207.cloudy.domain.learning.dto.LearningListRes;
import org.springframework.stereotype.Service;

import java.util.List;


public interface LearningService {
    List<LearningListRes> getLearnings();
}
