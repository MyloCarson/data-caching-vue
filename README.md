# Data caching in Vuejs

Caching is one of the most effective techniques to optimize performance and user experience. In Frontend, caching API response or any data can be of great advantages. Below are a few;

  - Little or no loading states or idle states in your application
  - You consume less your internet data (depending on the caching technique or strategy applied)
  - Having a fallback data to show should network fail
  - Less API calls to the server, thus helping reduce resource consumption by your application
  - Reduces load on the backend
  - Awesome user experience
  - Reduced latency and throughput , thus a faster application
 

# Web caching techniques/strategies!
  - No caching
    ```
        let response;
        response  = await fetch('/api/users'); 
    ```
    This makes sure that the data is always fresh. There is no need to depend on any cache. But this means you are hoping network letency don't kill your users.
  - API first
    ```
        const USERS = 'users';
        let response;
        try{
            response = await fetch('/api/users')
        }
        catch(e){
            response = localStorage.getItem(USERS);
        }
    ```
    We start by making API call first, and only depend on the cached data if network request fails or error occurs. I personally, don't see much advantage to this technique

  - Local first
     ```
        const USERS = 'users';
        let response = localStorage.getItem(USERS);
        if(!response){
            try{
                response  = await fetch('/api/users');
                localStorage.setItem(USERS, response)
            } catch(e) {....}
        } 
    ```
    With this technique we only make API calls if we don't have cached data. The only purpose of fetching here is to store in our cache. Hence a very high performance gain can be noticed here.
  - Local before API
    ```
        const USERS = 'users';
        let response = localStorage.getItem(USERS);
        
        try{
            response  = await fetch('/api/users');
            localStorage.setItem(USERS, response)
        } catch(e){ .... }
    ```
    The advantage of this technique is that it gives you good performance while also getting updated data when network request returns data.

# Cache Implementations:
Caching can be implemented using;
- Local Storage
- Session Storage
- IndexedDB
- Refs (can be found Reactjs, Vuejs)
- Objects (using Redux patterns)
    
Local Storage and IndexedDB are less volatile when compared to others.

In this example project we are using a library [swrv](https://github.com/Kong/swrv). This library allows gives alot of benefits;

- Caching using stale-while-revalidate caching strategy
- Scroll to previous position
- Prefectching
- Flexibility with using any HTTP request library / package. e.g fetch, axios e.t.c
- Conditional fetching
- Easy implementation of  pagination
- Easy implementation of scroll to infinity
- Fetching new data on focus of browser / window
- Smother and faster page naviagtion
- Retry on error



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### References
- https://swr.vercel.app/
- https://github.com/Kong/swrv
