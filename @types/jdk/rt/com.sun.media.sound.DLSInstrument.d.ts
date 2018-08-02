declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class DLSInstrument extends com.sun.media.sound.ModelInstrument {
    public constructor()
    public constructor(arg0: com.sun.media.sound.DLSSoundbank)
    public getInfo(): com.sun.media.sound.DLSInfo
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public getPatch(): com.sun.media.sound.ModelPatch
    public setPatch(arg0: javax.sound.midi.Patch): void
    public getData(): java.lang.Object
    public getRegions(): java.util.List<com.sun.media.sound.DLSRegion>
    public getModulators(): java.util.List<com.sun.media.sound.DLSModulator>
    public toString(): string
    public getPerformers(): com.sun.media.sound.ModelPerformer[]
    public getGuid(): byte[]
    public setGuid(arg0: byte[]): void
    public getPatch(): javax.sound.midi.Patch
    public static class: java.lang.Class<any>
}

            }
        }
    }
}