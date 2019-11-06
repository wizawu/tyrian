declare namespace sun {
    namespace security {
        namespace ec {
            namespace point {
                interface MutablePoint extends sun.security.ec.point.Point {
                    setValue(arg0: sun.security.ec.point.AffinePoint): sun.security.ec.point.MutablePoint
                    setValue(arg0: sun.security.ec.point.Point): sun.security.ec.point.MutablePoint
                    conditionalSet(arg0: sun.security.ec.point.Point, arg1: int): sun.security.ec.point.MutablePoint
                }
            }
        }
    }
}