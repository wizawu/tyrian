declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class HKSCS$Decoder extends sun.nio.cs.ext.DoubleByte$Decoder {
    protected constructor(arg0: java.nio.charset.Charset, arg1: sun.nio.cs.ext.DoubleByte$Decoder | sun.nio.cs.ext.DoubleByte$Decoder$$Lambda, arg2: char[][], arg3: char[][])
    public decodeSingle(arg0: int): char
    public decodeBig5(arg0: int, arg1: int): char
    public decodeDouble(arg0: int, arg1: int): char
    public decodeDoubleEx(arg0: int, arg1: int): char
    protected decodeArrayLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected decodeBufferLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public decode(arg0: byte[], arg1: int, arg2: int, arg3: char[]): int
    public decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public static class: java.lang.Class<any>
}

            }
        }
    }
}