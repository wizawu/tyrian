declare namespace javax {
  namespace print {
    class SimpleDoc implements javax.print.Doc {
      public constructor(
        arg0: java.lang.Object | any,
        arg1: javax.print.DocFlavor,
        arg2: javax.print.attribute.DocAttributeSet
      )
      public getDocFlavor(): javax.print.DocFlavor
      public getAttributes(): javax.print.attribute.DocAttributeSet
      public getPrintData(): java.lang.Object
      public getReaderForText(): java.io.Reader
      public getStreamForBytes(): java.io.InputStream
    }
  }
}
