declare namespace java {
  namespace awt {
    namespace im {

      interface InputMethodRequests {
        getTextLocation(arg0: java.awt.font.TextHitInfo): java.awt.Rectangle
        getLocationOffset(arg0: int, arg1: int): java.awt.font.TextHitInfo
        getInsertPositionOffset(): int
        getCommittedText(arg0: int, arg1: int, arg2: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
        getCommittedTextLength(): int
        cancelLatestCommittedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
        getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
      }

    }
  }
}
