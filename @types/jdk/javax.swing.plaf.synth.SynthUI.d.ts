declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        interface SynthUI extends javax.swing.plaf.synth.SynthConstants {
          getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          paintBorder(
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
