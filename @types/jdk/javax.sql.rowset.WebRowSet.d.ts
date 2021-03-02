declare namespace javax {
  namespace sql {
    namespace rowset {

      interface WebRowSet extends javax.sql.rowset.CachedRowSet {
        public static readonly PUBLIC_XML_SCHEMA: java.lang.String
        public static readonly SCHEMA_SYSTEM_ID: java.lang.String
        readXml(arg0: java.io.Reader): void
        readXml(arg0: java.io.InputStream): void
        writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer): void
        writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream): void
        writeXml(arg0: java.io.Writer): void
        writeXml(arg0: java.io.OutputStream): void
      }

    }
  }
}
