declare namespace sun {
    namespace security {
        namespace smartcardio {
            class TerminalImpl extends javax.smartcardio.CardTerminal {
                public getName(): string
                public connect(arg0: java.lang.String | string): javax.smartcardio.Card
                public isCardPresent(): boolean
                public waitForCardPresent(arg0: long): boolean
                public waitForCardAbsent(arg0: long): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}