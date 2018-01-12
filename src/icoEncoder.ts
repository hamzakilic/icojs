import { ImageRGBA } from './imageRGBA';

export class IcoEncoder{

    
    
    public encode(image:ImageRGBA):Uint8ClampedArray{
        let temp=new Uint8ClampedArray(image.pixels.byteLength+500); //enough buffer for a temp buffer
        temp.fill(0);
        let dataView=new DataView(temp.buffer,0);
        let offset=0;
        offset+=this.createHeader(dataView,offset);        
        offset+=this.createDirectory(dataView,offset,image);        
        offset+=this.createBitmapHeader(dataView,offset,image);        
        offset+=this.createImage(dataView,offset,image);
        return temp.slice(0,offset);

        
    }

    private createHeader(dataview:DataView,offset:number):number{        
        dataview.setUint16(offset+0,0,true);//reserved
        dataview.setUint16(offset+2,1,true);//1 is icon type
        dataview.setUint16(offset+4,1,true);//number of images
       return 6;
    }
    private createDirectory(dataview:DataView,offset:number,image:ImageRGBA):number{
        if(image.width===256)
        dataview.setUint8(offset+0,0);
        else dataview.setUint8(offset+0,image.width);

        if(image.height===256)
        dataview.setUint8(offset+1,0);
        else dataview.setUint8(offset+1,image.height);

        dataview.setUint8(offset+2,0);//color count bigger than 256
        dataview.setUint8(offset+3,0);//reserved
        dataview.setUint16(offset+4,1,true);//color plane
        dataview.setUint16(offset+6,32,true);//8 bit per pixel
        
        dataview.setUint32(offset+8,image.pixels.byteLength+40,true);//image data in bytes
        dataview.setUint32(offset+12,22,true);//offset
        return 16;




        

    }

    private createBitmapHeader(dataview:DataView,offset:number,image:ImageRGBA):number{
        dataview.setUint32(offset+0,40,true);//bitmap header size
        dataview.setUint32(offset+4,image.width,true)//image width;
        dataview.setUint32(offset+8,image.height*2,true);//top down image height
        dataview.setUint16(offset+12,1,true);//planes allways 1
        dataview.setUint16(offset+14,32,true);//bits per pixel
        dataview.setUint32(offset+16,0,true);//BI_RGB compression
        dataview.setUint32(offset+20,image.pixels.byteLength,true);//image bytes length
        dataview.setUint32(offset+24,0);
        dataview.setUint32(offset+28,0);
        dataview.setUint32(offset+32,0);
        dataview.setUint32(offset+36,0);
        return 40;

    }
    private createImage (dataview:DataView,offset:number,image:ImageRGBA):number{
        for (var y = 0; y <image.height; ++y)
        for (var x = 0; x < image.width; ++x) {
            var pos = y * image.width * 4 + x * 4;
            var posn=(image.height-y-1)*image.width*4+x*4;
            var r = image.pixels[pos];
            var g = image.pixels[pos + 1];
            var b = image.pixels[pos + 2];
            var a = image.pixels[pos + 3];
            dataview.setUint8(offset + posn, b);
            dataview.setUint8(offset + posn + 1, g);
            dataview.setUint8(offset + posn + 2, r);
            dataview.setUint8(offset + posn + 3, a);
        }
       return image.height*image.width*4;

       
    }
}