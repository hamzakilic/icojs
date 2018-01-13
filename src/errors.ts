export class EncodeError extends Error{
    private _errNumber:number;
    constructor(errno:number,msg:string) {
        super(msg);
        this._errNumber=errno;
        
    }
    public get errNumber(){return this._errNumber;}
}
export class Errors {


    /** global errors */
    public static readonly undefinedVariable =new EncodeError(10,'undefined variable' );
    public static readonly indexOutOfRange = new EncodeError(20, 'index out of range' );


   
    /** image errors */
    public static readonly imageDataIsNotValid = new EncodeError(201,'image data buffer is not valid' );
    public static readonly imageWidthOrHeightIsNotValid =new EncodeError(401, 'image width and height must be 16-24-32-64-128-256' );
    public static readonly imageWidthOrHeightMustEqual =new EncodeError(402, 'image width and height must be equal' );
    
    


}