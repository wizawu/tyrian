declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                abstract class DoubleByteEncoder extends java.nio.charset.CharsetEncoder {
                    protected constructor(arg0: java.nio.charset.Charset, arg1: short[], arg2: java.lang.String[])
                    protected constructor(arg0: java.nio.charset.Charset, arg1: short[], arg2: java.lang.String[], arg3: float, arg4: float)
                    protected constructor(arg0: java.nio.charset.Charset, arg1: short[], arg2: java.lang.String[], arg3: byte[])
                    protected constructor(arg0: java.nio.charset.Charset, arg1: short[], arg2: java.lang.String[], arg3: byte[], arg4: float, arg5: float)
                    public canEncode(arg0: char): boolean
                    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeDouble(arg0: char): int
                    protected encodeSingle(arg0: char): int
                    protected encodeSurrogate(arg0: char, arg1: char): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}