declare namespace java {
  namespace net {

    class URI implements java.lang.Comparable<java.net.URI>, java.io.Serializable {
      static readonly serialVersionUID: long
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: int, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
      constructor(arg0: java.lang.String, arg1: java.lang.String)
      public static create(arg0: java.lang.String): java.net.URI
      public parseServerAuthority(): java.net.URI
      public normalize(): java.net.URI
      public resolve(arg0: java.net.URI): java.net.URI
      public resolve(arg0: java.lang.String): java.net.URI
      public relativize(arg0: java.net.URI): java.net.URI
      public toURL(): java.net.URL
      public getScheme(): java.lang.String
      public isAbsolute(): boolean
      public isOpaque(): boolean
      public getRawSchemeSpecificPart(): java.lang.String
      public getSchemeSpecificPart(): java.lang.String
      public getRawAuthority(): java.lang.String
      public getAuthority(): java.lang.String
      public getRawUserInfo(): java.lang.String
      public getUserInfo(): java.lang.String
      public getHost(): java.lang.String
      public getPort(): int
      public getRawPath(): java.lang.String
      public getPath(): java.lang.String
      public getRawQuery(): java.lang.String
      public getQuery(): java.lang.String
      public getRawFragment(): java.lang.String
      public getFragment(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public compareTo(arg0: java.net.URI): int
      public toString(): java.lang.String
      public toASCIIString(): java.lang.String
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
