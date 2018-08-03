declare namespace java {
    namespace awt {
        abstract class Graphics {
            protected constructor()
            public abstract create(): java.awt.Graphics
            public create(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.Graphics
            public abstract translate(arg0: int, arg1: int): void
            public abstract getColor(): java.awt.Color
            public abstract setColor(arg0: java.awt.Color): void
            public abstract setPaintMode(): void
            public abstract setXORMode(arg0: java.awt.Color): void
            public abstract getFont(): java.awt.Font
            public abstract setFont(arg0: java.awt.Font): void
            public getFontMetrics(): java.awt.FontMetrics
            public abstract getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public abstract getClipBounds(): java.awt.Rectangle
            public abstract clipRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract setClip(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract getClip(): java.awt.Shape
            public abstract setClip(arg0: java.awt.Shape): void
            public abstract copyArea(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public abstract drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract fillRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract clearRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract drawRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public abstract fillRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public draw3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public fill3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public abstract drawOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract fillOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public abstract drawArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public abstract fillArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public abstract drawPolyline(arg0: int[], arg1: int[], arg2: int): void
            public abstract drawPolygon(arg0: int[], arg1: int[], arg2: int): void
            public drawPolygon(arg0: java.awt.Polygon): void
            public abstract fillPolygon(arg0: int[], arg1: int[], arg2: int): void
            public fillPolygon(arg0: java.awt.Polygon): void
            public abstract drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public drawChars(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public drawBytes(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract dispose(): void
            public finalize(): void
            public toString(): string
            public getClipRect(): java.awt.Rectangle
            public hitClip(arg0: int, arg1: int, arg2: int, arg3: int): boolean
            public getClipBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
            public static class: java.lang.Class<any>
        }
    }
}