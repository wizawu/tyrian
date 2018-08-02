declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Instruction {
                            protected bytes: byte[]
                            protected pc: int
                            protected bc: int
                            protected w: int
                            protected length: int
                            protected special: boolean
                            protected constructor(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int)
                            public getBC(): int
                            public isWide(): boolean
                            public getBytes(): byte[]
                            public getPC(): int
                            public getLength(): int
                            public getNextPC(): int
                            public next(): com.sun.java.util.jar.pack.Instruction
                            public isNonstandard(): boolean
                            public setNonstandardLength(arg0: int): void
                            public forceNextPC(arg0: int): com.sun.java.util.jar.pack.Instruction
                            public static at(arg0: byte[], arg1: int): com.sun.java.util.jar.pack.Instruction
                            public static at(arg0: byte[], arg1: int, arg2: com.sun.java.util.jar.pack.Instruction): com.sun.java.util.jar.pack.Instruction
                            public getCPTag(): byte
                            public getCPIndex(): int
                            public setCPIndex(arg0: int): void
                            public getCPRef(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): com.sun.java.util.jar.pack.ConstantPool$Entry
                            public getLocalSlot(): int
                            public getBranchLabel(): int
                            public setBranchLabel(arg0: int): void
                            public getConstant(): int
                            public setConstant(arg0: int): void
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public equals(arg0: com.sun.java.util.jar.pack.Instruction): boolean
                            public toString(): string
                            public toString(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): string
                            public getIntAt(arg0: int): int
                            public getShortAt(arg0: int): int
                            public getByteAt(arg0: int): int
                            public static getInt(arg0: byte[], arg1: int): int
                            public static getShort(arg0: byte[], arg1: int): int
                            public static getByte(arg0: byte[], arg1: int): int
                            public static setInt(arg0: byte[], arg1: int, arg2: int): void
                            public static setShort(arg0: byte[], arg1: int, arg2: int): void
                            public static setByte(arg0: byte[], arg1: int, arg2: int): void
                            public static isNonstandard(arg0: int): boolean
                            public static opLength(arg0: int): int
                            public static opWideLength(arg0: int): int
                            public static isLocalSlotOp(arg0: int): boolean
                            public static isBranchOp(arg0: int): boolean
                            public static isCPRefOp(arg0: int): boolean
                            public static getCPRefOpTag(arg0: int): byte
                            public static isFieldOp(arg0: int): boolean
                            public static isInvokeInitOp(arg0: int): boolean
                            public static isSelfLinkerOp(arg0: int): boolean
                            public static byteName(arg0: int): string
                            public static opcodeChecker(arg0: byte[], arg1: com.sun.java.util.jar.pack.ConstantPool$Entry[], arg2: com.sun.java.util.jar.pack.Package$Version): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}