declare namespace sun {
    namespace font {
        class TextSourceLabel extends sun.font.TextLabel {
            public constructor(arg0: sun.font.TextSource)
            public constructor(arg0: sun.font.TextSource, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.geom.Rectangle2D, arg3: java.awt.font.GlyphVector)
            public getSource(): sun.font.TextSource
            public getLogicalBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getVisualBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getAlignBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getItalicBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
            public getBaselineTransform(): java.awt.geom.AffineTransform
            public getOutline(arg0: float, arg1: float): java.awt.Shape
            public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            protected createLogicalBounds(): java.awt.geom.Rectangle2D
            protected createVisualBounds(): java.awt.geom.Rectangle2D
            protected createItalicBounds(): java.awt.geom.Rectangle2D
            protected createAlignBounds(): java.awt.geom.Rectangle2D
            protected createGV(): java.awt.font.GlyphVector
            public static class: java.lang.Class<any>
        }
    }
}