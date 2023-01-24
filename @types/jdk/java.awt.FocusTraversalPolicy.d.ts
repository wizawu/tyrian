declare namespace java {
  namespace awt {
    abstract class FocusTraversalPolicy {
      public constructor()
      public abstract getComponentAfter(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public abstract getComponentBefore(arg0: java.awt.Container, arg1: java.awt.Component): java.awt.Component
      public abstract getFirstComponent(arg0: java.awt.Container): java.awt.Component
      public abstract getLastComponent(arg0: java.awt.Container): java.awt.Component
      public abstract getDefaultComponent(arg0: java.awt.Container): java.awt.Component
      public getInitialComponent(arg0: java.awt.Window): java.awt.Component
    }
  }
}
