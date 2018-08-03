declare namespace javax {
    namespace swing {
        namespace text {
            abstract class EditorKit implements java.lang.Cloneable , java.io.Serializable {
                public constructor()
                public clone(): java.lang.Object
                public install(arg0: javax.swing.JEditorPane): void
                public deinstall(arg0: javax.swing.JEditorPane): void
                public abstract getContentType(): string
                public abstract getViewFactory(): javax.swing.text.ViewFactory
                public abstract getActions(): javax.swing.Action[]
                public abstract createCaret(): javax.swing.text.Caret
                public abstract createDefaultDocument(): javax.swing.text.Document
                public abstract read(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: javax.swing.text.Document, arg2: int): void
                public abstract write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public abstract read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
                public abstract write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}