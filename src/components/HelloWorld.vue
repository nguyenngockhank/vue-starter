<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>


    <a href="#/secondworld">Second World</a>
  </div>
</template>

<style scoped lang="scss">
$width: 80%;
.full-width {
  &{
    width: $width;
    margin: auto;
    background-color: #bbbbbb;
    padding: 10px;
  }
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>