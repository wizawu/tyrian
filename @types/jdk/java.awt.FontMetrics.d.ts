declare namespace java {
  namespace awt {

    abstract class FontMetrics implements java.io.Serializable {

      protected font: java.awt.Font
      protected constructor(arg0: java.awt.Font)
      public getFont(): java.awt.Font
      public getFontRenderContext(): java.awt.font.FontRenderContext
      public getLeading(): int
      public getAscent(): int
      public getDescent(): int
      public getHeight(): int
      public getMaxAscent(): int
      public getMaxDescent(): int
      public getMaxDecent(): int
      public getMaxAdvance(): int
      public charWidth(arg0: int): int
      public charWidth(arg0: char): int
      public stringWidth(arg0: java.lang.String): int
      public charsWidth(arg0: char[], arg1: int, arg2: int): int
      public bytesWidth(arg0: byte[], arg1: int, arg2: int): int
      public getWidths(): int[]
      public hasUniformLineMetrics(): boolean
      public getLineMetrics(arg0: java.lang.String, arg1: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.lang.String, arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: char[], arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.text.CharacterIterator, arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getStringBounds(arg0: java.lang.String, arg1: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.lang.String, arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: char[], arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.text.CharacterIterator, arg1: int, arg2: int, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getMaxCharBounds(arg0: java.awt.Graphics): java.awt.geom.Rectangle2D
      public toString(): java.lang.String
    }

  }
}
