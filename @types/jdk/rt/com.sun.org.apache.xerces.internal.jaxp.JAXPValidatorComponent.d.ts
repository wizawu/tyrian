declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
class JAXPValidatorComponent extends com.sun.org.apache.xerces.internal.jaxp.TeeXMLDocumentFilterImpl implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent {
    public constructor(arg0: javax.xml.validation.ValidatorHandler)
    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    public getRecognizedFeatures(): java.lang.String[]
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getRecognizedProperties(): java.lang.String[]
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getFeatureDefault(arg0: java.lang.String | string): boolean
    public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}