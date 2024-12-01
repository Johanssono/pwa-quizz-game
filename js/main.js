
self.addEventListener("install", evt => {
  console.log("serviceworker installed")
  evt.waituntil(
    cashes.open("test cache").then(cache => {
      console.log("caching stuf")
      cache.addAll(
        "./",
        "./main.js",
        "./main.html",
        "./style.css"
      )
    })
  )
})

self.addEventListener("active", evt => {
  consol.log("serviceworker active")
})

self.addEventListener("fetch", evt => {
  
})