import app from './app.js' //because type is module, therefore .js

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}`)
})