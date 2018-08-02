declare namespace sun {
    namespace net {
        namespace www {
abstract class URLConnection extends java.net.URLConnection {
    protected properties: sun.net.www.MessageHeader
    public constructor(arg0: java.net.URL)
    public getProperties(): sun.net.www.MessageHeader
    public setProperties(arg0: sun.net.www.MessageHeader): void
    public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getRequestProperty(arg0: java.lang.String | string): string
    public getRequestProperties(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public getHeaderField(arg0: java.lang.String | string): string
    public getHeaderFieldKey(arg0: int): string
    public getHeaderField(arg0: int): string
    public getContentType(): string
    public setContentType(arg0: java.lang.String | string): void
    public getContentLength(): int
    protected setContentLength(arg0: int): void
    public canCache(): boolean
    public close(): void
    public static setProxiedHost(arg0: java.lang.String | string): void
    public static isProxiedHost(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}