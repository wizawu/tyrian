declare namespace java {
    namespace awt {
        class RadialGradientPaint extends java.awt.MultipleGradientPaint {
            public constructor(arg0: float, arg1: float, arg2: float, arg3: float[], arg4: java.awt.Color[])
            public constructor(arg0: java.awt.geom.Point2D, arg1: float, arg2: float[], arg3: java.awt.Color[])
            public constructor(arg0: float, arg1: float, arg2: float, arg3: float[], arg4: java.awt.Color[], arg5: java.awt.MultipleGradientPaint$CycleMethod)
            public constructor(arg0: java.awt.geom.Point2D, arg1: float, arg2: float[], arg3: java.awt.Color[], arg4: java.awt.MultipleGradientPaint$CycleMethod)
            public constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float[], arg6: java.awt.Color[], arg7: java.awt.MultipleGradientPaint$CycleMethod)
            public constructor(arg0: java.awt.geom.Point2D, arg1: float, arg2: java.awt.geom.Point2D, arg3: float[], arg4: java.awt.Color[], arg5: java.awt.MultipleGradientPaint$CycleMethod)
            public constructor(arg0: java.awt.geom.Point2D, arg1: float, arg2: java.awt.geom.Point2D, arg3: float[], arg4: java.awt.Color[], arg5: java.awt.MultipleGradientPaint$CycleMethod, arg6: java.awt.MultipleGradientPaint$ColorSpaceType, arg7: java.awt.geom.AffineTransform)
            public constructor(arg0: java.awt.geom.Rectangle2D, arg1: float[], arg2: java.awt.Color[], arg3: java.awt.MultipleGradientPaint$CycleMethod)
            public createContext(arg0: java.awt.image.ColorModel, arg1: java.awt.Rectangle, arg2: java.awt.geom.Rectangle2D, arg3: java.awt.geom.AffineTransform, arg4: java.awt.RenderingHints): java.awt.PaintContext
            public getCenterPoint(): java.awt.geom.Point2D
            public getFocusPoint(): java.awt.geom.Point2D
            public getRadius(): float
            public static class: java.lang.Class<any>
        }
    }
}