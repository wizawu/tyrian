declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                namespace intpoly {
                    abstract class IntegerPolynomial$Element implements sun.security.util.math.IntegerModuloP {
                        protected limbs: long[]
                        protected numAdds: int
                        public constructor(arg0: sun.security.util.math.intpoly.IntegerPolynomial, arg1: java.math.BigInteger)
                        public constructor(arg0: sun.security.util.math.intpoly.IntegerPolynomial, arg1: boolean)
                        public getField(): sun.security.util.math.IntegerFieldModuloP
                        public asBigInteger(): java.math.BigInteger
                        public mutable(): sun.security.util.math.intpoly.IntegerPolynomial$MutableElement
                        protected isSummand(): boolean
                        public add(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public additiveInverse(): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        protected cloneLow(arg0: long[]): long[]
                        protected copyLow(arg0: long[], arg1: long[]): void
                        public multiply(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public square(): sun.security.util.math.intpoly.IntegerPolynomial$ImmutableElement
                        public addModPowerTwo(arg0: sun.security.util.math.IntegerModuloP, arg1: byte[]): void
                        public asByteArray(arg0: byte[]): void
                        public square(): sun.security.util.math.ImmutableIntegerModuloP
                        public multiply(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.ImmutableIntegerModuloP
                        public additiveInverse(): sun.security.util.math.ImmutableIntegerModuloP
                        public add(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.ImmutableIntegerModuloP
                        public mutable(): sun.security.util.math.MutableIntegerModuloP
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}