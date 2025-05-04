package com.example.MyHouseFix.controllers;

import com.example.MyHouseFix.models.User;
import com.example.MyHouseFix.services.FirebaseAuthService;
import com.example.MyHouseFix.services.UserService;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestBody(required = false) Map<String, String> body
    ) {
        try {
            String idToken = authorizationHeader.replace("Bearer ", "");
            FirebaseToken decodedToken = firebaseAuthService.verifyToken(idToken);

            String email = decodedToken.getEmail();
            String uid = decodedToken.getUid();
            String fullName = body != null ? body.get("fullName") : null;

            // Verificăm dacă userul există deja în Firestore
            User existingUser = userService.getUserById(uid);

            // 2. Dacă nu există după UID, verificăm după email
            if (existingUser == null) {
                User userByEmail = userService.getUserByEmail(email);
                if (userByEmail != null) {
                    return ResponseEntity.status(HttpStatus.CONFLICT)
                            .body("Un cont cu acest email există deja.");
                }

                // 3. Dacă nu există nici după email, îl creăm
                User newUser = new User(uid, email, fullName, null);
                userService.saveUser(newUser);
            }

            return ResponseEntity.ok("User autenticat cu succes: " + email);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token invalid: " + e.getMessage());
        }
    }
}
