export class DecodeError extends Error{
    private _errNumber:number;
    constructor(errno:number,msg:string) {
        super(msg);
        this._errNumber=errno;
        
    }
    public get errNumber(){return this._errNumber;}
}
export class Errors {


    /** global errors */
    public static readonly undefinedVariable =new DecodeError(1,'undefined variable' );
    public static readonly indexOutOfRange = new DecodeError(2, 'index out of range' );


   
    /** image errors */
    public static readonly imageDataIsNotValid = new DecodeError(200,'image data buffer is not valid' );
    public static readonly imageWidthOrHeightIsNotValid =new DecodeError(401, 'image width and height must be 16-24-32-64-128-256' );
    public static readonly imageWidthOrHeightMustEqual =new DecodeError(402, 'image width and height must be equal' );
    
    


}