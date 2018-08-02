declare namespace javax {
    namespace sound {
        namespace midi {
            class ShortMessage extends javax.sound.midi.MidiMessage {
                public static MIDI_TIME_CODE: int
                public static SONG_POSITION_POINTER: int
                public static SONG_SELECT: int
                public static TUNE_REQUEST: int
                public static END_OF_EXCLUSIVE: int
                public static TIMING_CLOCK: int
                public static START: int
                public static CONTINUE: int
                public static STOP: int
                public static ACTIVE_SENSING: int
                public static SYSTEM_RESET: int
                public static NOTE_OFF: int
                public static NOTE_ON: int
                public static POLY_PRESSURE: int
                public static CONTROL_CHANGE: int
                public static PROGRAM_CHANGE: int
                public static CHANNEL_PRESSURE: int
                public static PITCH_BEND: int
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: int, arg2: int)
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                protected constructor(arg0: byte[])
                public setMessage(arg0: int): void
                public setMessage(arg0: int, arg1: int, arg2: int): void
                public setMessage(arg0: int, arg1: int, arg2: int, arg3: int): void
                public getChannel(): int
                public getCommand(): int
                public getData1(): int
                public getData2(): int
                public clone(): java.lang.Object
                protected getDataLength(arg0: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}