declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SunFileWriter extends javax.sound.sampled.spi.AudioFileWriter {
                    protected static bufferSize: int
                    protected static bisBufferSize: int
                    public getAudioFileTypes(): javax.sound.sampled.AudioFileFormat$Type[]
                    public getAudioFileTypes(arg0: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat$Type[]
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                    public write(arg0: javax.sound.sampled.AudioInputStream, arg1: javax.sound.sampled.AudioFileFormat$Type, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}