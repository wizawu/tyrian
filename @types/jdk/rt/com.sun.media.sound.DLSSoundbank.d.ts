declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class DLSSoundbank implements javax.sound.midi.Soundbank {
                    public constructor()
                    public constructor(arg0: java.net.URL)
                    public constructor(arg0: java.io.File)
                    public constructor(arg0: java.io.InputStream)
                    public save(arg0: java.lang.String | string): void
                    public save(arg0: java.io.File): void
                    public save(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public getInfo(): com.sun.media.sound.DLSInfo
                    public getName(): string
                    public getVersion(): string
                    public getVendor(): string
                    public getDescription(): string
                    public setName(arg0: java.lang.String | string): void
                    public setVendor(arg0: java.lang.String | string): void
                    public setDescription(arg0: java.lang.String | string): void
                    public getResources(): javax.sound.midi.SoundbankResource[]
                    public getInstruments(): com.sun.media.sound.DLSInstrument[]
                    public getSamples(): com.sun.media.sound.DLSSample[]
                    public getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
                    public addResource(arg0: javax.sound.midi.SoundbankResource): void
                    public removeResource(arg0: javax.sound.midi.SoundbankResource): void
                    public addInstrument(arg0: com.sun.media.sound.DLSInstrument): void
                    public removeInstrument(arg0: com.sun.media.sound.DLSInstrument): void
                    public getMajor(): long
                    public setMajor(arg0: long): void
                    public getMinor(): long
                    public setMinor(arg0: long): void
                    public getInstruments(): javax.sound.midi.Instrument[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}