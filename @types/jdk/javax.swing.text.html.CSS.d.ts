declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class CSS implements java.io.Serializable {
          static baseFontSizeIndex: int
          public constructor()
          setBaseFontSize(arg0: int): void
          setBaseFontSize(arg0: java.lang.String): void
          getBaseFontSize(): int
          addInternalCSSValue(arg0: javax.swing.text.MutableAttributeSet, arg1: javax.swing.text.html.CSS$Attribute, arg2: java.lang.String): void
          getInternalCSSValue(arg0: javax.swing.text.html.CSS$Attribute, arg1: java.lang.String): java.lang.Object
          styleConstantsKeyToCSSKey(arg0: javax.swing.text.StyleConstants): javax.swing.text.html.CSS$Attribute
          styleConstantsValueToCSSValue(arg0: javax.swing.text.StyleConstants, arg1: java.lang.Object): java.lang.Object
          cssValueToStyleConstantsValue(arg0: javax.swing.text.StyleConstants, arg1: java.lang.Object): java.lang.Object
          getFont(arg0: javax.swing.text.StyleContext, arg1: javax.swing.text.AttributeSet, arg2: int, arg3: javax.swing.text.html.StyleSheet): java.awt.Font
          static getFontSize(arg0: javax.swing.text.AttributeSet, arg1: int, arg2: javax.swing.text.html.StyleSheet): int
          getColor(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.CSS$Attribute): java.awt.Color
          getPointSize(arg0: java.lang.String, arg1: javax.swing.text.html.StyleSheet): float
          getLength(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.CSS$Attribute, arg2: javax.swing.text.html.StyleSheet): float
          translateHTMLToCSS(arg0: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
          public static getAllAttributeKeys(): javax.swing.text.html.CSS$Attribute[]
          public static getAttribute(arg0: java.lang.String): javax.swing.text.html.CSS$Attribute
          static getValue(arg0: java.lang.String): javax.swing.text.html.CSS$Value
          static getURL(arg0: java.net.URL, arg1: java.lang.String): java.net.URL
          static colorToHex(arg0: java.awt.Color): java.lang.String
          static hexToColor(arg0: java.lang.String): java.awt.Color
          static stringToColor(arg0: java.lang.String): java.awt.Color
          static getIndexOfSize(arg0: float, arg1: int[]): int
          static getIndexOfSize(arg0: float, arg1: javax.swing.text.html.StyleSheet): int
          static parseStrings(arg0: java.lang.String): java.lang.String[]
          getPointSize(arg0: int, arg1: javax.swing.text.html.StyleSheet): float
          getCssValue(arg0: javax.swing.text.html.CSS$Attribute, arg1: java.lang.String): java.lang.Object
          static calculateTiledRequirements(arg0: javax.swing.text.html.CSS$LayoutIterator, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
          static calculateTiledLayout(arg0: javax.swing.text.html.CSS$LayoutIterator, arg1: int): void
        }

      }
    }
  }
}
