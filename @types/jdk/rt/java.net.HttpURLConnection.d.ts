declare namespace java {
    namespace net {
abstract class HttpURLConnection extends java.net.URLConnection {
    protected method: string
    protected chunkLength: int
    protected fixedContentLength: int
    protected fixedContentLengthLong: long
    protected responseCode: int
    protected responseMessage: string
    protected instanceFollowRedirects: boolean
    public static HTTP_OK: int
    public static HTTP_CREATED: int
    public static HTTP_ACCEPTED: int
    public static HTTP_NOT_AUTHORITATIVE: int
    public static HTTP_NO_CONTENT: int
    public static HTTP_RESET: int
    public static HTTP_PARTIAL: int
    public static HTTP_MULT_CHOICE: int
    public static HTTP_MOVED_PERM: int
    public static HTTP_MOVED_TEMP: int
    public static HTTP_SEE_OTHER: int
    public static HTTP_NOT_MODIFIED: int
    public static HTTP_USE_PROXY: int
    public static HTTP_BAD_REQUEST: int
    public static HTTP_UNAUTHORIZED: int
    public static HTTP_PAYMENT_REQUIRED: int
    public static HTTP_FORBIDDEN: int
    public static HTTP_NOT_FOUND: int
    public static HTTP_BAD_METHOD: int
    public static HTTP_NOT_ACCEPTABLE: int
    public static HTTP_PROXY_AUTH: int
    public static HTTP_CLIENT_TIMEOUT: int
    public static HTTP_CONFLICT: int
    public static HTTP_GONE: int
    public static HTTP_LENGTH_REQUIRED: int
    public static HTTP_PRECON_FAILED: int
    public static HTTP_ENTITY_TOO_LARGE: int
    public static HTTP_REQ_TOO_LONG: int
    public static HTTP_UNSUPPORTED_TYPE: int
    public static HTTP_SERVER_ERROR: int
    public static HTTP_INTERNAL_ERROR: int
    public static HTTP_NOT_IMPLEMENTED: int
    public static HTTP_BAD_GATEWAY: int
    public static HTTP_UNAVAILABLE: int
    public static HTTP_GATEWAY_TIMEOUT: int
    public static HTTP_VERSION: int
    public getHeaderFieldKey(arg0: int): string
    public setFixedLengthStreamingMode(arg0: int): void
    public setFixedLengthStreamingMode(arg0: long): void
    public setChunkedStreamingMode(arg0: int): void
    public getHeaderField(arg0: int): string
    protected constructor(arg0: java.net.URL)
    public static setFollowRedirects(arg0: boolean): void
    public static getFollowRedirects(): boolean
    public setInstanceFollowRedirects(arg0: boolean): void
    public getInstanceFollowRedirects(): boolean
    public setRequestMethod(arg0: java.lang.String | string): void
    public getRequestMethod(): string
    public getResponseCode(): int
    public getResponseMessage(): string
    public getHeaderFieldDate(arg0: java.lang.String | string, arg1: long): long
    public disconnect(): void
    public usingProxy(): boolean
    public getPermission(): java.security.Permission
    public getErrorStream(): java.io.InputStream
    public static class: java.lang.Class<any>
}

    }
}