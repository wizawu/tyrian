declare namespace javax {
  namespace xml {
    namespace xpath {

      class XPathEvaluationResult$XPathResultType extends java.lang.Enum<javax.xml.xpath.XPathEvaluationResult$XPathResultType> {
        public static readonly ANY: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static readonly BOOLEAN: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static readonly NUMBER: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static readonly STRING: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static readonly NODESET: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static readonly NODE: javax.xml.xpath.XPathEvaluationResult$XPathResultType
        readonly qnameType: javax.xml.namespace.QName
        readonly clsType: java.lang.Class<unknown>
        public static values(): javax.xml.xpath.XPathEvaluationResult$XPathResultType[]
        public static valueOf(arg0: java.lang.String | string): javax.xml.xpath.XPathEvaluationResult$XPathResultType
        public static getQNameType(arg0: java.lang.Class<unknown>): javax.xml.namespace.QName
      }

    }
  }
}
