declare namespace javax {
  namespace swing {

    class JTextArea extends javax.swing.text.JTextComponent {
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: javax.swing.text.Document)
      public constructor(arg0: javax.swing.text.Document, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public getUIClassID(): java.lang.String
      protected createDefaultModel(): javax.swing.text.Document
      public setTabSize(arg0: number | java.lang.Integer): void
      public getTabSize(): number
      public setLineWrap(arg0: boolean | java.lang.Boolean): void
      public getLineWrap(): boolean
      public setWrapStyleWord(arg0: boolean | java.lang.Boolean): void
      public getWrapStyleWord(): boolean
      public getLineOfOffset(arg0: number | java.lang.Integer): number
      public getLineCount(): number
      public getLineStartOffset(arg0: number | java.lang.Integer): number
      public getLineEndOffset(arg0: number | java.lang.Integer): number
      public insert(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public append(arg0: java.lang.String | string): void
      public replaceRange(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getRows(): number
      public setRows(arg0: number | java.lang.Integer): void
      protected getRowHeight(): number
      public getColumns(): number
      public setColumns(arg0: number | java.lang.Integer): void
      protected getColumnWidth(): number
      public getPreferredSize(): java.awt.Dimension
      public setFont(arg0: java.awt.Font): void
      protected paramString(): java.lang.String
      public getScrollableTracksViewportWidth(): boolean
      public getPreferredScrollableViewportSize(): java.awt.Dimension
      public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
