declare namespace java {
  namespace net {

    abstract class HttpURLConnection extends java.net.URLConnection {
      protected method: java.lang.String
      protected chunkLength: int
      protected fixedContentLength: int
      protected fixedContentLengthLong: long
      protected responseCode: int
      protected responseMessage: java.lang.String
      protected instanceFollowRedirects: boolean
      public static readonly HTTP_OK: int
      public static readonly HTTP_CREATED: int
      public static readonly HTTP_ACCEPTED: int
      public static readonly HTTP_NOT_AUTHORITATIVE: int
      public static readonly HTTP_NO_CONTENT: int
      public static readonly HTTP_RESET: int
      public static readonly HTTP_PARTIAL: int
      public static readonly HTTP_MULT_CHOICE: int
      public static readonly HTTP_MOVED_PERM: int
      public static readonly HTTP_MOVED_TEMP: int
      public static readonly HTTP_SEE_OTHER: int
      public static readonly HTTP_NOT_MODIFIED: int
      public static readonly HTTP_USE_PROXY: int
      public static readonly HTTP_BAD_REQUEST: int
      public static readonly HTTP_UNAUTHORIZED: int
      public static readonly HTTP_PAYMENT_REQUIRED: int
      public static readonly HTTP_FORBIDDEN: int
      public static readonly HTTP_NOT_FOUND: int
      public static readonly HTTP_BAD_METHOD: int
      public static readonly HTTP_NOT_ACCEPTABLE: int
      public static readonly HTTP_PROXY_AUTH: int
      public static readonly HTTP_CLIENT_TIMEOUT: int
      public static readonly HTTP_CONFLICT: int
      public static readonly HTTP_GONE: int
      public static readonly HTTP_LENGTH_REQUIRED: int
      public static readonly HTTP_PRECON_FAILED: int
      public static readonly HTTP_ENTITY_TOO_LARGE: int
      public static readonly HTTP_REQ_TOO_LONG: int
      public static readonly HTTP_UNSUPPORTED_TYPE: int
      public static readonly HTTP_SERVER_ERROR: int
      public static readonly HTTP_INTERNAL_ERROR: int
      public static readonly HTTP_NOT_IMPLEMENTED: int
      public static readonly HTTP_BAD_GATEWAY: int
      public static readonly HTTP_UNAVAILABLE: int
      public static readonly HTTP_GATEWAY_TIMEOUT: int
      public static readonly HTTP_VERSION: int
      public setAuthenticator(arg0: java.net.Authenticator): void
      public getHeaderFieldKey(arg0: int): java.lang.String
      public setFixedLengthStreamingMode(arg0: int): void
      public setFixedLengthStreamingMode(arg0: long): void
      public setChunkedStreamingMode(arg0: int): void
      public getHeaderField(arg0: int): java.lang.String
      protected constructor(arg0: java.net.URL)
      public static setFollowRedirects(arg0: boolean): void
      public static getFollowRedirects(): boolean
      public setInstanceFollowRedirects(arg0: boolean): void
      public getInstanceFollowRedirects(): boolean
      public setRequestMethod(arg0: java.lang.String): void
      public getRequestMethod(): java.lang.String
      public getResponseCode(): int
      public getResponseMessage(): java.lang.String
      public getHeaderFieldDate(arg0: java.lang.String, arg1: long): long
      public abstract disconnect(): void
      public abstract usingProxy(): boolean
      public getPermission(): java.security.Permission
      public getErrorStream(): java.io.InputStream
    }

  }
}
