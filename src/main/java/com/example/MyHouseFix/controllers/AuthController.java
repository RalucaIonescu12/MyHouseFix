package com.example.MyHouseFix.controllers;

import com.example.MyHouseFix.models.User;
import com.example.MyHouseFix.services.FirebaseAuthService;
import com.example.MyHouseFix.services.UserService;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final FirebaseAuthService firebaseAuthService;
    private final UserService userService;

    public AuthController(FirebaseAuthService firebaseAuthService, UserService userService) {
        this.firebaseAuthService = firebaseAuthService;
        this.userService = userService;
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestHeader("Authorization") String authorizationHeader
    ) {
        try {
            String idToken = authorizationHeader.replace("Bearer ", "");
            FirebaseToken decodedToken = firebaseAuthService.verifyToken(idToken);

            String email = decodedToken.getEmail();
            String uid = decodedToken.getUid();

            User existingUser = userService.getUserById(uid);

            if (existingUser == null) {
                User userByEmail = userService.getUserByEmail(email);
                if (userByEmail != null) {
                    return ResponseEntity.status(HttpStatus.CONFLICT)
                            .body("Un cont cu acest email există deja.");
                }

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Utilizatorul nu există. Te rog înregistrează-te.");
            }

            return ResponseEntity.ok("User autentificat cu succes: " + email);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token invalid: " + e.getMessage());
        }
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestBody Map<String, String> body
    ) {
        try {
            String idToken = authorizationHeader.replace("Bearer ", "");
            FirebaseToken decodedToken = firebaseAuthService.verifyToken(idToken);

            String email = decodedToken.getEmail();
            String uid = decodedToken.getUid();
            String fullName = body.get("fullName");
            String role = body.get("role");

            System.out.println("Received data in /auth/register:");
            System.out.println("fullName: " + fullName);
            System.out.println("role: " + role);

            if (role == null || (!role.equals("CLIENT") && !role.equals("HANDYMAN"))) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Rol invalid");
            }

            User existingUser = userService.getUserById(uid);
            if (existingUser != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Utilizatorul există deja.");
            }

            User newUser = new User(uid, email, fullName, null, role);
            userService.saveUser(newUser);

            return ResponseEntity.ok("Cont creat cu succes!");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token invalid: " + e.getMessage());
        }
    }

}