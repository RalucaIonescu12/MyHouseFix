package com.example.MyHouseFix.services;

import com.example.MyHouseFix.config.JwtUtil;
import com.example.MyHouseFix.dtos.LoginRequestDto;
import com.example.MyHouseFix.dtos.RegisterRequestDto;
import com.example.MyHouseFix.models.User;
import com.example.MyHouseFix.repositories.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public UserService(UserRepository userRepository, JwtUtil jwtUtil, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public String register(RegisterRequestDto request) {
        User user = new User(request.getEmail(), request.getName(), passwordEncoder.encode(request.getPassword()));
        User saved = userRepository.save(user);

        String token = jwtUtil.generateToken(user);

        return token;
    }

    public String login(LoginRequestDto request) {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    request.getEmail(), request.getPassword()
            ));
        } catch(Exception e){
            throw new IllegalArgumentException("Invalid email or password.");
        }

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() ->
                new IllegalArgumentException("Invalid email or password.")
        );
        String token = jwtUtil.generateToken(user);
        return token;

    }
}
