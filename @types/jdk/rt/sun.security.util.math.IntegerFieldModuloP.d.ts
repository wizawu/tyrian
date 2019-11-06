declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                interface IntegerFieldModuloP {
                    getSize(): java.math.BigInteger
                    get0(): sun.security.util.math.ImmutableIntegerModuloP
                    get1(): sun.security.util.math.ImmutableIntegerModuloP
                    getElement(arg0: java.math.BigInteger): sun.security.util.math.ImmutableIntegerModuloP
                    getSmallValue(arg0: int): sun.security.util.math.SmallValue
                    getElement(arg0: byte[]): sun.security.util.math.ImmutableIntegerModuloP
                    getElement(arg0: byte[], arg1: int, arg2: int, arg3: byte): sun.security.util.math.ImmutableIntegerModuloP
                }
            }
        }
    }
}