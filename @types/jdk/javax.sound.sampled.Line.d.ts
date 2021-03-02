declare namespace javax {
  namespace sound {
    namespace sampled {

      interface Line extends java.lang.AutoCloseable {
        getLineInfo(): javax.sound.sampled.Line$Info
        open(): void
        close(): void
        isOpen(): boolean
        getControls(): javax.sound.sampled.Control[]
        isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
        getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
        addLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$lambda): void
        removeLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$lambda): void
      }

    }
  }
}
