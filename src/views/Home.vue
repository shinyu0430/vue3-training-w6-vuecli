<template>
  <div class="home">
    <div id="nav">
      <h1>前台</h1>
    </div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">產品頁面</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">購物車頁面</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/" class="nav-link">後台管理</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
