# Technical Stack
Webpack + Babel + VueJS 

## Dev & Build 
```javascript
npm run dev
```

```javascript
npm run build
```

## Support Async & Await
```javascript
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello(name) {
  await timeout(3000);
  console.log(`Hello ${name},`);
}

hello('Khank');
```