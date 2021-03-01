declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        abstract class SynthStyle {

          public constructor()
          public getGraphicsUtils(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthGraphicsUtils
          public getColor(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.ColorType): java.awt.Color
          protected abstract getColorForState(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.ColorType): java.awt.Color
          public getFont(arg0: javax.swing.plaf.synth.SynthContext): java.awt.Font
          protected abstract getFontForState(arg0: javax.swing.plaf.synth.SynthContext): java.awt.Font
          public getInsets(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Insets): java.awt.Insets
          public getPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthPainter
          public isOpaque(arg0: javax.swing.plaf.synth.SynthContext): boolean
          public get(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object): java.lang.Object
          installDefaults(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.SynthUI): void
          public installDefaults(arg0: javax.swing.plaf.synth.SynthContext): void
          public uninstallDefaults(arg0: javax.swing.plaf.synth.SynthContext): void
          public getInt(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object, arg2: int): int
          public getBoolean(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object, arg2: boolean): boolean
          public getIcon(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object): javax.swing.Icon
          public getString(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object, arg2: java.lang.String): java.lang.String
        }

      }
    }
  }
}
