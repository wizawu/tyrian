declare namespace java {
    namespace awt {
        abstract class MultipleGradientPaint implements java.awt.Paint {
            public getFractions(): float[]
            public getColors(): java.awt.Color[]
            public getCycleMethod(): java.awt.MultipleGradientPaint$CycleMethod
            public getColorSpace(): java.awt.MultipleGradientPaint$ColorSpaceType
            public getTransform(): java.awt.geom.AffineTransform
            public getTransparency(): int
            public static class: java.lang.Class<any>
        }
    }
}