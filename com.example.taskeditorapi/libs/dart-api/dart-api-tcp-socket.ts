
/**
 * Class that helps create TCP Socket
 * Refer to {@link ITcpSocketLibrary.createSeverBuilder}
 *
 * @api-version 2
 * @user
 */
 export interface ITCPServerBuilder {
    /**
     * Register to client socket
     * example)
     * addClientEventListener(event: string, listener: (...args: any[]) => void): this;
     * addClientEventListener(event: 'close', listener: (hadError: boolean) => void): this;
     * addClientEventListener(event: 'connect', listener: () => void): this;
     * addClientEventListener(event: 'data', listener: (data: Uint8Array) => void): this;
     * addClientEventListener(event: 'drain', listener: () => void): this;
     * addClientEventListener(event: 'end', listener: () => void): this;
     * addClientEventListener(event: 'error', listener: (err: Error) => void): this;
     * addClientEventListener(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
     * addClientEventListener(event: 'ready', listener: () => void): this;
     * addClientEventListener(event: 'timeout', listener: () => void): this;
     *
     * @param event event name
     * @param listener A listener to know when a running component's state has been changed.
     * @return {@link ITCPServerBuilder}
     *
     * @api-version 2
     * @user
     */
    addClientOnEventListener(event: string, listener: (...args: any[]) => void): ITCPServerBuilder;
    /**
     * Register to client socket
     * example)
     * addClientOnceEventListener(event: string, listener: (...args: any[]) => void): this;
     * addClientOnceEventListener(event: 'close', listener: (hadError: boolean) => void): this;
     * addClientOnceEventListener(event: 'connect', listener: () => void): this;
     * addClientOnceEventListener(event: 'data', listener: (data: Uint8Array) => void): this;
     * addClientOnceEventListener(event: 'drain', listener: () => void): this;
     * addClientOnceEventListener(event: 'end', listener: () => void): this;
     * addClientOnceEventListener(event: 'error', listener: (err: Error) => void): this;
     * addClientOnceEventListener(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
     * addClientOnceEventListener(event: 'ready', listener: () => void): this;
     * addClientOnceEventListener(event: 'timeout', listener: () => void): this;
     *
     * @param event event name
     * @param listener A listener to know when a running component's state has been changed.
     * @return {@link ITCPServerBuilder}
     *
     * @api-version 2
     * @user
     */
    addClientOnceEventListener(event: string, listener: (...args: any[]) => void): ITCPServerBuilder;

    /**
     * Build Server Socket
     *
     * @return {@link ITCPServer}
     *
     * @api-version 2
     * @user
     */
    build(): ITCPServer;
}

/**
 * TCP Server
 *
 * @api-version 2
 * @user
 */
export interface ITCPServer {
    /**
     * Start a server listening for connections
     *
     * @param port port number
     * @param listeningListener listening callback
     *
     * @api-version 2
     * @user
     */
    listen(port: number, listeningListener?: () => void): void;

    /**
     * emit message
     * example)
     * emit(event: 'close'): boolean;
     * emit(event: 'connection', socket: Socket): boolean;
     * emit(event: 'error', err: Error): boolean;
     * emit(event: 'listening'): boolean;
     *
     * @param event event name
     * @param args emit data
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    emit(event: string, ...args: any[]): boolean;

    /**
     * set linstener
     * example)
     * on(event: string, listener: (...args: any[]) => void): this;
     * on(event: 'close', listener: () => void): this;
     * on(event: 'connection', listener: (socket: Socket) => void): this;
     * on(event: 'error', listener: (err: Error) => void): this;
     * on(event: 'listening', listener: () => void): this;
     *
     * @param event event name
     * @param listener listening callback
     *
     * @api-version 2
     * @user
     */
    on(event: string, listener: (...args: any[]) => void): void;

    /**
     * set linstener
     * example)
     * once(event: 'close', listener: () => void): this;
     * once(event: 'connection', listener: (socket: Socket) => void): this;
     * once(event: 'error', listener: (err: Error) => void): this;
     * once(event: 'listening', listener: () => void): this;
     *
     * @param event event name
     * @param listener listening callback
     *
     * @api-version 2
     * @user
     */
    once(event: string, listener: (...args: any[]) => void): void;

    /**
     * Broadcast
     *
     * @param data the data will be boarcasted.
     *
     * @api-version 2
     * @user
     */
    broadCast(data:Uint8Array): void;
    /**
     * socket close
     *
     * @api-version 2
     * @user
     */
    close(): void;
}

/**
 * TCP Client
 *
 * @api-version 2
 * @user
 */
