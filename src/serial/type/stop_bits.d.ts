import { stopBits } from "../constant/stop_bits.ts";
import { TypeFromObject } from "./conversion/type_from_object.d.ts";

/**
 * Type from stop bits.
 * 
 * @type DataBits
 */
export type StopBits = TypeFromObject<typeof stopBits>
