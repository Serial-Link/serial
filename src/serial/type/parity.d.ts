import { TypeFromObject } from './conversion/type_from_object.d.ts';
import { parities } from '../constant/parities.ts';

/**
 * Type from parities.
 * 
 * @type Parity
 */
export type Parity = TypeFromObject<typeof parities>
