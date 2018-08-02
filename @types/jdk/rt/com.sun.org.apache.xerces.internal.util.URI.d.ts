declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class URI implements java.io.Serializable {
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.URI)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.URI, arg1: java.lang.String | string)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.URI, arg1: java.lang.String | string, arg2: boolean)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string)
    public absolutize(arg0: com.sun.org.apache.xerces.internal.util.URI): void
    public getScheme(): string
    public getSchemeSpecificPart(): string
    public getUserinfo(): string
    public getHost(): string
    public getPort(): int
    public getRegBasedAuthority(): string
    public getAuthority(): string
    public getPath(arg0: boolean, arg1: boolean): string
    public getPath(): string
    public getQueryString(): string
    public getFragment(): string
    public setScheme(arg0: java.lang.String | string): void
    public setUserinfo(arg0: java.lang.String | string): void
    public setHost(arg0: java.lang.String | string): void
    public setPort(arg0: int): void
    public setRegBasedAuthority(arg0: java.lang.String | string): void
    public setPath(arg0: java.lang.String | string): void
    public appendPath(arg0: java.lang.String | string): void
    public setQueryString(arg0: java.lang.String | string): void
    public setFragment(arg0: java.lang.String | string): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public isGenericURI(): boolean
    public isAbsoluteURI(): boolean
    public static isConformantSchemeName(arg0: java.lang.String | string): boolean
    public static isWellFormedAddress(arg0: java.lang.String | string): boolean
    public static isWellFormedIPv4Address(arg0: java.lang.String | string): boolean
    public static isWellFormedIPv6Reference(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}