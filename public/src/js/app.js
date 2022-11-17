if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js',{scope:'/help/'})
    .then(()=>{
        console.log('Registered')
    });
}else{
    console.log('Service worker not found');
}