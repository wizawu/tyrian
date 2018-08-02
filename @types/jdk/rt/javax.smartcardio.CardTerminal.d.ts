declare namespace javax {
    namespace smartcardio {
abstract class CardTerminal {
    protected constructor()
    public getName(): string
    public connect(arg0: java.lang.String | string): javax.smartcardio.Card
    public isCardPresent(): boolean
    public waitForCardPresent(arg0: long): boolean
    public waitForCardAbsent(arg0: long): boolean
    public static class: java.lang.Class<any>
}

    }
}