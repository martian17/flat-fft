import {FlatFFT32, FlatFFT64, fft32, ifft32, fft64, ifft64, fft64InPlace, ifft64InPlace} from "./index";

const round = function(arr){
    const res = [];
    for(let i = 0; i < arr.length; i+=2){
        res.push(arr[i]);
    }
    return res;
};

test("Flat32: fft->ifft should give back the same input", ()=>{
    const original = FlatFFT32.toComplex([1,2,3,4]);
    expect(
        round(fft32(ifft32(original)))
    ).toStrictEqual(
        round(original)
    );
});

test("Flat64: fft->ifft should give back the same input", ()=>{
    const original = FlatFFT64.toComplex([1,2,3,4]);
    expect(
        round(fft64(ifft64(original)))
    ).toStrictEqual(
        round(original)
    );
});

test("Flat64: fftInPlace->ifftInPlace should give back the same input", ()=>{
    const original = FlatFFT64.toComplex([1,2,3,4]);
    const original_copy = original.slice();
    expect(
        round(fft64InPlace(ifft64InPlace(original)))
    ).toStrictEqual(
        round(original_copy)
    );
});

