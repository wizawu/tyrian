declare namespace java {
    namespace awt {
        namespace print {
            interface Printable {
                PAGE_EXISTS: int
                NO_SUCH_PAGE: int
                print(arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: int): int
            }
            interface Printable$$Lambda {
                PAGE_EXISTS: int
            }
        }
    }
}