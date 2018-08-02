declare namespace java {
    namespace lang {
        class Double extends java.lang.Number implements java.lang.Comparable<java.lang.Double> {
            public static POSITIVE_INFINITY: double
            public static NEGATIVE_INFINITY: double
            public static NaN: double
            public static MAX_VALUE: double
            public static MIN_NORMAL: double
            public static MIN_VALUE: double
            public static MAX_EXPONENT: int
            public static MIN_EXPONENT: int
            public static SIZE: int
            public static BYTES: int
            public static TYPE: java.lang.Class<java.lang.Double>
            public static toString(arg0: double): string
            public static toHexString(arg0: double): string
            public static valueOf(arg0: java.lang.String | string): java.lang.Double
            public static valueOf(arg0: double): java.lang.Double
            public static parseDouble(arg0: java.lang.String | string): double
            public static isNaN(arg0: double): boolean
            public static isInfinite(arg0: double): boolean
            public static isFinite(arg0: double): boolean
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
            public static hashCode(arg0: double): int
            public equals(arg0: java.lang.Object): boolean
            public static doubleToLongBits(arg0: double): long
            public static doubleToRawLongBits(arg0: double): long
            public static longBitsToDouble(arg0: long): double
            public compareTo(arg0: java.lang.Double): int
            public static compare(arg0: double, arg1: double): int
            public static sum(arg0: double, arg1: double): double
            public static max(arg0: double, arg1: double): double
            public static min(arg0: double, arg1: double): double
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}