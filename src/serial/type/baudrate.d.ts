import { baudrates } from "../constant/baudrates.ts";
import { TypeFromArray } from "./conversion/type_from_array.d.ts";

/**
 * Type from default baudrates.
 * 
 * @type Baudrate
 */
export type Baudrate = TypeFromArray<typeof baudrates>

