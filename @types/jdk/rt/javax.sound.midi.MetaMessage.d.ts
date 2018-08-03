declare namespace javax {
    namespace sound {
        namespace midi {
            class MetaMessage extends javax.sound.midi.MidiMessage {
                public static readonly META: int
                public constructor()
                public constructor(arg0: int, arg1: byte[], arg2: int)
                protected constructor(arg0: byte[])
                public setMessage(arg0: int, arg1: byte[], arg2: int): void
                public getType(): int
                public getData(): byte[]
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}