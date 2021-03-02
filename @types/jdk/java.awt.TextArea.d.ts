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
      public constructor(arg0: java.lang.String)
      public constructor(arg0: int, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: int)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public insert(arg0: java.lang.String, arg1: int): void
      public insertText(arg0: java.lang.String, arg1: int): void
      public append(arg0: java.lang.String): void
      public appendText(arg0: java.lang.String): void
      public replaceRange(arg0: java.lang.String, arg1: int, arg2: int): void
      public replaceText(arg0: java.lang.String, arg1: int, arg2: int): void
      public getRows(): int
      public setRows(arg0: int): void
      public getColumns(): int
      public setColumns(arg0: int): void
      public getScrollbarVisibility(): int
      public getPreferredSize(arg0: int, arg1: int): java.awt.Dimension
      public preferredSize(arg0: int, arg1: int): java.awt.Dimension
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(arg0: int, arg1: int): java.awt.Dimension
      public minimumSize(arg0: int, arg1: int): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
