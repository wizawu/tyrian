declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SunFileReader extends javax.sound.sampled.spi.AudioFileReader {
                    protected static bisBufferSize: int
                    public getAudioFileFormat(arg0: java.io.InputStream): javax.sound.sampled.AudioFileFormat
                    public getAudioFileFormat(arg0: java.net.URL): javax.sound.sampled.AudioFileFormat
                    public getAudioFileFormat(arg0: java.io.File): javax.sound.sampled.AudioFileFormat
                    public getAudioInputStream(arg0: java.io.InputStream): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.net.URL): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.io.File): javax.sound.sampled.AudioInputStream
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}