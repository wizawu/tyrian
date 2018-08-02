declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
interface ModelOscillatorStream {
    setPitch(arg0: float): void
    noteOn(arg0: javax.sound.midi.MidiChannel, arg1: javax.sound.midi.VoiceStatus, arg2: int, arg3: int): void
    noteOff(arg0: int): void
    read(arg0: float[][], arg1: int, arg2: int): int
    close(): void
}

            }
        }
    }
}