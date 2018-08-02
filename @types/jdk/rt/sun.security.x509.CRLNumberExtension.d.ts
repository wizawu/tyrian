declare namespace sun {
    namespace security {
        namespace x509 {
            class CRLNumberExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static NAME: string
                public static NUMBER: string
                public constructor(arg0: int)
                public constructor(arg0: java.math.BigInteger)
                protected constructor(arg0: sun.security.util.ObjectIdentifier, arg1: boolean, arg2: java.math.BigInteger, arg3: java.lang.String | string, arg4: java.lang.String | string)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                protected constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.lang.Boolean | boolean, arg2: java.lang.Object, arg3: java.lang.String | string, arg4: java.lang.String | string)
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.math.BigInteger
                public delete(arg0: java.lang.String | string): void
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                protected encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: sun.security.util.ObjectIdentifier, arg2: boolean): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}