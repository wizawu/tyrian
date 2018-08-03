declare namespace java {
    namespace awt {
        abstract class Graphics2D extends java.awt.Graphics {
            protected constructor()
            public draw3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public fill3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public abstract draw(arg0: java.awt.Shape): void
            public abstract drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: int, arg3: int): void
            public abstract drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
            public abstract drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void
            public abstract drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public abstract drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
            public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: float, arg2: float): void
            public abstract drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): void
            public abstract fill(arg0: java.awt.Shape): void
            public abstract hit(arg0: java.awt.Rectangle, arg1: java.awt.Shape, arg2: boolean): boolean
            public abstract getDeviceConfiguration(): java.awt.GraphicsConfiguration
            public abstract setComposite(arg0: java.awt.Composite | java.awt.Composite$$Lambda): void
            public abstract setPaint(arg0: java.awt.Paint): void
            public abstract setStroke(arg0: java.awt.Stroke | java.awt.Stroke$$Lambda): void
            public abstract setRenderingHint(arg0: java.awt.RenderingHints$Key | java.awt.RenderingHints$Key$$Lambda, arg1: java.lang.Object): void
            public abstract getRenderingHint(arg0: java.awt.RenderingHints$Key | java.awt.RenderingHints$Key$$Lambda): java.lang.Object
            public abstract setRenderingHints(arg0: java.util.Map<any, any>): void
            public abstract addRenderingHints(arg0: java.util.Map<any, any>): void
            public abstract getRenderingHints(): java.awt.RenderingHints
            public abstract translate(arg0: int, arg1: int): void
            public abstract translate(arg0: double, arg1: double): void
            public abstract rotate(arg0: double): void
            public abstract rotate(arg0: double, arg1: double, arg2: double): void
            public abstract scale(arg0: double, arg1: double): void
            public abstract shear(arg0: double, arg1: double): void
            public abstract transform(arg0: java.awt.geom.AffineTransform): void
            public abstract setTransform(arg0: java.awt.geom.AffineTransform): void
            public abstract getTransform(): java.awt.geom.AffineTransform
            public abstract getPaint(): java.awt.Paint
            public abstract getComposite(): java.awt.Composite
            public abstract setBackground(arg0: java.awt.Color): void
            public abstract getBackground(): java.awt.Color
            public abstract getStroke(): java.awt.Stroke
            public abstract clip(arg0: java.awt.Shape): void
            public abstract getFontRenderContext(): java.awt.font.FontRenderContext
            public static class: java.lang.Class<any>
        }
    }
}