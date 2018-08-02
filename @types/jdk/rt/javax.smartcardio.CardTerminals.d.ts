declare namespace javax {
    namespace smartcardio {
        abstract class CardTerminals {
            protected constructor()
            public list(): java.util.List<javax.smartcardio.CardTerminal>
            public list(arg0: javax.smartcardio.CardTerminals$State): java.util.List<javax.smartcardio.CardTerminal>
            public getTerminal(arg0: java.lang.String | string): javax.smartcardio.CardTerminal
            public waitForChange(): void
            public waitForChange(arg0: long): boolean
            public static class: java.lang.Class<any>
        }
    }
}