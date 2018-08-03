declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
                class WebRowSetXmlWriter implements javax.sql.rowset.spi.XmlWriter , java.io.Serializable {
                    public constructor()
                    public writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Writer): void
                    public writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public writeData(arg0: javax.sql.RowSetInternal): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}