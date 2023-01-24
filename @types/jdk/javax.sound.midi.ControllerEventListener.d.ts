declare namespace javax {
  namespace sound {
    namespace midi {
      interface ControllerEventListener$$lambda {
        (arg0: javax.sound.midi.ShortMessage): void
      }

      interface ControllerEventListener extends java.util.EventListener {
        controlChange(arg0: javax.sound.midi.ShortMessage): void
      }
    }
  }
}
