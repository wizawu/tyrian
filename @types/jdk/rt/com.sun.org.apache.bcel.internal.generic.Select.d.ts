declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class Select extends com.sun.org.apache.bcel.internal.generic.BranchInstruction implements com.sun.org.apache.bcel.internal.generic.VariableLengthInstruction , com.sun.org.apache.bcel.internal.generic.StackProducer {
                                protected match: int[]
                                protected indices: int[]
                                protected targets: com.sun.org.apache.bcel.internal.generic.InstructionHandle[]
                                protected fixed_length: int
                                protected match_length: int
                                protected padding: int
                                protected updatePosition(arg0: int, arg1: int): int
                                public dump(arg0: java.io.DataOutputStream): void
                                protected initFromFile(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: boolean): void
                                public toString(arg0: boolean): string
                                public setTarget(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public updateTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public containsTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
                                public getMatchs(): int[]
                                public getIndices(): int[]
                                public getTargets(): com.sun.org.apache.bcel.internal.generic.InstructionHandle[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}