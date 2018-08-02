declare namespace java {
    namespace sql {
interface SQLXML {
    free(): void
    getBinaryStream(): java.io.InputStream
    setBinaryStream(): java.io.OutputStream
    getCharacterStream(): java.io.Reader
    setCharacterStream(): java.io.Writer
    getString(): string
    setString(arg0: java.lang.String | string): void
    getSource<T extends javax.xml.transform.Source>(arg0: java.lang.Class<T>): T
    setResult<T extends javax.xml.transform.Result>(arg0: java.lang.Class<T>): T
}

    }
}