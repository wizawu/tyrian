declare namespace sun {
    namespace security {
        namespace x509 {
class NetscapeCertTypeExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
    public static IDENT: string
    public static NAME: string
    public static SSL_CLIENT: string
    public static SSL_SERVER: string
    public static S_MIME: string
    public static OBJECT_SIGNING: string
    public static SSL_CA: string
    public static S_MIME_CA: string
    public static OBJECT_SIGNING_CA: string
    public static NetscapeCertType_Id: sun.security.util.ObjectIdentifier
    public constructor(arg0: byte[])
    public constructor(arg0: boolean[])
    public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
    public constructor()
    public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public get(arg0: java.lang.String | string): boolean
    public delete(arg0: java.lang.String | string): void
    public toString(): string
    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getElements(): java.util.Enumeration<java.lang.String>
    public getName(): string
    public getKeyUsageMappedBits(): boolean[]
    public get(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}