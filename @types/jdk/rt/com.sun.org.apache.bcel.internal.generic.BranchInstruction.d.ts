declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
abstract class BranchInstruction extends com.sun.org.apache.bcel.internal.generic.Instruction implements com.sun.org.apache.bcel.internal.generic.InstructionTargeter {
    protected index: int
    protected target: com.sun.org.apache.bcel.internal.generic.InstructionHandle
    protected position: int
    protected constructor(arg0: short, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle)
    public dump(arg0: java.io.DataOutputStream): void
    protected getTargetOffset(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): int
    protected getTargetOffset(): int
    protected updatePosition(arg0: int, arg1: int): int
    public toString(arg0: boolean): string
    protected initFromFile(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: boolean): void
    public getIndex(): int
    public getTarget(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
    public setTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public updateTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public containsTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}