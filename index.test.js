import {FlatFFT, fft32, ifft32} from "./index";

const round = function(arr){
    const res = [];
    for(let i = 0; i < arr.length; i+=2){
        res.push(arr[i]);
    }
    return res;
};

test("Flat32: fft->ifft should give back the same input", ()=>{
    const original = FlatFFT.toComplex([1,2,3,4]);
    expect(
        round(ifft32(fft32(original)))
    ).toStrictEqual(
        round(original)
    );
});
