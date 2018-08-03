declare namespace javax {
    namespace sound {
        namespace midi {
            interface Receiver extends java.lang.AutoCloseable {
                send(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda, arg1: long): void
                close(): void
            }
        }
    }
}