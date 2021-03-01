declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicSpinnerUI extends javax.swing.plaf.SpinnerUI {

          protected spinner: javax.swing.JSpinner
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installNextButtonListeners(arg0: java.awt.Component): void
          protected installPreviousButtonListeners(arg0: java.awt.Component): void
          protected createLayout(): java.awt.LayoutManager
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected createPreviousButton(): java.awt.Component
          protected createNextButton(): java.awt.Component
          protected createEditor(): javax.swing.JComponent
          protected replaceEditor(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent): void
          protected installKeyboardActions(): void
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
        }

      }
    }
  }
}
