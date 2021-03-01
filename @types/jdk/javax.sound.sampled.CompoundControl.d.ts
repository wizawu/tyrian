declare namespace javax {
  namespace sound {
    namespace sampled {

      abstract class CompoundControl extends javax.sound.sampled.Control {

        protected constructor(arg0: javax.sound.sampled.CompoundControl$Type, arg1: javax.sound.sampled.Control[])
        public getMemberControls(): javax.sound.sampled.Control[]
        public toString(): java.lang.String
      }

    }
  }
}
