declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        interface SynthIcon extends javax.swing.Icon {
          paintIcon(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          getIconWidth(arg0: javax.swing.plaf.synth.SynthContext): int
          getIconHeight(arg0: javax.swing.plaf.synth.SynthContext): int
          paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
          getIconWidth(): int
          getIconHeight(): int
        }

      }
    }
  }
}
