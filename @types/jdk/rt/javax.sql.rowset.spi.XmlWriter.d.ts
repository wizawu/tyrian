declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
                interface XmlWriter extends javax.sql.RowSetWriter {
                    writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Writer): void
                }
                interface XmlWriter$$Lambda extends javax.sql.RowSetWriter {
                    (arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Writer): void
                }
            }
        }
    }
}