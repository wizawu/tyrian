declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthGraphicsUtils {

          public constructor()
          public drawLine(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): void
          public drawLine(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.lang.Object): void
          public layoutText(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.FontMetrics, arg2: java.lang.String, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Rectangle, arg9: java.awt.Rectangle, arg10: java.awt.Rectangle, arg11: int): java.lang.String
          public computeStringWidth(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Font, arg2: java.awt.FontMetrics, arg3: java.lang.String): int
          public getMinimumSize(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Font, arg2: java.lang.String, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Font, arg2: java.lang.String, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int): java.awt.Dimension
          public getMaximumCharHeight(arg0: javax.swing.plaf.synth.SynthContext): int
          public getPreferredSize(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Font, arg2: java.lang.String, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int): java.awt.Dimension
          public paintText(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.lang.String, arg3: java.awt.Rectangle, arg4: int): void
          public paintText(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.lang.String, arg3: int, arg4: int, arg5: int): void
          public paintText(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.lang.String, arg3: javax.swing.Icon, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int): void
          public static getIconWidth(arg0: javax.swing.Icon, arg1: javax.swing.plaf.synth.SynthContext): int
          public static getIconHeight(arg0: javax.swing.Icon, arg1: javax.swing.plaf.synth.SynthContext): int
          public static paintIcon(arg0: javax.swing.Icon, arg1: javax.swing.plaf.synth.SynthContext, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): void
          static getPreferredMenuItemSize(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.SynthContext, arg2: javax.swing.JComponent, arg3: javax.swing.Icon, arg4: javax.swing.Icon, arg5: int, arg6: java.lang.String, arg7: boolean, arg8: java.lang.String): java.awt.Dimension
          static applyInsets(arg0: java.awt.Rectangle, arg1: java.awt.Insets, arg2: boolean): void
          static paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.SynthContext, arg2: java.awt.Graphics, arg3: javax.swing.Icon, arg4: javax.swing.Icon, arg5: java.lang.String, arg6: int, arg7: java.lang.String): void
          static paintMenuItem(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
          static paintBackground(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper): void
          static paintBackground(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: javax.swing.JComponent): void
          static paintIcon(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
          static paintCheckIcon(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
          static paintAccText(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
          static paintText(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
          static paintArrowIcon(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper, arg2: sun.swing.MenuItemLayoutHelper$LayoutResult): void
        }

      }
    }
  }
}
