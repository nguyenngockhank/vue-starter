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