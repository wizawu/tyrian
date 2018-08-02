declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftMidiAudioFileReader extends javax.sound.sampled.spi.AudioFileReader {
                    public static MIDI: javax.sound.sampled.AudioFileFormat$Type
                    public constructor()
                    public getAudioFileFormat(arg0: javax.sound.midi.Sequence): javax.sound.sampled.AudioFileFormat
                    public getAudioInputStream(arg0: javax.sound.midi.Sequence): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.io.InputStream): javax.sound.sampled.AudioInputStream
                    public getAudioFileFormat(arg0: java.net.URL): javax.sound.sampled.AudioFileFormat
                    public getAudioFileFormat(arg0: java.io.File): javax.sound.sampled.AudioFileFormat
                    public getAudioInputStream(arg0: java.net.URL): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: java.io.File): javax.sound.sampled.AudioInputStream
                    public getAudioFileFormat(arg0: java.io.InputStream): javax.sound.sampled.AudioFileFormat
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}