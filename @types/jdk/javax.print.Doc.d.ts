declare namespace javax {
  namespace print {

    interface Doc {
      getDocFlavor(): javax.print.DocFlavor
      getPrintData(): java.lang.Object
      getAttributes(): javax.print.attribute.DocAttributeSet
      getReaderForText(): java.io.Reader
      getStreamForBytes(): java.io.InputStream
    }

  }
}
