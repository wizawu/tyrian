declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class StyleSheet extends javax.swing.text.StyleContext {
          static readonly noBorder: javax.swing.border.Border
          static readonly DEFAULT_FONT_SIZE: int
          static readonly sizeMapDefault: int[]
          public constructor()
          public getRule(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.Element): javax.swing.text.Style
          public getRule(arg0: java.lang.String | string): javax.swing.text.Style
          public addRule(arg0: java.lang.String | string): void
          public getDeclaration(arg0: java.lang.String | string): javax.swing.text.AttributeSet
          public loadRules(arg0: java.io.Reader, arg1: java.net.URL): void
          public getViewAttributes(arg0: javax.swing.text.View): javax.swing.text.AttributeSet
          public removeStyle(arg0: java.lang.String | string): void
          public addStyleSheet(arg0: javax.swing.text.html.StyleSheet): void
          public removeStyleSheet(arg0: javax.swing.text.html.StyleSheet): void
          public getStyleSheets(): javax.swing.text.html.StyleSheet[]
          public importStyleSheet(arg0: java.net.URL): void
          public setBase(arg0: java.net.URL): void
          public getBase(): java.net.URL
          public addCSSAttribute(
            arg0: javax.swing.text.MutableAttributeSet,
            arg1: javax.swing.text.html.CSS$Attribute,
            arg2: java.lang.String | string
          ): void
          public addCSSAttributeFromHTML(
            arg0: javax.swing.text.MutableAttributeSet,
            arg1: javax.swing.text.html.CSS$Attribute,
            arg2: java.lang.String | string
          ): boolean
          public translateHTMLToCSS(arg0: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
          public addAttribute(
            arg0: javax.swing.text.AttributeSet,
            arg1: java.lang.Object | any,
            arg2: java.lang.Object | any
          ): javax.swing.text.AttributeSet
          public addAttributes(
            arg0: javax.swing.text.AttributeSet,
            arg1: javax.swing.text.AttributeSet
          ): javax.swing.text.AttributeSet
          public removeAttribute(
            arg0: javax.swing.text.AttributeSet,
            arg1: java.lang.Object | any
          ): javax.swing.text.AttributeSet
          public removeAttributes(
            arg0: javax.swing.text.AttributeSet,
            arg1: java.util.Enumeration<unknown>
          ): javax.swing.text.AttributeSet
          public removeAttributes(
            arg0: javax.swing.text.AttributeSet,
            arg1: javax.swing.text.AttributeSet
          ): javax.swing.text.AttributeSet
          protected createSmallAttributeSet(
            arg0: javax.swing.text.AttributeSet
          ): javax.swing.text.StyleContext$SmallAttributeSet
          protected createLargeAttributeSet(arg0: javax.swing.text.AttributeSet): javax.swing.text.MutableAttributeSet
          convertAttributeSet(arg0: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
          public getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
          public getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
          public getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
          public getBoxPainter(arg0: javax.swing.text.AttributeSet): javax.swing.text.html.StyleSheet$BoxPainter
          public getListPainter(arg0: javax.swing.text.AttributeSet): javax.swing.text.html.StyleSheet$ListPainter
          public setBaseFontSize(arg0: number | java.lang.Integer): void
          public setBaseFontSize(arg0: java.lang.String | string): void
          public static getIndexOfSize(arg0: number | java.lang.Float): number
          public getPointSize(arg0: number | java.lang.Integer): number
          public getPointSize(arg0: java.lang.String | string): number
          public stringToColor(arg0: java.lang.String | string): java.awt.Color
          getBackgroundImage(arg0: javax.swing.text.AttributeSet): javax.swing.ImageIcon
          addRule(
            arg0: java.lang.String[] | string[],
            arg1: javax.swing.text.AttributeSet,
            arg2: boolean | java.lang.Boolean
          ): void
          getSimpleSelectors(arg0: java.lang.String | string): java.lang.String[]
          cleanSelectorString(arg0: java.lang.String | string): java.lang.String
          static getSpecificity(arg0: java.lang.String | string): number
          rebaseSizeMap(arg0: number | java.lang.Integer): void
          getSizeMap(): number[]
          isW3CLengthUnits(): boolean
        }
      }
    }
  }
}
