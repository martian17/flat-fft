export class FlatFFT32{
    constructor(order: number);
    //baseTransform(coefs: Float32Array): Float32Array;
    fft(coefs: Float32Array): Float32Array;
    ifft(coefs: Float32Array): Float32Array;
    static toComplex(arr: numbers): Float32Array;
    static toReal(arr: numbers): Float32Array;
}

export class FlatFFT64{
    constructor(order: number);
    //baseTransform(coefs: Float64Array): Float64Array;
    fft(coefs: Float64Array): Float64Array;
    ifft(coefs: Float64Array): Float64Array;
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
export declare const fft32(arr: Float32Array): Float32Array;
export declare const ifft32(arr: Float32Array): Float32Array;
export declare const fft64(arr: Float64Array): Float64Array;
export declare const ifft64(arr: Float64Array): Float64Array;

// Alias to FlatFFT32
export declare const FlatFFT: FlatFFT32
