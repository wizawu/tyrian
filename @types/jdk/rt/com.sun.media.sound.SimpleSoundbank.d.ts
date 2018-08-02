declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SimpleSoundbank implements javax.sound.midi.Soundbank {
                    public constructor()
                    public getName(): string
                    public getVersion(): string
                    public getVendor(): string
                    public getDescription(): string
                    public setDescription(arg0: java.lang.String | string): void
                    public setName(arg0: java.lang.String | string): void
                    public setVendor(arg0: java.lang.String | string): void
                    public setVersion(arg0: java.lang.String | string): void
                    public getResources(): javax.sound.midi.SoundbankResource[]
                    public getInstruments(): javax.sound.midi.Instrument[]
                    public getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
                    public addResource(arg0: javax.sound.midi.SoundbankResource): void
                    public removeResource(arg0: javax.sound.midi.SoundbankResource): void
                    public addInstrument(arg0: javax.sound.midi.Instrument): void
                    public removeInstrument(arg0: javax.sound.midi.Instrument): void
                    public addAllInstruments(arg0: javax.sound.midi.Soundbank): void
                    public removeAllInstruments(arg0: javax.sound.midi.Soundbank): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}