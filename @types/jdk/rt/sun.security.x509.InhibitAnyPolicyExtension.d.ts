declare namespace sun {
    namespace security {
        namespace x509 {
class InhibitAnyPolicyExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
    public static IDENT: string
    public static AnyPolicy_Id: sun.security.util.ObjectIdentifier
    public static NAME: string
    public static SKIP_CERTS: string
    public constructor(arg0: int)
    public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
    public toString(): string
    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public get(arg0: java.lang.String | string): java.lang.Integer
    public delete(arg0: java.lang.String | string): void
    public getElements(): java.util.Enumeration<java.lang.String>
    public getName(): string
    public get(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}