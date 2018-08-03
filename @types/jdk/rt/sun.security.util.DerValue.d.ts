declare namespace sun {
    namespace security {
        namespace util {
            class DerValue {
                public static readonly TAG_UNIVERSAL: byte
                public static readonly TAG_APPLICATION: byte
                public static readonly TAG_CONTEXT: byte
                public static readonly TAG_PRIVATE: byte
                public tag: byte
                protected buffer: sun.security.util.DerInputBuffer
                public readonly data: sun.security.util.DerInputStream
                public static readonly tag_Boolean: byte
                public static readonly tag_Integer: byte
                public static readonly tag_BitString: byte
                public static readonly tag_OctetString: byte
                public static readonly tag_Null: byte
                public static readonly tag_ObjectId: byte
                public static readonly tag_Enumerated: byte
                public static readonly tag_UTF8String: byte
                public static readonly tag_PrintableString: byte
                public static readonly tag_T61String: byte
                public static readonly tag_IA5String: byte
                public static readonly tag_UtcTime: byte
                public static readonly tag_GeneralizedTime: byte
                public static readonly tag_GeneralString: byte
                public static readonly tag_UniversalString: byte
                public static readonly tag_BMPString: byte
                public static readonly tag_Sequence: byte
                public static readonly tag_SequenceOf: byte
                public static readonly tag_Set: byte
                public static readonly tag_SetOf: byte
                public isUniversal(): boolean
                public isApplication(): boolean
                public isContextSpecific(): boolean
                public isContextSpecific(arg0: byte): boolean
                public isConstructed(): boolean
                public isConstructed(arg0: byte): boolean
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: byte, arg1: java.lang.String | string)
                public constructor(arg0: byte, arg1: byte[])
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int, arg2: int)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public encode(arg0: sun.security.util.DerOutputStream): void
                public getData(): sun.security.util.DerInputStream
                public getTag(): byte
                public getBoolean(): boolean
                public getOID(): sun.security.util.ObjectIdentifier
                public getOctetString(): byte[]
                public getInteger(): int
                public getBigInteger(): java.math.BigInteger
                public getPositiveBigInteger(): java.math.BigInteger
                public getEnumerated(): int
                public getBitString(): byte[]
                public getUnalignedBitString(): sun.security.util.BitArray
                public getAsString(): string
                public getBitString(arg0: boolean): byte[]
                public getUnalignedBitString(arg0: boolean): sun.security.util.BitArray
                public getDataBytes(): byte[]
                public getPrintableString(): string
                public getT61String(): string
                public getIA5String(): string
                public getBMPString(): string
                public getUTF8String(): string
                public getGeneralString(): string
                public getUTCTime(): java.util.Date
                public getGeneralizedTime(): java.util.Date
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: sun.security.util.DerValue): boolean
                public toString(): string
                public toByteArray(): byte[]
                public toDerInputStream(): sun.security.util.DerInputStream
                public length(): int
                public static isPrintableStringChar(arg0: char): boolean
                public static createTag(arg0: byte, arg1: boolean, arg2: byte): byte
                public resetTag(arg0: byte): void
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}