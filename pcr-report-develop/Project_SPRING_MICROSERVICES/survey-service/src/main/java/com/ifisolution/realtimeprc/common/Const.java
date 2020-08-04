package com.ifisolution.realtimeprc.common;

public class Const {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/users/sign-up";

    public static final class PAYMENT_STATUS{
        public static final Short NOT_PAID = 1;
        public static final Short PAID = 2;
        public static final Short PENDING = 3;
    }
}
