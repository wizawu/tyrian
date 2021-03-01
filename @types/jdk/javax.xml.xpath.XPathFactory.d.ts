declare namespace javax {
  namespace xml {
    namespace xpath {

      abstract class XPathFactory {

        public static readonly DEFAULT_PROPERTY_NAME: java.lang.String
        public static readonly DEFAULT_OBJECT_MODEL_URI: java.lang.String
        protected constructor()
        public static newDefaultInstance(): javax.xml.xpath.XPathFactory
        public static newInstance(): javax.xml.xpath.XPathFactory
        public static newInstance(arg0: java.lang.String): javax.xml.xpath.XPathFactory
        public static newInstance(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.ClassLoader): javax.xml.xpath.XPathFactory
        public abstract isObjectModelSupported(arg0: java.lang.String): boolean
        public abstract setFeature(arg0: java.lang.String, arg1: boolean): void
        public abstract getFeature(arg0: java.lang.String): boolean
        public abstract setXPathVariableResolver(arg0: javax.xml.xpath.XPathVariableResolver): void
        public abstract setXPathFunctionResolver(arg0: javax.xml.xpath.XPathFunctionResolver): void
        public abstract newXPath(): javax.xml.xpath.XPath
      }

    }
  }
}
