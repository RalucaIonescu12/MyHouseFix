import React, { useState } from "react";
import icon from "../images/pngegg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const LoginWidget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔐 1. Login în Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔑 2. Obține tokenul Firebase (ID Token JWT)
      const idToken = await user.getIdToken();

      // 🔁 3. Trimite tokenul la backendul tău Spring Boot
      const response = await axios.post(
          "/auth/login",
          {},
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
      );

      // ✅ 4. Salvează tokenul în localStorage dacă e nevoie
      const userData = response.data;
      localStorage.setItem("token", idToken);
        localStorage.setItem("role", userData.role);
      // ➡️ 5. Navighează spre aplicație
      navigate("/feed");
    } catch (err) {
      console.error(err);
      setError("Email or password invalid.");
    }
  };

  return (
      <div style={styles.widgetContainer}>
        <div style={styles.formContainer}>
          <div style={styles.footer}>
            <img alt="Logo" src={icon} style={styles.logo} />
            <div style={styles.brandName}>MyHouseFix</div>
            <p style={styles.description}>A new way to save your house using virtual space.</p>
          </div>
          <div style={styles.loginHeader}>Login</div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={styles.input}
              />
              <img alt="Eye off" src={icon} style={styles.eyeIcon} />
            </div>

            <div style={styles.extra}>
              <div style={styles.remember}>
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    style={styles.checkbox}
                />
                <span>Remember me</span>
              </div>
              <span style={styles.forgotPassword}>Forgot password?</span>
            </div>
            {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>
                Login
              </button>
              <button
                  type="button"
                  style={styles.buttonSignUp}
                  onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </div>
          </form>


          <div style={styles.socialLoginContainer}>
            <div style={styles.socialLogin}>Or, login with</div>
            <div style={styles.socialButtons}>
              <button style={styles.socialButton}>Facebook</button>
              <button style={styles.socialButton}>LinkedIn</button>
              <button style={styles.socialButton}>Google</button>
            </div>
          </div>


        </div>
      </div>
  );
};

const styles = {
  widgetContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    width: "400px",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginHeader: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2f4156",
    marginBottom: "30px",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2f4156",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    color: "#2f4156",
  },
  eyeIcon: {
    position: "absolute",
    right: "10px",
    top: "38px",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
  extra: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remember: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: "#2f4156",
  },
  checkbox: {
    marginRight: "8px",
  },
  forgotPassword: {
    fontSize: "16px",
    color: "#2f4156",
    textDecoration: "underline",
    cursor: "pointer",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2f4156",
    color: "#ffffff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
  buttonSignUp: {
    padding: "12px",
    backgroundColor: "#e0e0e0",
    color: "#2f4156",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
  socialLoginContainer: {
    marginTop: "30px",
    textAlign: "center",
  },
  socialLogin: {
    fontSize: "16px",
    color: "#2f4156",
    marginBottom: "12px",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
  },
  socialButton: {
    padding: "10px 20px",
    backgroundColor: "#e0e0e0",
    color: "#2f4156",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    marginBottom: "12px",
  },
  brandName: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#2f4156",
  },
  description: {
    fontSize: "14px",
    color: "#2f4156",
  },
  errorMessage: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "#ffe0e0",
    color: "#b00020",
    border: "1px solid #b00020",
    borderRadius: "8px",
    fontWeight: "500",
    textAlign: "center",
  },
};

export default LoginWidget;