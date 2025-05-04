package com.example.MyHouseFix.utils;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class FirebaseLoginHelper {
    public static FirebaseTokenHolder signInWithEmailAndPassword(String email, String password) throws Exception {
        String apiKey = "AIz..."; // cheia ta din Firebase -> Project Settings > Web API Key

        URL url = new URL("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + apiKey);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(true);

        String jsonInputString = String.format(
                "{\"email\":\"%s\",\"password\":\"%s\",\"returnSecureToken\":true}",
                email, password
        );

        try (OutputStream os = con.getOutputStream()) {
            byte[] input = jsonInputString.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        if (con.getResponseCode() != 200) {
            return null;
        }

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"));
        StringBuilder responseBuilder = new StringBuilder();
        String responseLine;
        while ((responseLine = br.readLine()) != null) {
            responseBuilder.append(responseLine.trim());
        }

        JSONObject jsonObject = new JSONObject(responseBuilder.toString());
        String idToken = jsonObject.getString("idToken");

        return new FirebaseTokenHolder(idToken);
    }
}
