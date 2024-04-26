package com.s207.cloudy.domain.health.controller;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import com.s207.cloudy.domain.roadmapGroup.roadmap.api.RoadmapController;
import com.s207.cloudy.global.config.SecurityConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(value = HealthController.class,
        includeFilters = @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfig.class))
class HealthControllerTest {

    @Autowired
    private MockMvc mockMvc;


    @Test
    void 관리자는_헬스체크_api로_서버상태를_확인할_수_있다()throws Exception{
        mockMvc.perform(get("/api/v1/health/test"))
                .andExpect(status().isOk());
    }


}