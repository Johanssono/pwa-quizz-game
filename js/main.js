class Main{
    RegisterServiceWorker() {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./js/ServiceWorker.js').then((reg) => {
               console.log('Registration succeeded. Scope is ' + reg.scope);
            });
        }
    }
}

const main = new Main();
main.RegisterServiceWorker();