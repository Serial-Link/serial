import { baudrates } from "../constant/baudrates.ts";
import { TypeFromArray } from "./conversion/type_from_array.d.ts";

/**
 * Type from default baudrates.
 * 
 * @type Baudrate
 */
// (number & {}) converts number to generic object, needed for autocompletion
// deno-lint-ignore ban-types
export type Baudrate = TypeFromArray<typeof baudrates> | (number & {})
