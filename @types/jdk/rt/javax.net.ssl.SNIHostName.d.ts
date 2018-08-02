declare namespace javax {
    namespace net {
        namespace ssl {
            class SNIHostName extends javax.net.ssl.SNIServerName {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: byte[])
                public getAsciiName(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static createSNIMatcher(arg0: java.lang.String | string): javax.net.ssl.SNIMatcher
                public static class: java.lang.Class<any>
            }
        }
    }
}