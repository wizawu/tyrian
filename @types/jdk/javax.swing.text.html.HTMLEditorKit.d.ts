declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class HTMLEditorKit extends javax.swing.text.StyledEditorKit implements javax.accessibility.Accessible {
          public static readonly DEFAULT_CSS: java.lang.String
          input: javax.swing.text.MutableAttributeSet
          public static readonly BOLD_ACTION: java.lang.String
          public static readonly ITALIC_ACTION: java.lang.String
          public static readonly PARA_INDENT_LEFT: java.lang.String
          public static readonly PARA_INDENT_RIGHT: java.lang.String
          public static readonly FONT_CHANGE_BIGGER: java.lang.String
          public static readonly FONT_CHANGE_SMALLER: java.lang.String
          public static readonly COLOR_ACTION: java.lang.String
          public static readonly LOGICAL_STYLE_ACTION: java.lang.String
          public static readonly IMG_ALIGN_TOP: java.lang.String
          public static readonly IMG_ALIGN_MIDDLE: java.lang.String
          public static readonly IMG_ALIGN_BOTTOM: java.lang.String
          public static readonly IMG_BORDER: java.lang.String
          public constructor()
          public getContentType(): java.lang.String
          public getViewFactory(): javax.swing.text.ViewFactory
          public createDefaultDocument(): javax.swing.text.Document
          public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: number | java.lang.Integer): void
          public insertHTML(
            arg0: javax.swing.text.html.HTMLDocument,
            arg1: number | java.lang.Integer,
            arg2: java.lang.String | string,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: javax.swing.text.html.HTML$Tag
          ): void
          public write(
            arg0: java.io.Writer,
            arg1: javax.swing.text.Document,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
          public install(arg0: javax.swing.JEditorPane): void
          public deinstall(arg0: javax.swing.JEditorPane): void
          public setStyleSheet(arg0: javax.swing.text.html.StyleSheet): void
          public getStyleSheet(): javax.swing.text.html.StyleSheet
          static getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
          public getActions(): javax.swing.Action[]
          protected createInputAttributes(
            arg0: javax.swing.text.Element,
            arg1: javax.swing.text.MutableAttributeSet
          ): void
          public getInputAttributes(): javax.swing.text.MutableAttributeSet
          public setDefaultCursor(arg0: java.awt.Cursor): void
          public getDefaultCursor(): java.awt.Cursor
          public setLinkCursor(arg0: java.awt.Cursor): void
          public getLinkCursor(): java.awt.Cursor
          public isAutoFormSubmission(): boolean
          public setAutoFormSubmission(arg0: boolean | java.lang.Boolean): void
          public clone(): java.lang.Object
          protected getParser(): javax.swing.text.html.HTMLEditorKit$Parser
          public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
      }
    }
  }
}
