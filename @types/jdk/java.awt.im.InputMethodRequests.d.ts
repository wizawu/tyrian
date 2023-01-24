declare namespace java {
  namespace awt {
    namespace im {
      interface InputMethodRequests {
        getTextLocation(arg0: java.awt.font.TextHitInfo): java.awt.Rectangle
        getLocationOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.font.TextHitInfo
        getInsertPositionOffset(): number
        getCommittedText(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.text.AttributedCharacterIterator$Attribute[]
        ): java.text.AttributedCharacterIterator
        getCommittedTextLength(): number
        cancelLatestCommittedText(
          arg0: java.text.AttributedCharacterIterator$Attribute[]
        ): java.text.AttributedCharacterIterator
        getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
      }
    }
  }
}
