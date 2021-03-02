declare namespace javax {
  namespace swing {

    class JPasswordField extends javax.swing.JTextField {
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: int)
      public constructor(arg0: java.lang.String, arg1: int)
      public constructor(arg0: javax.swing.text.Document, arg1: java.lang.String, arg2: int)
      public getUIClassID(): java.lang.String
      public updateUI(): void
      public getEchoChar(): char
      public setEchoChar(arg0: char): void
      public echoCharIsSet(): boolean
      public cut(): void
      public copy(): void
      public getText(): java.lang.String
      public getText(arg0: int, arg1: int): java.lang.String
      public getPassword(): char[]
      protected paramString(): java.lang.String
      customSetUIProperty(arg0: java.lang.String, arg1: java.lang.Object): boolean
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
