declare namespace javax {
    namespace sound {
        namespace sampled {
abstract class BooleanControl extends javax.sound.sampled.Control {
    protected constructor(arg0: javax.sound.sampled.BooleanControl$Type, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.String | string)
    protected constructor(arg0: javax.sound.sampled.BooleanControl$Type, arg1: boolean)
    public setValue(arg0: boolean): void
    public getValue(): boolean
    public getStateLabel(arg0: boolean): string
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}