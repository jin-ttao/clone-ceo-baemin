function setWelcomeToastConfig() {
  console.log("setWelcomeToastConfig 호출");
  if (!window.welcometoastConfig) {
    window.welcometoastConfig = {
      apiKey: import.meta.env.VITE_WELCOME_TOAST_API_KEY,
      init: function() {
        console.log("setWelcomeToastConfig.init() 호출");
        window.welcometoast.getProject(window.welcometoastConfig.apiKey);
      }
    };
  }
}

export { setWelcomeToastConfig };