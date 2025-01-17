package com.s207.cloudy.domain.learning.dto;

import com.s207.cloudy.domain.learning.dto.annotation.validation.DifficultyValidation;
import com.s207.cloudy.domain.learning.dto.annotation.validation.JobNameValidation;
import com.s207.cloudy.domain.learning.dto.annotation.validation.ServiceNameValidation;
import com.s207.cloudy.domain.learning.dto.annotation.validation.TypeValidation;
import jakarta.validation.constraints.Min;
import lombok.*;
import org.hibernate.validator.constraints.Range;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class LearningSearchReq {
    @Min(value = 1, message = "1이상의 값만 가능합니다")
    private int page = 1;

    @Range(min=1, max=100, message = "1이상 100이하의 값만 가능합니다")
    private int pageSize = 10;

    @JobNameValidation
    private String[] jobName;

    @ServiceNameValidation
    String[] serviceName;

    @TypeValidation
    String[] type;

    @DifficultyValidation
    String[] difficulty;

    String query;
}
