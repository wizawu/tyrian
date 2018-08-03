declare namespace com {
    namespace sun {
        namespace rowset {
            class WebRowSetImpl extends com.sun.rowset.CachedRowSetImpl implements javax.sql.rowset.WebRowSet {
                public constructor()
                public constructor(arg0: java.util.Hashtable)
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer): void
                public writeXml(arg0: java.io.Writer): void
                public readXml(arg0: java.io.Reader): void
                public readXml(arg0: java.io.InputStream): void
                public writeXml(arg0: java.io.OutputStream): void
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream): void
                public static class: java.lang.Class<any>
            }
        }
    }
}