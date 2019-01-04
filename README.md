# Technical Stack
Webpack + Babel + VueJS 

## Dev & Build 
```javascript
npm run dev
```

```javascript
npm run build
```

## Async & Await Supported
```javascript
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello(name) {
  await timeout(3000);
  console.log(`Hello ${name},`);
}

hello('Khank'); // will print 'Hello Khank' after 3s
```

## ADM Supported
```javascript
const SecondWorld = () => import(/* webpackChunkName: "secondworld" */ '../components/SecondWorld')
```

## Event Bus Supported

Sender component
```html
<template>
<div><button @click="emitHelloEvent()">Emit event</button></div>
</template>

<script>
  export default {
    methods: {
      emitHelloClickEvent() {
        this.$eventBus.$emit('hello', 'i hear you');
      }
    }
  }
</script>
```

Receiver component
```html
<script>
export default {
  created() {
    // Listening the event hello
    this.$eventBus.$on('hello', this.handler);
  },
  methods: {
    handler(e) {
      console.log('RECEIVE EVENTS', e)
    }
  }
}
</script>
```

## Vuex Supported

1/ Define Action Name at `constants.js` 
```javascript
export const INCREASE_COUNT = 'increase_count';
```

2/ Auto mapping constants to mutations in `actions.js` 

3/ Define Mutation of Action at `mutations.js`
```javascript
mutations[INCREASE_COUNT] = (state, num = 1) => {
    state.testCount += num;
}
```

4/ Usage Component
```html
<template>

<div><button @click="handleClick()">Increase</button> {{count}}</div>
</template>

<script>
import { mapActions } from 'vuex'
import { INCREASE_COUNT } from '../store/constants'

export default {
  computed: {
    count () {
      return this.$store.state.testCount 
    }
  },
  methods: {
    // map actions to component
    ...mapActions([ INCREASE_COUNT ]),
    handleClick() {
      this[INCREASE_COUNT](2);
    }
  }
}
</script>
```