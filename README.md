# icoimagejs
converts a RGBA 32 bit raw image to ico image format


#npm link<br/>
https://www.npmjs.com/package/icoimagejs


#install <br/>
npm install icoimagejs --save

#build<br/>
gulp buildsrc

#test<br/>
gulp test

#usage<br/>

const fs=require('fs');<br/>
const bmp=require('bmpimagejs');<br/>
const ico=require('icoimagejs');<br/>
let buf=fs.readFileSync('./test.bmp');<br/>
    //a decoder is decoding to image structure<br/>
    let img= bmp.decode(buf);<br/>
    
    console.log(img.width);
    try{

    //encode functions needs width of image and pixels as RGBA buffer
    let bufferico= ico.encode(img.width,img.pixels);
    console.log(buffferico.length);
    }catch(e){
        console.log(e.errNumber);
        console.log(e.message);
    }








