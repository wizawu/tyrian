declare namespace javax {
  namespace sound {
    namespace midi {

      abstract class SoundbankResource {
        protected constructor(arg0: javax.sound.midi.Soundbank, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>)
        public getSoundbank(): javax.sound.midi.Soundbank
        public getName(): java.lang.String
        public getDataClass(): java.lang.Class<unknown>
        public abstract getData(): java.lang.Object
      }

    }
  }
}
