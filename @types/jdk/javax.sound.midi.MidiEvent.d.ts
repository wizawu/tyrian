declare namespace javax {
  namespace sound {
    namespace midi {

      class MidiEvent {

        public constructor(arg0: javax.sound.midi.MidiMessage, arg1: long)
        public getMessage(): javax.sound.midi.MidiMessage
        public setTick(arg0: long): void
        public getTick(): long
      }

    }
  }
}
