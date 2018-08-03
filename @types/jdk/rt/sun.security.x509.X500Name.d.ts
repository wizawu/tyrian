declare namespace sun {
    namespace security {
        namespace x509 {
            class X500Name implements sun.security.x509.GeneralNameInterface , java.security.Principal {
                public static commonName_oid: sun.security.util.ObjectIdentifier
                public static countryName_oid: sun.security.util.ObjectIdentifier
                public static localityName_oid: sun.security.util.ObjectIdentifier
                public static orgName_oid: sun.security.util.ObjectIdentifier
                public static orgUnitName_oid: sun.security.util.ObjectIdentifier
                public static stateName_oid: sun.security.util.ObjectIdentifier
                public static streetAddress_oid: sun.security.util.ObjectIdentifier
                public static title_oid: sun.security.util.ObjectIdentifier
                public static DNQUALIFIER_OID: sun.security.util.ObjectIdentifier
                public static SURNAME_OID: sun.security.util.ObjectIdentifier
                public static GIVENNAME_OID: sun.security.util.ObjectIdentifier
                public static INITIALS_OID: sun.security.util.ObjectIdentifier
                public static GENERATIONQUALIFIER_OID: sun.security.util.ObjectIdentifier
                public static ipAddress_oid: sun.security.util.ObjectIdentifier
                public static DOMAIN_COMPONENT_OID: sun.security.util.ObjectIdentifier
                public static userid_oid: sun.security.util.ObjectIdentifier
                public static SERIALNUMBER_OID: sun.security.util.ObjectIdentifier
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.String>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string)
                public constructor(arg0: sun.security.x509.RDN[])
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: byte[])
                public rdns(): java.util.List<sun.security.x509.RDN>
                public size(): int
                public allAvas(): java.util.List<sun.security.x509.AVA>
                public avaSize(): int
                public isEmpty(): boolean
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public getType(): int
                public getCountry(): string
                public getOrganization(): string
                public getOrganizationalUnit(): string
                public getCommonName(): string
                public getLocality(): string
                public getState(): string
                public getDomain(): string
                public getDNQualifier(): string
                public getSurname(): string
                public getGivenName(): string
                public getInitials(): string
                public getGeneration(): string
                public getIP(): string
                public toString(): string
                public getRFC1779Name(): string
                public getRFC1779Name(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public getRFC2253Name(): string
                public getRFC2253Name(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public getRFC2253CanonicalName(): string
                public getName(): string
                public findMostSpecificAttribute(arg0: sun.security.util.ObjectIdentifier): sun.security.util.DerValue
                public emit(arg0: sun.security.util.DerOutputStream): void
                public encode(arg0: sun.security.util.DerOutputStream): void
                public getEncodedInternal(): byte[]
                public getEncoded(): byte[]
                public constrains(arg0: sun.security.x509.GeneralNameInterface): int
                public subtreeDepth(): int
                public commonAncestor(arg0: sun.security.x509.X500Name): sun.security.x509.X500Name
                public asX500Principal(): javax.security.auth.x500.X500Principal
                public static asX500Name(arg0: javax.security.auth.x500.X500Principal): sun.security.x509.X500Name
                public static class: java.lang.Class<any>
            }
        }
    }
}