declare namespace java {
    namespace net {
class URL implements java.io.Serializable {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: java.net.URLStreamHandler)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.net.URLStreamHandler)
    public getQuery(): string
    public getPath(): string
    public getUserInfo(): string
    public getAuthority(): string
    public getPort(): int
    public getDefaultPort(): int
    public getProtocol(): string
    public getHost(): string
    public getFile(): string
    public getRef(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public sameFile(arg0: java.net.URL): boolean
    public toString(): string
    public toExternalForm(): string
    public toURI(): java.net.URI
    public openConnection(): java.net.URLConnection
    public openConnection(arg0: java.net.Proxy): java.net.URLConnection
    public openStream(): java.io.InputStream
    public getContent(): java.lang.Object
    public getContent(arg0: java.lang.Class[]): java.lang.Object
    public static setURLStreamHandlerFactory(arg0: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$Lambda): void
    public static class: java.lang.Class<any>
}

    }
}