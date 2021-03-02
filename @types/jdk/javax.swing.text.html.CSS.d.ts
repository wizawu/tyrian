declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class CSS implements java.io.Serializable {
          static baseFontSizeIndex: int
          public constructor()
          setBaseFontSize(arg0: number | java.lang.Integer): void
          setBaseFontSize(arg0: java.lang.String | string): void
          getBaseFontSize(): number
          addInternalCSSValue(arg0: javax.swing.text.MutableAttributeSet, arg1: javax.swing.text.html.CSS$Attribute, arg2: java.lang.String | string): void
          getInternalCSSValue(arg0: javax.swing.text.html.CSS$Attribute, arg1: java.lang.String | string): java.lang.Object
          styleConstantsKeyToCSSKey(arg0: javax.swing.text.StyleConstants): javax.swing.text.html.CSS$Attribute
          styleConstantsValueToCSSValue(arg0: javax.swing.text.StyleConstants, arg1: java.lang.Object | any): java.lang.Object
          cssValueToStyleConstantsValue(arg0: javax.swing.text.StyleConstants, arg1: java.lang.Object | any): java.lang.Object
          getFont(arg0: javax.swing.text.StyleContext, arg1: javax.swing.text.AttributeSet, arg2: number | java.lang.Integer, arg3: javax.swing.text.html.StyleSheet): java.awt.Font
          static getFontSize(arg0: javax.swing.text.AttributeSet, arg1: number | java.lang.Integer, arg2: javax.swing.text.html.StyleSheet): number
          getColor(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.CSS$Attribute): java.awt.Color
          getPointSize(arg0: java.lang.String | string, arg1: javax.swing.text.html.StyleSheet): number
          getLength(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.CSS$Attribute, arg2: javax.swing.text.html.StyleSheet): number
          translateHTMLToCSS(arg0: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
          public static getAllAttributeKeys(): javax.swing.text.html.CSS$Attribute[]
          public static getAttribute(arg0: java.lang.String | string): javax.swing.text.html.CSS$Attribute
          static getValue(arg0: java.lang.String | string): javax.swing.text.html.CSS$Value
          static getURL(arg0: java.net.URL, arg1: java.lang.String | string): java.net.URL
          static colorToHex(arg0: java.awt.Color): java.lang.String
          static hexToColor(arg0: java.lang.String | string): java.awt.Color
          static stringToColor(arg0: java.lang.String | string): java.awt.Color
          static getIndexOfSize(arg0: number | java.lang.Float, arg1: int[]): number
          static getIndexOfSize(arg0: number | java.lang.Float, arg1: javax.swing.text.html.StyleSheet): number
          static parseStrings(arg0: java.lang.String | string): java.lang.String[]
          getPointSize(arg0: number | java.lang.Integer, arg1: javax.swing.text.html.StyleSheet): number
          getCssValue(arg0: javax.swing.text.html.CSS$Attribute, arg1: java.lang.String | string): java.lang.Object
          static calculateTiledRequirements(arg0: javax.swing.text.html.CSS$LayoutIterator, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
          static calculateTiledLayout(arg0: javax.swing.text.html.CSS$LayoutIterator, arg1: number | java.lang.Integer): void
        }

      }
    }
  }
}
