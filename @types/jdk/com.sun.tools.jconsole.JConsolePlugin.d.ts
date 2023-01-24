declare namespace com {
  namespace sun {
    namespace tools {
      namespace jconsole {
        abstract class JConsolePlugin {
          protected constructor()
          public setContext(arg0: com.sun.tools.jconsole.JConsoleContext): void
          public getContext(): com.sun.tools.jconsole.JConsoleContext
          public abstract getTabs(): java.util.Map<java.lang.String, javax.swing.JPanel>
          public abstract newSwingWorker(): javax.swing.SwingWorker<unknown, unknown>
          public dispose(): void
          public addContextPropertyChangeListener(
            arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
          ): void
          public removeContextPropertyChangeListener(
            arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
          ): void
        }
      }
    }
  }
}
