declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthPasswordFieldUI extends javax.swing.plaf.synth.SynthTextFieldUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected getPropertyPrefix(): java.lang.String
          public create(arg0: javax.swing.text.Element): javax.swing.text.View
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
          protected installKeyboardActions(): void
        }
      }
    }
  }
}
