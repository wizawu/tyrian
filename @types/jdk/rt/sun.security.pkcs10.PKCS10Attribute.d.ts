declare namespace sun {
    namespace security {
        namespace pkcs10 {
            class PKCS10Attribute implements sun.security.util.DerEncoder {
                protected attributeId: sun.security.util.ObjectIdentifier
                protected attributeValue: java.lang.Object
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.lang.Object)
                public constructor(arg0: sun.security.pkcs.PKCS9Attribute)
                public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getAttributeId(): sun.security.util.ObjectIdentifier
                public getAttributeValue(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}