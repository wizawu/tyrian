declare namespace java {
  namespace util {
    namespace zip {

      class Inflater {
        static readonly $assertionsDisabled: boolean
        public constructor(arg0: boolean)
        public constructor()
        public setInput(arg0: byte[], arg1: int, arg2: int): void
        public setInput(arg0: byte[]): void
        public setInput(arg0: java.nio.ByteBuffer): void
        public setDictionary(arg0: byte[], arg1: int, arg2: int): void
        public setDictionary(arg0: byte[]): void
        public setDictionary(arg0: java.nio.ByteBuffer): void
        public getRemaining(): int
        public needsInput(): boolean
        public needsDictionary(): boolean
        public finished(): boolean
        public inflate(arg0: byte[], arg1: int, arg2: int): int
        public inflate(arg0: byte[]): int
        public inflate(arg0: java.nio.ByteBuffer): int
        public getAdler(): int
        public getTotalIn(): int
        public getBytesRead(): long
        public getTotalOut(): int
        public getBytesWritten(): long
        public reset(): void
        public end(): void
        protected finalize(): void
      }

    }
  }
}
