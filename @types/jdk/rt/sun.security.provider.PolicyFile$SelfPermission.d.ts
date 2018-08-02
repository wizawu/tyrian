declare namespace sun {
    namespace security {
        namespace provider {
            class PolicyFile$SelfPermission extends java.security.Permission {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.security.cert.Certificate[])
                public implies(arg0: java.security.Permission): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getActions(): string
                public getSelfType(): string
                public getSelfName(): string
                public getSelfActions(): string
                public getCerts(): java.security.cert.Certificate[]
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}