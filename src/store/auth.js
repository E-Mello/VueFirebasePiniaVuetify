import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    displayName: Cookies.get('displayName') || '',
    user: Cookies.get('user') || null,
  }),
  actions: {
    login(user) {
      this.displayName = user.displayName;
      this.user = user;
      const expirationDate = new Date(Date.now() + 10000); // Define a data de expiração em 10 segundos
      Cookies.set('displayName', user.displayName, { expires: expirationDate });
      Cookies.set('user', user, { expires: expirationDate });

      setTimeout(this.logoutWithAlert, 10000); // Agendar o logout após 10 segundos
    },
    logout() {
      this.displayName = '';
      this.user = null;
      Cookies.remove('displayName');
      Cookies.remove('user');
    },
    logoutWithAlert() {
      alert('Você será desconectado em breve.');
      this.logout();
    },
    checkExpiration() {
      const displayNameExpiration = Cookies.get('displayName_expires');
      const userExpiration = Cookies.get('user_expires');

      if (displayNameExpiration && userExpiration) {
        const currentTime = new Date().getTime();
        if (currentTime > Number(displayNameExpiration) || currentTime > Number(userExpiration)) {
          this.logoutWithAlert();
        }
      }
    },
  },
  created() {
    this.checkExpiration();
  },
});
