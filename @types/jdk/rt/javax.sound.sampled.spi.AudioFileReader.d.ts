declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
                abstract class AudioFileReader {
                    public constructor()
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