import { TypeFromObject } from './conversion/type_from_object.ts';
import { stopBits } from '../constant/stop_bits.ts';

/**
 * Type from stop bits.
 * 
 * @type DataBits
 */
export type StopBits = TypeFromObject<typeof stopBits>
