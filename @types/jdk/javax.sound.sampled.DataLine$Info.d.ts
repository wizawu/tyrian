declare namespace javax {
  namespace sound {
    namespace sampled {
      class DataLine$Info extends javax.sound.sampled.Line$Info {
        public constructor(
          arg0: java.lang.Class<unknown>,
          arg1: javax.sound.sampled.AudioFormat[],
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public constructor(
          arg0: java.lang.Class<unknown>,
          arg1: javax.sound.sampled.AudioFormat,
          arg2: number | java.lang.Integer
        )
        public constructor(arg0: java.lang.Class<unknown>, arg1: javax.sound.sampled.AudioFormat)
        public getFormats(): javax.sound.sampled.AudioFormat[]
        public isFormatSupported(arg0: javax.sound.sampled.AudioFormat): boolean
        public getMinBufferSize(): number
        public getMaxBufferSize(): number
        public matches(arg0: javax.sound.sampled.Line$Info): boolean
        public toString(): java.lang.String
      }
    }
  }
}
