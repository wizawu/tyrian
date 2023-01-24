declare namespace java {
  namespace awt {
    class TextField extends java.awt.TextComponent {
      columns: int
      echoChar: char
      actionListener: java.awt.event.ActionListener
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getEchoChar(): string
      public setEchoChar(arg0: string | java.lang.Character): void
      public setEchoCharacter(arg0: string | java.lang.Character): void
      public setText(arg0: java.lang.String | string): void
      public echoCharIsSet(): boolean
      public getColumns(): number
      public setColumns(arg0: number | java.lang.Integer): void
      public getPreferredSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public preferredSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public minimumSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processActionEvent(arg0: java.awt.event.ActionEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
