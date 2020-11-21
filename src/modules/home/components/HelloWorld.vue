<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>
    <div>
       <button @click="handleClick()">Increase</button> {{count}}
    </div>


    <router-link :to="{ name: 'About'}">
      About page
    </router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')
import { INCREASE_COUNT } from '../store/action-types'

export default {
  computed: {
    ...mapState({
      count: state => state.testCount,
    })
  },
  methods: {
    ...mapActions([ INCREASE_COUNT ]),
    handleClick() {
      this[INCREASE_COUNT](2);
    }
  }
}
</script>

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