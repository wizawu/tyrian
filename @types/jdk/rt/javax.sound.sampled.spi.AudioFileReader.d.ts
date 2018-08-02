declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
                abstract class AudioFileReader {
                    public constructor()
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