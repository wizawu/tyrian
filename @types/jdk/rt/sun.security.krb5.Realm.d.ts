declare namespace sun {
    namespace security {
        namespace krb5 {
            class Realm implements java.lang.Cloneable {
                public static readonly AUTODEDUCEREALM: boolean
                public constructor(arg0: java.lang.String | string)
                public static getDefault(): sun.security.krb5.Realm
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public constructor(arg0: sun.security.util.DerValue)
                public toString(): string
                public static parseRealmAtSeparator(arg0: java.lang.String | string): string
                public static parseRealmComponent(arg0: java.lang.String | string): string
                protected static parseRealm(arg0: java.lang.String | string): string
                protected static isValidRealmString(arg0: java.lang.String | string): boolean
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.Realm
                public static getRealmsList(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}