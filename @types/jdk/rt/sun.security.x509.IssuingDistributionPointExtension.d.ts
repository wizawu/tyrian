declare namespace sun {
    namespace security {
        namespace x509 {
class IssuingDistributionPointExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
    public static IDENT: string
    public static NAME: string
    public static POINT: string
    public static REASONS: string
    public static ONLY_USER_CERTS: string
    public static ONLY_CA_CERTS: string
    public static ONLY_ATTRIBUTE_CERTS: string
    public static INDIRECT_CRL: string
    public constructor(arg0: sun.security.x509.DistributionPointName, arg1: sun.security.x509.ReasonFlags, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean)
    public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
    public getName(): string
    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public get(arg0: java.lang.String | string): java.lang.Object
    public delete(arg0: java.lang.String | string): void
    public getElements(): java.util.Enumeration<java.lang.String>
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}