declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
                            class BasicValue implements jdk.internal.org.objectweb.asm.tree.analysis.Value {
                                public static UNINITIALIZED_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static INT_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static FLOAT_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static LONG_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static DOUBLE_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static REFERENCE_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static RETURNADDRESS_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public constructor(arg0: jdk.internal.org.objectweb.asm.Type)
                                public getType(): jdk.internal.org.objectweb.asm.Type
                                public getSize(): int
                                public isReference(): boolean
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                            class BasicValue$$Lambda implements jdk.internal.org.objectweb.asm.tree.analysis.Value {
                                public static UNINITIALIZED_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                            }
                        }
                    }
                }
            }
        }
    }
}