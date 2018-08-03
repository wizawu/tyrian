declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class WaveFloatFileWriter extends javax.sound.sampled.spi.AudioFileWriter {
                    public constructor()
                    public getAudioFileTypes(): javax.sound.sampled.AudioFileFormat$Type[]
                    public getAudioFileTypes(arg0: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat$Type[]
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: com.sun.media.sound.RIFFWriter): void
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.OutputStream): int
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}