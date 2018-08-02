declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftTuning {
    public constructor()
    public constructor(arg0: byte[])
    public constructor(arg0: javax.sound.midi.Patch)
    public constructor(arg0: javax.sound.midi.Patch, arg1: byte[])
    public load(arg0: byte[]): void
    public getTuning(): double[]
    public getTuning(arg0: int): double
    public getPatch(): javax.sound.midi.Patch
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}