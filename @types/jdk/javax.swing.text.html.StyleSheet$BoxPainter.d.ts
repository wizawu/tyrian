declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class StyleSheet$BoxPainter implements java.io.Serializable {
          topMargin: float
          bottomMargin: float
          leftMargin: float
          rightMargin: float
          marginFlags: short
          border: javax.swing.border.Border
          binsets: java.awt.Insets
          css: javax.swing.text.html.CSS
          ss: javax.swing.text.html.StyleSheet
          bg: java.awt.Color
          bgPainter: javax.swing.text.html.StyleSheet$BackgroundImagePainter
          constructor(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.CSS, arg2: javax.swing.text.html.StyleSheet)
          getBorder(arg0: javax.swing.text.AttributeSet): javax.swing.border.Border
          getBorderColor(arg0: javax.swing.text.AttributeSet): java.awt.Color
          public getInset(arg0: int, arg1: javax.swing.text.View): float
          public paint(arg0: java.awt.Graphics, arg1: float, arg2: float, arg3: float, arg4: float, arg5: javax.swing.text.View): void
          getLength(arg0: javax.swing.text.html.CSS$Attribute, arg1: javax.swing.text.AttributeSet): float
          static isLeftToRight(arg0: javax.swing.text.View): boolean
          static isOrientationAware(arg0: javax.swing.text.View): boolean
          getOrientationMargin(arg0: javax.swing.text.html.StyleSheet$BoxPainter$HorizontalMargin, arg1: float, arg2: javax.swing.text.AttributeSet, arg3: boolean): float
        }

      }
    }
  }
}
