declare namespace javax {
  namespace sound {
    namespace midi {
      interface Soundbank {
        getName(): java.lang.String
        getVersion(): java.lang.String
        getVendor(): java.lang.String
        getDescription(): java.lang.String
        getResources(): javax.sound.midi.SoundbankResource[]
        getInstruments(): javax.sound.midi.Instrument[]
        getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
      }
    }
  }
}
