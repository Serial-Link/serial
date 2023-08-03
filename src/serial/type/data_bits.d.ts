import { TypeFromObject } from './conversion/type_from_object.d.ts';
import { dataBits } from '../constant/data_bits.ts';

/**
 * Type from data bits.
 * 
 * @type DataBits
 */
export type DataBits = TypeFromObject<typeof dataBits>
