declare namespace com {
    namespace sun {
        namespace jmx {
            namespace interceptor {
                interface MBeanServerInterceptor extends javax.management.MBeanServer {
                    instantiate(arg0: java.lang.String | string): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                    deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                    deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                    getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                }
            }
        }
    }
}