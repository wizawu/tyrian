declare namespace javax {
  namespace sound {
    namespace sampled {
      abstract class EnumControl extends javax.sound.sampled.Control {
        protected constructor(
          arg0: javax.sound.sampled.EnumControl$Type,
          arg1: java.lang.Object[] | any[],
          arg2: java.lang.Object | any
        )
        public setValue(arg0: java.lang.Object | any): void
        public getValue(): java.lang.Object
        public getValues(): java.lang.Object[]
        public toString(): java.lang.String
      }
    }
  }
}
