declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class Instruction implements java.lang.Cloneable , java.io.Serializable {
                                protected length: short
                                protected opcode: short
                                public constructor(arg0: short, arg1: short)
                                public dump(arg0: java.io.DataOutputStream): void
                                public getName(): string
                                public toString(arg0: boolean): string
                                public toString(): string
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                public copy(): com.sun.org.apache.bcel.internal.generic.Instruction
                                protected initFromFile(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: boolean): void
                                public static readInstruction(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence): com.sun.org.apache.bcel.internal.generic.Instruction
                                public consumeStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
                                public produceStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
                                public getOpcode(): short
                                public getLength(): int
                                public abstract accept(arg0: com.sun.org.apache.bcel.internal.generic.Visitor): void
                                public static getComparator(): com.sun.org.apache.bcel.internal.generic.InstructionComparator
                                public static setComparator(arg0: com.sun.org.apache.bcel.internal.generic.InstructionComparator | com.sun.org.apache.bcel.internal.generic.InstructionComparator$$Lambda): void
                                public equals(arg0: java.lang.Object): boolean
                                public static class: java.lang.Class<any>
                            }
                            interface Instruction$$Lambda implements java.lang.Cloneable , java.io.Serializable {
                                (arg0: com.sun.org.apache.bcel.internal.generic.Visitor): void
                            }
                        }
                    }
                }
            }
        }
    }
}