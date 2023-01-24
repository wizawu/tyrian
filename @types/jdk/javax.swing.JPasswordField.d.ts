declare namespace javax {
  namespace swing {
    class JPasswordField extends javax.swing.JTextField {
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(
        arg0: javax.swing.text.Document,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer
      )
      public getUIClassID(): java.lang.String
      public updateUI(): void
      public getEchoChar(): string
      public setEchoChar(arg0: string | java.lang.Character): void
      public echoCharIsSet(): boolean
      public cut(): void
      public copy(): void
      public getText(): java.lang.String
      public getText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public setText(arg0: java.lang.String | string): void
      public getPassword(): string[]
      protected paramString(): java.lang.String
      customSetUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): boolean
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
