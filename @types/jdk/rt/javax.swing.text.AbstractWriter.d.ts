declare namespace javax {
    namespace swing {
        namespace text {
abstract class AbstractWriter {
    protected static NEWLINE: char
    protected constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.swing.text.Document)
    protected constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.swing.text.Document, arg2: int, arg3: int)
    protected constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.swing.text.Element)
    protected constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.swing.text.Element, arg2: int, arg3: int)
    public getStartOffset(): int
    public getEndOffset(): int
    protected getElementIterator(): javax.swing.text.ElementIterator
    protected getWriter(): java.io.Writer
    protected getDocument(): javax.swing.text.Document
    protected inRange(arg0: javax.swing.text.Element): boolean
    protected write(): void
    protected getText(arg0: javax.swing.text.Element): string
    protected text(arg0: javax.swing.text.Element): void
    protected setLineLength(arg0: int): void
    protected getLineLength(): int
    protected setCurrentLineLength(arg0: int): void
    protected getCurrentLineLength(): int
    protected isLineEmpty(): boolean
    protected setCanWrapLines(arg0: boolean): void
    protected getCanWrapLines(): boolean
    protected setIndentSpace(arg0: int): void
    protected getIndentSpace(): int
    public setLineSeparator(arg0: java.lang.String | string): void
    public getLineSeparator(): string
    protected incrIndent(): void
    protected decrIndent(): void
    protected getIndentLevel(): int
    protected indent(): void
    protected write(arg0: char): void
    protected write(arg0: java.lang.String | string): void
    protected writeLineSeparator(): void
    protected write(arg0: char[], arg1: int, arg2: int): void
    protected writeAttributes(arg0: javax.swing.text.AttributeSet): void
    protected output(arg0: char[], arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}