declare namespace java {
  namespace awt {
    namespace print {
      interface Printable$$lambda {
        (arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: number | java.lang.Integer):
          | number
          | java.lang.Integer
      }

      interface Printable {
        readonly PAGE_EXISTS: int
        readonly NO_SUCH_PAGE: int
        print(arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: number | java.lang.Integer): number
      }
    }
  }
}
