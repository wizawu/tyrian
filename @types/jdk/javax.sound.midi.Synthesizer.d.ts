declare namespace javax {
  namespace sound {
    namespace midi {
      interface Synthesizer extends javax.sound.midi.MidiDevice {
        getMaxPolyphony(): number
        getLatency(): number
        getChannels(): javax.sound.midi.MidiChannel[]
        getVoiceStatus(): javax.sound.midi.VoiceStatus[]
        isSoundbankSupported(arg0: javax.sound.midi.Soundbank): boolean
        loadInstrument(arg0: javax.sound.midi.Instrument): boolean
        unloadInstrument(arg0: javax.sound.midi.Instrument): void
        remapInstrument(arg0: javax.sound.midi.Instrument, arg1: javax.sound.midi.Instrument): boolean
        getDefaultSoundbank(): javax.sound.midi.Soundbank
        getAvailableInstruments(): javax.sound.midi.Instrument[]
        getLoadedInstruments(): javax.sound.midi.Instrument[]
        loadAllInstruments(arg0: javax.sound.midi.Soundbank): boolean
        unloadAllInstruments(arg0: javax.sound.midi.Soundbank): void
        loadInstruments(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch[]): boolean
        unloadInstruments(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch[]): void
      }
    }
  }
}
