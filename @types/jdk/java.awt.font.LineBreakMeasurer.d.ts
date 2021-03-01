declare namespace java {
  namespace awt {
    namespace font {

      class LineBreakMeasurer {

        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.text.BreakIterator, arg2: java.awt.font.FontRenderContext)
        public nextOffset(arg0: float): int
        public nextOffset(arg0: float, arg1: int, arg2: boolean): int
        public nextLayout(arg0: float): java.awt.font.TextLayout
        public nextLayout(arg0: float, arg1: int, arg2: boolean): java.awt.font.TextLayout
        public getPosition(): int
        public setPosition(arg0: int): void
        public insertChar(arg0: java.text.AttributedCharacterIterator, arg1: int): void
        public deleteChar(arg0: java.text.AttributedCharacterIterator, arg1: int): void
      }

    }
  }
}
