declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class HTMLDocument extends javax.swing.text.DefaultStyledDocument {

          static readonly TokenThreshold: java.lang.String
          public static readonly AdditionalComments: java.lang.String
          static readonly StyleType: java.lang.String
          base: java.net.URL
          hasBaseTag: boolean
          static MAP_PROPERTY: java.lang.String
          public constructor()
          public constructor(arg0: javax.swing.text.html.StyleSheet)
          public constructor(arg0: javax.swing.text.AbstractDocument$Content, arg1: javax.swing.text.html.StyleSheet)
          public getReader(arg0: int): javax.swing.text.html.HTMLEditorKit$ParserCallback
          public getReader(arg0: int, arg1: int, arg2: int, arg3: javax.swing.text.html.HTML$Tag): javax.swing.text.html.HTMLEditorKit$ParserCallback
          getReader(arg0: int, arg1: int, arg2: int, arg3: javax.swing.text.html.HTML$Tag, arg4: boolean): javax.swing.text.html.HTMLEditorKit$ParserCallback
          public getBase(): java.net.URL
          public setBase(arg0: java.net.URL): void
          protected insert(arg0: int, arg1: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
          protected insertUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg1: javax.swing.text.AttributeSet): void
          protected create(arg0: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
          public setParagraphAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet, arg3: boolean): void
          public getStyleSheet(): javax.swing.text.html.StyleSheet
          public getIterator(arg0: javax.swing.text.html.HTML$Tag): javax.swing.text.html.HTMLDocument$Iterator
          protected createLeafElement(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet, arg2: int, arg3: int): javax.swing.text.Element
          protected createBranchElement(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet): javax.swing.text.Element
          protected createDefaultRoot(): javax.swing.text.AbstractDocument$AbstractElement
          public setTokenThreshold(arg0: int): void
          public getTokenThreshold(): int
          public setPreservesUnknownTags(arg0: boolean): void
          public getPreservesUnknownTags(): boolean
          public processHTMLFrameHyperlinkEvent(arg0: javax.swing.text.html.HTMLFrameHyperlinkEvent): void
          static matchNameAttribute(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.HTML$Tag): boolean
          isFrameDocument(): boolean
          setFrameDocumentState(arg0: boolean): void
          addMap(arg0: javax.swing.text.html.Map): void
          removeMap(arg0: javax.swing.text.html.Map): void
          getMap(arg0: java.lang.String): javax.swing.text.html.Map
          getMaps(): java.util.Enumeration<java.lang.Object>
          setDefaultStyleSheetType(arg0: java.lang.String): void
          getDefaultStyleSheetType(): java.lang.String
          public setParser(arg0: javax.swing.text.html.HTMLEditorKit$Parser): void
          public getParser(): javax.swing.text.html.HTMLEditorKit$Parser
          public setInnerHTML(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public setOuterHTML(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public insertAfterStart(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public insertBeforeEnd(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public insertBeforeStart(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public insertAfterEnd(arg0: javax.swing.text.Element, arg1: java.lang.String): void
          public getElement(arg0: java.lang.String): javax.swing.text.Element
          public getElement(arg0: javax.swing.text.Element, arg1: java.lang.Object, arg2: java.lang.Object): javax.swing.text.Element
          obtainLock(): void
          releaseLock(): void
          protected fireChangedUpdate(arg0: javax.swing.event.DocumentEvent): void
          protected fireUndoableEditUpdate(arg0: javax.swing.event.UndoableEditEvent): void
          hasBaseTag(): boolean
          getBaseTarget(): java.lang.String
          static access$000(arg0: javax.swing.text.html.HTMLDocument, arg1: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
          static access$100(arg0: javax.swing.text.html.HTMLDocument): javax.swing.text.AbstractDocument$Content
          static access$200(arg0: javax.swing.text.html.HTMLDocument, arg1: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
          static access$300(arg0: javax.swing.text.html.HTMLDocument, arg1: javax.swing.event.DocumentEvent): void
        }

      }
    }
  }
}
