declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SunCodec extends javax.sound.sampled.spi.FormatConversionProvider {
                    public getSourceEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
                    public getTargetEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
                    public abstract getTargetEncodings(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat$Encoding[]
                    public abstract getTargetFormats(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat[]
                    public abstract getAudioInputStream(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                    public abstract getAudioInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}