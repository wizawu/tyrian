declare namespace java {
  namespace net {

    abstract class URLConnection {
      protected url: java.net.URL
      protected doInput: boolean
      protected doOutput: boolean
      protected allowUserInteraction: boolean
      protected useCaches: boolean
      protected ifModifiedSince: long
      protected connected: boolean
      static readonly $assertionsDisabled: boolean
      public static getFileNameMap(): java.net.FileNameMap
      public static setFileNameMap(arg0: java.net.FileNameMap | java.net.FileNameMap$$lambda): void
      public abstract connect(): void
      public setConnectTimeout(arg0: number | java.lang.Integer): void
      public getConnectTimeout(): number
      public setReadTimeout(arg0: number | java.lang.Integer): void
      public getReadTimeout(): number
      protected constructor(arg0: java.net.URL)
      public getURL(): java.net.URL
      public getContentLength(): number
      public getContentLengthLong(): number
      public getContentType(): java.lang.String
      public getContentEncoding(): java.lang.String
      public getExpiration(): number
      public getDate(): number
      public getLastModified(): number
      public getHeaderField(arg0: java.lang.String | string): java.lang.String
      public getHeaderFields(): java.util.Map<java.lang.String,java.util.List<java.lang.String>>
      public getHeaderFieldInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public getHeaderFieldLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
      public getHeaderFieldDate(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
      public getHeaderFieldKey(arg0: number | java.lang.Integer): java.lang.String
      public getHeaderField(arg0: number | java.lang.Integer): java.lang.String
      public getContent(): java.lang.Object
      public getContent(arg0: java.lang.Class<unknown>[]): java.lang.Object
      public getPermission(): java.security.Permission
      public getInputStream(): java.io.InputStream
      public getOutputStream(): java.io.OutputStream
      public toString(): java.lang.String
      public setDoInput(arg0: boolean | java.lang.Boolean): void
      public getDoInput(): boolean
      public setDoOutput(arg0: boolean | java.lang.Boolean): void
      public getDoOutput(): boolean
      public setAllowUserInteraction(arg0: boolean | java.lang.Boolean): void
      public getAllowUserInteraction(): boolean
      public static setDefaultAllowUserInteraction(arg0: boolean | java.lang.Boolean): void
      public static getDefaultAllowUserInteraction(): boolean
      public setUseCaches(arg0: boolean | java.lang.Boolean): void
      public getUseCaches(): boolean
      public setIfModifiedSince(arg0: number | java.lang.Long): void
      public getIfModifiedSince(): number
      public getDefaultUseCaches(): boolean
      public setDefaultUseCaches(arg0: boolean | java.lang.Boolean): void
      public static setDefaultUseCaches(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      public static getDefaultUseCaches(arg0: java.lang.String | string): boolean
      public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public getRequestProperty(arg0: java.lang.String | string): java.lang.String
      public getRequestProperties(): java.util.Map<java.lang.String,java.util.List<java.lang.String>>
      public static setDefaultRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public static getDefaultRequestProperty(arg0: java.lang.String | string): java.lang.String
      public static setContentHandlerFactory(arg0: java.net.ContentHandlerFactory | java.net.ContentHandlerFactory$$lambda): void
      public static guessContentTypeFromName(arg0: java.lang.String | string): java.lang.String
      public static guessContentTypeFromStream(arg0: java.io.InputStream): java.lang.String
    }

  }
}
