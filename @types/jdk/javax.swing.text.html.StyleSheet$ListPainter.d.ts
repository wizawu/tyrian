declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class StyleSheet$ListPainter implements java.io.Serializable {
          static readonly romanChars: char[][]
          imageurl: java.net.URL
          img: javax.swing.Icon
          constructor(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.StyleSheet)
          public paint(arg0: java.awt.Graphics, arg1: float, arg2: float, arg3: float, arg4: float, arg5: javax.swing.text.View, arg6: int): void
          drawIcon(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: float, arg6: java.awt.Component): void
          drawShape(arg0: java.awt.Graphics, arg1: javax.swing.text.html.CSS$Value, arg2: int, arg3: int, arg4: int, arg5: int, arg6: float): void
          drawLetter(arg0: java.awt.Graphics, arg1: char, arg2: int, arg3: int, arg4: int, arg5: int, arg6: float, arg7: int): void
          formatItemNum(arg0: int, arg1: char): java.lang.String
          formatAlphaNumerals(arg0: int): java.lang.String
          formatRomanNumerals(arg0: int): java.lang.String
          formatRomanNumerals(arg0: int, arg1: int): java.lang.String
          formatRomanDigit(arg0: int, arg1: int): java.lang.String
        }

      }
    }
  }
}
