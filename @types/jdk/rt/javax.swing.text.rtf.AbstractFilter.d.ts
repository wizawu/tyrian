declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                abstract class AbstractFilter extends java.io.OutputStream {
                    protected translationTable: char[]
                    protected specialsTable: boolean[]
                    public readFromStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                    public readFromReader(arg0: java.io.Reader): void
                    public constructor()
                    public write(arg0: int): void
                    public write(arg0: byte[], arg1: int, arg2: int): void
                    public write(arg0: java.lang.String | string): void
                    protected abstract write(arg0: char): void
                    protected abstract writeSpecial(arg0: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}