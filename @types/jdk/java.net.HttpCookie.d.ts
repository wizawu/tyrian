declare namespace java {
  namespace net {

    class HttpCookie implements java.lang.Cloneable {
      static readonly assignors: java.util.Map<java.lang.String,java.net.HttpCookie$CookieAttributeAssignor>
      static readonly GMT: java.util.TimeZone
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public static parse(arg0: java.lang.String): java.util.List<java.net.HttpCookie>
      public hasExpired(): boolean
      public setComment(arg0: java.lang.String): void
      public getComment(): java.lang.String
      public setCommentURL(arg0: java.lang.String): void
      public getCommentURL(): java.lang.String
      public setDiscard(arg0: boolean): void
      public getDiscard(): boolean
      public setPortlist(arg0: java.lang.String): void
      public getPortlist(): java.lang.String
      public setDomain(arg0: java.lang.String): void
      public getDomain(): java.lang.String
      public setMaxAge(arg0: long): void
      public getMaxAge(): long
      public setPath(arg0: java.lang.String): void
      public getPath(): java.lang.String
      public setSecure(arg0: boolean): void
      public getSecure(): boolean
      public getName(): java.lang.String
      public setValue(arg0: java.lang.String): void
      public getValue(): java.lang.String
      public getVersion(): int
      public setVersion(arg0: int): void
      public isHttpOnly(): boolean
      public setHttpOnly(arg0: boolean): void
      public static domainMatches(arg0: java.lang.String, arg1: java.lang.String): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public clone(): java.lang.Object
    }

  }
}
