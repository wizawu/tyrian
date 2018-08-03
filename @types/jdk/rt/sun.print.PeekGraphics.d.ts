declare namespace sun {
    namespace print {
        class PeekGraphics extends java.awt.Graphics2D implements java.awt.print.PrinterGraphics , java.awt.image.ImageObserver , java.lang.Cloneable {
            public constructor(arg0: java.awt.Graphics2D, arg1: java.awt.print.PrinterJob)
            public getDelegate(): java.awt.Graphics2D
            public setDelegate(arg0: java.awt.Graphics2D): void
            public getPrinterJob(): java.awt.print.PrinterJob
            public setAWTDrawingOnly(): void
            public getAWTDrawingOnly(): boolean
            public getDrawingArea(): sun.java2d.Spans
            public getDeviceConfiguration(): java.awt.GraphicsConfiguration
            public create(): java.awt.Graphics
            public translate(arg0: int, arg1: int): void
            public translate(arg0: double, arg1: double): void
            public rotate(arg0: double): void
            public rotate(arg0: double, arg1: double, arg2: double): void
            public scale(arg0: double, arg1: double): void
            public shear(arg0: double, arg1: double): void
            public getColor(): java.awt.Color
            public setColor(arg0: java.awt.Color): void
            public setPaintMode(): void
            public setXORMode(arg0: java.awt.Color): void
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public getFontRenderContext(): java.awt.font.FontRenderContext
            public getClipBounds(): java.awt.Rectangle
            public clipRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setClip(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getClip(): java.awt.Shape
            public setClip(arg0: java.awt.Shape): void
            public copyArea(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public clearRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawPolyline(arg0: int[], arg1: int[], arg2: int): void
            public drawPolygon(arg0: int[], arg1: int[], arg2: int): void
            public fillPolygon(arg0: int[], arg1: int[], arg2: int): void
            public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: float, arg2: float): void
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
            public drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void
            public dispose(): void
            public finalize(): void
            public draw(arg0: java.awt.Shape): void
            public drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: int, arg3: int): void
            public drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
            public drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): void
            public fill(arg0: java.awt.Shape): void
            public hit(arg0: java.awt.Rectangle, arg1: java.awt.Shape, arg2: boolean): boolean
            public setComposite(arg0: java.awt.Composite | java.awt.Composite$$Lambda): void
            public setPaint(arg0: java.awt.Paint | java.awt.Paint$$Lambda): void
            public setStroke(arg0: java.awt.Stroke | java.awt.Stroke$$Lambda): void
            public setRenderingHint(arg0: java.awt.RenderingHints$Key, arg1: java.lang.Object): void
            public getRenderingHint(arg0: java.awt.RenderingHints$Key): java.lang.Object
            public setRenderingHints(arg0: java.util.Map<any, any>): void
            public addRenderingHints(arg0: java.util.Map<any, any>): void
            public getRenderingHints(): java.awt.RenderingHints
            public transform(arg0: java.awt.geom.AffineTransform): void
            public setTransform(arg0: java.awt.geom.AffineTransform): void
            public getTransform(): java.awt.geom.AffineTransform
            public getPaint(): java.awt.Paint
            public getComposite(): java.awt.Composite
            public setBackground(arg0: java.awt.Color): void
            public getBackground(): java.awt.Color
            public getStroke(): java.awt.Stroke
            public clip(arg0: java.awt.Shape): void
            public hitsDrawingArea(arg0: java.awt.Rectangle): boolean
            public getMetrics(): sun.print.PeekMetrics
            public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
            public static class: java.lang.Class<any>
        }
    }
}