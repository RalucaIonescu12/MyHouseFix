package com.example.MyHouseFix.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // ✅ corect în Spring Security 6
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll() // permite acces public pe /auth
                        .anyRequest().authenticated()            // restul cere autentificare
                )
                .formLogin(Customizer.withDefaults()); // 🔐 păstrează login-ul default dacă vrei (sau .disable())

        return http.build();
    }
}
