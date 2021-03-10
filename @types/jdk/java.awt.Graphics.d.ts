declare namespace java {
  namespace awt {

    abstract class Graphics {
      protected constructor()
      public abstract create(): java.awt.Graphics
      public create(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.awt.Graphics
      public abstract translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract getColor(): java.awt.Color
      public abstract setColor(arg0: java.awt.Color): void
      public abstract setPaintMode(): void
      public abstract setXORMode(arg0: java.awt.Color): void
      public abstract getFont(): java.awt.Font
      public abstract setFont(arg0: java.awt.Font): void
      public getFontMetrics(): java.awt.FontMetrics
      public abstract getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
      public abstract getClipBounds(): java.awt.Rectangle
      public abstract clipRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract setClip(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract getClip(): java.awt.Shape
      public abstract setClip(arg0: java.awt.Shape): void
      public abstract copyArea(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
      public abstract drawLine(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract fillRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public drawRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract clearRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract drawRoundRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
      public abstract fillRoundRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
      public draw3DRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public fill3DRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public abstract drawOval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract fillOval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public abstract drawArc(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
      public abstract fillArc(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
      public abstract drawPolyline(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer): void
      public abstract drawPolygon(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer): void
      public drawPolygon(arg0: java.awt.Polygon): void
      public abstract fillPolygon(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer): void
      public fillPolygon(arg0: java.awt.Polygon): void
      public abstract drawString(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public abstract drawString(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public drawChars(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public drawBytes(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Color, arg4: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.awt.Color, arg6: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract drawImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: java.awt.Color, arg10: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): boolean
      public abstract dispose(): void
      public finalize(): void
      public toString(): java.lang.String
      public getClipRect(): java.awt.Rectangle
      public hitClip(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
      public getClipBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
    }

  }
}
