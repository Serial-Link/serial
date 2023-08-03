/**
 * Create a type literal from an object.
 * 
 * @type TypeFromObject<ObjectType>
 */
export type TypeFromObject<ObjectType extends unknown> = keyof ObjectType;
