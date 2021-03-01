declare namespace java {
  namespace nio {
    namespace charset {

      abstract class CharsetDecoder {

        static readonly $assertionsDisabled: boolean
        protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float)
        public readonly charset(): java.nio.charset.Charset
        public readonly replacement(): java.lang.String
        public readonly replaceWith(arg0: java.lang.String): java.nio.charset.CharsetDecoder
        protected implReplaceWith(arg0: java.lang.String): void
        public malformedInputAction(): java.nio.charset.CodingErrorAction
        public readonly onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
        protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
        public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
        public readonly onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
        protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
        public readonly averageCharsPerByte(): float
        public readonly maxCharsPerByte(): float
        public readonly decode(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer, arg2: boolean): java.nio.charset.CoderResult
        public readonly flush(arg0: java.nio.CharBuffer): java.nio.charset.CoderResult
        protected implFlush(arg0: java.nio.CharBuffer): java.nio.charset.CoderResult
        public readonly reset(): java.nio.charset.CharsetDecoder
        protected implReset(): void
        protected abstract decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer): java.nio.charset.CoderResult
        public readonly decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
        public isAutoDetecting(): boolean
        public isCharsetDetected(): boolean
        public detectedCharset(): java.nio.charset.Charset
      }

    }
  }
}
