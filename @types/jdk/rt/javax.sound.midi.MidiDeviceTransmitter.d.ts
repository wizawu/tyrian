declare namespace javax {
    namespace sound {
        namespace midi {
            interface MidiDeviceTransmitter extends javax.sound.midi.Transmitter {
                getMidiDevice(): javax.sound.midi.MidiDevice
            }
            interface MidiDeviceTransmitter$$Lambda extends javax.sound.midi.Transmitter {
                (): javax.sound.midi.MidiDevice
            }
        }
    }
}