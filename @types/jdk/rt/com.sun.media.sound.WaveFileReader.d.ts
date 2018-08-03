declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class WaveFileReader extends com.sun.media.sound.SunFileReader {
                    public constructor()
                    public getAudioFileFormat(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.sampled.AudioFileFormat
                    public getAudioFileFormat(arg0: java.net.URL): javax.sound.sampled.AudioFileFormat
                    public getAudioFileFormat(arg0: java.io.File): javax.sound.sampled.AudioFileFormat
                    public getAudioInputStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.net.URL): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.io.File): javax.sound.sampled.AudioInputStream
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}