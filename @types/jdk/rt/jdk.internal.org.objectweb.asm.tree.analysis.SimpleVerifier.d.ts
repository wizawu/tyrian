declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
                            class SimpleVerifier extends jdk.internal.org.objectweb.asm.tree.analysis.BasicVerifier {
                                public constructor()
                                public constructor(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type, arg2: boolean)
                                public constructor(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type, arg2: java.util.List<jdk.internal.org.objectweb.asm.Type>, arg3: boolean)
                                protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type, arg2: jdk.internal.org.objectweb.asm.Type, arg3: java.util.List<jdk.internal.org.objectweb.asm.Type>, arg4: boolean)
                                public setClassLoader(arg0: java.lang.ClassLoader): void
                                public newValue(arg0: jdk.internal.org.objectweb.asm.Type): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                protected isArrayValue(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): boolean
                                protected getElementValue(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                protected isSubTypeOf(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): boolean
                                public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                protected isInterface(arg0: jdk.internal.org.objectweb.asm.Type): boolean
                                protected getSuperClass(arg0: jdk.internal.org.objectweb.asm.Type): jdk.internal.org.objectweb.asm.Type
                                protected isAssignableFrom(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type): boolean
                                protected getClass(arg0: jdk.internal.org.objectweb.asm.Type): java.lang.Class<any>
                                public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
                                public newValue(arg0: jdk.internal.org.objectweb.asm.Type): jdk.internal.org.objectweb.asm.tree.analysis.Value
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}