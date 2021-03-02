declare namespace java {
  namespace sql {

    interface SQLXML {
      free(): void
      getBinaryStream(): java.io.InputStream
      setBinaryStream(): java.io.OutputStream
      getCharacterStream(): java.io.Reader
      setCharacterStream(): java.io.Writer
      getString(): java.lang.String
      setString(arg0: java.lang.String): void
      getSource<T extends javax.xml.transform.Source>(arg0: java.lang.Class<T>): T
      setResult<T extends javax.xml.transform.Result>(arg0: java.lang.Class<T>): T
    }

  }
}
