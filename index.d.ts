export class FlatFFT32{
    constructor(order: number);
    //baseTransform(coefs: Float32Array, returnBuffer?: Float32Array): Float32Array;
    fft(coefs: Float32Array, returnBuffer?: Float32Array): Float32Array;
    ifft(coefs: Float32Array, returnBuffer?: Float32Array): Float32Array;
    static toComplex(arr: numbers): Float32Array;
    static toReal(arr: numbers): Float32Array;
}

export class FlatFFT64{
    constructor(order: number);
    //baseTransform(coefs: Float64Array, returnBuffer?: Float64Array): Float64Array;
    fft(coefs: Float64Array, returnBuffer?: Float64Array): Float64Array;
    ifft(coefs: Float64Array, returnBuffer?: Float64Array): Float64Array;
    static toComplex(arr: numbers): Float64Array;
    static toReal(arr: numbers): Float64Array;
}

export type numbers = number[]
                    | Int8Array
                    | Uint8Array
                    | Uint8ClampedArray
                    | Int16Array
                    | Uint16Array
                    | Int32Array
                    | Uint32Array
                    | Float32Array
                    | Float64Array;

// Util functions
export declare function fft32 (arr: Float32Array, returnBuffer?: Float32Array): Float32Array;
export declare function ifft32(arr: Float32Array, returnBuffer?: Float32Array): Float32Array;
export declare function fft64 (arr: Float64Array, returnBuffer?: Float64Array): Float64Array;
export declare function ifft64(arr: Float64Array, returnBuffer?: Float64Array): Float64Array;
export declare function fft   (arr: Float64Array, returnBuffer?: Float64Array): Float64Array;
export declare function ifft  (arr: Float64Array, returnBuffer?: Float64Array): Float64Array;

// Alias to FlatFFT32
export declare const FlatFFT: FlatFFT32
