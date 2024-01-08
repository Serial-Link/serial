import Serial from "./src/serial.ts";
import { baudrates } from "./src/constant/baudrates.ts";
import { dataBits } from "./src/constant/data_bits.ts";
import { parities } from "./src/constant/parities.ts";
import { stopBits } from "./src/constant/stop_bits.ts";

import { Baudrate } from "./src/type/baudrate.ts";
import { DataBits } from "./src/type/data_bits.ts";
import { Parity } from "./src/type/parity.ts";
import { StopBits } from "./src/type/stop_bits.ts";

export {
    Serial,
    baudrates,
    dataBits,
    parities,
    stopBits
}

export type {
    Baudrate,
    DataBits,
    Parity,
    StopBits
}
