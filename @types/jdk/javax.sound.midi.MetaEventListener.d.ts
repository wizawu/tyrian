declare namespace javax {
  namespace sound {
    namespace midi {
      interface MetaEventListener$$lambda {
        (arg0: javax.sound.midi.MetaMessage): void
      }

      interface MetaEventListener extends java.util.EventListener {
        meta(arg0: javax.sound.midi.MetaMessage): void
      }
    }
  }
}
