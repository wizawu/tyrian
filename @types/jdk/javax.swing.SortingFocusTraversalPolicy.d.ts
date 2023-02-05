declare namespace javax {
  namespace swing {
    class SortingFocusTraversalPolicy extends javax.swing.InternalFrameFocusTraversalPolicy {
      protected constructor()
      public constructor(arg0: java.util.Comparator<unknown>)
      getTopmostProvider(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Container
      public getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getFirstComponent(arg0: java.awt.Container): java.awt.Component
      public getLastComponent(arg0: java.awt.Container): java.awt.Component
      public getDefaultComponent(arg0: java.awt.Container): java.awt.Component
      public setImplicitDownCycleTraversal(arg0: boolean | java.lang.Boolean): void
      public getImplicitDownCycleTraversal(): boolean
      protected setComparator(arg0: java.util.Comparator<unknown>): void
      protected getComparator(): java.util.Comparator<unknown>
      protected accept(arg0: java.awt.Component): boolean
    }
  }
}
