<template>
  <VContainer fluid class="login-container">
    <VRow class="justify-center align-center h-100">
      <VCol cols="12" sm="8" md="6">
        <VCard class="login-card">
          <VCardTitle class="text-center">
            <h1 class="title">Login</h1>
          </VCardTitle>
          <VCardText class="text-center">
            <VImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png"
              alt="Google Logo" class="google-logo"></VImg>
            <p class="subtitle">Sign in with Google</p>
            <VBtn color="primary" dark class="google-button" @click="signWithGoogle">
              Sign in
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router'


const authStore = useAuthStore();
const router = useRouter()

const signWithGoogle = () => {
  signInWithPopup(getAuth(), new GoogleAuthProvider())
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log("User signed in successfully");
      authStore.login(user);
      router.replace('/home');
    })
    .catch((error) => {
      console.log("Error signing in ");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' ' + errorMessage);
    });
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  place-items: center;
  justify-items: center;
  align-items: center;
}

.login-card {
  max-width: 500px;
  padding: 32px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}

.title {
  color: #37474f;
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  color: #546e7a;
  font-size: 18px;
  margin-bottom: 24px;
}

.google-logo {
  width: 100vw;
  margin-bottom: 24px;
}

.google-button {
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 16px;
}
</style>
