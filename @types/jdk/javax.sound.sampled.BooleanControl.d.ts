declare namespace javax {
  namespace sound {
    namespace sampled {
      abstract class BooleanControl extends javax.sound.sampled.Control {
        protected constructor(
          arg0: javax.sound.sampled.BooleanControl$Type,
          arg1: boolean | java.lang.Boolean,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string
        )
        protected constructor(arg0: javax.sound.sampled.BooleanControl$Type, arg1: boolean | java.lang.Boolean)
        public setValue(arg0: boolean | java.lang.Boolean): void
        public getValue(): boolean
        public getStateLabel(arg0: boolean | java.lang.Boolean): java.lang.String
        public toString(): java.lang.String
      }
    }
  }
}
