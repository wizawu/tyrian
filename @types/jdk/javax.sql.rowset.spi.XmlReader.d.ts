declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace spi {
        interface XmlReader extends javax.sql.RowSetReader {
          readXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Reader): void
        }
      }
    }
  }
}
