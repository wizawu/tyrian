declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class AudioFloatFormatConverter extends javax.sound.sampled.spi.FormatConversionProvider {
                    public constructor()
                    public getAudioInputStream(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                    public getAudioInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: com.sun.media.sound.AudioFloatInputStream): javax.sound.sampled.AudioInputStream
                    public getSourceEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
                    public getTargetEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
                    public getTargetEncodings(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat$Encoding[]
                    public getTargetFormats(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat[]
                    public isConversionSupported(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioFormat): boolean
                    public isConversionSupported(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}