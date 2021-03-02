declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class HTMLWriter extends javax.swing.text.AbstractWriter {
          public constructor(arg0: java.io.Writer, arg1: javax.swing.text.html.HTMLDocument)
          public constructor(arg0: java.io.Writer, arg1: javax.swing.text.html.HTMLDocument, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
          public write(): void
          protected writeAttributes(arg0: javax.swing.text.AttributeSet): void
          protected emptyTag(arg0: javax.swing.text.Element): void
          protected isBlockTag(arg0: javax.swing.text.AttributeSet): boolean
          protected startTag(arg0: javax.swing.text.Element): void
          protected textAreaContent(arg0: javax.swing.text.AttributeSet): void
          protected text(arg0: javax.swing.text.Element): void
          protected selectContent(arg0: javax.swing.text.AttributeSet): void
          protected writeOption(arg0: javax.swing.text.html.Option): void
          protected endTag(arg0: javax.swing.text.Element): void
          protected comment(arg0: javax.swing.text.Element): void
          writeComment(arg0: java.lang.String | string): void
          writeAdditionalComments(): void
          protected synthesizedElement(arg0: javax.swing.text.Element): boolean
          protected matchNameAttribute(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.HTML$Tag): boolean
          protected writeEmbeddedTags(arg0: javax.swing.text.AttributeSet): void
          protected closeOutUnwantedEmbeddedTags(arg0: javax.swing.text.AttributeSet): void
          writeMaps(arg0: java.util.Enumeration<unknown>): void
          writeStyles(arg0: javax.swing.text.html.StyleSheet): void
          writeStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style, arg2: boolean | java.lang.Boolean): boolean
          writeStyleStartTag(): void
          writeStyleEndTag(): void
          convertToHTML(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.MutableAttributeSet): javax.swing.text.AttributeSet
          protected writeLineSeparator(): void
          protected output(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        }

      }
    }
  }
}
