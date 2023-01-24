declare namespace javax {
  namespace accessibility {
    interface AccessibleExtendedText {
      readonly LINE: int
      readonly ATTRIBUTE_RUN: int
      getTextRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      getTextSequenceAt(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.accessibility.AccessibleTextSequence
      getTextSequenceAfter(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.accessibility.AccessibleTextSequence
      getTextSequenceBefore(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.accessibility.AccessibleTextSequence
      getTextBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Rectangle
    }
  }
}
