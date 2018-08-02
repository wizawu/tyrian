declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
class LineNumberTable extends com.sun.org.apache.bcel.internal.classfile.Attribute {
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.LineNumberTable)
    public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.bcel.internal.classfile.LineNumber[], arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
    public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
    public dump(arg0: java.io.DataOutputStream): void
    public getLineNumberTable(): com.sun.org.apache.bcel.internal.classfile.LineNumber[]
    public setLineNumberTable(arg0: com.sun.org.apache.bcel.internal.classfile.LineNumber[]): void
    public toString(): string
    public getSourceLine(arg0: int): int
    public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
    public getTableLength(): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}