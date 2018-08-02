declare namespace sun {
    namespace security {
        namespace util {
            class DerInputStream {
                public tag: byte
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int, arg2: int, arg3: boolean)
                public constructor(arg0: byte[], arg1: int, arg2: int)
                public subStream(arg0: int, arg1: boolean): sun.security.util.DerInputStream
                public toByteArray(): byte[]
                public getInteger(): int
                public getBigInteger(): java.math.BigInteger
                public getPositiveBigInteger(): java.math.BigInteger
                public getEnumerated(): int
                public getBitString(): byte[]
                public getUnalignedBitString(): sun.security.util.BitArray
                public getOctetString(): byte[]
                public getBytes(arg0: byte[]): void
                public getNull(): void
                public getOID(): sun.security.util.ObjectIdentifier
                public getSequence(arg0: int): sun.security.util.DerValue[]
                public getSet(arg0: int): sun.security.util.DerValue[]
                public getSet(arg0: int, arg1: boolean): sun.security.util.DerValue[]
                protected readVector(arg0: int): sun.security.util.DerValue[]
                public getDerValue(): sun.security.util.DerValue
                public getUTF8String(): string
                public getPrintableString(): string
                public getT61String(): string
                public getIA5String(): string
                public getBMPString(): string
                public getGeneralString(): string
                public getUTCTime(): java.util.Date
                public getGeneralizedTime(): java.util.Date
                public peekByte(): int
                public mark(arg0: int): void
                public reset(): void
                public available(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}