declare namespace javax {
  namespace imageio {
    namespace event {
      interface IIOReadWarningListener$$lambda {
        (arg0: javax.imageio.ImageReader, arg1: java.lang.String | string): void
      }

      interface IIOReadWarningListener extends java.util.EventListener {
        warningOccurred(arg0: javax.imageio.ImageReader, arg1: java.lang.String | string): void
      }
    }
  }
}
