/**
 * Create a type literal from an array.
 * 
 * @type TypeFromArray<ArrayType>
 */
export type TypeFromArray<ArrayType extends readonly unknown[]> = ArrayType[number];
