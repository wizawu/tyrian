declare namespace com {
    namespace ibm {
        namespace oti {
            namespace vm {
                interface VMLangAccess {
                    findClassOrNullHelper(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<any>
                    getExtClassLoader(): java.lang.ClassLoader
                    isAncestor(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
                    getClassloader(arg0: java.lang.Class): java.lang.ClassLoader
                    getPackageName(arg0: java.lang.Class): string
                    getMethodHandleCache(arg0: java.lang.Class<any>): java.lang.Object
                    setMethodHandleCache(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.Object
                    getMethodTypeCache(arg0: java.lang.ClassLoader): java.util.Map<java.lang.String, java.lang.invoke.MethodType>
                    internalGetProperties(): java.util.Properties
                    getSystemPackages(): java.lang.Package[]
                    getSystemPackage(arg0: java.lang.String | string): java.lang.Package
                    createInternalRamClass(arg0: long): java.lang.Object
                    getConstantPool(arg0: java.lang.Object): sun.reflect.ConstantPool
                }
            }
        }
    }
}