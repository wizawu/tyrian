declare namespace sun {
    namespace security {
        namespace ec {
            class ECOperations {
                public static forParameters(arg0: java.security.spec.ECParameterSpec): java.util.Optional<sun.security.ec.ECOperations>
                public constructor(arg0: sun.security.util.math.IntegerModuloP, arg1: sun.security.util.math.IntegerFieldModuloP)
                public getField(): sun.security.util.math.IntegerFieldModuloP
                public getOrderField(): sun.security.util.math.IntegerFieldModuloP
                protected getNeutral(): sun.security.ec.point.ProjectivePoint$Immutable
                public isNeutral(arg0: sun.security.ec.point.Point): boolean
                public static allZero(arg0: byte[]): boolean
                public multiply(arg0: sun.security.ec.point.AffinePoint, arg1: byte[]): sun.security.ec.point.MutablePoint
                public setSum(arg0: sun.security.ec.point.MutablePoint, arg1: sun.security.ec.point.AffinePoint): void
                public static class: java.lang.Class<any>
            }
        }
    }
}