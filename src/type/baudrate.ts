import { TypeFromArray } from './conversion/type_from_array.ts';
import { baudrates } from '../constant/baudrates.ts';

/**
 * Type from default baudrates.
 * 
 * @type Baudrate
 */
// (number & {}) converts number to generic object, needed for autocompletion
// deno-lint-ignore ban-types
export type Baudrate = TypeFromArray<typeof baudrates> | (number & {})
