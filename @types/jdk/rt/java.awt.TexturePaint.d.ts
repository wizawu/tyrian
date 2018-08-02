declare namespace java {
    namespace awt {
        class TexturePaint implements java.awt.Paint {
            public constructor(arg0: java.awt.image.BufferedImage, arg1: java.awt.geom.Rectangle2D)
            public getImage(): java.awt.image.BufferedImage
            public getAnchorRect(): java.awt.geom.Rectangle2D
            public createContext(arg0: java.awt.image.ColorModel, arg1: java.awt.Rectangle, arg2: java.awt.geom.Rectangle2D, arg3: java.awt.geom.AffineTransform, arg4: java.awt.RenderingHints): java.awt.PaintContext
            public getTransparency(): int
            public static class: java.lang.Class<any>
        }
    }
}