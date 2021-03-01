declare namespace javax {
  namespace sound {
    namespace sampled {

      class AudioSystem {

        public static readonly NOT_SPECIFIED: int
        public static getMixerInfo(): javax.sound.sampled.Mixer$Info[]
        public static getMixer(arg0: javax.sound.sampled.Mixer$Info): javax.sound.sampled.Mixer
        public static getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
        public static getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
        public static isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
        public static getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
        public static getClip(): javax.sound.sampled.Clip
        public static getClip(arg0: javax.sound.sampled.Mixer$Info): javax.sound.sampled.Clip
        public static getSourceDataLine(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.SourceDataLine
        public static getSourceDataLine(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.Mixer$Info): javax.sound.sampled.SourceDataLine
        public static getTargetDataLine(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.TargetDataLine
        public static getTargetDataLine(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.Mixer$Info): javax.sound.sampled.TargetDataLine
        public static getTargetEncodings(arg0: javax.sound.sampled.AudioFormat$Encoding): javax.sound.sampled.AudioFormat$Encoding[]
        public static getTargetEncodings(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat$Encoding[]
        public static isConversionSupported(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): boolean
        public static getAudioInputStream(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
        public static getTargetFormats(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat[]
        public static isConversionSupported(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioFormat): boolean
        public static getAudioInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
        public static getAudioFileFormat(arg0: java.io.InputStream): javax.sound.sampled.AudioFileFormat
        public static getAudioFileFormat(arg0: java.net.URL): javax.sound.sampled.AudioFileFormat
        public static getAudioFileFormat(arg0: java.io.File): javax.sound.sampled.AudioFileFormat
        public static getAudioInputStream(arg0: java.io.InputStream): javax.sound.sampled.AudioInputStream
        public static getAudioInputStream(arg0: java.net.URL): javax.sound.sampled.AudioInputStream
        public static getAudioInputStream(arg0: java.io.File): javax.sound.sampled.AudioInputStream
        public static getAudioFileTypes(): javax.sound.sampled.AudioFileFormat$Type[]
        public static isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type): boolean
        public static getAudioFileTypes(arg0: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat$Type[]
        public static isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioInputStream): boolean
        public static write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.OutputStream): int
        public static write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.File): int
      }

    }
  }
}
