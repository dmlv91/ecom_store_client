<template>
    <header class="header-container">
      <span class="header-title">E-STORE Client Portal</span>
      <div class="header-buttons">
        <button
          type="button"
          class="custom-btn btn-success"
          @click="loadProducts"
        >
          Load Products
        </button>
        <button
          type="button"
          class="custom-btn btn-danger"
          @click="deleteProducts"
        >
          Delete Products
        </button>
      </div>
    </header>
  </template>
  
  <script>
  
  export default {
    name: "HeaderComponent",
    data() {
      return {};
    },
    methods: {
      loadProducts() {
        console.log("LOAD PRODUCTS");
      },
      deleteProducts() {
        console.log("DELETE PRODUCTS");
      }
    },
  };
  </script>
  
  <style scoped>
  .header-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #dee2e6;
    background-color: #c9c1c1;
  }
  
  .header-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-right: auto;
    color: #343a40;
    font-size: 1.5rem;
    font-family: 'Roboto',sans-serif;
  }
  
  .header-buttons {
    display: flex;
    align-items: center;
  }
  
  .custom-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin-right: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
  .btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-danger {
  color: #fff;
  background-color: #c01e09;
  border-color: #c01e09;
}

.btn-danger:hover {
  color: #fff;
  background-color: #8b1304;
  border-color: #8b1304;
}
  </style>
  