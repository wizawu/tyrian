declare namespace javax {
  namespace sound {
    namespace sampled {
      namespace spi {

        abstract class AudioFileWriter {

          public constructor()
          public abstract getAudioFileTypes(): javax.sound.sampled.AudioFileFormat$Type[]
          public isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type): boolean
          public abstract getAudioFileTypes(arg0: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat$Type[]
          public isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioInputStream): boolean
          public abstract write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.OutputStream): int
          public abstract write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.File): int
        }

      }
    }
  }
}
