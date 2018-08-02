declare namespace java {
    namespace nio {
        namespace charset {
abstract class CharsetDecoder {
    protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float)
    public charset(): java.nio.charset.Charset
    public replacement(): string
    public replaceWith(arg0: java.lang.String | string): java.nio.charset.CharsetDecoder
    protected implReplaceWith(arg0: java.lang.String | string): void
    public malformedInputAction(): java.nio.charset.CodingErrorAction
    public onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
    protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
    public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
    public onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
    protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
    public averageCharsPerByte(): float
    public maxCharsPerByte(): float
    public decode(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg2: boolean): java.nio.charset.CoderResult
    public flush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public reset(): java.nio.charset.CharsetDecoder
    protected implReset(): void
    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
    public isAutoDetecting(): boolean
    public isCharsetDetected(): boolean
    public detectedCharset(): java.nio.charset.Charset
    public static class: java.lang.Class<any>
}

        }
    }
}