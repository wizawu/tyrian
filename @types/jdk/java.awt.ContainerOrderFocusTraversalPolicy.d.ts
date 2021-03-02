declare namespace java {
  namespace awt {

    class ContainerOrderFocusTraversalPolicy extends java.awt.FocusTraversalPolicy implements java.io.Serializable {
      public constructor()
      public getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public getFirstComponent(arg0: java.awt.Container): java.awt.Component
      public getLastComponent(arg0: java.awt.Container): java.awt.Component
      public getDefaultComponent(arg0: java.awt.Container): java.awt.Component
      public setImplicitDownCycleTraversal(arg0: boolean | java.lang.Boolean): void
      public getImplicitDownCycleTraversal(): boolean
      protected accept(arg0: java.awt.Component): boolean
    }

  }
}
