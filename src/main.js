/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables

import "vuetify/styles";
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { initializeApp } from "firebase/app";
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyD4XIUTeBKhrOO3_yy9BjV5Tj9S_AJkoUg",
  authDomain: "authandvuetify.firebaseapp.com",
  projectId: "authandvuetify",
  storageBucket: "authandvuetify.appspot.com",
  messagingSenderId: "326095718017",
  appId: "1:326095718017:web:6f005aa63cdf850a1d6f80",
  measurementId: "G-Q9Z9PCL5MM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})


const pinia = createPinia()

const app = createApp(App)

app.use(router).use(vuetify).use(pinia).mount('#app')

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
// import App from './App.vue'

// // Composables
// import { createApp } from 'vue'

// // Pluginsimport axios from 'axios'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import { registerPlugins } from '@/plugins'

// import { initializeApp } from "firebase/app";
// import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';
// import { useAuthStore } from './store/auth';
// import router from './router';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCw4gO4j3kIcfPRNdIBqGjjM48Icvm7VIo",
//   authDomain: "frameworks-26ad9.firebaseapp.com",
//   projectId: "frameworks-26ad9",
//   storageBucket: "frameworks-26ad9.appspot.com",
//   messagingSenderId: "764875539095",
//   appId: "1:764875539095:web:a1d8bf949ed9ea26bb9fd2"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);;
// const auth = getAuth(firebaseApp);


// const app = createApp(App);

// registerPlugins(app);

// setPersistence(auth,browserLocalPersistence)
//   .then(()=>{

//     onAuthStateChanged(auth, (user) =>{
//       if(user){
//         const authStore = useAuthStore();
//         authStore.dadosUser = user
//         console.log(authStore.getUser)
//         if (router.currentRoute.value.path !== '/home') {
//           console.log("Já está logado")
//         }
//       }
//       else{
//         if (router.currentRoute.value.path !== '/') {
//           router.push('/');
//         }
//       }
//     })

//   })
// app.use(VueAxios, axios)
// app.mount('#app');
