declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
class StackMap extends com.sun.org.apache.bcel.internal.classfile.Attribute implements com.sun.org.apache.bcel.internal.classfile.Node {
    public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.bcel.internal.classfile.StackMapEntry[], arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
    public dump(arg0: java.io.DataOutputStream): void
    public getStackMap(): com.sun.org.apache.bcel.internal.classfile.StackMapEntry[]
    public setStackMap(arg0: com.sun.org.apache.bcel.internal.classfile.StackMapEntry[]): void
    public toString(): string
    public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
    public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
    public getMapLength(): int
    public static class: java.lang.Class<any>
}

class StackMap$$Lambda extends com.sun.org.apache.bcel.internal.classfile.Attribute implements com.sun.org.apache.bcel.internal.classfile.Node {
    public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.bcel.internal.classfile.StackMapEntry[], arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
}

                        }
                    }
                }
            }
        }
    }
}