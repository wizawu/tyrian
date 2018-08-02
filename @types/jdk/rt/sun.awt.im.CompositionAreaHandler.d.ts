declare namespace sun {
    namespace awt {
        namespace im {
class CompositionAreaHandler implements java.awt.event.InputMethodListener , java.awt.im.InputMethodRequests {
    public inputMethodTextChanged(arg0: java.awt.event.InputMethodEvent): void
    public caretPositionChanged(arg0: java.awt.event.InputMethodEvent): void
    public getTextLocation(arg0: java.awt.font.TextHitInfo): java.awt.Rectangle
    public getLocationOffset(arg0: int, arg1: int): java.awt.font.TextHitInfo
    public getInsertPositionOffset(): int
    public getCommittedText(arg0: int, arg1: int, arg2: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public getCommittedTextLength(): int
    public cancelLatestCommittedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public static class: java.lang.Class<any>
}

        }
    }
}