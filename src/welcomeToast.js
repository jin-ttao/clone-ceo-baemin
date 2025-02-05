function setWelcomeToastConfig() {
  if (!window.welcometoastConfig) {
    window.welcometoastConfig = {
      apiKey: import.meta.env.VITE_WELCOME_TOAST_API_KEY,
      init: function() {
        window.welcometoast.getProject(window.welcometoastConfig.apiKey);
      }
    };
  }
}

export { setWelcomeToastConfig };