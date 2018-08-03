declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                abstract class RTFParser extends javax.swing.text.rtf.AbstractFilter {
                    public level: int
                    protected warnings: java.io.PrintStream
                    public abstract handleKeyword(arg0: java.lang.String | string): boolean
                    public abstract handleKeyword(arg0: java.lang.String | string, arg1: int): boolean
                    public abstract handleText(arg0: java.lang.String | string): void
                    public handleText(arg0: char): void
                    public abstract handleBinaryBlob(arg0: byte[]): void
                    public abstract begingroup(): void
                    public abstract endgroup(): void
                    public constructor()
                    public writeSpecial(arg0: int): void
                    protected warning(arg0: java.lang.String | string): void
                    public write(arg0: java.lang.String | string): void
                    public write(arg0: char): void
                    public flush(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}