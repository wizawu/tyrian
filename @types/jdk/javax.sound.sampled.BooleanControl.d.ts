declare namespace javax {
  namespace sound {
    namespace sampled {

      abstract class BooleanControl extends javax.sound.sampled.Control {

        protected constructor(arg0: javax.sound.sampled.BooleanControl$Type, arg1: boolean, arg2: java.lang.String, arg3: java.lang.String)
        protected constructor(arg0: javax.sound.sampled.BooleanControl$Type, arg1: boolean)
        public setValue(arg0: boolean): void
        public getValue(): boolean
        public getStateLabel(arg0: boolean): java.lang.String
        public toString(): java.lang.String
      }

    }
  }
}
