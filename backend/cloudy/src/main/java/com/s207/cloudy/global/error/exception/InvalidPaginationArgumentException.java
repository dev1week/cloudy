package com.s207.cloudy.global.error.exception;

import com.s207.cloudy.global.error.enums.ErrorCodeEnum;

public class InvalidPaginationArgumentException extends RuntimeException{
    public InvalidPaginationArgumentException(ErrorCodeEnum errorCode) {
        super(errorCode.getMessage());
    }


}
