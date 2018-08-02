declare namespace javax {
    namespace management {
        namespace remote {
            class JMXServiceURL implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string)
                public getProtocol(): string
                public getHost(): string
                public getPort(): int
                public getURLPath(): string
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}