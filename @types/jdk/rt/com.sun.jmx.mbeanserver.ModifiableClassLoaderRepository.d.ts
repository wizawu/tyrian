declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                interface ModifiableClassLoaderRepository extends javax.management.loading.ClassLoaderRepository {
                    addClassLoader(arg0: java.lang.ClassLoader): void
                    removeClassLoader(arg0: java.lang.ClassLoader): void
                    addClassLoader(arg0: javax.management.ObjectName, arg1: java.lang.ClassLoader): void
                    removeClassLoader(arg0: javax.management.ObjectName): void
                    getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                }
            }
        }
    }
}