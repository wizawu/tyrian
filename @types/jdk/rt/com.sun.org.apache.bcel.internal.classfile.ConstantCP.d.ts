declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
abstract class ConstantCP extends com.sun.org.apache.bcel.internal.classfile.Constant {
    protected class_index: int
    protected name_and_type_index: int
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantCP)
    protected constructor(arg0: byte, arg1: int, arg2: int)
    public dump(arg0: java.io.DataOutputStream): void
    public getClassIndex(): int
    public getNameAndTypeIndex(): int
    public setClassIndex(arg0: int): void
    public getClass(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
    public setNameAndTypeIndex(arg0: int): void
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