declare namespace sun {
    namespace security {
        namespace util {
            namespace math {
                interface MutableIntegerModuloP extends sun.security.util.math.IntegerModuloP {
                    conditionalSet(arg0: sun.security.util.math.IntegerModuloP, arg1: int): void
                    conditionalSwapWith(arg0: sun.security.util.math.MutableIntegerModuloP, arg1: int): void
                    setValue(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.MutableIntegerModuloP
                    setValue(arg0: byte[], arg1: int, arg2: int, arg3: byte): sun.security.util.math.MutableIntegerModuloP
                    setValue(arg0: java.nio.ByteBuffer, arg1: int, arg2: byte): sun.security.util.math.MutableIntegerModuloP
                    setSquare(): sun.security.util.math.MutableIntegerModuloP
                    setSum(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.MutableIntegerModuloP
                    setDifference(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.MutableIntegerModuloP
                    setProduct(arg0: sun.security.util.math.IntegerModuloP): sun.security.util.math.MutableIntegerModuloP
                    setProduct(arg0: sun.security.util.math.SmallValue): sun.security.util.math.MutableIntegerModuloP
                    setAdditiveInverse(): sun.security.util.math.MutableIntegerModuloP
                    setReduced(): sun.security.util.math.MutableIntegerModuloP
                }
            }
        }
    }
}