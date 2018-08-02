declare namespace sun {
    namespace misc {
        class FDBigInteger {
            public static ZERO: sun.misc.FDBigInteger
            public constructor(arg0: long, arg1: char[], arg2: int, arg3: int)
            public static valueOfPow52(arg0: int, arg1: int): sun.misc.FDBigInteger
            public static valueOfMulPow52(arg0: long, arg1: int, arg2: int): sun.misc.FDBigInteger
            public getNormalizationBias(): int
            public leftShift(arg0: int): sun.misc.FDBigInteger
            public quoRemIteration(arg0: sun.misc.FDBigInteger): int
            public multBy10(): sun.misc.FDBigInteger
            public multByPow52(arg0: int, arg1: int): sun.misc.FDBigInteger
            public leftInplaceSub(arg0: sun.misc.FDBigInteger): sun.misc.FDBigInteger
            public rightInplaceSub(arg0: sun.misc.FDBigInteger): sun.misc.FDBigInteger
            public cmp(arg0: sun.misc.FDBigInteger): int
            public cmpPow52(arg0: int, arg1: int): int
            public addAndCmp(arg0: sun.misc.FDBigInteger, arg1: sun.misc.FDBigInteger): int
            public makeImmutable(): void
            public toHexString(): string
            public toBigInteger(): java.math.BigInteger
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}