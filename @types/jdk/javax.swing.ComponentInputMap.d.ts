declare namespace javax {
  namespace swing {
    class ComponentInputMap extends javax.swing.InputMap {
      public constructor(arg0: javax.swing.JComponent)
      public setParent(arg0: javax.swing.InputMap): void
      public getComponent(): javax.swing.JComponent
      public put(arg0: javax.swing.KeyStroke, arg1: java.lang.Object | any): void
      public remove(arg0: javax.swing.KeyStroke): void
      public clear(): void
    }
  }
}
