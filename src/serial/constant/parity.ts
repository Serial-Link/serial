import { TypeFromObject } from "../type/type_from_object.d.ts";

export const parity = {
    NONE: 0,
    EVEN: 1,
    MARK: 2,
    ODD: 3,
    SPACE: 4
} as const;

export type Parity = TypeFromObject<typeof parity>
