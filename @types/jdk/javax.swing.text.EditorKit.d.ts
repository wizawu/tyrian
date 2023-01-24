declare namespace javax {
  namespace swing {
    namespace text {
      abstract class EditorKit implements java.lang.Cloneable, java.io.Serializable {
        public constructor()
        public clone(): java.lang.Object
        public install(arg0: javax.swing.JEditorPane): void
        public deinstall(arg0: javax.swing.JEditorPane): void
        public abstract getContentType(): java.lang.String
        public abstract getViewFactory(): javax.swing.text.ViewFactory
        public abstract getActions(): javax.swing.Action[]
        public abstract createCaret(): javax.swing.text.Caret
        public abstract createDefaultDocument(): javax.swing.text.Document
        public abstract read(
          arg0: java.io.InputStream,
          arg1: javax.swing.text.Document,
          arg2: number | java.lang.Integer
        ): void
        public abstract write(
          arg0: java.io.OutputStream,
          arg1: javax.swing.text.Document,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): void
        public abstract read(
          arg0: java.io.Reader,
          arg1: javax.swing.text.Document,
          arg2: number | java.lang.Integer
        ): void
        public abstract write(
          arg0: java.io.Writer,
          arg1: javax.swing.text.Document,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): void
      }
    }
  }
}
