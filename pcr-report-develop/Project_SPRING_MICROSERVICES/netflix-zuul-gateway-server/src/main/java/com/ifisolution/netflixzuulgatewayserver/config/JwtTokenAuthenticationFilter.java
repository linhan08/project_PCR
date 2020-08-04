package com.ifisolution.netflixzuulgatewayserver.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

public class JwtTokenAuthenticationFilter extends OncePerRequestFilter {


    private final JwtConfig jwtConfig;

    public JwtTokenAuthenticationFilter(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {

        // 1. get the authentication header. Tokens are supposed to be passed in the authentication header
        // 1. lấy được header vì token bắt buộc phải truyền qua header
        String header = request.getHeader(jwtConfig.getHeader());

        // 2. validate the header and check the prefix
        // 2. xác thực header và check the prefix of token có phải là kiểu bearer hay ko
        if(header == null || !header.startsWith(jwtConfig.getPrefix())) {
            chain.doFilter(request, response);  		// If not valid, go to the next filter.
            return;
        }

        // If there is no token provided and hence the user won't be authenticated.
        // nếu không có token được cung cấp đẻ xác thực thì user sẽ không được xác thực
        // It's Ok. Maybe the user accessing a public path or asking for a token.
        // nếu ok thì có thể user đang accsess vào 1 cái public path để yêu cầu token
        // All secured paths that needs a token are already defined and secured in config class.
        // Tất cả các đường link đều cần có token trong đó và bảo mật trên config class
        // And If user tried to access without access token, then he won't be authenticated and an exception will be thrown.
        // nếu user muốn truy cập vào mà không có token thì và user sẽ không được authenticated và 1 exception sẽ được thrown.
        // 3. Get the token
        // 3. Lấy token
        String token = header.replace(jwtConfig.getPrefix(), "");

        try {	// exceptions might be thrown in creating the claims if for example the token is expired

            // 4. Validate the token
            // 4. kiểm tra token
            Claims claims = Jwts.parser()
                    .setSigningKey(jwtConfig.getSecret().getBytes())
                    .parseClaimsJws(token)
                    .getBody();

            String username = claims.getSubject();
            if(username != null) {
                @SuppressWarnings("unchecked")
                List<String> authorities = (List<String>) claims.get("authorities");
                // 5. Create auth object
                // 5. tạo đối tường xác thực
                // UsernamePasswordAuthenticationToken: A built-in object, used by spring to represent the current authenticated / being authenticated user.
                // Class UsernamePasswordAuthenticationToken: là một object được sử dụng bởi spring để thể hiện user cân
                // It needs a list of authorities, which has type of GrantedAuthority interface, where SimpleGrantedAuthority is an implementation of that interface
                // nếu cần 1 list các authorities, có kiểu là GrantedAuthority  interface
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        username, null, authorities.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));

                // 6. Authenticate the user
                // 6. Xác thực user
                // Now, user is authenticated
                // bây giờ, user đã được xác thực
                SecurityContextHolder.getContext().setAuthentication(auth);
            }

        } catch (Exception e) {
            // In case of failure. Make sure it's clear; so guarantee user won't be authenticated
            // nếu có gì, bảo đảm user sẽ không được xác thực
            SecurityContextHolder.clearContext();
        }

        // go to the next filter in the filter chain
        // sử dụng filter của filter chain.

        chain.doFilter(request, response);
    }
}
