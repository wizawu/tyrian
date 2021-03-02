declare namespace javax {
  namespace smartcardio {

    abstract class TerminalFactorySpi {
      protected constructor()
      protected abstract engineTerminals(): javax.smartcardio.CardTerminals
    }

  }
}
