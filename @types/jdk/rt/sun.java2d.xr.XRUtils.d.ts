declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRUtils {
                public static readonly None: int
                public static readonly PictOpClear: byte
                public static readonly PictOpSrc: byte
                public static readonly PictOpDst: byte
                public static readonly PictOpOver: byte
                public static readonly PictOpOverReverse: byte
                public static readonly PictOpIn: byte
                public static readonly PictOpInReverse: byte
                public static readonly PictOpOut: byte
                public static readonly PictOpOutReverse: byte
                public static readonly PictOpAtop: byte
                public static readonly PictOpAtopReverse: byte
                public static readonly PictOpXor: byte
                public static readonly PictOpAdd: byte
                public static readonly PictOpSaturate: byte
                public static readonly RepeatNone: int
                public static readonly RepeatNormal: int
                public static readonly RepeatPad: int
                public static readonly RepeatReflect: int
                public static readonly FAST: int
                public static readonly GOOD: int
                public static readonly BEST: int
                public static readonly FAST_NAME: byte[]
                public static readonly GOOD_NAME: byte[]
                public static readonly BEST_NAME: byte[]
                public static readonly PictStandardARGB32: int
                public static readonly PictStandardRGB24: int
                public static readonly PictStandardA8: int
                public static readonly PictStandardA4: int
                public static readonly PictStandardA1: int
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