declare namespace java {
    namespace net {
        class URI implements java.lang.Comparable<java.net.URI> , java.io.Serializable {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public static create(arg0: java.lang.String | string): java.net.URI
            public parseServerAuthority(): java.net.URI
            public normalize(): java.net.URI
            public resolve(arg0: java.net.URI): java.net.URI
            public resolve(arg0: java.lang.String | string): java.net.URI
            public relativize(arg0: java.net.URI): java.net.URI
            public toURL(): java.net.URL
            public getScheme(): string
            public isAbsolute(): boolean
            public isOpaque(): boolean
            public getRawSchemeSpecificPart(): string
            public getSchemeSpecificPart(): string
            public getRawAuthority(): string
            public getAuthority(): string
            public getRawUserInfo(): string
            public getUserInfo(): string
            public getHost(): string
            public getPort(): int
            public getRawPath(): string
            public getPath(): string
            public getRawQuery(): string
            public getQuery(): string
            public getRawFragment(): string
            public getFragment(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public compareTo(arg0: java.net.URI): int
            public toString(): string
            public toASCIIString(): string
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}