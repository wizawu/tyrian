declare namespace javax {
  namespace sound {
    namespace midi {

      class ShortMessage extends javax.sound.midi.MidiMessage {
        public static readonly MIDI_TIME_CODE: int
        public static readonly SONG_POSITION_POINTER: int
        public static readonly SONG_SELECT: int
        public static readonly TUNE_REQUEST: int
        public static readonly END_OF_EXCLUSIVE: int
        public static readonly TIMING_CLOCK: int
        public static readonly START: int
        public static readonly CONTINUE: int
        public static readonly STOP: int
        public static readonly ACTIVE_SENSING: int
        public static readonly SYSTEM_RESET: int
        public static readonly NOTE_OFF: int
        public static readonly NOTE_ON: int
        public static readonly POLY_PRESSURE: int
        public static readonly CONTROL_CHANGE: int
        public static readonly PROGRAM_CHANGE: int
        public static readonly CHANNEL_PRESSURE: int
        public static readonly PITCH_BEND: int
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        protected constructor(arg0: number[] | java.lang.Byte[])
        public setMessage(arg0: number | java.lang.Integer): void
        public setMessage(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public setMessage(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public getChannel(): number
        public getCommand(): number
        public getData1(): number
        public getData2(): number
        public clone(): java.lang.Object
        protected getDataLength(arg0: number | java.lang.Integer): number
      }

    }
  }
}
