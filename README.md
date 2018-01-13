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

#usage
const fs=require('fs');<br/>
const bmp=require('bmpimagejs');<br/>
const ico=require('icoimagejs');<br/>
let buf=fs.readFileSync('./test.bmp');<br/>
    //a decoder is decoding to image structure<br/>
    let img= bmp.decode(buf);<br/>
    
    console.log(img.width);<br/>
    try{<br/>

    //encode functions needs width of image and pixels as RGBA buffer<br/>
    let bufferico= ico.encode(img.width,img.pixels);<br/>
    console.log(buffferico.length);<br/>
    }catch(e){<br/>
        console.log(e.errNumber);<br/>
        console.log(e.msg);<br/>
    }<br/>








