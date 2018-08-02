declare namespace javax {
    namespace naming {
        namespace spi {
            interface ObjectFactory {
                getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
            interface ObjectFactory$$Lambda {
                (arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
        }
    }
}