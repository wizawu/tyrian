declare namespace java {
    namespace nio {
class HeapDoubleBuffer extends java.nio.DoubleBuffer {
    protected constructor(arg0: double[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
    public slice(): java.nio.DoubleBuffer
    public duplicate(): java.nio.DoubleBuffer
    public asReadOnlyBuffer(): java.nio.DoubleBuffer
    protected ix(arg0: int): int
    public get(): double
    public get(arg0: int): double
    public get(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public put(arg0: double): java.nio.DoubleBuffer
    public put(arg0: int, arg1: double): java.nio.DoubleBuffer
    public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
    public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
    public compact(): java.nio.DoubleBuffer
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}