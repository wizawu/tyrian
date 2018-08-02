declare namespace javax {
    namespace sound {
        namespace midi {
interface Soundbank {
    getName(): string
    getVersion(): string
    getVendor(): string
    getDescription(): string
    getResources(): javax.sound.midi.SoundbankResource[]
    getInstruments(): javax.sound.midi.Instrument[]
    getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
}

        }
    }
}