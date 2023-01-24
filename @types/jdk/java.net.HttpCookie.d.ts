declare namespace java {
  namespace net {
    class HttpCookie implements java.lang.Cloneable {
      static readonly assignors: java.util.Map<java.lang.String, java.net.HttpCookie$CookieAttributeAssignor>
      static readonly GMT: java.util.TimeZone
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public static parse(arg0: java.lang.String | string): java.util.List<java.net.HttpCookie>
      public hasExpired(): boolean
      public setComment(arg0: java.lang.String | string): void
      public getComment(): java.lang.String
      public setCommentURL(arg0: java.lang.String | string): void
      public getCommentURL(): java.lang.String
      public setDiscard(arg0: boolean | java.lang.Boolean): void
      public getDiscard(): boolean
      public setPortlist(arg0: java.lang.String | string): void
      public getPortlist(): java.lang.String
      public setDomain(arg0: java.lang.String | string): void
      public getDomain(): java.lang.String
      public setMaxAge(arg0: number | java.lang.Long): void
      public getMaxAge(): number
      public setPath(arg0: java.lang.String | string): void
      public getPath(): java.lang.String
      public setSecure(arg0: boolean | java.lang.Boolean): void
      public getSecure(): boolean
      public getName(): java.lang.String
      public setValue(arg0: java.lang.String | string): void
      public getValue(): java.lang.String
      public getVersion(): number
      public setVersion(arg0: number | java.lang.Integer): void
      public isHttpOnly(): boolean
      public setHttpOnly(arg0: boolean | java.lang.Boolean): void
      public static domainMatches(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public clone(): java.lang.Object
    }
  }
}
