declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                interface RTFReader$Destination {
                    handleBinaryBlob(arg0: byte[]): void
                    handleText(arg0: java.lang.String | string): void
                    handleKeyword(arg0: java.lang.String | string): boolean
                    handleKeyword(arg0: java.lang.String | string, arg1: int): boolean
                    begingroup(): void
                    endgroup(arg0: java.util.Dictionary): void
                    close(): void
                }
            }
        }
    }
}