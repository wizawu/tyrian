declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SF2Soundbank implements javax.sound.midi.Soundbank {
                    public constructor()
                    public constructor(arg0: java.net.URL)
                    public constructor(arg0: java.io.File)
                    public constructor(arg0: java.io.InputStream)
                    public save(arg0: java.lang.String | string): void
                    public save(arg0: java.io.File): void
                    public save(arg0: java.io.OutputStream): void
                    public getName(): string
                    public getVersion(): string
                    public getVendor(): string
                    public getDescription(): string
                    public setName(arg0: java.lang.String | string): void
                    public setVendor(arg0: java.lang.String | string): void
                    public setDescription(arg0: java.lang.String | string): void
                    public getResources(): javax.sound.midi.SoundbankResource[]
                    public getInstruments(): com.sun.media.sound.SF2Instrument[]
                    public getLayers(): com.sun.media.sound.SF2Layer[]
                    public getSamples(): com.sun.media.sound.SF2Sample[]
                    public getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
                    public getCreationDate(): string
                    public setCreationDate(arg0: java.lang.String | string): void
                    public getProduct(): string
                    public setProduct(arg0: java.lang.String | string): void
                    public getRomName(): string
                    public setRomName(arg0: java.lang.String | string): void
                    public getRomVersionMajor(): int
                    public setRomVersionMajor(arg0: int): void
                    public getRomVersionMinor(): int
                    public setRomVersionMinor(arg0: int): void
                    public getTargetEngine(): string
                    public setTargetEngine(arg0: java.lang.String | string): void
                    public getTools(): string
                    public setTools(arg0: java.lang.String | string): void
                    public addResource(arg0: javax.sound.midi.SoundbankResource): void
                    public removeResource(arg0: javax.sound.midi.SoundbankResource): void
                    public addInstrument(arg0: com.sun.media.sound.SF2Instrument): void
                    public removeInstrument(arg0: com.sun.media.sound.SF2Instrument): void
                    public getInstruments(): javax.sound.midi.Instrument[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}