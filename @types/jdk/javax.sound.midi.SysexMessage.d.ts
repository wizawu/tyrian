declare namespace javax {
  namespace sound {
    namespace midi {

      class SysexMessage extends javax.sound.midi.MidiMessage {
        public static readonly SYSTEM_EXCLUSIVE: int
        public static readonly SPECIAL_SYSTEM_EXCLUSIVE: int
        public constructor()
        public constructor(arg0: byte[], arg1: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: byte[], arg2: number | java.lang.Integer)
        protected constructor(arg0: byte[])
        public setMessage(arg0: byte[], arg1: number | java.lang.Integer): void
        public setMessage(arg0: number | java.lang.Integer, arg1: byte[], arg2: number | java.lang.Integer): void
        public getData(): number[]
        public clone(): java.lang.Object
      }

    }
  }
}
