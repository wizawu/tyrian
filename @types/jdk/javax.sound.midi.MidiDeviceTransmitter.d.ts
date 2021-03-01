declare namespace javax {
  namespace sound {
    namespace midi {

      interface MidiDeviceTransmitter extends javax.sound.midi.Transmitter {

        getMidiDevice(): javax.sound.midi.MidiDevice
      }

    }
  }
}
