declare namespace javax {
    namespace xml {
        namespace xpath {
abstract class XPathFactory {
    public static DEFAULT_PROPERTY_NAME: string
    public static DEFAULT_OBJECT_MODEL_URI: string
    protected constructor()
    public static newInstance(): javax.xml.xpath.XPathFactory
    public static newInstance(arg0: java.lang.String | string): javax.xml.xpath.XPathFactory
    public static newInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): javax.xml.xpath.XPathFactory
    public isObjectModelSupported(arg0: java.lang.String | string): boolean
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getFeature(arg0: java.lang.String | string): boolean
    public setXPathVariableResolver(arg0: javax.xml.xpath.XPathVariableResolver | javax.xml.xpath.XPathVariableResolver$$Lambda): void
    public setXPathFunctionResolver(arg0: javax.xml.xpath.XPathFunctionResolver | javax.xml.xpath.XPathFunctionResolver$$Lambda): void
    public newXPath(): javax.xml.xpath.XPath
    public static class: java.lang.Class<any>
}

        }
    }
}