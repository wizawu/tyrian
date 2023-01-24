declare namespace javax {
  namespace swing {
    namespace text {
      abstract class AbstractWriter {
        protected static readonly NEWLINE: char
        protected constructor(arg0: java.io.Writer, arg1: javax.swing.text.Document)
        protected constructor(
          arg0: java.io.Writer,
          arg1: javax.swing.text.Document,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        protected constructor(arg0: java.io.Writer, arg1: javax.swing.text.Element)
        protected constructor(
          arg0: java.io.Writer,
          arg1: javax.swing.text.Element,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public getStartOffset(): number
        public getEndOffset(): number
        protected getElementIterator(): javax.swing.text.ElementIterator
        protected getWriter(): java.io.Writer
        protected getDocument(): javax.swing.text.Document
        protected inRange(arg0: javax.swing.text.Element): boolean
        protected abstract write(): void
        protected getText(arg0: javax.swing.text.Element): java.lang.String
        protected text(arg0: javax.swing.text.Element): void
        protected setLineLength(arg0: number | java.lang.Integer): void
        protected getLineLength(): number
        protected setCurrentLineLength(arg0: number | java.lang.Integer): void
        protected getCurrentLineLength(): number
        protected isLineEmpty(): boolean
        protected setCanWrapLines(arg0: boolean | java.lang.Boolean): void
        protected getCanWrapLines(): boolean
        protected setIndentSpace(arg0: number | java.lang.Integer): void
        protected getIndentSpace(): number
        public setLineSeparator(arg0: java.lang.String | string): void
        public getLineSeparator(): java.lang.String
        protected incrIndent(): void
        protected decrIndent(): void
        protected getIndentLevel(): number
        protected indent(): void
        protected write(arg0: string | java.lang.Character): void
        protected write(arg0: java.lang.String | string): void
        protected writeLineSeparator(): void
        protected write(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        protected writeAttributes(arg0: javax.swing.text.AttributeSet): void
        protected output(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
      }
    }
  }
}
