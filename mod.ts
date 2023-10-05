import Serial from "./src/serial/index.ts";
import { baudrates } from "./src/serial/constant/baudrates.ts";
import { dataBits } from "./src/serial/constant/data_bits.ts";
import { parities } from "./src/serial/constant/parities.ts";
import { stopBits } from "./src/serial/constant/stop_bits.ts";

import { Baudrate } from "./src/serial/type/baudrate.d.ts";
import { DataBits } from "./src/serial/type/data_bits.d.ts";
import { Parity } from "./src/serial/type/parity.d.ts";
import { StopBits } from "./src/serial/type/stop_bits.d.ts";

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
