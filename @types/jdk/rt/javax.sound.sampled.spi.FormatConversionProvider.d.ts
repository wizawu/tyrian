declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
abstract class FormatConversionProvider {
    public constructor()
    public getSourceEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
    public getTargetEncodings(): javax.sound.sampled.AudioFormat$Encoding[]
    public isSourceEncodingSupported(arg0: javax.sound.sampled.AudioFormat$Encoding): boolean
    public isTargetEncodingSupported(arg0: javax.sound.sampled.AudioFormat$Encoding): boolean
    public getTargetEncodings(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat$Encoding[]
    public isConversionSupported(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): boolean
    public getTargetFormats(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat[]
    public isConversionSupported(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioFormat): boolean
    public getAudioInputStream(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
    public getAudioInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
    public static class: java.lang.Class<any>
}

            }
        }
    }
}