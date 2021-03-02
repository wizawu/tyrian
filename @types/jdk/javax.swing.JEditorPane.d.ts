declare namespace javax {
  namespace swing {

    class JEditorPane extends javax.swing.text.JTextComponent {
      static readonly PostDataProperty: java.lang.String
      public static readonly W3C_LENGTH_UNITS: java.lang.String
      public static readonly HONOR_DISPLAY_PROPERTIES: java.lang.String
      static readonly defaultEditorKitMap: java.util.Map<java.lang.String,java.lang.String>
      public constructor()
      public constructor(arg0: java.net.URL)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public addHyperlinkListener(arg0: javax.swing.event.HyperlinkListener): void
      public removeHyperlinkListener(arg0: javax.swing.event.HyperlinkListener): void
      public getHyperlinkListeners(): javax.swing.event.HyperlinkListener[]
      public fireHyperlinkUpdate(arg0: javax.swing.event.HyperlinkEvent): void
      public setPage(arg0: java.net.URL): void
      public read(arg0: java.io.InputStream, arg1: java.lang.Object): void
      read(arg0: java.io.InputStream, arg1: javax.swing.text.Document): void
      protected getStream(arg0: java.net.URL): java.io.InputStream
      public scrollToReference(arg0: java.lang.String): void
      public getPage(): java.net.URL
      public setPage(arg0: java.lang.String): void
      public getUIClassID(): java.lang.String
      protected createDefaultEditorKit(): javax.swing.text.EditorKit
      public getEditorKit(): javax.swing.text.EditorKit
      public getContentType(): java.lang.String
      public setContentType(arg0: java.lang.String): void
      public setEditorKit(arg0: javax.swing.text.EditorKit): void
      public getEditorKitForContentType(arg0: java.lang.String): javax.swing.text.EditorKit
      public setEditorKitForContentType(arg0: java.lang.String, arg1: javax.swing.text.EditorKit): void
      public replaceSelection(arg0: java.lang.String): void
      public static createEditorKitForContentType(arg0: java.lang.String): javax.swing.text.EditorKit
      public static registerEditorKitForContentType(arg0: java.lang.String, arg1: java.lang.String): void
      public static registerEditorKitForContentType(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.ClassLoader): void
      public static getEditorKitClassNameForContentType(arg0: java.lang.String): java.lang.String
      public getPreferredSize(): java.awt.Dimension
      public setText(arg0: java.lang.String): void
      public getText(): java.lang.String
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableTracksViewportHeight(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      static access$000(arg0: javax.swing.JEditorPane, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.lang.Object): void
    }

  }
}
