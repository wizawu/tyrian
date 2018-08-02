declare namespace sun {
    namespace java2d {
        namespace xr {
class XRUtils {
    public static None: int
    public static PictOpClear: byte
    public static PictOpSrc: byte
    public static PictOpDst: byte
    public static PictOpOver: byte
    public static PictOpOverReverse: byte
    public static PictOpIn: byte
    public static PictOpInReverse: byte
    public static PictOpOut: byte
    public static PictOpOutReverse: byte
    public static PictOpAtop: byte
    public static PictOpAtopReverse: byte
    public static PictOpXor: byte
    public static PictOpAdd: byte
    public static PictOpSaturate: byte
    public static RepeatNone: int
    public static RepeatNormal: int
    public static RepeatPad: int
    public static RepeatReflect: int
    public static FAST: int
    public static GOOD: int
    public static BEST: int
    public static FAST_NAME: byte[]
    public static GOOD_NAME: byte[]
    public static BEST_NAME: byte[]
    public static PictStandardARGB32: int
    public static PictStandardRGB24: int
    public static PictStandardA8: int
    public static PictStandardA4: int
    public static PictStandardA1: int
    public constructor()
    public static ATransOpToXRQuality(arg0: int): int
    public static ATransOpToXRQualityName(arg0: int): byte[]
    public static getFilterName(arg0: int): byte[]
    public static getPictureFormatForTransparency(arg0: int): int
    public static getXRSurfaceTypeForTransparency(arg0: int): sun.java2d.loops.SurfaceType
    public static getRepeatForCycleMethod(arg0: java.awt.MultipleGradientPaint$CycleMethod): int
    public static XDoubleToFixed(arg0: double): int
    public static XFixedToDouble(arg0: int): double
    public static convertFloatsToFixed(arg0: float[]): int[]
    public static intToULong(arg0: int): long
    public static j2dAlphaCompToXR(arg0: int): byte
    public static clampToShort(arg0: int): short
    public static clampToUShort(arg0: int): int
    public static isTransformQuadrantRotated(arg0: java.awt.geom.AffineTransform): boolean
    public static isMaskEvaluated(arg0: byte): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}