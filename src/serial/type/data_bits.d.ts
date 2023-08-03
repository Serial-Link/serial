import { dataBits } from "../constant/data_bits.ts";
import { TypeFromObject } from "./conversion/type_from_object.d.ts";

/**
 * Type from data bits.
 * 
 * @type DataBits
 */
export type DataBits = TypeFromObject<typeof dataBits>
