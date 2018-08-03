declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
                abstract class AudioFileWriter {
                    public constructor()
                    public getAudioFileTypes(): javax.sound.sampled.AudioFileFormat$Type[]
                    public isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type): boolean
                    public getAudioFileTypes(arg0: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat$Type[]
                    public isFileTypeSupported(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioInputStream): boolean
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.OutputStream): int
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}