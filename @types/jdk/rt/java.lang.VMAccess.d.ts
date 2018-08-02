declare namespace java {
    namespace lang {
        class VMAccess implements com.ibm.oti.vm.VMLangAccess {
            public findClassOrNullHelper(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<any>
            public getExtClassLoader(): java.lang.ClassLoader
            public isAncestor(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
            public getClassloader(arg0: java.lang.Class): java.lang.ClassLoader
            public getPackageName(arg0: java.lang.Class): string
            public getMethodHandleCache(arg0: java.lang.Class<any>): java.lang.Object
            public setMethodHandleCache(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.Object
            public getMethodTypeCache(arg0: java.lang.ClassLoader): java.util.Map<java.lang.String, java.lang.invoke.MethodType>
            public internalGetProperties(): java.util.Properties
            public getSystemPackages(): java.lang.Package[]
            public getSystemPackage(arg0: java.lang.String | string): java.lang.Package
            public createInternalRamClass(arg0: long): java.lang.Object
            public getConstantPool(arg0: java.lang.Object): sun.reflect.ConstantPool
            public static class: java.lang.Class<any>
        }
    }
}