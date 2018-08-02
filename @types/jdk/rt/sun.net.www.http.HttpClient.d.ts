declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class HttpClient extends sun.net.NetworkClient {
                    protected cachedHttpClient: boolean
                    protected inCache: boolean
                    protected proxyDisabled: boolean
                    public usingProxy: boolean
                    protected host: string
                    protected port: int
                    protected static kac: sun.net.www.http.KeepAliveCache
                    protected url: java.net.URL
                    public reuse: boolean
                    protected getDefaultPort(): int
                    public static resetProperties(): void
                    public getHttpKeepAliveSet(): boolean
                    protected constructor()
                    protected constructor(arg0: java.net.URL, arg1: boolean)
                    public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int)
                    protected constructor(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int)
                    protected static newHttpProxy(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): java.net.Proxy
                    public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: int)
                    public static New(arg0: java.net.URL): sun.net.www.http.HttpClient
                    public static New(arg0: java.net.URL, arg1: boolean): sun.net.www.http.HttpClient
                    public static New(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int, arg3: boolean, arg4: sun.net.www.protocol.http.HttpURLConnection): sun.net.www.http.HttpClient
                    public static New(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int, arg3: sun.net.www.protocol.http.HttpURLConnection): sun.net.www.http.HttpClient
                    public static New(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): sun.net.www.http.HttpClient
                    public static New(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: int, arg5: sun.net.www.protocol.http.HttpURLConnection): sun.net.www.http.HttpClient
                    public finished(): void
                    protected available(): boolean
                    protected putInKeepAliveCache(): void
                    protected isInKeepAliveCache(): boolean
                    public closeIdleConnection(): void
                    public openServer(arg0: java.lang.String | string, arg1: int): void
                    public needsTunneling(): boolean
                    public isCachedConnection(): boolean
                    public afterConnect(): void
                    protected openServer(): void
                    public getURLFile(): string
                    public writeRequests(arg0: sun.net.www.MessageHeader): void
                    public writeRequests(arg0: sun.net.www.MessageHeader, arg1: sun.net.www.http.PosterOutputStream): void
                    public writeRequests(arg0: sun.net.www.MessageHeader, arg1: sun.net.www.http.PosterOutputStream, arg2: boolean): void
                    public parseHTTP(arg0: sun.net.www.MessageHeader, arg1: sun.net.ProgressSource, arg2: sun.net.www.protocol.http.HttpURLConnection): boolean
                    public getInputStream(): java.io.InputStream
                    public getOutputStream(): java.io.OutputStream
                    public toString(): string
                    public isKeepingAlive(): boolean
                    public setCacheRequest(arg0: java.net.CacheRequest): void
                    protected finalize(): void
                    public setDoNotRetry(arg0: boolean): void
                    public setIgnoreContinue(arg0: boolean): void
                    public closeServer(): void
                    public getProxyHostUsed(): string
                    public getProxyPortUsed(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}