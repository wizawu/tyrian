declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
class HttpURLConnection extends java.net.HttpURLConnection {
    public static userAgent: string
    protected http: sun.net.www.http.HttpClient
    protected handler: sun.net.www.protocol.http.Handler
    protected instProxy: java.net.Proxy
    protected cachedResponse: java.net.CacheResponse
    protected ps: java.io.PrintStream
    protected pi: sun.net.ProgressSource
    public static getHttpLogger(): sun.util.logging.PlatformLogger
    public authObj(): java.lang.Object
    public authObj(arg0: java.lang.Object): void
    public setRequestMethod(arg0: java.lang.String | string): void
    protected setNewClient(arg0: java.net.URL): void
    protected setNewClient(arg0: java.net.URL, arg1: boolean): void
    protected setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int): void
    protected setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): void
    protected proxiedConnect(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): void
    protected constructor(arg0: java.net.URL, arg1: sun.net.www.protocol.http.Handler)
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int)
    public constructor(arg0: java.net.URL, arg1: java.net.Proxy)
    protected constructor(arg0: java.net.URL, arg1: java.net.Proxy, arg2: sun.net.www.protocol.http.Handler)
    public static setDefaultAuthenticator(arg0: sun.net.www.protocol.http.HttpAuthenticator): void
    public static openConnectionCheckRedirects(arg0: java.net.URLConnection): java.io.InputStream
    public connect(): void
    protected plainConnect(): void
    protected plainConnect0(): void
    protected getNewHttpClient(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int): sun.net.www.http.HttpClient
    protected getNewHttpClient(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int, arg3: boolean): sun.net.www.http.HttpClient
    public getOutputStream(): java.io.OutputStream
    public streaming(): boolean
    public getInputStream(): java.io.InputStream
    public getErrorStream(): java.io.InputStream
    public setTunnelState(arg0: sun.net.www.protocol.http.HttpURLConnection$TunnelState): void
    public doTunneling(): void
    public disconnect(): void
    public usingProxy(): boolean
    public getHeaderField(arg0: java.lang.String | string): string
    public getHeaderFields(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public getHeaderField(arg0: int): string
    public getHeaderFieldKey(arg0: int): string
    public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setAuthenticationProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getRequestProperty(arg0: java.lang.String | string): string
    public getRequestProperties(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public setConnectTimeout(arg0: int): void
    public getConnectTimeout(): int
    public setReadTimeout(arg0: int): void
    public getReadTimeout(): int
    public getCookieHandler(): java.net.CookieHandler
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}