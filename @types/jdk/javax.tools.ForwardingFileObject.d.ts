declare namespace javax {
  namespace tools {
    class ForwardingFileObject<F extends javax.tools.FileObject> implements javax.tools.FileObject {
      protected readonly fileObject: F
      protected constructor(arg0: F)
      public toUri(): java.net.URI
      public getName(): java.lang.String
      public openInputStream(): java.io.InputStream
      public openOutputStream(): java.io.OutputStream
      public openReader(arg0: boolean | java.lang.Boolean): java.io.Reader
      public getCharContent(arg0: boolean | java.lang.Boolean): string
      public openWriter(): java.io.Writer
      public getLastModified(): number
      public delete(): boolean
    }
  }
}
