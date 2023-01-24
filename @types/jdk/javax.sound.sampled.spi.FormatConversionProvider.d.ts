declare namespace javax {
  namespace sound {
    namespace sampled {
      namespace spi {
        abstract class FormatConversionProvider {
          public constructor()
          public abstract getSourceEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
          public abstract getTargetEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
          public isSourceEncodingSupported(arg0: javax.sound.sampled.AudioFormat$Encoding): boolean
          public isTargetEncodingSupported(arg0: javax.sound.sampled.AudioFormat$Encoding): boolean
          public abstract getTargetEncodings(
            arg0: javax.sound.sampled.AudioFormat
          ): javax.sound.sampled.AudioFormat$Encoding[]
          public isConversionSupported(
            arg0: javax.sound.sampled.AudioFormat$Encoding,
            arg1: javax.sound.sampled.AudioFormat
          ): boolean
          public abstract getTargetFormats(
            arg0: javax.sound.sampled.AudioFormat$Encoding,
            arg1: javax.sound.sampled.AudioFormat
          ): javax.sound.sampled.AudioFormat[]
          public isConversionSupported(
            arg0: javax.sound.sampled.AudioFormat,
            arg1: javax.sound.sampled.AudioFormat
          ): boolean
          public abstract getAudioInputStream(
            arg0: javax.sound.sampled.AudioFormat$Encoding,
            arg1: javax.sound.sampled.AudioInputStream
          ): javax.sound.sampled.AudioInputStream
          public abstract getAudioInputStream(
            arg0: javax.sound.sampled.AudioFormat,
            arg1: javax.sound.sampled.AudioInputStream
          ): javax.sound.sampled.AudioInputStream
        }
      }
    }
  }
}
