declare namespace javax {
  namespace sound {
    namespace sampled {

      class AudioInputStream extends java.io.InputStream {
        protected format: javax.sound.sampled.AudioFormat
        protected frameLength: long
        protected frameSize: int
        protected framePos: long
        public constructor(arg0: java.io.InputStream, arg1: javax.sound.sampled.AudioFormat, arg2: long)
        public constructor(arg0: javax.sound.sampled.TargetDataLine)
        public getFormat(): javax.sound.sampled.AudioFormat
        public getFrameLength(): long
        public read(): int
        public read(arg0: byte[]): int
        public read(arg0: byte[], arg1: int, arg2: int): int
        public skip(arg0: long): long
        public available(): int
        public close(): void
        public mark(arg0: int): void
        public reset(): void
        public markSupported(): boolean
      }

    }
  }
}
