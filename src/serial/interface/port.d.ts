import { Baudrate } from '../type/baudrate.d.ts';
import { DataBits } from '../type/data_bits.d.ts';
import { Parity } from '../type/parity.d.ts';
import { StopBits } from '../type/stop_bits.d.ts';

export interface Port {
    path : string,
    baudrate : Baudrate,
    parity? : Parity,
    dataBits? : DataBits,
    stopBits? : StopBits
}
