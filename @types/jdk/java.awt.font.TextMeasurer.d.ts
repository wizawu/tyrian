declare namespace java {
  namespace awt {
    namespace font {

      class TextMeasurer implements java.lang.Cloneable {

        layoutCount: int
        layoutCharCount: int
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
        protected clone(): java.lang.Object
        public getLineBreakIndex(arg0: int, arg1: float): int
        public getAdvanceBetween(arg0: int, arg1: int): float
        public getLayout(arg0: int, arg1: int): java.awt.font.TextLayout
        public insertChar(arg0: java.text.AttributedCharacterIterator, arg1: int): void
        public deleteChar(arg0: java.text.AttributedCharacterIterator, arg1: int): void
        getChars(): char[]
      }

    }
  }
}
