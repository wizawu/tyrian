declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
abstract class Instruction$Switch extends com.sun.java.util.jar.pack.Instruction {
    protected apc: int
    public getCaseCount(): int
    public getCaseValue(arg0: int): int
    public getCaseLabel(arg0: int): int
    public setCaseCount(arg0: int): void
    public setCaseValue(arg0: int, arg1: int): void
    public setCaseLabel(arg0: int, arg1: int): void
    protected getLength(arg0: int): int
    public getDefaultLabel(): int
    public setDefaultLabel(arg0: int): void
    protected intAt(arg0: int): int
    protected setIntAt(arg0: int, arg1: int): void
    protected constructor(arg0: byte[], arg1: int, arg2: int)
    public getAlignedPC(): int
    public toString(): string
    public static alignPC(arg0: int): int
    public getByteAt(arg0: int): int
    public getShortAt(arg0: int): int
    public getIntAt(arg0: int): int
    public toString(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): string
    public equals(arg0: com.sun.java.util.jar.pack.Instruction): boolean
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public setConstant(arg0: int): void
    public getConstant(): int
    public setBranchLabel(arg0: int): void
    public getBranchLabel(): int
    public getLocalSlot(): int
    public getCPRef(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): com.sun.java.util.jar.pack.ConstantPool$Entry
    public setCPIndex(arg0: int): void
    public getCPIndex(): int
    public getCPTag(): byte
    public forceNextPC(arg0: int): com.sun.java.util.jar.pack.Instruction
    public setNonstandardLength(arg0: int): void
    public isNonstandard(): boolean
    public next(): com.sun.java.util.jar.pack.Instruction
    public getNextPC(): int
    public getLength(): int
    public getPC(): int
    public getBytes(): byte[]
    public isWide(): boolean
    public getBC(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}