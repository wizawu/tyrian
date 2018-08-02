declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            abstract class Constant implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
                                protected tag: byte
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getTag(): byte
                                public toString(): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.Constant
                                public clone(): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}