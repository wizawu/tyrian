declare namespace javax {
    namespace management {
        namespace loading {
            interface ClassLoaderRepository {
                loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
            }
        }
    }
}