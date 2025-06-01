import React, { useState } from "react";
import icon from "../images/pngegg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const RegisterWidget = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [role, setRole] = useState("");


    const handleSelectRole = async (selectedRole) => {
        setRole(selectedRole);

        await new Promise((resolve) => setTimeout(resolve, 10));

        document.getElementById("registerForm").requestSubmit();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();

            await axios.post(
                "/auth/register",
                { fullName: name, role: role  },
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`,
                    },
                }
            );

            console.log("Register successfully");
            navigate("/"); // Navighează către login
        } catch (error) {
            console.error("Registration error:", error);
            if (error.response?.status === 409) {
                setErrorMessage("An account with this email already exists.");
            } else if (error.message?.includes("email-already-in-use")) {
                setErrorMessage("Email is already in use.");
            } else {
                setErrorMessage("Registration failed. Please try again.");
            }
        }
    };

    return (
        <div style={styles.widgetContainer}>
            <div style={styles.formContainer}>
                <div style={styles.footer}>
                    <img alt="Logo" src={icon} style={styles.logo}/>
                    <div style={styles.brandName}>MyHouseFix</div>
                    <p style={styles.description}>
                        Create your account to protect your home smarter!
                    </p>
                </div>
                <div style={styles.loginHeader}>Register</div>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            style={styles.input}
                        />
                    </div>

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
                        <img alt="Eye off" src={icon} style={styles.eyeIcon}/>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter your password"
                            style={styles.input}
                        />
                        <img alt="Eye off" src={icon} style={styles.eyeIcon}/>
                    </div>

                    <div style={styles.roleButtons}>
                        <button
                            type="button"
                            onClick={() => {
                                setRole("HANDYMAN");
                            }}
                            style={{    width: "50%",
                            height: "30px",
                            borderRadius: "5px",
                            marginLeft:"8px",
                            fontWeight: "600",
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: role === "HANDYMAN" ? "#2c3e50" : "",
                            color: role === "HANDYMAN" ? "white" : "rgb(47, 65, 86)",
                        }}>HANDYMAN</button>
                        <button
                            type="button"
                            onClick={() => {
                                setRole("CLIENT");
                            }}
                            style={{width: "50%",
                            height: "30px",
                            borderRadius: "5px",
                            marginLeft:"8px",
                            fontWeight: "600",
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: role === "CLIENT" ? "#2c3e50" : "",
                            color: role === "CLIENT" ? "white" : "rgb(47, 65, 86)",
                        }}>CLIENT</button>
                    </div>

                    {error && (
                        <div style={{color: "red", marginBottom: "10px"}}>{error}</div>
                    )}

                    <div style={styles.buttonContainer}>
                        <button type="submit" style={styles.button}>
                            Sign Up
                        </button>
                        <button
                            type="button"
                            style={styles.buttonSignUp}
                            onClick={() => (window.location.href = "/")}
                        >
                            Back to Login
                        </button>
                    </div>
                </form>


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
    roleButtons: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: "10px"
    }
};

export default RegisterWidget;