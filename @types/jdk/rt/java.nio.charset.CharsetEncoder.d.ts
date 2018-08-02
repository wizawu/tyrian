declare namespace java {
    namespace nio {
        namespace charset {
abstract class CharsetEncoder {
    protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float, arg3: byte[])
    protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float)
    public charset(): java.nio.charset.Charset
    public replacement(): byte[]
    public replaceWith(arg0: byte[]): java.nio.charset.CharsetEncoder
    protected implReplaceWith(arg0: byte[]): void
    public isLegalReplacement(arg0: byte[]): boolean
    public malformedInputAction(): java.nio.charset.CodingErrorAction
    public onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
    protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
    public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
    public onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
    protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
    public averageBytesPerChar(): float
    public maxBytesPerChar(): float
    public encode(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer, arg2: boolean): java.nio.charset.CoderResult
    public flush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
    public reset(): java.nio.charset.CharsetEncoder
    protected implReset(): void
    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    public encode(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.ByteBuffer
    public canEncode(arg0: char): boolean
    public canEncode(arg0: java.lang.CharSequence): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}