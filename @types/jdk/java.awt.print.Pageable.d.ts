declare namespace java {
  namespace awt {
    namespace print {

      interface Pageable {
        public static readonly UNKNOWN_NUMBER_OF_PAGES: int
        getNumberOfPages(): number
        getPageFormat(arg0: number | java.lang.Integer): java.awt.print.PageFormat
        getPrintable(arg0: number | java.lang.Integer): java.awt.print.Printable
      }

    }
  }
}
