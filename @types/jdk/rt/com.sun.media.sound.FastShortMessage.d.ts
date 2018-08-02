declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class FastShortMessage extends javax.sound.midi.ShortMessage {
                    public getMessage(): byte[]
                    public getLength(): int
                    public setMessage(arg0: int): void
                    public setMessage(arg0: int, arg1: int, arg2: int): void
                    public setMessage(arg0: int, arg1: int, arg2: int, arg3: int): void
                    public getChannel(): int
                    public getCommand(): int
                    public getData1(): int
                    public getData2(): int
                    public getStatus(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}