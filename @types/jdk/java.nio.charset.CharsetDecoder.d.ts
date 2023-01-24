declare namespace java {
  namespace nio {
    namespace charset {
      abstract class CharsetDecoder {
        static readonly $assertionsDisabled: boolean
        protected constructor(
          arg0: java.nio.charset.Charset,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float
        )
        public charset(): java.nio.charset.Charset
        public replacement(): java.lang.String
        public replaceWith(arg0: java.lang.String | string): java.nio.charset.CharsetDecoder
        protected implReplaceWith(arg0: java.lang.String | string): void
        public malformedInputAction(): java.nio.charset.CodingErrorAction
        public onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
        protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
        public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
        public onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder
        protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
        public averageCharsPerByte(): number
        public maxCharsPerByte(): number
        public decode(
          arg0: java.nio.ByteBuffer,
          arg1: java.nio.CharBuffer,
          arg2: boolean | java.lang.Boolean
        ): java.nio.charset.CoderResult
        public flush(arg0: java.nio.CharBuffer): java.nio.charset.CoderResult
        protected implFlush(arg0: java.nio.CharBuffer): java.nio.charset.CoderResult
        public reset(): java.nio.charset.CharsetDecoder
        protected implReset(): void
        protected abstract decodeLoop(
          arg0: java.nio.ByteBuffer,
          arg1: java.nio.CharBuffer
        ): java.nio.charset.CoderResult
        public decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
        public isAutoDetecting(): boolean
        public isCharsetDetected(): boolean
        public detectedCharset(): java.nio.charset.Charset
      }
    }
  }
}
