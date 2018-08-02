declare namespace java {
    namespace lang {
        class Float extends java.lang.Number implements java.lang.Comparable<java.lang.Float> {
            public static POSITIVE_INFINITY: float
            public static NEGATIVE_INFINITY: float
            public static NaN: float
            public static MAX_VALUE: float
            public static MIN_NORMAL: float
            public static MIN_VALUE: float
            public static MAX_EXPONENT: int
            public static MIN_EXPONENT: int
            public static SIZE: int
            public static BYTES: int
            public static TYPE: java.lang.Class<java.lang.Float>
            public static toString(arg0: float): string
            public static toHexString(arg0: float): string
            public static valueOf(arg0: java.lang.String | string): java.lang.Float
            public static valueOf(arg0: float): java.lang.Float
            public static parseFloat(arg0: java.lang.String | string): float
            public static isNaN(arg0: float): boolean
            public static isInfinite(arg0: float): boolean
            public static isFinite(arg0: float): boolean
            public constructor(arg0: float)
            public constructor(arg0: double)
            public constructor(arg0: java.lang.String | string)
            public isNaN(): boolean
            public isInfinite(): boolean
            public toString(): string
            public byteValue(): byte
            public shortValue(): short
            public intValue(): int
            public longValue(): long
            public floatValue(): float
            public doubleValue(): double
            public hashCode(): int
            public static hashCode(arg0: float): int
            public equals(arg0: java.lang.Object): boolean
            public static floatToIntBits(arg0: float): int
            public static floatToRawIntBits(arg0: float): int
            public static intBitsToFloat(arg0: int): float
            public compareTo(arg0: java.lang.Float): int
            public static compare(arg0: float, arg1: float): int
            public static sum(arg0: float, arg1: float): float
            public static max(arg0: float, arg1: float): float
            public static min(arg0: float, arg1: float): float
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}