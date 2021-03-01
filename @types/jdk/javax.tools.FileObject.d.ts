declare namespace javax {
  namespace tools {

    interface FileObject {

      toUri(): java.net.URI
      getName(): java.lang.String
      openInputStream(): java.io.InputStream
      openOutputStream(): java.io.OutputStream
      openReader(arg0: boolean): java.io.Reader
      getCharContent(arg0: boolean): java.lang.CharSequence
      openWriter(): java.io.Writer
      getLastModified(): long
      delete(): boolean
    }

  }
}
