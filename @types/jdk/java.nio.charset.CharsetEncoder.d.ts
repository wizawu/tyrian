declare namespace java {
  namespace nio {
    namespace charset {

      abstract class CharsetEncoder {
        static readonly $assertionsDisabled: boolean
        protected constructor(arg0: java.nio.charset.Charset, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number[] | java.lang.Byte[])
        protected constructor(arg0: java.nio.charset.Charset, arg1: number | java.lang.Float, arg2: number | java.lang.Float)
        public charset(): java.nio.charset.Charset
        public replacement(): number[]
        public replaceWith(arg0: number[] | java.lang.Byte[]): java.nio.charset.CharsetEncoder
        protected implReplaceWith(arg0: number[] | java.lang.Byte[]): void
        public isLegalReplacement(arg0: number[] | java.lang.Byte[]): boolean
        public malformedInputAction(): java.nio.charset.CodingErrorAction
        public onMalformedInput(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
        protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
        public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
        public onUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
        protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
        public averageBytesPerChar(): number
        public maxBytesPerChar(): number
        public encode(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer, arg2: boolean | java.lang.Boolean): java.nio.charset.CoderResult
        public flush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
        protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
        public reset(): java.nio.charset.CharsetEncoder
        protected implReset(): void
        protected abstract encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
        public encode(arg0: java.nio.CharBuffer): java.nio.ByteBuffer
        public canEncode(arg0: string | java.lang.Character): boolean
        public canEncode(arg0: java.lang.CharSequence): boolean
      }

    }
  }
}
