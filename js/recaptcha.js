const firebaseConfig = {
  apiKey: "AIzaSyCnqbVl9uFkNv5JhhA3DfG-gq0k6dPtHok",
  authDomain: "auth-70017.firebaseapp.com",
  projectId: "auth-70017",
  storageBucket: "auth-70017.appspot.com",
  messagingSenderId: "948592979825",
  appId: "1:948592979825:web:b19c9b47ab86c8aa7b10d0",
  measurementId: "G-LLP0B5CR77"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  // const analytics = firebase.getAnalytics(app);

  window.recaptchaVerifier= new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then((widgetId) => {
     window.recaptchaWidgetId = widgetId;
});