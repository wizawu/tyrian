declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class StyleSheet$ListPainter implements java.io.Serializable {
          static readonly romanChars: char[][]
          imageurl: java.net.URL
          img: javax.swing.Icon
          constructor(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.StyleSheet)
          public paint(arg0: java.awt.Graphics, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: javax.swing.text.View, arg6: number | java.lang.Integer): void
          drawIcon(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Float, arg6: java.awt.Component): void
          drawShape(arg0: java.awt.Graphics, arg1: javax.swing.text.html.CSS$Value, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Float): void
          drawLetter(arg0: java.awt.Graphics, arg1: string | java.lang.Character, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Float, arg7: number | java.lang.Integer): void
          formatItemNum(arg0: number | java.lang.Integer, arg1: string | java.lang.Character): java.lang.String
          formatAlphaNumerals(arg0: number | java.lang.Integer): java.lang.String
          formatRomanNumerals(arg0: number | java.lang.Integer): java.lang.String
          formatRomanNumerals(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
          formatRomanDigit(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        }

      }
    }
  }
}
