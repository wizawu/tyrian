declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class SJIS_0213$Decoder extends java.nio.charset.CharsetDecoder {
                    protected static readonly UNMAPPABLE: char
                    protected constructor(arg0: java.nio.charset.Charset)
                    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer): java.nio.charset.CoderResult
                    protected decodeSingle(arg0: int): char
                    protected decodeDouble(arg0: int, arg1: int): char
                    protected decodeDoubleEx(arg0: int, arg1: int): char[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}