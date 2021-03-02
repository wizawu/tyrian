declare namespace java {
  namespace awt {
    namespace print {

      interface Printable$$lambda {
        (arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: number | java.lang.Integer): int
      }

      interface Printable {
        public static readonly PAGE_EXISTS: int
        public static readonly NO_SUCH_PAGE: int
        print(arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: number | java.lang.Integer): number
      }

    }
  }
}
