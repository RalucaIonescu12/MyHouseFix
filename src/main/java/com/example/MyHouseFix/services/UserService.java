package com.example.MyHouseFix.services;

import com.example.MyHouseFix.config.JwtUtil;
import com.example.MyHouseFix.dtos.LoginRequestDto;
import com.example.MyHouseFix.dtos.RegisterRequestDto;
import com.example.MyHouseFix.models.User;
import com.example.MyHouseFix.repositories.UserRepository;
import com.example.MyHouseFix.utils.FirebaseLoginHelper;
import com.example.MyHouseFix.utils.FirebaseTokenHolder;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.google.firebase.auth.UserRecord;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {

    private static final String COLLECTION_NAME = "users";

    public void saveUser(User user) throws Exception {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> result = db.collection(COLLECTION_NAME)
                .document(user.getUserId())
                .set(user);
        result.get(); // așteaptă salvarea
    }

    public User getUserById(String userId) throws Exception {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection(COLLECTION_NAME).document(userId);
        DocumentSnapshot snapshot = docRef.get().get();

        if (snapshot.exists()) {
            return snapshot.toObject(User.class);
        } else {
            return null;
        }
    }

    public User getUserByEmail(String email) throws Exception {
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference users = db.collection("users");

        Query query = users.whereEqualTo("email", email);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
            return document.toObject(User.class);
        }

        return null;
    }


}
