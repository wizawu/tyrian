declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                class SecureClassLoaderRepository implements javax.management.loading.ClassLoaderRepository {
                    public constructor(arg0: javax.management.loading.ClassLoaderRepository)
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}