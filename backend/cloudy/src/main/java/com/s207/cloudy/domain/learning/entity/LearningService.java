package com.s207.cloudy.domain.learning.entity;

import com.s207.cloudy.domain.learning.entity.embedded.LearningServicePK;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Learning_Service")
public class LearningService {
    @EmbeddedId
    private LearningServicePK learningServicePK;
}