declare namespace java {
    namespace nio {
class HeapIntBuffer extends java.nio.IntBuffer {
    protected constructor(arg0: int[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
    public slice(): java.nio.IntBuffer
    public duplicate(): java.nio.IntBuffer
    public asReadOnlyBuffer(): java.nio.IntBuffer
    protected ix(arg0: int): int
    public get(): int
    public get(arg0: int): int
    public get(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public put(arg0: int): java.nio.IntBuffer
    public put(arg0: int, arg1: int): java.nio.IntBuffer
    public put(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public put(arg0: java.nio.IntBuffer): java.nio.IntBuffer
    public compact(): java.nio.IntBuffer
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}