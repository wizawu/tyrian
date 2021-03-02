declare namespace javax {
  namespace swing {
    namespace text {
      namespace rtf {

        class RTFEditorKit extends javax.swing.text.StyledEditorKit {
          public constructor()
          public getContentType(): java.lang.String
          public read(arg0: java.io.InputStream, arg1: javax.swing.text.Document, arg2: number | java.lang.Integer): void
          public write(arg0: java.io.OutputStream, arg1: javax.swing.text.Document, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
          public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: number | java.lang.Integer): void
          public write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        }

      }
    }
  }
}
