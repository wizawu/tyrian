declare namespace java {
  namespace awt {
    namespace font {
      class TextMeasurer implements java.lang.Cloneable {
        layoutCount: int
        layoutCharCount: int
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
        protected clone(): java.lang.Object
        public getLineBreakIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): number
        public getAdvanceBetween(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public getLayout(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.font.TextLayout
        public insertChar(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer): void
        public deleteChar(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer): void
        getChars(): string[]
      }
    }
  }
}
