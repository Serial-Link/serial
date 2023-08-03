/**
 * This interface represents a port object.
 * 
 * @interface
 */
export interface Port {
    /**
     * Full name of the port (E.g. `ttyACM0` or `COM5`)
     * 
     * @property
     */
    name : string,

    /**
     * Prefix of the port name (E.g. `ttyACM` or `COM`)
     * 
     * @property
     */
    prefix : string,

    /**
     * Index of the port name (E.g. `0` or `5`)
     */
    index : number
}
