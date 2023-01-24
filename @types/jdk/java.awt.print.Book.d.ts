declare namespace java {
  namespace awt {
    namespace print {
      class Book implements java.awt.print.Pageable {
        public constructor()
        public getNumberOfPages(): number
        public getPageFormat(arg0: number | java.lang.Integer): java.awt.print.PageFormat
        public getPrintable(arg0: number | java.lang.Integer): java.awt.print.Printable
        public setPage(
          arg0: number | java.lang.Integer,
          arg1: java.awt.print.Printable | java.awt.print.Printable$$lambda,
          arg2: java.awt.print.PageFormat
        ): void
        public append(
          arg0: java.awt.print.Printable | java.awt.print.Printable$$lambda,
          arg1: java.awt.print.PageFormat
        ): void
        public append(
          arg0: java.awt.print.Printable | java.awt.print.Printable$$lambda,
          arg1: java.awt.print.PageFormat,
          arg2: number | java.lang.Integer
        ): void
      }
    }
  }
}
