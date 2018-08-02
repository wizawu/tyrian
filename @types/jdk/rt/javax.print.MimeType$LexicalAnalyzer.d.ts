declare namespace javax {
    namespace print {
class MimeType$LexicalAnalyzer {
    protected mySource: string
    protected mySourceLength: int
    protected myCurrentIndex: int
    protected myLexemeType: int
    protected myLexemeBeginIndex: int
    protected myLexemeEndIndex: int
    public constructor(arg0: java.lang.String | string)
    public getLexemeType(): int
    public getLexeme(): string
    public getLexemeFirstCharacter(): char
    public nextLexeme(): void
    public static class: java.lang.Class<any>
}

    }
}