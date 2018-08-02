declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
class MBeanInstantiator {
    public testCreation(arg0: java.lang.Class<any>): void
    public findClassWithDefaultLoaderRepository(arg0: java.lang.String | string): java.lang.Class<any>
    public findClass(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<any>
    public findClass(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Class<any>
    public findSignatureClasses(arg0: java.lang.String[], arg1: java.lang.ClassLoader): java.lang.Class<any>[]
    public instantiate(arg0: java.lang.Class<any>): java.lang.Object
    public instantiate(arg0: java.lang.Class<any>, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: java.lang.ClassLoader): java.lang.Object
    public deserialize(arg0: java.lang.ClassLoader, arg1: byte[]): java.io.ObjectInputStream
    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[], arg3: java.lang.ClassLoader): java.io.ObjectInputStream
    public instantiate(arg0: java.lang.String | string): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.ClassLoader): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: java.lang.ClassLoader): java.lang.Object
    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[], arg4: java.lang.ClassLoader): java.lang.Object
    public getClassLoaderRepository(): com.sun.jmx.mbeanserver.ModifiableClassLoaderRepository
    public static class: java.lang.Class<any>
}

            }
        }
    }
}