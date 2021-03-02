declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicGraphicsUtils {
          public constructor()
          public static drawEtchedRect(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.awt.Color, arg6: java.awt.Color, arg7: java.awt.Color, arg8: java.awt.Color): void
          public static getEtchedInsets(): java.awt.Insets
          public static drawGroove(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.awt.Color, arg6: java.awt.Color): void
          public static getGrooveInsets(): java.awt.Insets
          public static drawBezel(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: boolean | java.lang.Boolean, arg6: boolean | java.lang.Boolean, arg7: java.awt.Color, arg8: java.awt.Color, arg9: java.awt.Color, arg10: java.awt.Color): void
          public static drawLoweredBezel(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.awt.Color, arg6: java.awt.Color, arg7: java.awt.Color, arg8: java.awt.Color): void
          public static drawString(arg0: java.awt.Graphics, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
          public static drawStringUnderlineCharAt(arg0: java.awt.Graphics, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
          public static drawDashedRect(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
          public static getPreferredButtonSize(arg0: javax.swing.AbstractButton, arg1: number | java.lang.Integer): java.awt.Dimension
          static isLeftToRight(arg0: java.awt.Component): boolean
          static isMenuShortcutKeyDown(arg0: java.awt.event.InputEvent): boolean
          public static drawString(arg0: javax.swing.JComponent, arg1: java.awt.Graphics2D, arg2: java.lang.String | string, arg3: number | java.lang.Float, arg4: number | java.lang.Float): void
          public static drawStringUnderlineCharAt(arg0: javax.swing.JComponent, arg1: java.awt.Graphics2D, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Float, arg5: number | java.lang.Float): void
          public static getClippedString(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: number | java.lang.Integer): java.lang.String
          public static getStringWidth(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String | string): number
        }

      }
    }
  }
}
