package com.s207.cloudy.domain.roadmap_group.member.api;


import com.s207.cloudy.domain.members.entity.Member;
import com.s207.cloudy.domain.roadmap_group.member.application.MemberRoadmapService;
import com.s207.cloudy.domain.roadmap_group.roadmap.dto.RoadmapListRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/api/v1/my/roadmaps")
public class MemberRoadmapController {
    private final MemberRoadmapService memberRoadmapService;

    @GetMapping
    public ResponseEntity<RoadmapListRes> getMyRoadmapList(@AuthenticationPrincipal Member member) {

        log.debug("memberId: {}", member.getUsername());

        return ResponseEntity
                .status(OK)
                .body(memberRoadmapService.findRoadmapListByMember(member));
    }

    @PostMapping
    public ResponseEntity<String> createMyRoadmap() {


        return ResponseEntity.ok("ok");
    }

    @DeleteMapping
    public ResponseEntity<String> deleteMyRoadMap() {


        return ResponseEntity.ok("ok");
    }


}