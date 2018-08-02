declare namespace sun {
    namespace swing {
        namespace text {
            interface CountingPrintable extends java.awt.print.Printable {
                getNumberOfPages(): int
            }
        }
    }
}