declare namespace javax {
  namespace sound {
    namespace midi {

      abstract class MidiMessage implements java.lang.Cloneable {
        protected data: byte[]
        protected length: int
        protected constructor(arg0: byte[])
        protected setMessage(arg0: byte[], arg1: number | java.lang.Integer): void
        public getMessage(): number[]
        public getStatus(): number
        public getLength(): number
        public abstract clone(): java.lang.Object
      }

    }
  }
}
