declare namespace javax {
  namespace swing {
    class DebugGraphics extends java.awt.Graphics {
      graphics: java.awt.Graphics
      buffer: java.awt.Image
      debugOptions: int
      graphicsID: int
      xOffset: int
      yOffset: int
      public static readonly LOG_OPTION: int
      public static readonly FLASH_OPTION: int
      public static readonly BUFFERED_OPTION: int
      public static readonly NONE_OPTION: int
      public constructor()
      public constructor(arg0: java.awt.Graphics, arg1: javax.swing.JComponent)
      public constructor(arg0: java.awt.Graphics)
      public create(): java.awt.Graphics
      public create(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.awt.Graphics
      public static setFlashColor(arg0: java.awt.Color): void
      public static flashColor(): java.awt.Color
      public static setFlashTime(arg0: number | java.lang.Integer): void
      public static flashTime(): number
      public static setFlashCount(arg0: number | java.lang.Integer): void
      public static flashCount(): number
      public static setLogStream(arg0: java.io.PrintStream): void
      public static logStream(): java.io.PrintStream
      public setFont(arg0: java.awt.Font): void
      public getFont(): java.awt.Font
      public setColor(arg0: java.awt.Color): void
      public getColor(): java.awt.Color
      public getFontMetrics(): java.awt.FontMetrics
      public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
      public translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setPaintMode(): void
      public setXORMode(arg0: java.awt.Color): void
      public getClipBounds(): java.awt.Rectangle
      public clipRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public setClip(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public getClip(): java.awt.Shape
      public setClip(arg0: java.awt.Shape): void
      public drawRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public fillRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public clearRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public drawRoundRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      public fillRoundRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      public drawLine(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public draw3DRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: boolean | java.lang.Boolean
      ): void
      public fill3DRect(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: boolean | java.lang.Boolean
      ): void
      public drawOval(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public fillOval(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public drawArc(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      public fillArc(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      public drawPolyline(
        arg0: number[] | java.lang.Integer[],
        arg1: number[] | java.lang.Integer[],
        arg2: number | java.lang.Integer
      ): void
      public drawPolygon(
        arg0: number[] | java.lang.Integer[],
        arg1: number[] | java.lang.Integer[],
        arg2: number | java.lang.Integer
      ): void
      public fillPolygon(
        arg0: number[] | java.lang.Integer[],
        arg1: number[] | java.lang.Integer[],
        arg2: number | java.lang.Integer
      ): void
      public drawString(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public drawString(
        arg0: java.text.AttributedCharacterIterator,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public drawBytes(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      public drawChars(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.awt.Color,
        arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: java.awt.Color,
        arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer,
        arg7: number | java.lang.Integer,
        arg8: number | java.lang.Integer,
        arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public drawImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer,
        arg7: number | java.lang.Integer,
        arg8: number | java.lang.Integer,
        arg9: java.awt.Color,
        arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      static loadImage(arg0: java.awt.Image): void
      public copyArea(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      sleep(arg0: number | java.lang.Integer): void
      public dispose(): void
      public isDrawingBuffer(): boolean
      toShortString(): java.lang.String
      pointToString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public setDebugOptions(arg0: number | java.lang.Integer): void
      public getDebugOptions(): number
      static setDebugOptions(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): void
      static getDebugOptions(arg0: javax.swing.JComponent): number
      static shouldComponentDebug(arg0: javax.swing.JComponent): number
      static debugComponentCount(): number
      debugLog(): boolean
      debugFlash(): boolean
      debugBuffered(): boolean
      static info(): javax.swing.DebugGraphicsInfo
    }
  }
}
