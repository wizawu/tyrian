declare namespace javax {
  namespace sound {
    namespace sampled {

      class AudioInputStream extends java.io.InputStream {
        protected format: javax.sound.sampled.AudioFormat
        protected frameLength: long
        protected frameSize: int
        protected framePos: long
        public constructor(arg0: java.io.InputStream, arg1: javax.sound.sampled.AudioFormat, arg2: number | java.lang.Long)
        public constructor(arg0: javax.sound.sampled.TargetDataLine)
        public getFormat(): javax.sound.sampled.AudioFormat
        public getFrameLength(): number
        public read(): number
        public read(arg0: number[] | java.lang.Byte[]): number
        public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public skip(arg0: number | java.lang.Long): number
        public available(): number
        public close(): void
        public mark(arg0: number | java.lang.Integer): void
        public reset(): void
        public markSupported(): boolean
      }

    }
  }
}
