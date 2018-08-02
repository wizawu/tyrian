declare namespace java {
    namespace net {
class HttpCookie implements java.lang.Cloneable {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public static parse(arg0: java.lang.String | string): java.util.List<java.net.HttpCookie>
    public hasExpired(): boolean
    public setComment(arg0: java.lang.String | string): void
    public getComment(): string
    public setCommentURL(arg0: java.lang.String | string): void
    public getCommentURL(): string
    public setDiscard(arg0: boolean): void
    public getDiscard(): boolean
    public setPortlist(arg0: java.lang.String | string): void
    public getPortlist(): string
    public setDomain(arg0: java.lang.String | string): void
    public getDomain(): string
    public setMaxAge(arg0: long): void
    public getMaxAge(): long
    public setPath(arg0: java.lang.String | string): void
    public getPath(): string
    public setSecure(arg0: boolean): void
    public getSecure(): boolean
    public getName(): string
    public setValue(arg0: java.lang.String | string): void
    public getValue(): string
    public getVersion(): int
    public setVersion(arg0: int): void
    public isHttpOnly(): boolean
    public setHttpOnly(arg0: boolean): void
    public static domainMatches(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}