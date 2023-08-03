import { Baudrate } from "./type/baudrate.d.ts";
import { Parity } from "./type/parity.d.ts";
import { Port } from "./interface/port.d.ts";
import { ReadOptions } from "./interface/read_options.d.ts";
import { WriteOptions } from "./interface/write_options.d.ts";
import { DataBits } from "./type/data_bits.d.ts";

/**
 * The Serial class with all its functionality.
 * 
 * @class
 */
export default class Serial {
    /**
     * Create a new instance of a serial connection to a serial device.
     * 
     * @constructor
     * @param portName The name of the port to connect to
     * @param baudrate The baudrate to use
     */
    constructor(
        portName : string,
        baudrate : Baudrate
    ) {

    }

    /**
     * Returns a list of port objects. It resolves to a list of port objects and rejects if any error encountered.
     * 
     * @public
     * @static
     * @returns Resolves to a list of port objects, rejects if any error encountered
     */
    public static listPorts() : Promise<Port[]> {
        return new Promise(() => {});
    }

    /**
     * Opens the connection to the serial device. It resolves if the connection was opened successfully
     * and rejects if any error encountered or the connection is already opened.
     * 
     * @public
     */
    public open() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Closes the connection to the serial device. It resolves if the connection was closed successfully
     * and rejects if any error encountered or the connection is already closed.
     * 
     * @public
     */
    public close() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Reads up to `buffer.byteLength` bytes into `buffer` from the serial input buffer.
     * It resolves to the number of bytes read (`0` < `n` <= `buffer.byteLength`) and
     * rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to read bytes into
     * @param options Read options
     * @returns Resolves to the number of bytes read, rejects if any error encountered or the timeout is expired
     */
    public read(
        buffer : Uint8Array,
        options : ReadOptions
    ) : Promise<number> {
        return new Promise(() => {});
    }

    /**
     * Reads up to `buffer.byteLength` bytes into `buffer` from the serial input buffer
     * until a specific search pattern is found.
     * It resolves to the number of bytes read (`0` < `n` <= `buffer.byteLength`)
     * and rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to read bytes into
     * @param pattern Search pattern
     * @param options Read options
     * @returns Resolves to the number of bytes read, rejects if any error encountered or the timeout is expired
     */
    public readUntil(
        buffer : Uint8Array,
        pattern : string,
        options : ReadOptions
    ) : Promise<number> {
        return new Promise(() => {});
    }

    /**
     * Writes up to `buffer.byteLength` bytes from `buffer` into the serial output buffer.
     * It resolves to the number of bytes written (`0` < `n` <= `buffer.byteLength`)
     * and rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to write bytes from
     * @param options Write options
     * @returns Resolves to the number of bytes written, rejects if any error encountered or the timeout is expired
     */
    public write(
        buffer : Uint8Array,
        options : WriteOptions
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    /**
     * Clears the local input buffer. It resolves as soon as the input buffer is successfully cleared
     * and rejects if any error encountered.
     * 
     * @public
     */
    public clearBufferIn() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Clears the local output buffer. It resolves as soon as the output buffer is successfully cleared
     * and rejects if any error encountered.
     * 
     * @public
     */
    public clearBufferOut() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Getter for getting the current open state. It resolves to the current state of the serial connection
     * and rejects if any error encountered.
     * 
     * @public
     * @type isOpen
     * @returns Resolves to the current state (opened: `true`, closed: `false`), rejects if any error encountered
     */
    public get isOpen() : Promise<boolean> {
        return new Promise(() => {});
    }

    /**
     * Getter for getting the current size of the local input buffer. It resolves to the current size of
     * the local input buffer and rejects if any error encountered.
     * 
     * @public
     * @type sizeBufferIn
     * @returns Resolves to the current size of the local input buffer, rejects if any error encountered
     */
    public get sizeBufferIn() : Promise<number> {
        return new Promise(() => {});
    }
    
    /**
     * Getter for getting the current size of the local output buffer. It resolves to the current size of
     * the local output buffer and rejects if any error encountered.
     * 
     * @public
     * @type sizeBufferOut
     * @returns Resolves to the current size of the local output buffer, rejects if any error encountered
     */
    public get sizeBufferOut() : Promise<number> {
        return new Promise(() => {});
    }

    /**
     * Getter for getting the port object of the serial object. It resolves to the port object of the serial object
     * and rejects if any error encountered.
     * 
     * @public
     * @type port
     * @returns Resolves to the port object of the serial object, rejects if any error encountered
     */
    public get port() : Promise<Port> {
        return new Promise(() => {});
    }

    /**
     * Getter for getting the baudrate of the serial object.
     * 
     * @public
     * @type baudrate
     * @returns The baudrate of the serial object
     */
    public get baudrate() : Baudrate {
        return 9600;
    }
    
    /**
     * Getter for getting the parity of the serial object.
     * 
     * @public
     * @type parity
     * @returns The parity of the serial object
     */
    public get parity() : Parity {
        return 'NONE';
    }
    
    /**
     * Getter for getting the data bits of the serial object.
     * 
     * @public
     * @type dataBits
     * @returns The data bits of the serial object
     */
    public get dataBits() : DataBits {
        return 'EIGHT';
    }

    /**
     * Getter for getting the stop bits of the serial object.
     * 
     * @public
     * @type stopBits
     * @returns The stop bits of the serial object
     */
    public get stopBits() : number {
        return 0;
    }
}
