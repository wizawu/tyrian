declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthEditorPaneUI
          extends javax.swing.plaf.basic.BasicEditorPaneUI
          implements javax.swing.plaf.synth.SynthUI
        {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintBackground(arg0: java.awt.Graphics): void
          paintBackground(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: javax.swing.JComponent
          ): void
          public paintBorder(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
        }
      }
    }
  }
}
