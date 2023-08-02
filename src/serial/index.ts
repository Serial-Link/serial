export default class Serial {
    constructor() {

    }

    /**
     * Returns a list of port objects.
     * 
     * @public
     * @static
     * @example
     * ```
     * [
     *   {
     *     path: '/dev/ttyACM0',
     *     manufacturer: 'Arduino (www.arduino.cc)',
     *     serialNumber: '752303138333518011C1',
     *     pnpId: 'usb-Arduino__www.arduino.cc__0043_752303138333518011C1-if00',
     *     locationId: undefined,
     *     productId: '0043',
     *     vendorId: '2341'
     *   },
     *   ...
     * ]
     * ```
     */
    public static getPortsInfo() {

    }

    /**
     * Opens the connection to the serial device.
     * 
     * @public
     */
    public open() {

    }

    public close() {

    }

    public read() {

    }

    public readUntil() {

    }

    public write() {

    }

    public clearBufferIn() {

    }

    public clearBufferOut() {

    }

    public get isOpen() {
        return;
    }

}
