declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                abstract class SimpleEUCEncoder extends java.nio.charset.CharsetEncoder {
                    protected index1: short[]
                    protected index2: string
                    protected index2a: string
                    protected index2b: string
                    protected index2c: string
                    protected mask1: int
                    protected mask2: int
                    protected shift: int
                    protected constructor(arg0: java.nio.charset.Charset)
                    public canEncode(arg0: char): boolean
                    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public encode(arg0: char): byte
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}