declare namespace sun {
    namespace security {
        namespace ec {
            namespace point {
                class ProjectivePoint$Mutable extends sun.security.ec.point.ProjectivePoint<sun.security.util.math.MutableIntegerModuloP> implements sun.security.ec.point.MutablePoint {
                    public constructor(arg0: sun.security.util.math.MutableIntegerModuloP, arg1: sun.security.util.math.MutableIntegerModuloP, arg2: sun.security.util.math.MutableIntegerModuloP)
                    public constructor(arg0: sun.security.util.math.IntegerFieldModuloP)
                    public conditionalSet(arg0: sun.security.ec.point.Point, arg1: int): sun.security.ec.point.ProjectivePoint$Mutable
                    public setValue(arg0: sun.security.ec.point.AffinePoint): sun.security.ec.point.ProjectivePoint$Mutable
                    public setValue(arg0: sun.security.ec.point.Point): sun.security.ec.point.ProjectivePoint$Mutable
                    public mutable(): sun.security.ec.point.MutablePoint
                    public fixed(): sun.security.ec.point.ImmutablePoint
                    public conditionalSet(arg0: sun.security.ec.point.Point, arg1: int): sun.security.ec.point.MutablePoint
                    public setValue(arg0: sun.security.ec.point.Point): sun.security.ec.point.MutablePoint
                    public setValue(arg0: sun.security.ec.point.AffinePoint): sun.security.ec.point.MutablePoint
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}