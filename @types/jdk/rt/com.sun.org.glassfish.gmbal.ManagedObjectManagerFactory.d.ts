declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
class ManagedObjectManagerFactory {
    public static getMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, ...arg2: java.lang.Class<any>[]): java.lang.reflect.Method
    public static createStandalone(arg0: java.lang.String | string): com.sun.org.glassfish.gmbal.ManagedObjectManager
    public static createFederated(arg0: javax.management.ObjectName): com.sun.org.glassfish.gmbal.ManagedObjectManager
    public static createNOOP(): com.sun.org.glassfish.gmbal.ManagedObjectManager
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}