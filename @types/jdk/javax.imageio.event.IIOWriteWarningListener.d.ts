declare namespace javax {
  namespace imageio {
    namespace event {

      interface IIOWriteWarningListener$$lambda {
        (arg0: javax.imageio.ImageWriter, arg1: int, arg2: java.lang.String): void
      }

      interface IIOWriteWarningListener extends java.util.EventListener {
        warningOccurred(arg0: javax.imageio.ImageWriter, arg1: int, arg2: java.lang.String): void
      }

    }
  }
}
