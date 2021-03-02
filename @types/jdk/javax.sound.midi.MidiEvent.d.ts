declare namespace javax {
  namespace sound {
    namespace midi {

      class MidiEvent {
        public constructor(arg0: javax.sound.midi.MidiMessage, arg1: number | java.lang.Long)
        public getMessage(): javax.sound.midi.MidiMessage
        public setTick(arg0: number | java.lang.Long): void
        public getTick(): number
      }

    }
  }
}
