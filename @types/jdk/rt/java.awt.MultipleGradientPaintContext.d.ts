declare namespace java {
    namespace awt {
        abstract class MultipleGradientPaintContext implements java.awt.PaintContext {
            protected model: java.awt.image.ColorModel
            protected static cachedModel: java.awt.image.ColorModel
            protected static cached: java.lang.ref.WeakReference<java.awt.image.Raster>
            protected saved: java.awt.image.Raster
            protected cycleMethod: java.awt.MultipleGradientPaint$CycleMethod
            protected colorSpace: java.awt.MultipleGradientPaint$ColorSpaceType
            protected a00: float
            protected a01: float
            protected a10: float
            protected a11: float
            protected a02: float
            protected a12: float
            protected isSimpleLookup: boolean
            protected fastGradientArraySize: int
            protected gradient: int[]
            protected static readonly GRADIENT_SIZE: int
            protected static readonly GRADIENT_SIZE_INDEX: int
            protected constructor(arg0: java.awt.MultipleGradientPaint, arg1: java.awt.image.ColorModel, arg2: java.awt.Rectangle, arg3: java.awt.geom.Rectangle2D, arg4: java.awt.geom.AffineTransform, arg5: java.awt.RenderingHints, arg6: float[], arg7: java.awt.Color[], arg8: java.awt.MultipleGradientPaint$CycleMethod, arg9: java.awt.MultipleGradientPaint$ColorSpaceType)
            protected indexIntoGradientsArrays(arg0: float): int
            public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
            protected abstract fillRaster(arg0: int[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
            public dispose(): void
            public getColorModel(): java.awt.image.ColorModel
            public static class: java.lang.Class<any>
        }
        interface MultipleGradientPaintContext$$Lambda implements java.awt.PaintContext {
            (arg0: int[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
        }
    }
}