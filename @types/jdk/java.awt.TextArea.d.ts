declare namespace java {
  namespace awt {

    class TextArea extends java.awt.TextComponent {
      rows: int
      columns: int
      public static readonly SCROLLBARS_BOTH: int
      public static readonly SCROLLBARS_VERTICAL_ONLY: int
      public static readonly SCROLLBARS_HORIZONTAL_ONLY: int
      public static readonly SCROLLBARS_NONE: int
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public insert(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public insertText(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public append(arg0: java.lang.String | string): void
      public appendText(arg0: java.lang.String | string): void
      public replaceRange(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public replaceText(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getRows(): number
      public setRows(arg0: number | java.lang.Integer): void
      public getColumns(): number
      public setColumns(arg0: number | java.lang.Integer): void
      public getScrollbarVisibility(): number
      public getPreferredSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Dimension
      public preferredSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Dimension
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Dimension
      public minimumSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
