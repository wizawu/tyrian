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
          constructor(
            arg0: javax.swing.text.AttributeSet,
            arg1: javax.swing.text.html.CSS,
            arg2: javax.swing.text.html.StyleSheet
          )
          getBorder(arg0: javax.swing.text.AttributeSet): javax.swing.border.Border
          getBorderColor(arg0: javax.swing.text.AttributeSet): java.awt.Color
          public getInset(arg0: number | java.lang.Integer, arg1: javax.swing.text.View): number
          public paint(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float,
            arg4: number | java.lang.Float,
            arg5: javax.swing.text.View
          ): void
          getLength(arg0: javax.swing.text.html.CSS$Attribute, arg1: javax.swing.text.AttributeSet): number
          static isLeftToRight(arg0: javax.swing.text.View): boolean
          static isOrientationAware(arg0: javax.swing.text.View): boolean
          getOrientationMargin(
            arg0: javax.swing.text.html.StyleSheet$BoxPainter$HorizontalMargin,
            arg1: number | java.lang.Float,
            arg2: javax.swing.text.AttributeSet,
            arg3: boolean | java.lang.Boolean
          ): number
        }
      }
    }
  }
}
