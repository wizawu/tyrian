declare namespace javax {
  namespace imageio {
    namespace metadata {

      class IIOInvalidTreeException extends javax.imageio.IIOException {

        protected offendingNode: org.w3c.dom.Node
        public constructor(arg0: java.lang.String, arg1: org.w3c.dom.Node)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: org.w3c.dom.Node)
        public getOffendingNode(): org.w3c.dom.Node
      }

    }
  }
}
