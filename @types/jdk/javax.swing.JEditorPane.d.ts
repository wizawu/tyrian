declare namespace javax {
  namespace swing {
    class JEditorPane extends javax.swing.text.JTextComponent {
      static readonly PostDataProperty: java.lang.String
      public static readonly W3C_LENGTH_UNITS: java.lang.String
      public static readonly HONOR_DISPLAY_PROPERTIES: java.lang.String
      static readonly defaultEditorKitMap: java.util.Map<java.lang.String, java.lang.String>
      public constructor()
      public constructor(arg0: java.net.URL)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public addHyperlinkListener(
        arg0: javax.swing.event.HyperlinkListener | javax.swing.event.HyperlinkListener$$lambda
      ): void
      public removeHyperlinkListener(
        arg0: javax.swing.event.HyperlinkListener | javax.swing.event.HyperlinkListener$$lambda
      ): void
      public getHyperlinkListeners(): javax.swing.event.HyperlinkListener[]
      public fireHyperlinkUpdate(arg0: javax.swing.event.HyperlinkEvent): void
      public setPage(arg0: java.net.URL): void
      public read(arg0: java.io.InputStream, arg1: java.lang.Object | any): void
      read(arg0: java.io.InputStream, arg1: javax.swing.text.Document): void
      protected getStream(arg0: java.net.URL): java.io.InputStream
      public scrollToReference(arg0: java.lang.String | string): void
      public getPage(): java.net.URL
      public setPage(arg0: java.lang.String | string): void
      public getUIClassID(): java.lang.String
      protected createDefaultEditorKit(): javax.swing.text.EditorKit
      public getEditorKit(): javax.swing.text.EditorKit
      public getContentType(): java.lang.String
      public setContentType(arg0: java.lang.String | string): void
      public setEditorKit(arg0: javax.swing.text.EditorKit): void
      public getEditorKitForContentType(arg0: java.lang.String | string): javax.swing.text.EditorKit
      public setEditorKitForContentType(arg0: java.lang.String | string, arg1: javax.swing.text.EditorKit): void
      public replaceSelection(arg0: java.lang.String | string): void
      public static createEditorKitForContentType(arg0: java.lang.String | string): javax.swing.text.EditorKit
      public static registerEditorKitForContentType(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): void
      public static registerEditorKitForContentType(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.ClassLoader
      ): void
      public static getEditorKitClassNameForContentType(arg0: java.lang.String | string): java.lang.String
      public getPreferredSize(): java.awt.Dimension
      public setText(arg0: java.lang.String | string): void
      public getText(): java.lang.String
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableTracksViewportHeight(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      static access$000(
        arg0: javax.swing.JEditorPane,
        arg1: java.lang.String | string,
        arg2: java.lang.Object | any,
        arg3: java.lang.Object | any
      ): void
    }
  }
}
