if('serviceWorker' in navigator){
    window.addEventListener('load', async()=>{
        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('ServiceWorker registration successfull with scope: '+ registration.scope);
        } catch (error) {
            console.log('ServiceWorkerError: ', error);
        }
    })
}