declare namespace java {
    namespace awt {
abstract class Graphics2D extends java.awt.Graphics {
    protected constructor()
    public draw3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
    public fill3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
    public draw(arg0: java.awt.Shape): void
    public drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver): boolean
    public drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: int, arg3: int): void
    public drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
    public drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void
    public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
    public drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
    public drawString(arg0: java.text.AttributedCharacterIterator, arg1: float, arg2: float): void
    public drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): void
    public fill(arg0: java.awt.Shape): void
    public hit(arg0: java.awt.Rectangle, arg1: java.awt.Shape, arg2: boolean): boolean
    public getDeviceConfiguration(): java.awt.GraphicsConfiguration
    public setComposite(arg0: java.awt.Composite | java.awt.Composite$$Lambda): void
    public setPaint(arg0: java.awt.Paint): void
    public setStroke(arg0: java.awt.Stroke | java.awt.Stroke$$Lambda): void
    public setRenderingHint(arg0: java.awt.RenderingHints$Key, arg1: java.lang.Object): void
    public getRenderingHint(arg0: java.awt.RenderingHints$Key): java.lang.Object
    public setRenderingHints(arg0: java.util.Map<any, any>): void
    public addRenderingHints(arg0: java.util.Map<any, any>): void
    public getRenderingHints(): java.awt.RenderingHints
    public translate(arg0: int, arg1: int): void
    public translate(arg0: double, arg1: double): void
    public rotate(arg0: double): void
    public rotate(arg0: double, arg1: double, arg2: double): void
    public scale(arg0: double, arg1: double): void
    public shear(arg0: double, arg1: double): void
    public transform(arg0: java.awt.geom.AffineTransform): void
    public setTransform(arg0: java.awt.geom.AffineTransform): void
    public getTransform(): java.awt.geom.AffineTransform
    public getPaint(): java.awt.Paint
    public getComposite(): java.awt.Composite
    public setBackground(arg0: java.awt.Color): void
    public getBackground(): java.awt.Color
    public getStroke(): java.awt.Stroke
    public clip(arg0: java.awt.Shape): void
    public getFontRenderContext(): java.awt.font.FontRenderContext
    public static class: java.lang.Class<any>
}

    }
}