var app=require('express')();
var path =require('path');

const http=require('http').Server(app)

var io=require('socket.io')(http);


app.get('/',(req,res)=>{
         var options={
            root: path.join(__dirname)
         }
         var fileName='index.html'
         res.sendFile(fileName,options)
})

// connection / disconnect with frontend 

io.on('connection',(socket)=>{
    console.log('A user connected')

    socket.on('disconnect',()=>{
        console.log('A user is Disconnected')
    })

});


http.listen(8080,async()=>{
 try {
    console.log('Server is running at 8080')
 } catch (error) {
    console.log(error)
 }
})