declare namespace sun {
    namespace security {
        namespace ec {
            namespace point {
                interface Point {
                    getField(): sun.security.util.math.IntegerFieldModuloP
                    asAffine(): sun.security.ec.point.AffinePoint
                    fixed(): sun.security.ec.point.ImmutablePoint
                    mutable(): sun.security.ec.point.MutablePoint
                }
            }
        }
    }
}