declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class Functions {
                    public constructor()
                    public static toFullHexString(arg0: long): string
                    public static toFullHexString(arg0: int): string
                    public static toHexString(arg0: long): string
                    public static toHexString(arg0: byte[]): string
                    public static toBinaryString(arg0: long): string
                    public static toBinaryString(arg0: byte[]): string
                    public static slotInfoFlagsToString(arg0: long): string
                    public static tokenInfoFlagsToString(arg0: long): string
                    public static sessionInfoFlagsToString(arg0: long): string
                    public static sessionStateToString(arg0: long): string
                    public static mechanismInfoFlagsToString(arg0: long): string
                    public static getId(arg0: java.util.Map<java.lang.String, java.lang.Integer>, arg1: java.lang.String | string): long
                    public static getMechanismName(arg0: long): string
                    public static getMechanismId(arg0: java.lang.String | string): long
                    public static getKeyName(arg0: long): string
                    public static getKeyId(arg0: java.lang.String | string): long
                    public static getAttributeName(arg0: long): string
                    public static getAttributeId(arg0: java.lang.String | string): long
                    public static getObjectClassName(arg0: long): string
                    public static getObjectClassId(arg0: java.lang.String | string): long
                    public static equals(arg0: sun.security.pkcs11.wrapper.CK_DATE, arg1: sun.security.pkcs11.wrapper.CK_DATE): boolean
                    public static hashCode(arg0: byte[]): int
                    public static hashCode(arg0: char[]): int
                    public static hashCode(arg0: sun.security.pkcs11.wrapper.CK_DATE): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}