import { TypeFromArray } from "../type/type_from_array.d.ts"

export const baudrates = [
    300,
    600,
    1200,
    1800,
    2400,
    4800,
    9600,
    14400,
    19200,
    38400,
    57600,
    115200,
    128000,
    256000
] as const

export type Baudrate = TypeFromArray<typeof baudrates>
