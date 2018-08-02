declare namespace java {
    namespace nio {
class StringCharBuffer extends java.nio.CharBuffer {
    public slice(): java.nio.CharBuffer
    public duplicate(): java.nio.CharBuffer
    public asReadOnlyBuffer(): java.nio.CharBuffer
    public get(): char
    public get(arg0: int): char
    public put(arg0: char): java.nio.CharBuffer
    public put(arg0: int, arg1: char): java.nio.CharBuffer
    public compact(): java.nio.CharBuffer
    public isReadOnly(): boolean
    public subSequence(arg0: int, arg1: int): java.nio.CharBuffer
    public isDirect(): boolean
    public order(): java.nio.ByteOrder
    public subSequence(arg0: int, arg1: int): java.lang.CharSequence
    public static class: java.lang.Class<any>
}

    }
}