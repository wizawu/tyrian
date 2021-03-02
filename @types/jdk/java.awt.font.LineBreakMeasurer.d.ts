declare namespace java {
  namespace awt {
    namespace font {

      class LineBreakMeasurer {
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.text.BreakIterator, arg2: java.awt.font.FontRenderContext)
        public nextOffset(arg0: number | java.lang.Float): number
        public nextOffset(arg0: number | java.lang.Float, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): number
        public nextLayout(arg0: number | java.lang.Float): java.awt.font.TextLayout
        public nextLayout(arg0: number | java.lang.Float, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.awt.font.TextLayout
        public getPosition(): number
        public setPosition(arg0: number | java.lang.Integer): void
        public insertChar(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer): void
        public deleteChar(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer): void
      }

    }
  }
}
