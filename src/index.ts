import { ImageRGBA } from './imageRGBA';
import { IcoEncoder } from "./icoEncoder";


/**
 * 
 * @param width width of image
 * @param buffer raw image as RGBA -> 32 bits
 * @returns encoded file
 */
export function encode(width:number,buffer:Uint8ClampedArray):ArrayBuffer{
    let icoEncoder=new IcoEncoder();
    return icoEncoder.encode(new ImageRGBA(width,width,new Uint8ClampedArray(buffer)));
}