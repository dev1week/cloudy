package com.s207.cloudy.global.auth.filter;

import com.s207.cloudy.global.auth.service.JwtService;
import com.s207.cloudy.global.auth.error.exception.AuthorizationException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;


import static com.s207.cloudy.global.error.enums.ErrorCode.UNAUTHORIZED;


@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    private final JwtService jwtService;


    private boolean isAuthenticatedPath(String path){
        return (path.matches("^/api/v1/bookmarks/.*")||path.equals("/api/v1/bookmarks")||path.matches("^/api/v1/comments/.*"));
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        log.info("JwtAuthenticationFilter :: 필터 진입");

        Optional<String> token =  jwtService.extractAccessToken(request);

        if(token.isPresent()){
            token.filter(jwtService::isTokenValid)
                .orElseThrow(()-> new AuthorizationException(UNAUTHORIZED));
        }

        filterChain.doFilter(request, response);
    }






}
