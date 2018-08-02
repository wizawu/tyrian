declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface AudioSynthesizer extends javax.sound.midi.Synthesizer {
                    getFormat(): javax.sound.sampled.AudioFormat
                    getPropertyInfo(arg0: java.util.Map<java.lang.String, java.lang.Object>): com.sun.media.sound.AudioSynthesizerPropertyInfo[]
                    open(arg0: javax.sound.sampled.SourceDataLine, arg1: java.util.Map<java.lang.String, java.lang.Object>): void
                    openStream(arg0: javax.sound.sampled.AudioFormat, arg1: java.util.Map<java.lang.String, java.lang.Object>): javax.sound.sampled.AudioInputStream
                }
            }
        }
    }
}