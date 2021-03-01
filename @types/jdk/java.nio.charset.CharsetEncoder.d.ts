declare namespace java {
  namespace nio {
    namespace charset {

      abstract class CharsetEncoder {

        static readonly $assertionsDisabled: boolean
        protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float, arg3: byte[])
        protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float)
        public readonly charset(): java.nio.charset.Charset
        public readonly replacement(): byte[]
        public readonly replaceWith(arg0: byte[]): java.nio.charset.CharsetEncoder
        protected implReplaceWith(arg0: byte[]): void
        public isLegalReplacement(arg0: byte[]): boolean
        public malformedInputAction(): java.nio.charset.CodingErrorAction
        public readonly onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
        protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
        public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
        public readonly onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
        protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
        public readonly averageBytesPerChar(): float
        public readonly maxBytesPerChar(): float
        public readonly encode(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer, arg2: boolean): java.nio.charset.CoderResult
        public readonly flush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
        protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
        public readonly reset(): java.nio.charset.CharsetEncoder
        protected implReset(): void
        protected abstract encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
        public readonly encode(arg0: java.nio.CharBuffer): java.nio.ByteBuffer
        public canEncode(arg0: char): boolean
        public canEncode(arg0: java.lang.CharSequence): boolean
      }

    }
  }
}
