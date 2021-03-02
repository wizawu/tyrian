declare namespace javax {
  namespace accessibility {

    interface AccessibleExtendedText {
      public static readonly LINE: int
      public static readonly ATTRIBUTE_RUN: int
      getTextRange(arg0: int, arg1: int): java.lang.String
      getTextSequenceAt(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
      getTextSequenceAfter(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
      getTextSequenceBefore(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
      getTextBounds(arg0: int, arg1: int): java.awt.Rectangle
    }

  }
}
