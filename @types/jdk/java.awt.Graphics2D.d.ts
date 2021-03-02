declare namespace java {
  namespace awt {

    abstract class Graphics2D extends java.awt.Graphics {
      protected constructor()
      public draw3DRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public fill3DRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public abstract draw(arg0: java.awt.Shape): void
      public abstract drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
      public abstract drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void
      public abstract drawString(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public abstract drawString(arg0: java.lang.String | string, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
      public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
      public abstract drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
      public abstract fill(arg0: java.awt.Shape): void
      public abstract hit(arg0: java.awt.Rectangle, arg1: java.awt.Shape, arg2: boolean | java.lang.Boolean): boolean
      public abstract getDeviceConfiguration(): java.awt.GraphicsConfiguration
      public abstract setComposite(arg0: java.awt.Composite | java.awt.Composite$$lambda): void
      public abstract setPaint(arg0: java.awt.Paint): void
      public abstract setStroke(arg0: java.awt.Stroke | java.awt.Stroke$$lambda): void
      public abstract setRenderingHint(arg0: java.awt.RenderingHints$Key, arg1: java.lang.Object | any): void
      public abstract getRenderingHint(arg0: java.awt.RenderingHints$Key): java.lang.Object
      public abstract setRenderingHints(arg0: java.util.Map<unknown,unknown>): void
      public abstract addRenderingHints(arg0: java.util.Map<unknown,unknown>): void
      public abstract getRenderingHints(): java.awt.RenderingHints
      public abstract translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract translate(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
      public abstract rotate(arg0: number | java.lang.Double): void
      public abstract rotate(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
      public abstract scale(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
      public abstract shear(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
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
    }

  }
}
