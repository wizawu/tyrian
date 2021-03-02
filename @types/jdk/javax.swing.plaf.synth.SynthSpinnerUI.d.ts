declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthSpinnerUI extends javax.swing.plaf.basic.BasicSpinnerUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected createLayout(): java.awt.LayoutManager
          protected createPreviousButton(): java.awt.Component
          protected createNextButton(): java.awt.Component
          protected createEditor(): javax.swing.JComponent
          protected replaceEditor(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthSpinnerUI): javax.swing.JSpinner
          static access$100(arg0: javax.swing.plaf.synth.SynthSpinnerUI): javax.swing.JSpinner
        }

      }
    }
  }
}
