declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthRadioButtonUI extends javax.swing.plaf.synth.SynthToggleButtonUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected getPropertyPrefix(): java.lang.String
          protected getSizingIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
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
