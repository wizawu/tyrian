declare namespace sun {
    namespace security {
        namespace pkcs {
class ContentInfo {
    public static PKCS7_OID: sun.security.util.ObjectIdentifier
    public static DATA_OID: sun.security.util.ObjectIdentifier
    public static SIGNED_DATA_OID: sun.security.util.ObjectIdentifier
    public static ENVELOPED_DATA_OID: sun.security.util.ObjectIdentifier
    public static SIGNED_AND_ENVELOPED_DATA_OID: sun.security.util.ObjectIdentifier
    public static DIGESTED_DATA_OID: sun.security.util.ObjectIdentifier
    public static ENCRYPTED_DATA_OID: sun.security.util.ObjectIdentifier
    public static OLD_SIGNED_DATA_OID: sun.security.util.ObjectIdentifier
    public static OLD_DATA_OID: sun.security.util.ObjectIdentifier
    public static NETSCAPE_CERT_SEQUENCE_OID: sun.security.util.ObjectIdentifier
    public static TIMESTAMP_TOKEN_INFO_OID: sun.security.util.ObjectIdentifier
    public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: sun.security.util.DerValue)
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerInputStream)
    public constructor(arg0: sun.security.util.DerInputStream, arg1: boolean)
    public getContent(): sun.security.util.DerValue
    public getContentType(): sun.security.util.ObjectIdentifier
    public getData(): byte[]
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public getContentBytes(): byte[]
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}