declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace util {
                            class ClassLoaderRepository implements com.sun.org.apache.bcel.internal.util.Repository {
                                public constructor(arg0: java.lang.ClassLoader)
                                public storeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): void
                                public removeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): void
                                public findClass(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                public loadClass(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                public loadClass(arg0: java.lang.Class): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                public clear(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}