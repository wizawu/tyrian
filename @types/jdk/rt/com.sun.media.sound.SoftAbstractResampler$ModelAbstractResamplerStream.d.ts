declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftAbstractResampler$ModelAbstractResamplerStream implements com.sun.media.sound.SoftResamplerStreamer {
    public noteOn(arg0: javax.sound.midi.MidiChannel, arg1: javax.sound.midi.VoiceStatus, arg2: int, arg3: int): void
    public noteOff(arg0: int): void
    public open(arg0: com.sun.media.sound.ModelWavetable, arg1: float): void
    public setPitch(arg0: float): void
    public nextBuffer(): void
    public reverseBuffers(): void
    public read(arg0: float[][], arg1: int, arg2: int): int
    public close(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}