declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace util {
class JaxmURI implements java.io.Serializable {
    public constructor()
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.util.JaxmURI)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.util.JaxmURI, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string)
    public getScheme(): string
    public getSchemeSpecificPart(): string
    public getUserinfo(): string
    public getHost(): string
    public getPort(): int
    public getPath(arg0: boolean, arg1: boolean): string
    public getPath(): string
    public getQueryString(): string
    public getFragment(): string
    public setScheme(arg0: java.lang.String | string): void
    public setUserinfo(arg0: java.lang.String | string): void
    public setHost(arg0: java.lang.String | string): void
    public setPort(arg0: int): void
    public setPath(arg0: java.lang.String | string): void
    public appendPath(arg0: java.lang.String | string): void
    public setQueryString(arg0: java.lang.String | string): void
    public setFragment(arg0: java.lang.String | string): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public isGenericURI(): boolean
    public static isConformantSchemeName(arg0: java.lang.String | string): boolean
    public static isWellFormedAddress(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}