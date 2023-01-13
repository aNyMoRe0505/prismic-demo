Discussion Thread: https://community.prismic.io/t/webhook-delay-between-the-webhook-and-ref-update-mechanism/12140

Steps

1. npm ci
2. update secret in `./pages/api/prismic.js`
3. update api url in `./prismic/index.js`
4. update the data you want to query in `./pages/pageA.js` & `./pages/pageB.js` (please query different document type)
5. exec npm run dev and use ngrok let prismic webhook can hit your api endpoint
6. update prismic webhook url & secret in your dashboard
7. update the document you query in `pageA` and check the result in your terminal
8. you need to try many times and you will find sometimes you got the old content (incorrect ref) instead of latest content
9. update the api url from `https://your-repo-name.cdn.prismic.io/api/v2` to `https://your-repo-name.prismic.io/api/v2` (without `.cdn`)
10. repeat step 7 & step 8 and you will always get the latest content so I am guessing is CDN issue
11. keep the api url without `.cdn` and update `./pages/api/prismic.js` with the following code
```js
// await res.revalidate('/pageA');
await Promise.all([
  res.revalidate('/pageA'),
  res.revalidate('/pageB'),
]);
```
12. repeat step 7 & step 8, check the `ref` in your terminal and you will find sometimes two documents using different `ref`, one is the old ref

Conclusion (just guessing)

1. `cdn` cause the delay between webhook and ref update mechanism
2. as long as I use `Promise.all` to revalidate page some page still get the old content, I don't know why...