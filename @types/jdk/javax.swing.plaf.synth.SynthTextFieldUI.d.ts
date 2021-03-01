declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthTextFieldUI extends javax.swing.plaf.basic.BasicTextFieldUI implements javax.swing.plaf.synth.SynthUI {

          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          static updateStyle(arg0: javax.swing.text.JTextComponent, arg1: javax.swing.plaf.synth.SynthContext, arg2: java.lang.String): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          paintBackground(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: javax.swing.JComponent): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          protected paintBackground(arg0: java.awt.Graphics): void
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          static access$000(arg0: javax.swing.plaf.synth.SynthTextFieldUI): javax.swing.text.JTextComponent
          static access$100(arg0: javax.swing.plaf.synth.SynthTextFieldUI): javax.swing.text.JTextComponent
        }

      }
    }
  }
}
