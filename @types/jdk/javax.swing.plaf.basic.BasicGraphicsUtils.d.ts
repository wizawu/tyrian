declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicGraphicsUtils {

          public constructor()
          public static drawEtchedRect(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.Color, arg7: java.awt.Color, arg8: java.awt.Color): void
          public static getEtchedInsets(): java.awt.Insets
          public static drawGroove(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.Color): void
          public static getGrooveInsets(): java.awt.Insets
          public static drawBezel(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean, arg6: boolean, arg7: java.awt.Color, arg8: java.awt.Color, arg9: java.awt.Color, arg10: java.awt.Color): void
          public static drawLoweredBezel(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Color, arg6: java.awt.Color, arg7: java.awt.Color, arg8: java.awt.Color): void
          public static drawString(arg0: java.awt.Graphics, arg1: java.lang.String, arg2: int, arg3: int, arg4: int): void
          public static drawStringUnderlineCharAt(arg0: java.awt.Graphics, arg1: java.lang.String, arg2: int, arg3: int, arg4: int): void
          public static drawDashedRect(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
          public static getPreferredButtonSize(arg0: javax.swing.AbstractButton, arg1: int): java.awt.Dimension
          static isLeftToRight(arg0: java.awt.Component): boolean
          static isMenuShortcutKeyDown(arg0: java.awt.event.InputEvent): boolean
          public static drawString(arg0: javax.swing.JComponent, arg1: java.awt.Graphics2D, arg2: java.lang.String, arg3: float, arg4: float): void
          public static drawStringUnderlineCharAt(arg0: javax.swing.JComponent, arg1: java.awt.Graphics2D, arg2: java.lang.String, arg3: int, arg4: float, arg5: float): void
          public static getClippedString(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String, arg3: int): java.lang.String
          public static getStringWidth(arg0: javax.swing.JComponent, arg1: java.awt.FontMetrics, arg2: java.lang.String): float
        }

      }
    }
  }
}
