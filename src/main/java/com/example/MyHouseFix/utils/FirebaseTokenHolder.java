package com.example.MyHouseFix.utils;

public class FirebaseTokenHolder {
    private final String idToken;

    public FirebaseTokenHolder(String idToken) {
        this.idToken = idToken;
    }

    public String getIdToken() {
        return idToken;
    }
}
