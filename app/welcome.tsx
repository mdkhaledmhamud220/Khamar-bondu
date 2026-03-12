import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>খামার বন্ধু</Text>

      <Text style={styles.subtitle}>
        গরুর খামার ব্যবস্থাপনা ও ক্রয়-বিক্রয়ের স্মার্ট সমাধান
      </Text>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.push("/login?role=farmer")}
      >
        <Text style={styles.btnText}>খামারি হিসেবে শুরু করুন →</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => router.push("/login?role=buyer")}
      >
        <Text style={styles.secondaryText}>ক্রেতা হিসেবে শুরু করুন →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#e8efe8",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0a5c2b",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },

  primaryBtn: {
    backgroundColor: "#0a8f3c",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#0a8f3c",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryText: {
    color: "#0a8f3c",
    fontSize: 16,
    fontWeight: "bold",
  },
});
