declare namespace java {
  namespace awt {
    namespace event {

      interface InputMethodListener extends java.util.EventListener {
        inputMethodTextChanged(arg0: java.awt.event.InputMethodEvent): void
        caretPositionChanged(arg0: java.awt.event.InputMethodEvent): void
      }

    }
  }
}
