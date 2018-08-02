declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
abstract class Repository {
    public constructor()
    public static getRepository(): com.sun.org.apache.bcel.internal.util.Repository
    public static setRepository(arg0: com.sun.org.apache.bcel.internal.util.Repository): void
    public static lookupClass(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass
    public static lookupClass(arg0: java.lang.Class): com.sun.org.apache.bcel.internal.classfile.JavaClass
    public static lookupClassFile(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.util.ClassPath$ClassFile
    public static clearCache(): void
    public static addClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): com.sun.org.apache.bcel.internal.classfile.JavaClass
    public static removeClass(arg0: java.lang.String | string): void
    public static removeClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): void
    public static getSuperClasses(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
    public static getSuperClasses(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
    public static getInterfaces(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
    public static getInterfaces(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
    public static instanceOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda, arg1: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): boolean
    public static instanceOf(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public static instanceOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda, arg1: java.lang.String | string): boolean
    public static instanceOf(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): boolean
    public static implementationOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda, arg1: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): boolean
    public static implementationOf(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public static implementationOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda, arg1: java.lang.String | string): boolean
    public static implementationOf(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}