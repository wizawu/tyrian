declare namespace javax {
  namespace imageio {
    namespace event {
      interface IIOWriteWarningListener$$lambda {
        (arg0: javax.imageio.ImageWriter, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      }

      interface IIOWriteWarningListener extends java.util.EventListener {
        warningOccurred(
          arg0: javax.imageio.ImageWriter,
          arg1: number | java.lang.Integer,
          arg2: java.lang.String | string
        ): void
      }
    }
  }
}
