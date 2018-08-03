declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                class RTFGenerator {
                    public static defaultRTFColor: java.awt.Color
                    public static defaultFontSize: float
                    public static defaultFontFamily: string
                    protected static textKeywords: javax.swing.text.rtf.RTFGenerator$CharacterKeywordPair[]
                    public static writeDocument(arg0: javax.swing.text.Document, arg1: java.io.OutputStream): void
                    public constructor(arg0: java.io.OutputStream)
                    public examineElement(arg0: javax.swing.text.Element): void
                    public writeLineBreak(): void
                    public writeRTFHeader(): void
                    public writeRTFTrailer(): void
                    protected checkNumericControlWord(arg0: javax.swing.text.MutableAttributeSet, arg1: javax.swing.text.AttributeSet, arg2: java.lang.Object, arg3: java.lang.String | string, arg4: float, arg5: float): void
                    protected checkControlWord(arg0: javax.swing.text.MutableAttributeSet, arg1: javax.swing.text.AttributeSet, arg2: javax.swing.text.rtf.RTFAttribute): void
                    protected checkControlWords(arg0: javax.swing.text.MutableAttributeSet, arg1: javax.swing.text.AttributeSet, arg2: javax.swing.text.rtf.RTFAttribute[], arg3: int): void
                    protected resetSectionAttributes(arg0: javax.swing.text.MutableAttributeSet): void
                    public writeParagraphElement(arg0: javax.swing.text.Element): void
                    protected resetParagraphAttributes(arg0: javax.swing.text.MutableAttributeSet): void
                    protected resetCharacterAttributes(arg0: javax.swing.text.MutableAttributeSet): void
                    public writeTextElement(arg0: javax.swing.text.Element): void
                    public writeText(arg0: javax.swing.text.Segment): void
                    public writeText(arg0: java.lang.String | string): void
                    public writeRawString(arg0: java.lang.String | string): void
                    public writeControlWord(arg0: java.lang.String | string): void
                    public writeControlWord(arg0: java.lang.String | string, arg1: int): void
                    public writeBegingroup(): void
                    public writeEndgroup(): void
                    public writeCharacter(arg0: char): void
                    protected static convertCharacter(arg0: int[], arg1: char): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}