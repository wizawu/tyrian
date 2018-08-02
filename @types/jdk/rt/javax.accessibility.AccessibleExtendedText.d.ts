declare namespace javax {
    namespace accessibility {
interface AccessibleExtendedText {
    LINE: int
    ATTRIBUTE_RUN: int
    getTextRange(arg0: int, arg1: int): string
    getTextSequenceAt(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
    getTextSequenceAfter(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
    getTextSequenceBefore(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
    getTextBounds(arg0: int, arg1: int): java.awt.Rectangle
}

    }
}