declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace util {
                            class SyntheticRepository implements com.sun.org.apache.bcel.internal.util.Repository {
                                public static getInstance(): com.sun.org.apache.bcel.internal.util.SyntheticRepository
                                public static getInstance(arg0: com.sun.org.apache.bcel.internal.util.ClassPath): com.sun.org.apache.bcel.internal.util.SyntheticRepository
                                public storeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): void
                                public removeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): void
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