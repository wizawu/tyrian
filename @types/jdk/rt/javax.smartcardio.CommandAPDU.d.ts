declare namespace javax {
    namespace smartcardio {
class CommandAPDU implements java.io.Serializable {
    public constructor(arg0: byte[])
    public constructor(arg0: byte[], arg1: int, arg2: int)
    public constructor(arg0: java.nio.ByteBuffer)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[])
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int, arg7: int)
    public getCLA(): int
    public getINS(): int
    public getP1(): int
    public getP2(): int
    public getNc(): int
    public getData(): byte[]
    public getNe(): int
    public getBytes(): byte[]
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}