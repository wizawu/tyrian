declare namespace java {
    namespace awt {
        namespace font {
            class StyledParagraph {
                public constructor(arg0: java.text.AttributedCharacterIterator, arg1: char[])
                public static insertChar(arg0: java.text.AttributedCharacterIterator, arg1: char[], arg2: int, arg3: java.awt.font.StyledParagraph): java.awt.font.StyledParagraph
                public static deleteChar(arg0: java.text.AttributedCharacterIterator, arg1: char[], arg2: int, arg3: java.awt.font.StyledParagraph): java.awt.font.StyledParagraph
                public getRunLimit(arg0: int): int
                public getDecorationAt(arg0: int): sun.font.Decoration
                public getFontOrGraphicAt(arg0: int): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}