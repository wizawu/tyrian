declare namespace sun {
    namespace security {
        namespace pkcs {
class PKCS9Attributes {
    public constructor(arg0: sun.security.util.ObjectIdentifier[], arg1: sun.security.util.DerInputStream)
    public constructor(arg0: sun.security.util.DerInputStream)
    public constructor(arg0: sun.security.util.DerInputStream, arg1: boolean)
    public constructor(arg0: sun.security.pkcs.PKCS9Attribute[])
    public encode(arg0: byte, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getDerEncoding(): byte[]
    public getAttribute(arg0: sun.security.util.ObjectIdentifier): sun.security.pkcs.PKCS9Attribute
    public getAttribute(arg0: java.lang.String | string): sun.security.pkcs.PKCS9Attribute
    public getAttributes(): sun.security.pkcs.PKCS9Attribute[]
    public getAttributeValue(arg0: sun.security.util.ObjectIdentifier): java.lang.Object
    public getAttributeValue(arg0: java.lang.String | string): java.lang.Object
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}