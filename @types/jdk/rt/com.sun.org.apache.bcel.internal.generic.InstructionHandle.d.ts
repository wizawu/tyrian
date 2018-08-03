declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class InstructionHandle implements java.io.Serializable {
                                protected i_position: int
                                public getNext(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getPrev(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getInstruction(): com.sun.org.apache.bcel.internal.generic.Instruction
                                public setInstruction(arg0: com.sun.org.apache.bcel.internal.generic.Instruction | com.sun.org.apache.bcel.internal.generic.Instruction$$Lambda): void
                                public swapInstruction(arg0: com.sun.org.apache.bcel.internal.generic.Instruction | com.sun.org.apache.bcel.internal.generic.Instruction$$Lambda): com.sun.org.apache.bcel.internal.generic.Instruction
                                protected constructor(arg0: com.sun.org.apache.bcel.internal.generic.Instruction | com.sun.org.apache.bcel.internal.generic.Instruction$$Lambda)
                                protected updatePosition(arg0: int, arg1: int): int
                                public getPosition(): int
                                protected addHandle(): void
                                public removeAllTargeters(): void
                                public removeTargeter(arg0: com.sun.org.apache.bcel.internal.generic.InstructionTargeter): void
                                public addTargeter(arg0: com.sun.org.apache.bcel.internal.generic.InstructionTargeter): void
                                public hasTargeters(): boolean
                                public getTargeters(): com.sun.org.apache.bcel.internal.generic.InstructionTargeter[]
                                public toString(arg0: boolean): string
                                public toString(): string
                                public addAttribute(arg0: java.lang.Object, arg1: java.lang.Object): void
                                public removeAttribute(arg0: java.lang.Object): void
                                public getAttribute(arg0: java.lang.Object): java.lang.Object
                                public getAttributes(): java.util.Collection
                                public accept(arg0: com.sun.org.apache.bcel.internal.generic.Visitor): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}