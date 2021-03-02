declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class Parser implements javax.swing.text.html.parser.DTDConstants {
            protected dtd: javax.swing.text.html.parser.DTD
            protected strict: boolean
            public constructor(arg0: javax.swing.text.html.parser.DTD)
            protected getCurrentLine(): int
            getBlockStartPosition(): int
            protected makeTag(arg0: javax.swing.text.html.parser.Element, arg1: boolean): javax.swing.text.html.parser.TagElement
            protected makeTag(arg0: javax.swing.text.html.parser.Element): javax.swing.text.html.parser.TagElement
            protected getAttributes(): javax.swing.text.SimpleAttributeSet
            protected flushAttributes(): void
            protected handleText(arg0: char[]): void
            protected handleTitle(arg0: char[]): void
            protected handleComment(arg0: char[]): void
            protected handleEOFInComment(): void
            protected handleEmptyTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleStartTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleEndTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleError(arg0: int, arg1: java.lang.String): void
            handleText(arg0: javax.swing.text.html.parser.TagElement): void
            protected error(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): void
            protected error(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
            protected error(arg0: java.lang.String, arg1: java.lang.String): void
            protected error(arg0: java.lang.String): void
            protected startTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected endTag(arg0: boolean): void
            ignoreElement(arg0: javax.swing.text.html.parser.Element): boolean
            protected markFirstTime(arg0: javax.swing.text.html.parser.Element): void
            legalElementContext(arg0: javax.swing.text.html.parser.Element): boolean
            legalTagContext(arg0: javax.swing.text.html.parser.TagElement): void
            errorContext(): void
            addString(arg0: int): void
            getString(arg0: int): java.lang.String
            getChars(arg0: int): char[]
            getChars(arg0: int, arg1: int): char[]
            resetStrBuffer(): void
            strIndexOf(arg0: char): int
            skipSpace(): void
            parseIdentifier(arg0: boolean): boolean
            parseComment(): void
            parseLiteral(arg0: boolean): void
            parseAttributeValue(arg0: boolean): java.lang.String
            parseAttributeSpecificationList(arg0: javax.swing.text.html.parser.Element): void
            public parseDTDMarkup(): java.lang.String
            protected parseMarkupDeclarations(arg0: java.lang.StringBuffer): boolean
            parseInvalidTag(): void
            parseTag(): void
            parseScript(): void
            parseContent(): void
            getEndOfLineString(): java.lang.String
            public parse(arg0: java.io.Reader): void
            protected getCurrentPos(): int
          }

        }
      }
    }
  }
}
