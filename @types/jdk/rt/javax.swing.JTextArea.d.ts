declare namespace javax {
    namespace swing {
class JTextArea extends javax.swing.text.JTextComponent {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: int)
    public constructor(arg0: javax.swing.text.Document)
    public constructor(arg0: javax.swing.text.Document, arg1: java.lang.String | string, arg2: int, arg3: int)
    public getUIClassID(): string
    protected createDefaultModel(): javax.swing.text.Document
    public setTabSize(arg0: int): void
    public getTabSize(): int
    public setLineWrap(arg0: boolean): void
    public getLineWrap(): boolean
    public setWrapStyleWord(arg0: boolean): void
    public getWrapStyleWord(): boolean
    public getLineOfOffset(arg0: int): int
    public getLineCount(): int
    public getLineStartOffset(arg0: int): int
    public getLineEndOffset(arg0: int): int
    public insert(arg0: java.lang.String | string, arg1: int): void
    public append(arg0: java.lang.String | string): void
    public replaceRange(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public getRows(): int
    public setRows(arg0: int): void
    protected getRowHeight(): int
    public getColumns(): int
    public setColumns(arg0: int): void
    protected getColumnWidth(): int
    public getPreferredSize(): java.awt.Dimension
    public setFont(arg0: java.awt.Font): void
    protected paramString(): string
    public getScrollableTracksViewportWidth(): boolean
    public getPreferredScrollableViewportSize(): java.awt.Dimension
    public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

    }
}