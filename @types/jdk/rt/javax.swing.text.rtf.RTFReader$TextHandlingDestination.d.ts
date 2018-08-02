declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                abstract class RTFReader$TextHandlingDestination extends javax.swing.text.rtf.RTFReader$AttributeTrackingDestination implements javax.swing.text.rtf.RTFReader$Destination {
                    public constructor(arg0: javax.swing.text.rtf.RTFReader)
                    public handleText(arg0: java.lang.String | string): void
                    public close(): void
                    public handleKeyword(arg0: java.lang.String | string): boolean
                    protected beginParagraph(): void
                    protected endParagraph(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}