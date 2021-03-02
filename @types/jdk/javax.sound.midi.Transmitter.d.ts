declare namespace javax {
  namespace sound {
    namespace midi {

      interface Transmitter extends java.lang.AutoCloseable {
        setReceiver(arg0: javax.sound.midi.Receiver): void
        getReceiver(): javax.sound.midi.Receiver
        close(): void
      }

    }
  }
}
