declare namespace javax {
    namespace naming {
        namespace spi {
            interface StateFactory {
                getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
            interface StateFactory$$Lambda {
                (arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
        }
    }
}