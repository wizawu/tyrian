declare namespace javax {
    namespace swing {
        namespace text {
class JTextComponent$InputMethodRequestsHandler implements java.awt.im.InputMethodRequests , javax.swing.event.DocumentListener {
    public cancelLatestCommittedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public getCommittedText(arg0: int, arg1: int, arg2: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public getCommittedTextLength(): int
    public getInsertPositionOffset(): int
    public getLocationOffset(arg0: int, arg1: int): java.awt.font.TextHitInfo
    public getTextLocation(arg0: java.awt.font.TextHitInfo): java.awt.Rectangle
    public getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
    public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
    public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
    public static class: java.lang.Class<any>
}

        }
    }
}