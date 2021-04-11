declare namespace javax {
  namespace tools {

    interface FileObject {
      toUri(): java.net.URI
      getName(): java.lang.String
      openInputStream(): java.io.InputStream
      openOutputStream(): java.io.OutputStream
      openReader(arg0: boolean | java.lang.Boolean): java.io.Reader
      getCharContent(arg0: boolean | java.lang.Boolean): string
      openWriter(): java.io.Writer
      getLastModified(): number
      delete(): boolean
    }

  }
}
