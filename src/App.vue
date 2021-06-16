<template>
  <div class="mainContainer">
    <h1>Todo application</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
.mainContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & a {
    text-decoration: none;
  }
}
</style>
