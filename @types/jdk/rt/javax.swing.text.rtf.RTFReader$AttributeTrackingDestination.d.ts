declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                abstract class RTFReader$AttributeTrackingDestination implements javax.swing.text.rtf.RTFReader$Destination {
                    public constructor(arg0: javax.swing.text.rtf.RTFReader)
                    public abstract handleText(arg0: java.lang.String | string): void
                    public handleBinaryBlob(arg0: byte[]): void
                    public begingroup(): void
                    public endgroup(arg0: java.util.Dictionary): void
                    public close(): void
                    public handleKeyword(arg0: java.lang.String | string): boolean
                    public handleKeyword(arg0: java.lang.String | string, arg1: int): boolean
                    protected rootCharacterAttributes(): javax.swing.text.MutableAttributeSet
                    protected rootParagraphAttributes(): javax.swing.text.MutableAttributeSet
                    protected rootSectionAttributes(): javax.swing.text.MutableAttributeSet
                    public currentSectionAttributes(): javax.swing.text.AttributeSet
                    protected resetCharacterAttributes(): void
                    protected resetParagraphAttributes(): void
                    protected resetSectionAttributes(): void
                    public static class: java.lang.Class<any>
                }
                interface RTFReader$AttributeTrackingDestination$$Lambda implements javax.swing.text.rtf.RTFReader$Destination {
                    (arg0: java.lang.String | string): void
                }
            }
        }
    }
}