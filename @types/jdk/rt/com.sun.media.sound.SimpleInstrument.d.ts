declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SimpleInstrument extends com.sun.media.sound.ModelInstrument {
    protected preset: int
    protected bank: int
    protected percussion: boolean
    protected name: string
    protected parts: java.util.List<com.sun.media.sound.SimpleInstrument$SimpleInstrumentPart>
    public constructor()
    public clear(): void
    public add(arg0: com.sun.media.sound.ModelPerformer[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer[], arg1: int, arg2: int, arg3: int, arg4: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer[], arg1: int, arg2: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer[]): void
    public add(arg0: com.sun.media.sound.ModelPerformer, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer, arg1: int, arg2: int, arg3: int, arg4: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer, arg1: int, arg2: int): void
    public add(arg0: com.sun.media.sound.ModelPerformer): void
    public add(arg0: com.sun.media.sound.ModelInstrument, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
    public add(arg0: com.sun.media.sound.ModelInstrument, arg1: int, arg2: int, arg3: int, arg4: int): void
    public add(arg0: com.sun.media.sound.ModelInstrument, arg1: int, arg2: int): void
    public add(arg0: com.sun.media.sound.ModelInstrument): void
    public getPerformers(): com.sun.media.sound.ModelPerformer[]
    public getData(): java.lang.Object
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public getPatch(): com.sun.media.sound.ModelPatch
    public setPatch(arg0: javax.sound.midi.Patch): void
    public getPatch(): javax.sound.midi.Patch
    public static class: java.lang.Class<any>
}

            }
        }
    }
}