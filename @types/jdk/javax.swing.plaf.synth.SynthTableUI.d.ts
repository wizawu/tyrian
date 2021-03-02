declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthTableUI extends javax.swing.plaf.basic.BasicTableUI implements javax.swing.plaf.synth.SynthUI, java.beans.PropertyChangeListener {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        }

      }
    }
  }
}
