declare namespace javax {
  namespace sound {
    namespace sampled {
      class AudioFormat {
        protected encoding: javax.sound.sampled.AudioFormat$Encoding
        protected sampleRate: float
        protected sampleSizeInBits: int
        protected channels: int
        protected frameSize: int
        protected frameRate: float
        protected bigEndian: boolean
        public constructor(
          arg0: javax.sound.sampled.AudioFormat$Encoding,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Float,
          arg6: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: javax.sound.sampled.AudioFormat$Encoding,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Float,
          arg6: boolean | java.lang.Boolean,
          arg7: java.util.Map<java.lang.String, java.lang.Object>
        )
        public constructor(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: boolean | java.lang.Boolean,
          arg4: boolean | java.lang.Boolean
        )
        public getEncoding(): javax.sound.sampled.AudioFormat$Encoding
        public getSampleRate(): number
        public getSampleSizeInBits(): number
        public getChannels(): number
        public getFrameSize(): number
        public getFrameRate(): number
        public isBigEndian(): boolean
        public properties(): java.util.Map<java.lang.String, java.lang.Object>
        public getProperty(arg0: java.lang.String | string): java.lang.Object
        public matches(arg0: javax.sound.sampled.AudioFormat): boolean
        public toString(): java.lang.String
      }
    }
  }
}
