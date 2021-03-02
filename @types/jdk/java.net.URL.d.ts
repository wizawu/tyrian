declare namespace java {
  namespace net {

    class URL implements java.io.Serializable {
      static readonly BUILTIN_HANDLERS_PREFIX: java.lang.String
      static readonly serialVersionUID: long
      hostAddress: java.net.InetAddress
      handler: java.net.URLStreamHandler
      static handlers: java.util.Hashtable<java.lang.String,java.net.URLStreamHandler>
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: java.net.URLStreamHandler)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
      public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.net.URLStreamHandler)
      static fromURI(arg0: java.net.URI): java.net.URL
      set(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: java.lang.String | string): void
      set(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.lang.String | string): void
      public getQuery(): java.lang.String
      public getPath(): java.lang.String
      public getUserInfo(): java.lang.String
      public getAuthority(): java.lang.String
      public getPort(): number
      public getDefaultPort(): number
      public getProtocol(): java.lang.String
      public getHost(): java.lang.String
      public getFile(): java.lang.String
      public getRef(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public sameFile(arg0: java.net.URL): boolean
      public toString(): java.lang.String
      public toExternalForm(): java.lang.String
      public toURI(): java.net.URI
      public openConnection(): java.net.URLConnection
      public openConnection(arg0: java.net.Proxy): java.net.URLConnection
      public openStream(): java.io.InputStream
      public getContent(): java.lang.Object
      public getContent(arg0: java.lang.Class<unknown>[]): java.lang.Object
      public static setURLStreamHandlerFactory(arg0: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$lambda): void
      static toLowerCase(arg0: java.lang.String | string): java.lang.String
      static isOverrideable(arg0: java.lang.String | string): boolean
      static getURLStreamHandler(arg0: java.lang.String | string): java.net.URLStreamHandler
      isBuiltinStreamHandler(arg0: java.net.URLStreamHandler): boolean
    }

  }
}
