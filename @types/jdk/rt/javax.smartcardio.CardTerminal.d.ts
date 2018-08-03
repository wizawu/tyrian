declare namespace javax {
    namespace smartcardio {
        abstract class CardTerminal {
            protected constructor()
            public abstract getName(): string
            public abstract connect(arg0: java.lang.String | string): javax.smartcardio.Card
            public abstract isCardPresent(): boolean
            public abstract waitForCardPresent(arg0: long): boolean
            public abstract waitForCardAbsent(arg0: long): boolean
            public static class: java.lang.Class<any>
        }
    }
}