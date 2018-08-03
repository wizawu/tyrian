declare namespace sun {
    namespace security {
        namespace pkcs {
            class PKCS9Attribute implements sun.security.util.DerEncoder {
                public static readonly EMAIL_ADDRESS_OID: sun.security.util.ObjectIdentifier
                public static readonly UNSTRUCTURED_NAME_OID: sun.security.util.ObjectIdentifier
                public static readonly CONTENT_TYPE_OID: sun.security.util.ObjectIdentifier
                public static readonly MESSAGE_DIGEST_OID: sun.security.util.ObjectIdentifier
                public static readonly SIGNING_TIME_OID: sun.security.util.ObjectIdentifier
                public static readonly COUNTERSIGNATURE_OID: sun.security.util.ObjectIdentifier
                public static readonly CHALLENGE_PASSWORD_OID: sun.security.util.ObjectIdentifier
                public static readonly UNSTRUCTURED_ADDRESS_OID: sun.security.util.ObjectIdentifier
                public static readonly EXTENDED_CERTIFICATE_ATTRIBUTES_OID: sun.security.util.ObjectIdentifier
                public static readonly ISSUER_SERIALNUMBER_OID: sun.security.util.ObjectIdentifier
                public static readonly EXTENSION_REQUEST_OID: sun.security.util.ObjectIdentifier
                public static readonly SMIME_CAPABILITY_OID: sun.security.util.ObjectIdentifier
                public static readonly SIGNING_CERTIFICATE_OID: sun.security.util.ObjectIdentifier
                public static readonly SIGNATURE_TIMESTAMP_TOKEN_OID: sun.security.util.ObjectIdentifier
                public static readonly EMAIL_ADDRESS_STR: string
                public static readonly UNSTRUCTURED_NAME_STR: string
                public static readonly CONTENT_TYPE_STR: string
                public static readonly MESSAGE_DIGEST_STR: string
                public static readonly SIGNING_TIME_STR: string
                public static readonly COUNTERSIGNATURE_STR: string
                public static readonly CHALLENGE_PASSWORD_STR: string
                public static readonly UNSTRUCTURED_ADDRESS_STR: string
                public static readonly EXTENDED_CERTIFICATE_ATTRIBUTES_STR: string
                public static readonly ISSUER_SERIALNUMBER_STR: string
                public static readonly EXTENSION_REQUEST_STR: string
                public static readonly SMIME_CAPABILITY_STR: string
                public static readonly SIGNING_CERTIFICATE_STR: string
                public static readonly SIGNATURE_TIMESTAMP_TOKEN_STR: string
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.lang.Object)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
                public constructor(arg0: sun.security.util.DerValue)
                public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public isKnown(): boolean
                public getValue(): java.lang.Object
                public isSingleValued(): boolean
                public getOID(): sun.security.util.ObjectIdentifier
                public getName(): string
                public static getOID(arg0: java.lang.String | string): sun.security.util.ObjectIdentifier
                public static getName(arg0: sun.security.util.ObjectIdentifier): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}