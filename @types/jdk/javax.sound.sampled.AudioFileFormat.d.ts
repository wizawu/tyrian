declare namespace javax {
  namespace sound {
    namespace sampled {

      class AudioFileFormat {
        protected constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: number | java.lang.Integer, arg2: javax.sound.sampled.AudioFormat, arg3: number | java.lang.Integer)
        public constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioFormat, arg2: number | java.lang.Integer)
        public constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioFormat, arg2: number | java.lang.Integer, arg3: java.util.Map<java.lang.String,java.lang.Object>)
        public getType(): javax.sound.sampled.AudioFileFormat$Type
        public getByteLength(): number
        public getFormat(): javax.sound.sampled.AudioFormat
        public getFrameLength(): number
        public properties(): java.util.Map<java.lang.String,java.lang.Object>
        public getProperty(arg0: java.lang.String | string): java.lang.Object
        public toString(): java.lang.String
      }

    }
  }
}
