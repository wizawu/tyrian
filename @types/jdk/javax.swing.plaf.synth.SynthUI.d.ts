declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        interface SynthUI extends javax.swing.plaf.synth.SynthConstants {

          getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        }

      }
    }
  }
}
