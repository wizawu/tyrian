declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthTextAreaUI extends javax.swing.plaf.basic.BasicTextAreaUI implements javax.swing.plaf.synth.SynthUI {

          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintBackground(arg0: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthTextAreaUI): javax.swing.text.JTextComponent
          static access$100(arg0: javax.swing.plaf.synth.SynthTextAreaUI): javax.swing.text.JTextComponent
        }

      }
    }
  }
}
