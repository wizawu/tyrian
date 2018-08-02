declare namespace sun {
    namespace misc {
class FpUtils {
    public static getExponent(arg0: double): int
    public static getExponent(arg0: float): int
    public static rawCopySign(arg0: double, arg1: double): double
    public static rawCopySign(arg0: float, arg1: float): float
    public static isFinite(arg0: double): boolean
    public static isFinite(arg0: float): boolean
    public static isInfinite(arg0: double): boolean
    public static isInfinite(arg0: float): boolean
    public static isNaN(arg0: double): boolean
    public static isNaN(arg0: float): boolean
    public static isUnordered(arg0: double, arg1: double): boolean
    public static isUnordered(arg0: float, arg1: float): boolean
    public static ilogb(arg0: double): int
    public static ilogb(arg0: float): int
    public static scalb(arg0: double, arg1: int): double
    public static scalb(arg0: float, arg1: int): float
    public static nextAfter(arg0: double, arg1: double): double
    public static nextAfter(arg0: float, arg1: double): float
    public static nextUp(arg0: double): double
    public static nextUp(arg0: float): float
    public static nextDown(arg0: double): double
    public static nextDown(arg0: float): double
    public static copySign(arg0: double, arg1: double): double
    public static copySign(arg0: float, arg1: float): float
    public static ulp(arg0: double): double
    public static ulp(arg0: float): float
    public static signum(arg0: double): double
    public static signum(arg0: float): float
    public static class: java.lang.Class<any>
}

    }
}