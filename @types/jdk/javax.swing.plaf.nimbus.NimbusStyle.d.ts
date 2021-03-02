declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {

        class NimbusStyle extends javax.swing.plaf.synth.SynthStyle {
          public static readonly LARGE_KEY: java.lang.String
          public static readonly SMALL_KEY: java.lang.String
          public static readonly MINI_KEY: java.lang.String
          public static readonly LARGE_SCALE: double
          public static readonly SMALL_SCALE: double
          public static readonly MINI_SCALE: double
          static readonly $assertionsDisabled: boolean
          constructor(arg0: java.lang.String, arg1: javax.swing.JComponent)
          public installDefaults(arg0: javax.swing.plaf.synth.SynthContext): void
          public getInsets(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Insets): java.awt.Insets
          protected getColorForState(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.ColorType): java.awt.Color
          protected getFontForState(arg0: javax.swing.plaf.synth.SynthContext): java.awt.Font
          public getPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthPainter
          public isOpaque(arg0: javax.swing.plaf.synth.SynthContext): boolean
          public get(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object): java.lang.Object
          public getBackgroundPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<java.lang.Object>
          public getForegroundPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<java.lang.Object>
          public getBorderPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<java.lang.Object>
        }

      }
    }
  }
}
