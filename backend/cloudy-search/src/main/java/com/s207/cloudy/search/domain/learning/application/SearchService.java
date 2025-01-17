package com.s207.cloudy.search.domain.learning.application;

import com.s207.cloudy.search.domain.learning.dto.SearchListRes;
import com.s207.cloudy.search.domain.learning.dto.SearchQueryRes;
import com.s207.cloudy.search.domain.learning.dto.SearchReq;

public interface SearchService {

    SearchListRes getAutoCompleteList(SearchReq req);

    SearchQueryRes getFinalQuery(String query);
}
