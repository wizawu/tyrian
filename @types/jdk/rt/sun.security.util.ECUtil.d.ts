declare namespace sun {
    namespace security {
        namespace util {
            class ECUtil {
                public static decodePoint(arg0: byte[], arg1: java.security.spec.EllipticCurve): java.security.spec.ECPoint
                public static encodePoint(arg0: java.security.spec.ECPoint, arg1: java.security.spec.EllipticCurve): byte[]
                public static trimZeroes(arg0: byte[]): byte[]
                public static encodeECParameterSpec(arg0: java.security.Provider, arg1: java.security.spec.ECParameterSpec): byte[]
                public static getECParameterSpec(arg0: java.security.Provider, arg1: java.security.spec.ECParameterSpec): java.security.spec.ECParameterSpec
                public static getECParameterSpec(arg0: java.security.Provider, arg1: byte[]): java.security.spec.ECParameterSpec
                public static getECParameterSpec(arg0: java.security.Provider, arg1: java.lang.String | string): java.security.spec.ECParameterSpec
                public static getECParameterSpec(arg0: java.security.Provider, arg1: int): java.security.spec.ECParameterSpec
                public static getCurveName(arg0: java.security.Provider, arg1: java.security.spec.ECParameterSpec): string
                public static class: java.lang.Class<any>
            }
        }
    }
}