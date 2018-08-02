declare namespace sun {
    namespace security {
        namespace pkcs {
            class PKCS9Attribute implements sun.security.util.DerEncoder {
                public static EMAIL_ADDRESS_OID: sun.security.util.ObjectIdentifier
                public static UNSTRUCTURED_NAME_OID: sun.security.util.ObjectIdentifier
                public static CONTENT_TYPE_OID: sun.security.util.ObjectIdentifier
                public static MESSAGE_DIGEST_OID: sun.security.util.ObjectIdentifier
                public static SIGNING_TIME_OID: sun.security.util.ObjectIdentifier
                public static COUNTERSIGNATURE_OID: sun.security.util.ObjectIdentifier
                public static CHALLENGE_PASSWORD_OID: sun.security.util.ObjectIdentifier
                public static UNSTRUCTURED_ADDRESS_OID: sun.security.util.ObjectIdentifier
                public static EXTENDED_CERTIFICATE_ATTRIBUTES_OID: sun.security.util.ObjectIdentifier
                public static ISSUER_SERIALNUMBER_OID: sun.security.util.ObjectIdentifier
                public static EXTENSION_REQUEST_OID: sun.security.util.ObjectIdentifier
                public static SMIME_CAPABILITY_OID: sun.security.util.ObjectIdentifier
                public static SIGNING_CERTIFICATE_OID: sun.security.util.ObjectIdentifier
                public static SIGNATURE_TIMESTAMP_TOKEN_OID: sun.security.util.ObjectIdentifier
                public static EMAIL_ADDRESS_STR: string
                public static UNSTRUCTURED_NAME_STR: string
                public static CONTENT_TYPE_STR: string
                public static MESSAGE_DIGEST_STR: string
                public static SIGNING_TIME_STR: string
                public static COUNTERSIGNATURE_STR: string
                public static CHALLENGE_PASSWORD_STR: string
                public static UNSTRUCTURED_ADDRESS_STR: string
                public static EXTENDED_CERTIFICATE_ATTRIBUTES_STR: string
                public static ISSUER_SERIALNUMBER_STR: string
                public static EXTENSION_REQUEST_STR: string
                public static SMIME_CAPABILITY_STR: string
                public static SIGNING_CERTIFICATE_STR: string
                public static SIGNATURE_TIMESTAMP_TOKEN_STR: string
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
            class PKCS9Attribute$$Lambda implements sun.security.util.DerEncoder {
                public static EMAIL_ADDRESS_OID: sun.security.util.ObjectIdentifier
            }
        }
    }
}