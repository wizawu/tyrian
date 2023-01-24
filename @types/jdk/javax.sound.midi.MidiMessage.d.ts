declare namespace javax {
  namespace sound {
    namespace midi {
      abstract class MidiMessage implements java.lang.Cloneable {
        protected data: byte[]
        protected length: int
        protected constructor(arg0: number[] | java.lang.Byte[])
        protected setMessage(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): void
        public getMessage(): number[]
        public getStatus(): number
        public getLength(): number
        public abstract clone(): java.lang.Object
      }
    }
  }
}
