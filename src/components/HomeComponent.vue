<template>
    <div class="container">
      <HeaderComponent @load-products="handleLoadProducts" @delete-products="handleDeleteProducts"/>
      <section>
        <div class="container my-5">
          <header class="mb-4">
            <h3>PRODUCTS</h3>
          </header>
          <div>
            <ProductComponent/>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import ProductComponent from './ProductComponent.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import FooterComponent from './FooterComponent.vue';

  export default {
    name: 'HomeComponent',
    components: {
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    },
    methods: {
      handleLoadProducts() {
        window.location.reload();
      },
      handleDeleteProducts() {
        window.location.reload();
      }
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>