declare namespace javax {
    namespace swing {
        class JEditorPane extends javax.swing.text.JTextComponent {
            public static W3C_LENGTH_UNITS: string
            public static HONOR_DISPLAY_PROPERTIES: string
            public constructor()
            public constructor(arg0: java.net.URL)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public addHyperlinkListener(arg0: javax.swing.event.HyperlinkListener): void
            public removeHyperlinkListener(arg0: javax.swing.event.HyperlinkListener): void
            public getHyperlinkListeners(): javax.swing.event.HyperlinkListener[]
            public fireHyperlinkUpdate(arg0: javax.swing.event.HyperlinkEvent): void
            public setPage(arg0: java.net.URL): void
            public read(arg0: java.io.InputStream, arg1: java.lang.Object): void
            protected getStream(arg0: java.net.URL): java.io.InputStream
            public scrollToReference(arg0: java.lang.String | string): void
            public getPage(): java.net.URL
            public setPage(arg0: java.lang.String | string): void
            public getUIClassID(): string
            protected createDefaultEditorKit(): javax.swing.text.EditorKit
            public getEditorKit(): javax.swing.text.EditorKit
            public getContentType(): string
            public setContentType(arg0: java.lang.String | string): void
            public setEditorKit(arg0: javax.swing.text.EditorKit): void
            public getEditorKitForContentType(arg0: java.lang.String | string): javax.swing.text.EditorKit
            public setEditorKitForContentType(arg0: java.lang.String | string, arg1: javax.swing.text.EditorKit): void
            public replaceSelection(arg0: java.lang.String | string): void
            public static createEditorKitForContentType(arg0: java.lang.String | string): javax.swing.text.EditorKit
            public static registerEditorKitForContentType(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public static registerEditorKitForContentType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): void
            public static getEditorKitClassNameForContentType(arg0: java.lang.String | string): string
            public getPreferredSize(): java.awt.Dimension
            public setText(arg0: java.lang.String | string): void
            public getText(): string
            public getScrollableTracksViewportWidth(): boolean
            public getScrollableTracksViewportHeight(): boolean
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}