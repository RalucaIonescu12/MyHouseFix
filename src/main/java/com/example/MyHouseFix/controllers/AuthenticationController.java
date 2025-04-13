package com.example.MyHouseFix.controllers;

import com.example.MyHouseFix.dtos.LoginRequestDto;
import com.example.MyHouseFix.dtos.RegisterRequestDto;
import com.example.MyHouseFix.services.UserService;
import com.example.MyHouseFix.utils.ResponseTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final UserService userService;

    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseTemplate<String>> register(@RequestBody RegisterRequestDto request) {
        String token = userService.register(request);

        return new ResponseEntity<>(new ResponseTemplate<>(
                "Register successful", token), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseTemplate<String>> login(@RequestBody LoginRequestDto request) {
        String token = userService.login(request);
        if(token != null)
            return new ResponseEntity<>(new ResponseTemplate<>(
                    "Login successful", token),
                    HttpStatus.OK);
        else return new ResponseEntity<>(new ResponseTemplate<>(
                "Invalid email or password", token),
                HttpStatus.FORBIDDEN);
    }
}
