declare namespace javax {
  namespace sound {
    namespace midi {

      class Track {

        constructor()
        public add(arg0: javax.sound.midi.MidiEvent): boolean
        public remove(arg0: javax.sound.midi.MidiEvent): boolean
        public get(arg0: int): javax.sound.midi.MidiEvent
        public size(): int
        public ticks(): long
      }

    }
  }
}
