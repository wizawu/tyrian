declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                namespace intpoly {
                    abstract class IntegerPolynomial implements sun.security.util.math.IntegerFieldModuloP {
                        protected static readonly TWO: java.math.BigInteger
                        protected readonly numLimbs: int
                        protected readonly bitsPerLimb: int
                        protected abstract reduce(arg0: long[]): void
                        protected multByInt(arg0: long[], arg1: long): void
                        protected abstract mult(arg0: long[], arg1: long[], arg2: long[]): void
                        protected abstract square(arg0: long[], arg1: long[]): void
                        protected getNumLimbs(): int
                        public getMaxAdds(): int
                        public getSize(): java.math.BigInteger
                        public get0(): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public get1(): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public getElement(arg0: java.math.BigInteger): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public getSmallValue(arg0: int): sun.security.util.math.SmallValue
                        protected encode(arg0: java.nio.ByteBuffer, arg1: int, arg2: byte, arg3: long[]): void
                        protected encodeSmall(arg0: java.nio.ByteBuffer, arg1: int, arg2: byte, arg3: long[]): void
                        protected encode(arg0: byte[], arg1: int, arg2: int, arg3: byte, arg4: long[]): void
                        protected postEncodeCarry(arg0: long[]): void
                        public getElement(arg0: byte[], arg1: int, arg2: int, arg3: byte): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        protected evaluate(arg0: long[]): java.math.BigInteger
                        protected carryValue(arg0: long): long
                        protected carry(arg0: long[], arg1: int, arg2: int): void
                        protected carry(arg0: long[]): void
                        protected carryOut(arg0: long[], arg1: int): long
                        protected setLimbsValuePositive(arg0: java.math.BigInteger, arg1: long[]): void
                        protected abstract finalCarryReduceLast(arg0: long[]): void
                        protected finalReduce(arg0: long[]): void
                        protected decode(arg0: long[], arg1: byte[], arg2: int, arg3: int): void
                        protected addLimbs(arg0: long[], arg1: long[], arg2: long[]): void
                        protected static conditionalAssign(arg0: int, arg1: long[], arg2: long[]): void
                        protected static conditionalSwap(arg0: int, arg1: long[], arg2: long[]): void
                        protected limbsToByteArray(arg0: long[], arg1: byte[]): void
                        protected addLimbsModPowerTwo(arg0: long[], arg1: long[], arg2: byte[]): void
                        public getElement(arg0: byte[], arg1: int, arg2: int, arg3: byte): sun.security.util.math.ImmutableIntegerModuloP
                        public getElement(arg0: java.math.BigInteger): sun.security.util.math.ImmutableIntegerModuloP
                        public get1(): sun.security.util.math.ImmutableIntegerModuloP
                        public get0(): sun.security.util.math.ImmutableIntegerModuloP
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}