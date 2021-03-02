declare namespace javax {
  namespace sound {
    namespace midi {

      abstract class Instrument extends javax.sound.midi.SoundbankResource {
        protected constructor(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch, arg2: java.lang.String | string, arg3: java.lang.Class<unknown>)
        public getPatch(): javax.sound.midi.Patch
      }

    }
  }
}
