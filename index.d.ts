export class FlatFFT{
    constructor(order: number);
    //baseTransform(coefs: Float32Array): Float32Array;
    fft(coefs: Float32Array): Float32Array;
    ifft(coefs: Float32Array): Float32Array;
    static toComplex(arr: number[]): Float32Array;
}
