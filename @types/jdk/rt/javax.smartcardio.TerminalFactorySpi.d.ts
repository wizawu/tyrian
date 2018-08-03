declare namespace javax {
    namespace smartcardio {
        abstract class TerminalFactorySpi {
            protected constructor()
            protected abstract engineTerminals(): javax.smartcardio.CardTerminals
            public static class: java.lang.Class<any>
        }
        interface TerminalFactorySpi$$Lambda {
            (): javax.smartcardio.CardTerminals
        }
    }
}