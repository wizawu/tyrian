declare namespace javax {
  namespace sound {
    namespace midi {

      abstract class MidiMessage implements java.lang.Cloneable {
        protected data: byte[]
        protected length: int
        protected constructor(arg0: byte[])
        protected setMessage(arg0: byte[], arg1: int): void
        public getMessage(): byte[]
        public getStatus(): int
        public getLength(): int
        public abstract clone(): java.lang.Object
      }

    }
  }
}
