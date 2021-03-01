declare namespace javax {
  namespace swing {

    class DefaultFocusManager extends javax.swing.FocusManager {

      readonly gluePolicy: java.awt.FocusTraversalPolicy
      public constructor()
      public getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getFirstComponent(arg0: java.awt.Container): java.awt.Component
      public getLastComponent(arg0: java.awt.Container): java.awt.Component
      public compareTabOrder(arg0: java.awt.Component, arg1: java.awt.Component): boolean
    }

  }
}
