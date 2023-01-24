declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        abstract class HTMLEditorKit$HTMLTextAction extends javax.swing.text.StyledEditorKit$StyledTextAction {
          public constructor(arg0: java.lang.String | string)
          protected getHTMLDocument(arg0: javax.swing.JEditorPane): javax.swing.text.html.HTMLDocument
          protected getHTMLEditorKit(arg0: javax.swing.JEditorPane): javax.swing.text.html.HTMLEditorKit
          protected getElementsAt(
            arg0: javax.swing.text.html.HTMLDocument,
            arg1: number | java.lang.Integer
          ): javax.swing.text.Element[]
          protected elementCountToTag(
            arg0: javax.swing.text.html.HTMLDocument,
            arg1: number | java.lang.Integer,
            arg2: javax.swing.text.html.HTML$Tag
          ): number
          protected findElementMatchingTag(
            arg0: javax.swing.text.html.HTMLDocument,
            arg1: number | java.lang.Integer,
            arg2: javax.swing.text.html.HTML$Tag
          ): javax.swing.text.Element
        }
      }
    }
  }
}
