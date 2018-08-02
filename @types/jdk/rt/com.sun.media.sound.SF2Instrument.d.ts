declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SF2Instrument extends com.sun.media.sound.ModelInstrument {
    public constructor()
    public constructor(arg0: com.sun.media.sound.SF2Soundbank)
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public getPatch(): javax.sound.midi.Patch
    public setPatch(arg0: javax.sound.midi.Patch): void
    public getData(): java.lang.Object
    public getGenre(): long
    public setGenre(arg0: long): void
    public getLibrary(): long
    public setLibrary(arg0: long): void
    public getMorphology(): long
    public setMorphology(arg0: long): void
    public getRegions(): java.util.List<com.sun.media.sound.SF2InstrumentRegion>
    public getGlobalRegion(): com.sun.media.sound.SF2GlobalRegion
    public setGlobalZone(arg0: com.sun.media.sound.SF2GlobalRegion): void
    public toString(): string
    public getPerformers(): com.sun.media.sound.ModelPerformer[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}