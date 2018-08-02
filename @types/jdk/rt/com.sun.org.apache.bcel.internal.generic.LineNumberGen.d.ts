declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
class LineNumberGen implements com.sun.org.apache.bcel.internal.generic.InstructionTargeter , java.lang.Cloneable , java.io.Serializable {
    public constructor(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: int)
    public containsTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
    public updateTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public getLineNumber(): com.sun.org.apache.bcel.internal.classfile.LineNumber
    public setInstruction(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public clone(): java.lang.Object
    public getInstruction(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
    public setSourceLine(arg0: int): void
    public getSourceLine(): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}