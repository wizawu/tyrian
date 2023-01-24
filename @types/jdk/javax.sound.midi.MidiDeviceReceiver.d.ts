declare namespace javax {
  namespace sound {
    namespace midi {
      interface MidiDeviceReceiver extends javax.sound.midi.Receiver {
        getMidiDevice(): javax.sound.midi.MidiDevice
      }
    }
  }
}
