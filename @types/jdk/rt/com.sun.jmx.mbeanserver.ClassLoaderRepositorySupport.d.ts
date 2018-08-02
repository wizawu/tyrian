declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                class ClassLoaderRepositorySupport implements com.sun.jmx.mbeanserver.ModifiableClassLoaderRepository {
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public addClassLoader(arg0: java.lang.ClassLoader): void
                    public removeClassLoader(arg0: java.lang.ClassLoader): void
                    public addClassLoader(arg0: javax.management.ObjectName, arg1: java.lang.ClassLoader): void
                    public removeClassLoader(arg0: javax.management.ObjectName): void
                    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}