declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class InstructionList implements java.io.Serializable {
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.Instruction)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.BranchInstruction)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda)
                                public isEmpty(): boolean
                                public static findHandle(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle[], arg1: int[], arg2: int, arg3: int): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public findHandle(arg0: int): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public constructor(arg0: byte[])
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.BranchInstruction): com.sun.org.apache.bcel.internal.generic.BranchHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public append(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.BranchInstruction): com.sun.org.apache.bcel.internal.generic.BranchHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.BranchInstruction): com.sun.org.apache.bcel.internal.generic.BranchHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.Instruction): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.CompoundInstruction | com.sun.org.apache.bcel.internal.generic.CompoundInstruction$$Lambda): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public insert(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.BranchInstruction): com.sun.org.apache.bcel.internal.generic.BranchHandle
                                public move(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public move(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public delete(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public delete(arg0: com.sun.org.apache.bcel.internal.generic.Instruction): void
                                public delete(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public delete(arg0: com.sun.org.apache.bcel.internal.generic.Instruction, arg1: com.sun.org.apache.bcel.internal.generic.Instruction): void
                                public contains(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
                                public contains(arg0: com.sun.org.apache.bcel.internal.generic.Instruction): boolean
                                public setPositions(): void
                                public setPositions(arg0: boolean): void
                                public getByteCode(): byte[]
                                public getInstructions(): com.sun.org.apache.bcel.internal.generic.Instruction[]
                                public toString(): string
                                public toString(arg0: boolean): string
                                public iterator(): java.util.Iterator
                                public getInstructionHandles(): com.sun.org.apache.bcel.internal.generic.InstructionHandle[]
                                public getInstructionPositions(): int[]
                                public copy(): com.sun.org.apache.bcel.internal.generic.InstructionList
                                public replaceConstantPool(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen, arg1: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): void
                                public dispose(): void
                                public getStart(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getEnd(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getLength(): int
                                public size(): int
                                public redirectBranches(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public redirectLocalVariables(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen[], arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public redirectExceptionHandlers(arg0: com.sun.org.apache.bcel.internal.generic.CodeExceptionGen[], arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public addObserver(arg0: com.sun.org.apache.bcel.internal.generic.InstructionListObserver | com.sun.org.apache.bcel.internal.generic.InstructionListObserver$$Lambda): void
                                public removeObserver(arg0: com.sun.org.apache.bcel.internal.generic.InstructionListObserver | com.sun.org.apache.bcel.internal.generic.InstructionListObserver$$Lambda): void
                                public update(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}