declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SunFileReader extends javax.sound.sampled.spi.AudioFileReader {
                    protected static readonly bisBufferSize: int
                    public abstract getAudioFileFormat(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.sampled.AudioFileFormat
                    public abstract getAudioFileFormat(arg0: java.net.URL): javax.sound.sampled.AudioFileFormat
                    public abstract getAudioFileFormat(arg0: java.io.File): javax.sound.sampled.AudioFileFormat
                    public abstract getAudioInputStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.sampled.AudioInputStream
                    public abstract getAudioInputStream(arg0: java.net.URL): javax.sound.sampled.AudioInputStream
                    public abstract getAudioInputStream(arg0: java.io.File): javax.sound.sampled.AudioInputStream
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}