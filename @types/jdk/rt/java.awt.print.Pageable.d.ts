declare namespace java {
    namespace awt {
        namespace print {
interface Pageable {
    UNKNOWN_NUMBER_OF_PAGES: int
    getNumberOfPages(): int
    getPageFormat(arg0: int): java.awt.print.PageFormat
    getPrintable(arg0: int): java.awt.print.Printable
}

        }
    }
}