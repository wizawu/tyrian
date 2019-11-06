declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                namespace intpoly {
                    class IntegerPolynomial1305 extends sun.security.util.math.intpoly.IntegerPolynomial {
                        protected static readonly SUBTRAHEND: int
                        protected static readonly NUM_LIMBS: int
                        public constructor()
                        protected mult(arg0: long[], arg1: long[], arg2: long[]): void
                        protected square(arg0: long[], arg1: long[]): void
                        protected encode(arg0: java.nio.ByteBuffer, arg1: int, arg2: byte, arg3: long[]): void
                        protected encode(arg0: long, arg1: long, arg2: byte, arg3: long[]): void
                        protected encode(arg0: byte[], arg1: int, arg2: int, arg3: byte, arg4: long[]): void
                        protected finalCarryReduceLast(arg0: long[]): void
                        protected modReduce(arg0: long[], arg1: int, arg2: int): void
                        protected modReduce(arg0: long[]): void
                        protected carryValue(arg0: long): long
                        protected postEncodeCarry(arg0: long[]): void
                        protected reduce(arg0: long[]): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}