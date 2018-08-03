declare namespace javax {
    namespace sound {
        namespace midi {
            interface MidiDeviceReceiver extends javax.sound.midi.Receiver {
                getMidiDevice(): javax.sound.midi.MidiDevice
            }
            interface MidiDeviceReceiver$$Lambda extends javax.sound.midi.Receiver {
                (): javax.sound.midi.MidiDevice
            }
        }
    }
}