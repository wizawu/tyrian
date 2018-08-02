declare namespace java {
    namespace awt {
        abstract class TexturePaintContext implements java.awt.PaintContext {
            public static xrgbmodel: java.awt.image.ColorModel
            public static argbmodel: java.awt.image.ColorModel
            public static getContext(arg0: java.awt.image.BufferedImage, arg1: java.awt.geom.AffineTransform, arg2: java.awt.RenderingHints, arg3: java.awt.Rectangle): java.awt.PaintContext
            public static isFilterableICM(arg0: java.awt.image.ColorModel): boolean
            public static isFilterableDCM(arg0: java.awt.image.ColorModel): boolean
            public static isMaskOK(arg0: int, arg1: boolean): boolean
            public static getInternedColorModel(arg0: java.awt.image.ColorModel): java.awt.image.ColorModel
            public dispose(): void
            public getColorModel(): java.awt.image.ColorModel
            public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
            public makeRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
            public setRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int, arg12: int, arg13: int, arg14: int, arg15: int): void
            public static blend(arg0: int[], arg1: int, arg2: int): int
            public static class: java.lang.Class<any>
        }
    }
}