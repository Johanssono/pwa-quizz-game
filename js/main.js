
self.addEventListener("install", evt => {
  evt.waituntil(
    cashes.open("test cache").then(cache => {
      console.log("caching stuf")
      cache.addAll(
        "/",
        "/main.js",
        "/main.html",
        "/style.css"
      )
    })
  )
})