declare namespace sun {
    namespace java2d {
        class SunGraphics2D extends java.awt.Graphics2D implements sun.awt.ConstrainableGraphics , java.lang.Cloneable , sun.java2d.DestSurfaceProvider {
            public static PAINT_CUSTOM: int
            public static PAINT_TEXTURE: int
            public static PAINT_RAD_GRADIENT: int
            public static PAINT_LIN_GRADIENT: int
            public static PAINT_GRADIENT: int
            public static PAINT_ALPHACOLOR: int
            public static PAINT_OPAQUECOLOR: int
            public static COMP_CUSTOM: int
            public static COMP_XOR: int
            public static COMP_ALPHA: int
            public static COMP_ISCOPY: int
            public static STROKE_CUSTOM: int
            public static STROKE_WIDE: int
            public static STROKE_THINDASHED: int
            public static STROKE_THIN: int
            public static TRANSFORM_GENERIC: int
            public static TRANSFORM_TRANSLATESCALE: int
            public static TRANSFORM_ANY_TRANSLATE: int
            public static TRANSFORM_INT_TRANSLATE: int
            public static TRANSFORM_ISIDENT: int
            public static CLIP_SHAPE: int
            public static CLIP_RECTANGULAR: int
            public static CLIP_DEVICE: int
            public eargb: int
            public pixel: int
            public surfaceData: sun.java2d.SurfaceData
            public drawpipe: sun.java2d.pipe.PixelDrawPipe
            public fillpipe: sun.java2d.pipe.PixelFillPipe
            public imagepipe: sun.java2d.pipe.DrawImagePipe
            public shapepipe: sun.java2d.pipe.ShapeDrawPipe
            public textpipe: sun.java2d.pipe.TextPipe
            public alphafill: sun.java2d.loops.MaskFill
            public loops: sun.java2d.loops.RenderLoops
            public imageComp: sun.java2d.loops.CompositeType
            public paintState: int
            public compositeState: int
            public strokeState: int
            public transformState: int
            public clipState: int
            public foregroundColor: java.awt.Color
            public backgroundColor: java.awt.Color
            public transform: java.awt.geom.AffineTransform
            public transX: int
            public transY: int
            protected static defaultStroke: java.awt.Stroke
            protected static defaultComposite: java.awt.Composite
            public paint: java.awt.Paint
            public stroke: java.awt.Stroke
            public composite: java.awt.Composite
            protected font: java.awt.Font
            protected fontMetrics: java.awt.FontMetrics
            public renderHint: int
            public antialiasHint: int
            public textAntialiasHint: int
            protected fractionalMetricsHint: int
            public lcdTextContrast: int
            public strokeHint: int
            public interpolationType: int
            public hints: java.awt.RenderingHints
            public constrainClip: sun.java2d.pipe.Region
            public constrainX: int
            public constrainY: int
            public clipRegion: sun.java2d.pipe.Region
            public usrClip: java.awt.Shape
            protected devClip: sun.java2d.pipe.Region
            protected static invalidpipe: sun.java2d.pipe.ValidatePipe
            public static MinPenSizeAA: double
            public static MinPenSizeAASquared: double
            public static MinPenSizeSquared: double
            public constructor(arg0: sun.java2d.SurfaceData, arg1: java.awt.Color, arg2: java.awt.Color, arg3: java.awt.Font)
            protected clone(): java.lang.Object
            public create(): java.awt.Graphics
            public setDevClip(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setDevClip(arg0: java.awt.Rectangle): void
            public constrain(arg0: int, arg1: int, arg2: int, arg3: int, arg4: sun.java2d.pipe.Region): void
            public constrain(arg0: int, arg1: int, arg2: int, arg3: int): void
            protected invalidatePipe(): void
            public validatePipe(): void
            protected static cloneShape(arg0: java.awt.Shape): java.awt.Shape
            public getCompClip(): sun.java2d.pipe.Region
            public getFont(): java.awt.Font
            public checkFontInfo(arg0: sun.java2d.loops.FontInfo, arg1: java.awt.Font, arg2: java.awt.font.FontRenderContext): sun.java2d.loops.FontInfo
            public static isRotated(arg0: double[]): boolean
            public setFont(arg0: java.awt.Font): void
            public getFontInfo(): sun.java2d.loops.FontInfo
            public getGVFontInfo(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext): sun.java2d.loops.FontInfo
            public getFontMetrics(): java.awt.FontMetrics
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public hit(arg0: java.awt.Rectangle, arg1: java.awt.Shape, arg2: boolean): boolean
            public getDeviceColorModel(): java.awt.image.ColorModel
            public getDeviceConfiguration(): java.awt.GraphicsConfiguration
            public getSurfaceData(): sun.java2d.SurfaceData
            public setComposite(arg0: java.awt.Composite | java.awt.Composite$$Lambda): void
            public setPaint(arg0: java.awt.Paint): void
            public setStroke(arg0: java.awt.Stroke | java.awt.Stroke$$Lambda): void
            public setRenderingHint(arg0: java.awt.RenderingHints$Key, arg1: java.lang.Object): void
            public getRenderingHint(arg0: java.awt.RenderingHints$Key): java.lang.Object
            public setRenderingHints(arg0: java.util.Map<any, any>): void
            public addRenderingHints(arg0: java.util.Map<any, any>): void
            public getRenderingHints(): java.awt.RenderingHints
            public translate(arg0: double, arg1: double): void
            public rotate(arg0: double): void
            public rotate(arg0: double, arg1: double, arg2: double): void
            public scale(arg0: double, arg1: double): void
            public shear(arg0: double, arg1: double): void
            public transform(arg0: java.awt.geom.AffineTransform): void
            public translate(arg0: int, arg1: int): void
            public setTransform(arg0: java.awt.geom.AffineTransform): void
            protected invalidateTransform(): void
            public getTransform(): java.awt.geom.AffineTransform
            public cloneTransform(): java.awt.geom.AffineTransform
            public getPaint(): java.awt.Paint
            public getComposite(): java.awt.Composite
            public getColor(): java.awt.Color
            public setColor(arg0: java.awt.Color): void
            public setBackground(arg0: java.awt.Color): void
            public getBackground(): java.awt.Color
            public getStroke(): java.awt.Stroke
            public getClipBounds(): java.awt.Rectangle
            public getClipBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
            public hitClip(arg0: int, arg1: int, arg2: int, arg3: int): boolean
            protected validateCompClip(): void
            protected transformShape(arg0: java.awt.Shape): java.awt.Shape
            public untransformShape(arg0: java.awt.Shape): java.awt.Shape
            protected static transformShape(arg0: int, arg1: int, arg2: java.awt.Shape): java.awt.Shape
            protected static transformShape(arg0: java.awt.geom.AffineTransform, arg1: java.awt.Shape): java.awt.Shape
            public clipRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setClip(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getClip(): java.awt.Shape
            public setClip(arg0: java.awt.Shape): void
            public clip(arg0: java.awt.Shape): void
            public setPaintMode(): void
            public setXORMode(arg0: java.awt.Color): void
            public copyArea(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawPolyline(arg0: int[], arg1: int[], arg2: int): void
            public drawPolygon(arg0: int[], arg1: int[], arg2: int): void
            public fillPolygon(arg0: int[], arg1: int[], arg2: int): void
            public drawRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public clearRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public draw(arg0: java.awt.Shape): void
            public fill(arg0: java.awt.Shape): void
            public drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
            public drawRenderableImage(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.geom.AffineTransform): void
            protected transformBounds(arg0: java.awt.Rectangle, arg1: java.awt.geom.AffineTransform): java.awt.Rectangle
            public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: float, arg2: float): void
            public drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): void
            public drawChars(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public drawBytes(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.image.ImageObserver): boolean
            public copyImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.awt.Color, arg8: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver): boolean
            public drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: int, arg3: int): void
            public getFontRenderContext(): java.awt.font.FontRenderContext
            public dispose(): void
            public finalize(): void
            public getDestination(): java.lang.Object
            public getDestSurface(): sun.java2d.Surface
            public static class: java.lang.Class<any>
        }
        class SunGraphics2D$$Lambda extends java.awt.Graphics2D implements sun.awt.ConstrainableGraphics , java.lang.Cloneable , sun.java2d.DestSurfaceProvider {
            public static PAINT_CUSTOM: int
        }
    }
}