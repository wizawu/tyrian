declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
class LocalVariableGen implements com.sun.org.apache.bcel.internal.generic.InstructionTargeter , com.sun.org.apache.bcel.internal.generic.NamedAndTyped , java.lang.Cloneable , java.io.Serializable {
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type, arg3: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg4: com.sun.org.apache.bcel.internal.generic.InstructionHandle)
    public getLocalVariable(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.classfile.LocalVariable
    public getIndex(): int
    public setName(arg0: java.lang.String | string): void
    public getName(): string
    public setType(arg0: com.sun.org.apache.bcel.internal.generic.Type): void
    public getType(): com.sun.org.apache.bcel.internal.generic.Type
    public getStart(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
    public getEnd(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
    public setStart(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public setEnd(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public updateTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public containsTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
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