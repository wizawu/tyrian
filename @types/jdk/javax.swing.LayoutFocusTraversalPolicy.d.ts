declare namespace javax {
  namespace swing {

    class LayoutFocusTraversalPolicy extends javax.swing.SortingFocusTraversalPolicy implements java.io.Serializable {
      public constructor()
      constructor(arg0: java.util.Comparator<unknown>)
      public getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getFirstComponent(arg0: java.awt.Container): java.awt.Component
      public getLastComponent(arg0: java.awt.Container): java.awt.Component
      protected accept(arg0: java.awt.Component): boolean
    }

  }
}
