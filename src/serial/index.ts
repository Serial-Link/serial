import { Port } from "./interface/port.d.ts";
import { ReadOptions } from "./interface/read_options.d.ts";
import { WriteOptions } from "./interface/write_options.d.ts";

export default class Serial {
    constructor() {

    }

    /**
     * Returns a list of port objects.
     * 
     * @public
     * @static
     */
    public static getPortsInfo() {

    }

    /**
     * Opens the connection to the serial device. The connection must be closed.
     * Throws a `ConnectionAlreadyOpenedError` if the connection is already opened.
     * 
     * @public
     */
    public open() : void {

    }

    /**
     * Closes the connection to the serial device. The connection must be opened.
     * Throws a `ConnectionAlreadyClosedError` if the connection is already closed.
     * 
     * @public
     */
    public close() : void {

    }

    /**
     * Reads up to `buffer.byteLength` bytes into `buffer` from the serial input buffer.
     * It resolves to the number of bytes read (`0` < `n` <= `buffer.byteLength`) and
     * rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to read bytes into
     * @param options Read options
     * @returns Resolves/Rejects to the number of bytes read
     */
    public read(
        buffer : Uint8Array,
        options : ReadOptions
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    /**
     * Reads up to `buffer.byteLength` bytes into `buffer` from the serial input buffer
     * until a specific search pattern is found.
     * It resolves to the number of bytes read (`0` < `n` <= `buffer.byteLength`) and
     * rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to read bytes into
     * @param pattern Search pattern
     * @param options Read options
     * @returns Resolves/Rejects to the number of bytes read
     */
    public readUntil(
        buffer : Uint8Array,
        pattern : string,
        options : ReadOptions
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    /**
     * Writes up to `buffer.byteLength` bytes from `buffer` into the serial output buffer.
     * It resolves to the number of bytes written (`0` < `n` <= `buffer.byteLength`) and
     * rejects if any error encountered or the timeout is expired.
     * 
     * @public
     * @param buffer Buffer to write bytes from
     * @param options Write options
     * @returns Resolves/Rejects to the number of bytes written
     */
    public write(
        buffer : Uint8Array,
        options : WriteOptions
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    /**
     * Clears the local input buffer.
     * It resolves as soon as the input buffer is successfully cleared and rejects if any error encountered.
     * 
     * @public
     * @returns Resolves after successful clear/Rejects if any error encountered
     */
    public clearBufferIn() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Clears the local output buffer.
     * It resolves as soon as the output buffer is successfully cleared and rejects if any error encountered.
     * 
     * @public
     * @returns Resolves after successful clear, rejects if any error encountered
     */
    public clearBufferOut() : Promise<void> {
        return new Promise(() => {});
    }

    /**
     * Getter for getting the current open state.
     * 
     * @public
     * @type isOpen
     * @returns `true` if the port is open, `false` otherwise
     */
    public get isOpen() : boolean {
        return false;
    }

    /**
     * Getter for getting the current size of the local input buffer.
     * 
     * @public
     * @type sizeBufferIn
     * @returns The current size of the local input buffer
     */
    public get sizeBufferIn() : number {
        return 0;
    }
    
    /**
     * Getter for getting the current size of the local output buffer.
     * 
     * @public
     * @type sizeBufferOut
     * @returns The current size of the local output buffer
     */
    public get sizeBufferOut() : number {
        return 0;
    }

    /**
     * Getter for getting the port object of the serial object.
     * 
     * @public
     * @type port
     * @returns The port object of the serial object.
     */
    public get port() : Port {
        return {
            name: '',
            prefix: '',
            index: 0
        };
    }

    /**
     * @public
     * @type baudrate
     */
    public get baudrate() : number {
        return 0;
    }
    
    /**
     * @public
     * @type parity
     */
    public get parity() : number {
        return 0;
    }
    
    /**
     * @public
     * @type dataBits
     */
    public get dataBits() : number {
        return 0;
    }

    /**
     * @public
     * @type stopBits
     */
    public get stopBits() : number {
        return 0;
    }
}
