const express=require('express');
const fs=require('fs');
const app=express();
let path=require('path');
app.use(express.json());
app.use(express.static('public'));
app.get('/',function(req,res){
    file=req.path;
    let extension=String(path.extname(file)).toLowerCase();//this extracts the extension name of the file
    let mime={'.html':'text/html',
             '.css':'text/css',
            '.js':'text/javascript',
            '.json':'application/json',
            '.png':'image/png',
            '.jpg':'image/jpg',
            '.gif':'image/gif'
        }
    let type=mime[extension]; //this assigns the type of file the requested file is
    if(fs.access(file)){//this checks if the file exists
        res.set({"Content-Type":type,"Access-Control-Allow-Origin": "*"})//this sets the response header
        res.send(200,file);//sends the file
    }else res.send("File not found");
});
console.log('Server running at port'+ 8080);
app.listen(8080);