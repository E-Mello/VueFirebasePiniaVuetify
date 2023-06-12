<template>
  <v-container>
    <v-flex xs12>
      <v-form>
        <h1>Register</h1>
        <v-text-field label="Email" name="email" type="email" v-model="email"></v-text-field>
        <v-text-field label="Password" name="password" type="password" v-model="password"></v-text-field>
        <v-btn color="primary" @click="register">
          register with credentials
        </v-btn>
        <v-btn color="primary" @click="registergoogle">
          register with Google
        </v-btn>
      </v-form>
    </v-flex>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const email = ref('')
const password = ref('')
const registergoogle = () => {
  console.log(email.value + ' ' + password.value)
}
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user)
        console.log("User created successfully");
        console.log(getAuth().currentUser);
      }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' ' + errorMessage)
    });
}
</script>
