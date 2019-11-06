declare namespace sun {
    namespace security {
        namespace ec {
            namespace point {
                abstract class ProjectivePoint<T extends sun.security.util.math.IntegerModuloP> implements sun.security.ec.point.Point {
                    protected readonly x: T
                    protected readonly y: T
                    protected readonly z: T
                    protected constructor(arg0: T, arg1: T, arg2: T)
                    public getField(): sun.security.util.math.IntegerFieldModuloP
                    public fixed(): sun.security.ec.point.ProjectivePoint$Immutable
                    public mutable(): sun.security.ec.point.ProjectivePoint$Mutable
                    public getX(): T
                    public getY(): T
                    public getZ(): T
                    public asAffine(): sun.security.ec.point.AffinePoint
                    public mutable(): sun.security.ec.point.MutablePoint
                    public fixed(): sun.security.ec.point.ImmutablePoint
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}