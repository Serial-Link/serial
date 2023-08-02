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
     * @param buffer Buffer to read characters into
     * @param options Read options
     * @returns Resolves/Rejects to the number of bytes read
     */
    public read(
        buffer : Uint8Array,
        options : {}
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
     * @param buffer Buffer to read characters into
     * @param pattern Search pattern
     * @param options Read options
     * @returns Resolves/Rejects to the number of bytes read
     */
    public readUntil(
        buffer : Uint8Array,
        pattern : string,
        options : {}
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    /**
     * Writes up to `buffer.byteLength` bytes to `buffer` to the serial output buffer.
     * 
     * @public
     */
    public write(
        buffer : Uint8Array,
        bytes : number
    ) : Promise<number> {
        return new Promise(() => 0);
    }

    public clearBufferIn() {

    }

    public clearBufferOut() {

    }

    public get isOpen() {
        return;
    }

    public get sizeBufferIn() {
        return;
    }

    public get sizeBufferOut() {
        return;
    }

    public get port() {
        return;
    }

    public get baudrate() {
        return;
    }
    
    public get parity() {
        return;
    }
    
    public get dataBits() {
        return;
    }

    public get stopBits() {
        return;
    }
}

Deno.stdin.read()
