/**
 * This interface represents a port object.
 * 
 * @interface
 */
export interface Port {
    /**
     * Full name of the port (E.g. `ttyACM0`, `COM5`, ...)
     * 
     * @property
     */
    name : string,

    /**
     * Prefix of the port name (E.g. `ttyACM`, `COM`, ...)
     * 
     * @property
     */
    prefix : string,

    /**
     * Index of the port name (E.g. `0`, `5`, ...)
     */
    index : number
}
