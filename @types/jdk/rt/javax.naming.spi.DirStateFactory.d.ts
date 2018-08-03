declare namespace javax {
    namespace naming {
        namespace spi {
            interface DirStateFactory extends javax.naming.spi.StateFactory {
                getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
            }
            interface DirStateFactory$$Lambda extends javax.naming.spi.StateFactory {
                (arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
            }
        }
    }
}