declare namespace javax {
    namespace sound {
        namespace midi {
class SysexMessage extends javax.sound.midi.MidiMessage {
    public static SYSTEM_EXCLUSIVE: int
    public static SPECIAL_SYSTEM_EXCLUSIVE: int
    public constructor()
    public constructor(arg0: byte[], arg1: int)
    public constructor(arg0: int, arg1: byte[], arg2: int)
    protected constructor(arg0: byte[])
    public setMessage(arg0: byte[], arg1: int): void
    public setMessage(arg0: int, arg1: byte[], arg2: int): void
    public getData(): byte[]
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}