declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
                            class BasicValue implements jdk.internal.org.objectweb.asm.tree.analysis.Value {
                                public static readonly UNINITIALIZED_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly INT_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly FLOAT_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly LONG_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly DOUBLE_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly REFERENCE_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public static readonly RETURNADDRESS_VALUE: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
                                public constructor(arg0: jdk.internal.org.objectweb.asm.Type)
                                public getType(): jdk.internal.org.objectweb.asm.Type
                                public getSize(): int
                                public isReference(): boolean
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}