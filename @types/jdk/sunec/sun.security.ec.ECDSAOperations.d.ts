declare namespace sun {
    namespace security {
        namespace ec {
            class ECDSAOperations {
                public constructor(arg0: sun.security.ec.ECOperations, arg1: java.security.spec.ECPoint)
                public getEcOperations(): sun.security.ec.ECOperations
                public basePointMultiply(arg0: byte[]): sun.security.ec.point.AffinePoint
                public static toAffinePoint(arg0: java.security.spec.ECPoint, arg1: sun.security.util.math.IntegerFieldModuloP): sun.security.ec.point.AffinePoint
                public static forParameters(arg0: java.security.spec.ECParameterSpec): java.util.Optional<sun.security.ec.ECDSAOperations>
                public signDigest(arg0: byte[], arg1: byte[], arg2: sun.security.ec.ECDSAOperations$Seed): byte[]
                public signDigest(arg0: byte[], arg1: byte[], arg2: sun.security.ec.ECDSAOperations$Nonce): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}