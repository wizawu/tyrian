declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        interface SynthIcon extends javax.swing.Icon {
          paintIcon(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          getIconWidth(arg0: javax.swing.plaf.synth.SynthContext): number
          getIconHeight(arg0: javax.swing.plaf.synth.SynthContext): number
          paintIcon?(
            arg0: java.awt.Component,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
          getIconWidth?(): number
          getIconHeight?(): number
        }
      }
    }
  }
}
