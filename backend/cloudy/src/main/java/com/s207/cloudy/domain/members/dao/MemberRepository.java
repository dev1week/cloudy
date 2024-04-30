package com.s207.cloudy.domain.members.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.s207.cloudy.domain.members.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {
    @Query("SELECT CASE WHEN EXISTS (SELECT 1 FROM Member m WHERE m.id = :memberId) THEN true ELSE false END")
    boolean existsByMemberId(String memberId);


    Optional<Member> findById(String memberId);

}