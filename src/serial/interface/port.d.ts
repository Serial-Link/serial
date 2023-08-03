/**
 * This interface represents a port object.
 * 
 * @interface
 */
export interface Port {
    /**
     * Full name of the port (E.g. `ttyACM2`, `COM5`, ...)
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
     * Index of the port name (E.g. `2`, `5`, ...)
     * 
     * @property
     */
    index : number,

    /**
     * The path to the port. (E.g. `/dev/ttyACM2`, `COM5`, ...)
     * 
     * @property
     */
    path : string,

    /**
     * The manufacturer of the device that is connected to the port. (E.g. `Arduino (www.arduino.cc)`,
     * `Arduino LLC (www.arduino.cc)`, ...)
     * 
     * @property
     */
    manufacturer : string | undefined,
    
    /**
     * The serial number of the device that is connected to the port. (E.g. `698471028216477376C1`, ...)
     * @property
     */
    serialNumber : string | undefined,

    /**
     * The Plug and Play ID of the device that is connected to the port.
     * (E.g. `usb-Arduino__www.arduino.cc__0043_698471028216477376-if00`,
     * `USB\\VID_5678&PID_1234\\698471028216477376`)
     * 
     * @property
     */
    pnpId : string | undefined,

    /**
     * The location ID of the device on where it is connected to the serial port. (E.g. `Port_#0007.Hub_#0002`)
     * 
     * @property
     */
    locationId : string | undefined,

    /**
     * The product ID of the device that is connected to the port. (E.g. `1234`)
     * 
     * @property
     */
    productId : string | undefined,

    /**
     * The vendor ID of the device that is connected to the port. (E.g. `5678`)
     * 
     * @property
     */
    vendorId : string | undefined
}
