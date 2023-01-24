declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthGraphicsUtils {
          public constructor()
          public drawLine(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.lang.Object | any,
            arg2: java.awt.Graphics,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          public drawLine(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.lang.Object | any,
            arg2: java.awt.Graphics,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: java.lang.Object | any
          ): void
          public layoutText(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.FontMetrics,
            arg2: java.lang.String | string,
            arg3: javax.swing.Icon,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: java.awt.Rectangle,
            arg9: java.awt.Rectangle,
            arg10: java.awt.Rectangle,
            arg11: number | java.lang.Integer
          ): java.lang.String
          public computeStringWidth(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Font,
            arg2: java.awt.FontMetrics,
            arg3: java.lang.String | string
          ): number
          public getMinimumSize(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Font,
            arg2: java.lang.String | string,
            arg3: javax.swing.Icon,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: number | java.lang.Integer,
            arg9: number | java.lang.Integer
          ): java.awt.Dimension
          public getMaximumSize(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Font,
            arg2: java.lang.String | string,
            arg3: javax.swing.Icon,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: number | java.lang.Integer,
            arg9: number | java.lang.Integer
          ): java.awt.Dimension
          public getMaximumCharHeight(arg0: javax.swing.plaf.synth.SynthContext): number
          public getPreferredSize(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Font,
            arg2: java.lang.String | string,
            arg3: javax.swing.Icon,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: number | java.lang.Integer,
            arg9: number | java.lang.Integer
          ): java.awt.Dimension
          public paintText(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: java.lang.String | string,
            arg3: java.awt.Rectangle,
            arg4: number | java.lang.Integer
          ): void
          public paintText(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: java.lang.String | string,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          public paintText(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: java.lang.String | string,
            arg3: javax.swing.Icon,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer,
            arg7: number | java.lang.Integer,
            arg8: number | java.lang.Integer,
            arg9: number | java.lang.Integer,
            arg10: number | java.lang.Integer
          ): void
          public static getIconWidth(arg0: javax.swing.Icon, arg1: javax.swing.plaf.synth.SynthContext): number
          public static getIconHeight(arg0: javax.swing.Icon, arg1: javax.swing.plaf.synth.SynthContext): number
          public static paintIcon(
            arg0: javax.swing.Icon,
            arg1: javax.swing.plaf.synth.SynthContext,
            arg2: java.awt.Graphics,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer,
            arg6: number | java.lang.Integer
          ): void
          static getPreferredMenuItemSize(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: javax.swing.plaf.synth.SynthContext,
            arg2: javax.swing.JComponent,
            arg3: javax.swing.Icon,
            arg4: javax.swing.Icon,
            arg5: number | java.lang.Integer,
            arg6: java.lang.String | string,
            arg7: boolean | java.lang.Boolean,
            arg8: java.lang.String | string
          ): java.awt.Dimension
          static applyInsets(arg0: java.awt.Rectangle, arg1: java.awt.Insets, arg2: boolean | java.lang.Boolean): void
          static paint(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: javax.swing.plaf.synth.SynthContext,
            arg2: java.awt.Graphics,
            arg3: javax.swing.Icon,
            arg4: javax.swing.Icon,
            arg5: java.lang.String | string,
            arg6: number | java.lang.Integer,
            arg7: java.lang.String | string
          ): void
          static paintMenuItem(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
          static paintBackground(arg0: java.awt.Graphics, arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper): void
          static paintBackground(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: javax.swing.JComponent
          ): void
          static paintIcon(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
          static paintCheckIcon(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
          static paintAccText(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
          static paintText(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
          static paintArrowIcon(
            arg0: java.awt.Graphics,
            arg1: javax.swing.plaf.synth.SynthMenuItemLayoutHelper,
            arg2: sun.swing.MenuItemLayoutHelper$LayoutResult
          ): void
        }
      }
    }
  }
}
