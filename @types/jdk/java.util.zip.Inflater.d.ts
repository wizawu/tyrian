declare namespace java {
  namespace util {
    namespace zip {

      class Inflater {
        static readonly $assertionsDisabled: boolean
        public constructor(arg0: boolean | java.lang.Boolean)
        public constructor()
        public setInput(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public setInput(arg0: number[] | java.lang.Byte[]): void
        public setInput(arg0: java.nio.ByteBuffer): void
        public setDictionary(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public setDictionary(arg0: number[] | java.lang.Byte[]): void
        public setDictionary(arg0: java.nio.ByteBuffer): void
        public getRemaining(): number
        public needsInput(): boolean
        public needsDictionary(): boolean
        public finished(): boolean
        public inflate(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public inflate(arg0: number[] | java.lang.Byte[]): number
        public inflate(arg0: java.nio.ByteBuffer): number
        public getAdler(): number
        public getTotalIn(): number
        public getBytesRead(): number
        public getTotalOut(): number
        public getBytesWritten(): number
        public reset(): void
        public end(): void
        protected finalize(): void
      }

    }
  }
}
