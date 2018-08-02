declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
class RTFReader extends javax.swing.text.rtf.RTFParser {
    public constructor(arg0: javax.swing.text.StyledDocument)
    public handleBinaryBlob(arg0: byte[]): void
    public handleText(arg0: java.lang.String | string): void
    public begingroup(): void
    public endgroup(): void
    protected setRTFDestination(arg0: javax.swing.text.rtf.RTFReader$Destination): void
    public close(): void
    public handleKeyword(arg0: java.lang.String | string): boolean
    public handleKeyword(arg0: java.lang.String | string, arg1: int): boolean
    public setCharacterSet(arg0: java.lang.String | string): void
    public static defineCharacterSet(arg0: java.lang.String | string, arg1: char[]): void
    public static getCharacterSet(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}