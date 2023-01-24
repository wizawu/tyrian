declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicRootPaneUI extends javax.swing.plaf.RootPaneUI implements java.beans.PropertyChangeListener {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(arg0: javax.swing.JRootPane): void
          protected installComponents(arg0: javax.swing.JRootPane): void
          protected installListeners(arg0: javax.swing.JRootPane): void
          protected installKeyboardActions(arg0: javax.swing.JRootPane): void
          protected uninstallDefaults(arg0: javax.swing.JRootPane): void
          protected uninstallComponents(arg0: javax.swing.JRootPane): void
          protected uninstallListeners(arg0: javax.swing.JRootPane): void
          protected uninstallKeyboardActions(arg0: javax.swing.JRootPane): void
          getInputMap(arg0: number | java.lang.Integer, arg1: javax.swing.JComponent): javax.swing.InputMap
          createInputMap(arg0: number | java.lang.Integer, arg1: javax.swing.JComponent): javax.swing.ComponentInputMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          updateDefaultButtonBindings(arg0: javax.swing.JRootPane): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        }
      }
    }
  }
}
