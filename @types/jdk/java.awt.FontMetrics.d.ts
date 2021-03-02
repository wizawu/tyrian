declare namespace java {
  namespace awt {

    abstract class FontMetrics implements java.io.Serializable {
      protected font: java.awt.Font
      protected constructor(arg0: java.awt.Font)
      public getFont(): java.awt.Font
      public getFontRenderContext(): java.awt.font.FontRenderContext
      public getLeading(): number
      public getAscent(): number
      public getDescent(): number
      public getHeight(): number
      public getMaxAscent(): number
      public getMaxDescent(): number
      public getMaxDecent(): number
      public getMaxAdvance(): number
      public charWidth(arg0: number | java.lang.Integer): number
      public charWidth(arg0: string | java.lang.Character): number
      public stringWidth(arg0: java.lang.String | string): number
      public charsWidth(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public bytesWidth(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getWidths(): number[]
      public hasUniformLineMetrics(): boolean
      public getLineMetrics(arg0: java.lang.String | string, arg1: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.text.CharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.font.LineMetrics
      public getStringBounds(arg0: java.lang.String | string, arg1: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.text.CharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics): java.awt.geom.Rectangle2D
      public getMaxCharBounds(arg0: java.awt.Graphics): java.awt.geom.Rectangle2D
      public toString(): java.lang.String
    }

  }
}
