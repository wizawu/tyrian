declare namespace java {
    namespace awt {
        namespace print {
class Book implements java.awt.print.Pageable {
    public constructor()
    public getNumberOfPages(): int
    public getPageFormat(arg0: int): java.awt.print.PageFormat
    public getPrintable(arg0: int): java.awt.print.Printable
    public setPage(arg0: int, arg1: java.awt.print.Printable, arg2: java.awt.print.PageFormat): void
    public append(arg0: java.awt.print.Printable, arg1: java.awt.print.PageFormat): void
    public append(arg0: java.awt.print.Printable, arg1: java.awt.print.PageFormat, arg2: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}