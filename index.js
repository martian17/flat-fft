export class FlatFFT{
    constructor(order){
        this.order = order;
        this.length = 1<<order;
        //figure out the ordering
        const nummap = new Int32Array(this.length);
        nummap[0] = 0;
        nummap[1] = 1;
        for(let i = 1; i < order; i++){
            let n = 1<<i;
            for(let j = n-1; j >= 0; j--){
                nummap[j*2] = nummap[j];
                nummap[j*2+1] = nummap[j]+n;
            }
        }
        this.nummap = nummap;
    }
    baseTransform(coefs){
        const coefs64 = new Float64Array(coefs.buffer);
        const {nummap,order} = this;
        const n = this.length;
        const buff = new Float32Array(n*2);
        const buff64 = new Float64Array(buff.buffer);
        for(let i = 0; i < n; i++){
            let idx = nummap[i];
            //copying the real and imaginary together as 64 bit double
            buff64[i] = coefs64[idx];
        }
        for(let o = 1; o <= order; o++){
            const span = 1<<o;
            const hspan = span>>>1;//half span
            for(let offset = 0; offset < n; offset += span){
                for(let i = 0; i < hspan; i++){
                    let evenIdx = (offset+i)*2;
                    let oddIdx = (offset+i+hspan)*2;
                    //ith span root of unity
                    const omega_r = Math.cos(i/span*Math.PI*2);
                    const omega_i = Math.sin(i/span*Math.PI*2);
                    const even0_r = buff[evenIdx+0];
                    const even0_i = buff[evenIdx+1];
                    const odd0_r  = buff[oddIdx +0];
                    const odd0_i  = buff[oddIdx +1];

                    const right_r = odd0_r*omega_r - odd0_i*omega_i;
                    const right_i = odd0_r*omega_i + odd0_i*omega_r;

                    buff[evenIdx+0] = even0_r+right_r;
                    buff[evenIdx+1] = even0_i+right_i;
                    buff[oddIdx +0] = even0_r-right_r;
                    buff[oddIdx +1] = even0_i-right_i;
                }
            }
        }
        return buff;
    }
    fft(coefs){
        const buff = this.baseTransform(coefs);
        const n = this.length;
        //taking the complex conjugate
        for(let i = 1; i < n*2; i += 2){
            buff[i] = -buff[i];
        }
        return buff;
    }
    ifft(coefs){
        const buff = this.baseTransform(coefs);
        const n = this.length;
        for(let i = 0; i < n*2; i++){
            buff[i] = buff[i]/n;
        }
        return buff;
    }
    static toComplex(arr){
        const res = new Float32Array(arr.length*2);
        for(let i = 0; i < arr.length; i++){
            res[i*2] = arr[i];
        }
        return res;
    }
}
