package com.s207.cloudy.domain.roadmap_group.member.application;

import com.s207.cloudy.domain.members.entity.Member;
import com.s207.cloudy.domain.roadmap_group.roadmap.dto.RoadmapListRes;

import java.util.List;

public interface MemberRoadmapService {
    RoadmapListRes findRoadmapListByMember(Member member);

    List<Integer> findRoadmapIdList(String memberId);
}