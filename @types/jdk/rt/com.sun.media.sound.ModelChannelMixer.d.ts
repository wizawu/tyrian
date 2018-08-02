declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface ModelChannelMixer extends javax.sound.midi.MidiChannel {
                    process(arg0: float[][], arg1: int, arg2: int): boolean
                    stop(): void
                }
            }
        }
    }
}