declare namespace javax {
    namespace swing {
        namespace text {
            abstract class EditorKit implements java.lang.Cloneable , java.io.Serializable {
                public constructor()
                public clone(): java.lang.Object
                public install(arg0: javax.swing.JEditorPane): void
                public deinstall(arg0: javax.swing.JEditorPane): void
                public getContentType(): string
                public getViewFactory(): javax.swing.text.ViewFactory
                public getActions(): javax.swing.Action[]
                public createCaret(): javax.swing.text.Caret
                public createDefaultDocument(): javax.swing.text.Document
                public read(arg0: java.io.InputStream, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}