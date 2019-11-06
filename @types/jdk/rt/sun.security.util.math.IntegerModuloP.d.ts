declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                interface IntegerModuloP {
                    getField(): sun.security.util.math.IntegerFieldModuloP
                    asBigInteger(): java.math.BigInteger
                    fixed(): sun.security.util.math.ImmutableIntegerModuloP
                    mutable(): sun.security.util.math.MutableIntegerModuloP
                    add(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.ImmutableIntegerModuloP
                    additiveInverse(): sun.security.util.math.ImmutableIntegerModuloP
                    multiply(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.ImmutableIntegerModuloP
                    addModPowerTwo(arg0: sun.security.util.math.IntegerModuloP, arg1: int): byte[]
                    addModPowerTwo(arg0: sun.security.util.math.IntegerModuloP, arg1: byte[]): void
                    asByteArray(arg0: int): byte[]
                    asByteArray(arg0: byte[]): void
                    multiplicativeInverse(): sun.security.util.math.ImmutableIntegerModuloP
                    subtract(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.ImmutableIntegerModuloP
                    square(): sun.security.util.math.ImmutableIntegerModuloP
                    pow(arg0: java.math.BigInteger): sun.security.util.math.ImmutableIntegerModuloP
                }
            }
        }
    }
}