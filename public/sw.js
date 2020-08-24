//Install service worker
self.addEventListener('install', evt =>{
    console.log('service work has been installed');
});

//Activate event
self.addEventListener('activate', evt => {
console.log('Service worker has been activated')
});