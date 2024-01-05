<template>
    <footer class="footer-container">
      <div class="footer-content">
        <span class="footer-title">Dāvis Mediņš, Vidzemes Augstskola, E-Biznesa sistēmas</span>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer-container {
    text-align: center;
    background-color: #c9c1c1;
    margin-top: 1rem;
    height: fit-content;
  }
  
  .footer-content {
    width: 100%;
    height: 2rem;
    padding: 1rem;
    margin: 0 auto;
  }
  
  .footer-title {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Roboto',sans-serif;
  }
  </style>
  
  <script>
  export default {
    name: "FooterComponent",
    data() {
      return {};
    },
    methods: {},
  };
  </script>
  