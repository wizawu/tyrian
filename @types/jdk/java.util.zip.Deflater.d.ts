declare namespace java {
  namespace util {
    namespace zip {
      class Deflater {
        public static readonly DEFLATED: int
        public static readonly NO_COMPRESSION: int
        public static readonly BEST_SPEED: int
        public static readonly BEST_COMPRESSION: int
        public static readonly DEFAULT_COMPRESSION: int
        public static readonly FILTERED: int
        public static readonly HUFFMAN_ONLY: int
        public static readonly DEFAULT_STRATEGY: int
        public static readonly NO_FLUSH: int
        public static readonly SYNC_FLUSH: int
        public static readonly FULL_FLUSH: int
        static readonly $assertionsDisabled: boolean
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: number | java.lang.Integer)
        public constructor()
        public setInput(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public setInput(arg0: number[] | java.lang.Byte[]): void
        public setInput(arg0: java.nio.ByteBuffer): void
        public setDictionary(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public setDictionary(arg0: number[] | java.lang.Byte[]): void
        public setDictionary(arg0: java.nio.ByteBuffer): void
        public setStrategy(arg0: number | java.lang.Integer): void
        public setLevel(arg0: number | java.lang.Integer): void
        public needsInput(): boolean
        public finish(): void
        public finished(): boolean
        public deflate(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public deflate(arg0: number[] | java.lang.Byte[]): number
        public deflate(arg0: java.nio.ByteBuffer): number
        public deflate(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): number
        public deflate(arg0: java.nio.ByteBuffer, arg1: number | java.lang.Integer): number
        public getAdler(): number
        public getTotalIn(): number
        public getBytesRead(): number
        public getTotalOut(): number
        public getBytesWritten(): number
        public reset(): void
        public end(): void
        protected finalize(): void
        shouldFinish(): boolean
      }
    }
  }
}
