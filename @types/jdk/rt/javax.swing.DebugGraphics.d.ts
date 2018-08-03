declare namespace javax {
    namespace swing {
        class DebugGraphics extends java.awt.Graphics {
            public static readonly LOG_OPTION: int
            public static readonly FLASH_OPTION: int
            public static readonly BUFFERED_OPTION: int
            public static readonly NONE_OPTION: int
            public constructor()
            public constructor(arg0: java.awt.Graphics, arg1: javax.swing.JComponent)
            public constructor(arg0: java.awt.Graphics)
            public create(): java.awt.Graphics
            public create(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.Graphics
            public static setFlashColor(arg0: java.awt.Color): void
            public static flashColor(): java.awt.Color
            public static setFlashTime(arg0: int): void
            public static flashTime(): int
            public static setFlashCount(arg0: int): void
            public static flashCount(): int
            public static setLogStream(arg0: java.io.PrintStream): void
            public static logStream(): java.io.PrintStream
            public setFont(arg0: java.awt.Font): void
            public getFont(): java.awt.Font
            public setColor(arg0: java.awt.Color): void
            public getColor(): java.awt.Color
            public getFontMetrics(): java.awt.FontMetrics
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public translate(arg0: int, arg1: int): void
            public setPaintMode(): void
            public setXORMode(arg0: java.awt.Color): void
            public getClipBounds(): java.awt.Rectangle
            public clipRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setClip(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getClip(): java.awt.Shape
            public setClip(arg0: java.awt.Shape): void
            public drawRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public clearRect(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillRoundRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
            public draw3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public fill3DRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
            public drawOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public fillOval(arg0: int, arg1: int, arg2: int, arg3: int): void
            public drawArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public fillArc(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public drawPolyline(arg0: int[], arg1: int[], arg2: int): void
            public drawPolygon(arg0: int[], arg1: int[], arg2: int): void
            public fillPolygon(arg0: int[], arg1: int[], arg2: int): void
            public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public drawString(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int): void
            public drawBytes(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public drawChars(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public drawImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public copyArea(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public dispose(): void
            public isDrawingBuffer(): boolean
            public setDebugOptions(arg0: int): void
            public getDebugOptions(): int
            public static class: java.lang.Class<any>
        }
    }
}