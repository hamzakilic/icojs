


const chai = require('chai');
const assert = chai.assert; // we are using the "assert" style of Chai
const expect = chai.expect;


const image = require('../lib/imageRGBA').ImageRGBA;
const errors = require('../lib/errors').Errors;
const icoEncoder = require('../lib/icoEncoder').IcoEncoder;
const icoenc=require('../lib');

const fs = require('fs');
const bmp=require('bmpimagejs');



const dirname='./test/data/';
const output = './output';

describe('icodecoder',function(done){
    
    function error(data) {
        throw data;
    }
    

   it('starting reading files under data folder and convert them to ico for eye checking',(done)=>{
       
   
    if (!fs.existsSync(output)) {
    fs.mkdirSync(output, 0744);
    }
       
    fs.readdir(dirname,function(err,items){
        
         
        if(err)throw err;
        items.forEach((file)=>{
            if(file.endsWith(".bmp")){            
            console.log(`executing file:${file} `);
            let fullpath=dirname +file;
             let buffer=fs.readFileSync(fullpath);             
                
             let img  = bmp.decode(buffer);             
             console.log(`file:${fullpath} width:${img.width} height:${img.height}`);
            
             
             let ico=new icoEncoder();
             
             let icobuffer= ico.encode(img);
             let icofilename=output+"/"+file.replace(".bmp",".ico");
             console.log(`file:${icofilename} will written`);
             let handle= fs.openSync(icofilename,'w+',);
             fs.writeFileSync(handle,new Buffer(icobuffer.buffer),'binary');
             fs.closeSync(handle);
             
             
             
             
            }

        });
        done();
    })


    

   });


   it('starting reading files under data folder and try to convert',(done)=>{
       
   
    if (!fs.existsSync(output)) {
    fs.mkdirSync(output, 0744);
    }
       
    fs.readdir(dirname,function(err,items){
        
         
        if(err)throw err;
        items.forEach((file)=>{
            if(file.endsWith(".bmp")){            
            console.log(`executing file:${file} `);
            let fullpath=dirname +file;
             let buffer=fs.readFileSync(fullpath);             
                
             let img  = bmp.decode(buffer);             
             console.log(`file:${fullpath} width:${img.width} height:${img.height}`);            
             
             
             
             let icobuffer= icoenc.encode(32,img.pixels);
             console.log(`${icobuffer.byteLength} will written`);
             
             
             
             
            }

        });
        done();
    })


    

   });
   


  

})
