package com.s207.cloudy.domain.health.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HealthController {


    public ResponseEntity<String> check(){
        return ResponseEntity.ok("ok");
    }


}
