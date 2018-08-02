declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace util {
                            interface Repository extends java.io.Serializable {
                                storeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): void
                                removeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): void
                                findClass(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                loadClass(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                loadClass(arg0: java.lang.Class): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                clear(): void
                            }
                        }
                    }
                }
            }
        }
    }
}