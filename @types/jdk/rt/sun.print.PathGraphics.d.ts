declare namespace sun {
    namespace print {
        abstract class PathGraphics extends sun.print.ProxyGraphics2D {
            protected printingGlyphVector: boolean
            protected static fontMapRef: java.lang.ref.SoftReference<java.util.Hashtable<sun.font.Font2DHandle, java.lang.Object>>
            protected constructor(arg0: java.awt.Graphics2D, arg1: java.awt.print.PrinterJob, arg2: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg3: java.awt.print.PageFormat, arg4: int, arg5: boolean)
            protected getPrintable(): java.awt.print.Printable
            protected getPageFormat(): java.awt.print.PageFormat
            protected getPageIndex(): int
            public canDoRedraws(): boolean
            public abstract redrawRegion(arg0: java.awt.geom.Rectangle2D, arg1: double, arg2: double, arg3: java.awt.Shape, arg4: java.awt.geom.AffineTransform): void
            public drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawRect(arg0: int, arg1: int, arg2: int, arg3: int): void
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
            public drawPolygon(arg0: java.awt.Polygon): void
            public fillPolygon(arg0: int[], arg1: int[], arg2: int): void
            public fillPolygon(arg0: java.awt.Polygon): void
            public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
            protected drawString(arg0: java.lang.String | string, arg1: float, arg2: float, arg3: java.awt.Font, arg4: java.awt.font.FontRenderContext, arg5: float): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: float, arg2: float): void
            public drawGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): void
            protected platformFontCount(arg0: java.awt.Font, arg1: java.lang.String | string): int
            protected printGlyphVector(arg0: java.awt.font.GlyphVector, arg1: float, arg2: float): boolean
            protected canDrawStringToWidth(): boolean
            public draw(arg0: java.awt.Shape): void
            public fill(arg0: java.awt.Shape): void
            public fill(arg0: java.awt.Shape, arg1: java.awt.Color): void
            protected abstract deviceFill(arg0: java.awt.geom.PathIterator, arg1: java.awt.Color): void
            protected abstract deviceClip(arg0: java.awt.geom.PathIterator): void
            protected abstract deviceFrameRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected abstract deviceDrawLine(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected abstract deviceFillRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected getBufferedImage(arg0: java.awt.Image): java.awt.image.BufferedImage
            protected hasTransparentPixels(arg0: java.awt.image.BufferedImage): boolean
            protected isBitmaskTransparency(arg0: java.awt.image.BufferedImage): boolean
            protected drawBitmaskImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.geom.AffineTransform, arg2: java.awt.Color, arg3: int, arg4: int, arg5: int, arg6: int): boolean
            protected abstract drawImageToPlatform(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.Color, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImageOp, arg2: int, arg3: int): void
            public drawRenderedImage(arg0: java.awt.image.RenderedImage, arg1: java.awt.geom.AffineTransform): void
            public static class: java.lang.Class<any>
        }
    }
}