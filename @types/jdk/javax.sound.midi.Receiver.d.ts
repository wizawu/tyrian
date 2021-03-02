declare namespace javax {
  namespace sound {
    namespace midi {

      interface Receiver extends java.lang.AutoCloseable {
        send(arg0: javax.sound.midi.MidiMessage, arg1: long): void
        close(): void
      }

    }
  }
}
