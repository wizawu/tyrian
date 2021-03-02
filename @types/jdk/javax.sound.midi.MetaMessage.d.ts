declare namespace javax {
  namespace sound {
    namespace midi {

      class MetaMessage extends javax.sound.midi.MidiMessage {
        public static readonly META: int
        public constructor()
        public constructor(arg0: number | java.lang.Integer, arg1: byte[], arg2: number | java.lang.Integer)
        protected constructor(arg0: byte[])
        public setMessage(arg0: number | java.lang.Integer, arg1: byte[], arg2: number | java.lang.Integer): void
        public getType(): number
        public getData(): number[]
        public clone(): java.lang.Object
      }

    }
  }
}