export interface ITCPClient {
    /**
     * Conncet to server
     *
     * @param port port number
     * @param host host ip address
     * @param connectionListener listener callback
     *
     * @api-version 2
     * @user
     */
    connect(port: number, host: string, connectionListener?: () => void): void;
    /**
     * set linstener
     * example)
     * on(event: string, listener: (...args: any[]) => void): this;
     * on(event: 'close', listener: (hadError: boolean) => void): this;
     * on(event: 'connect', listener: () => void): this;
     * on(event: 'data', listener: (data: Uint8Array) => void): this;
     * on(event: 'drain', listener: () => void): this;
     * on(event: 'end', listener: () => void): this;
     * on(event: 'error', listener: (err: Error) => void): this;
     * on(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
     * on(event: 'ready', listener: () => void): this;
     * on(event: 'timeout', listener: () => void): this;
     *
     * @param event event name
     * @param listener listening callback
     *
     * @api-version 2
     * @user
     */
    on(event: string, listener: (...args: any[]) => void): void;
    /**
     * set linstener
     * example)
     * once(event: string, listener: (...args: any[]) => void): this;
     * once(event: 'close', listener: (hadError: boolean) => void): this;
     * once(event: 'connect', listener: () => void): this;
     * once(event: 'data', listener: (data: Uint8Array) => void): this;
     * once(event: 'drain', listener: () => void): this;
     * once(event: 'end', listener: () => void): this;
     * once(event: 'error', listener: (err: Error) => void): this;
     * once(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
     * once(event: 'ready', listener: () => void): this;
     * once(event: 'timeout', listener: () => void): this;
     *
     * @param event event name
     * @param listener listening callback
     *
     * @api-version 2
     * @user
     */
    once(event: string, listener: (...args: any[]) => void): void;
    /**
     * emit message
     * example)
     * emit(event: 'close', hadError: boolean): boolean;
     * emit(event: 'connect'): boolean;
     * emit(event: 'data', data: Uint8Array): boolean;
     * emit(event: 'drain'): boolean;
     * emit(event: 'end'): boolean;
     * emit(event: 'error', err: Error): boolean;
     * emit(event: 'lookup', err: Error, address: string, family: string | number, host: string): boolean;
     * emit(event: 'ready'): boolean;
     * emit(event: 'timeout'): boolean;
     *
     * @param event event name
     * @param listener listening callback
     *
     * @api-version 2
     * @user
     */
    emit(event: string, ...arg: any[]): boolean;

    /**
     * send data to server
     *
     * @param data the data will be sent
     *
     * @api-version 2
     * @user
     */
    write(data:Uint8Array): void;

    /**
     * close socket
     *
     * @api-version 2
     * @user
     */
    end(): void;
}


/**
 * ITcpSocketLibrary have a TCP communication APIs;
 *
 * @api-version 1
 * @user
 */
export interface ITcpSocketLibrary {
    /**
     * create the server builder instance
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, } from "dart-api";
     *  import { ITCPServer, ITcpSocketLibrary } from "dart-api-tcp-socket";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const tcpManager = context.getSystemManager(Context.TCP_SOCKET_LIBRARY) as ITcpSocketLibrary;
     *      const serverBuilder = tcpManager.createSeverBuilder();
     *      const server = serverBuilder
     *          .addClientOnEventListener('close', ((hadError: boolean) => {
     *              logger.info(`[${tag}] Client Disconnected`);
     *              if (this.onEvents['close']) {
     *                  this.onEvents['close'].forEach((callback) => { callback(hadError); });
     *              }
     *          }).bind(this))
     *          .addClientOnEventListener('end', (() => {
     *              logger.info(`[${tag}] Ended`);
     *          }).bind(this))
     *          .addClientOnEventListener('data', ((data: Uint8Array) => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(arrayToString(data))}`);
     *          }).bind(this))
     *          .build();
     *
     *      function stringToArray(bufferString: string): Uint8Array {
     *          let uint8Array = new TextEncoder().encode(bufferString);
     *          return uint8Array;
     *      }
     *      function arrayToString(bufferValue: Uint8Array): string {
     *          return new TextDecoder("utf-8").decode(bufferValue);
     *      }
     *
     *     return (
     *         <div>
     *             <Button onClick={() => {server.broadCast(stringToArray("Broadcast"))}}>Broadcast</Button>
     *         </div>
     *     );
     *  }
     */
    createSeverBuilder(): ITCPServerBuilder;
    /**
     * create the client socket
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, } from "dart-api";
     *  import { ITCPClient, ITcpSocketLibrary } from "dart-api-tcp-socket";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const tcpManager = context.getSystemManager(Context.TCP_SOCKET_LIBRARY) as ITcpSocketLibrary;
     *      const socket = tcpManager.createClient();
     *      socket.connect(port, "192.168.137.100", (() => {
     *          Toast.show(IToast.TYPE_INFO, null, `Connected to server`);
     *          }
     *      }));
     *      socket.on('data', ((data: Uint8Array) => {
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(arrayToString(data))}`);
     *      }));
     *      socket.on('close', ((hadError: boolean) => {
     *          Toast.show(IToast.TYPE_INFO, null, `socket closed`);
     *      }));
     *      socket.on('end', (() => {
     *          Toast.show(IToast.TYPE_INFO, null, `socket ended`);
     *      }));
     *
     *      function stringToArray(bufferString: string): Uint8Array {
     *          let uint8Array = new TextEncoder().encode(bufferString);
     *          return uint8Array;
     *      }
     *      function arrayToString(bufferValue: Uint8Array): string {
     *          return new TextDecoder("utf-8").decode(bufferValue);
     *      }
     *
     *     return (
     *         <div>
     *             <Button onClick={() => {socket.write(stringToArray("Test Message"))}}>Send</Button>
     *         </div>
     *     );
     *  }
     */
    createClient(): ITCPClient;
}
