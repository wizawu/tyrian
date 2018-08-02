declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
abstract class Codecs {
    public constructor()
    public static createSOAPBindingCodec(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.pipe.SOAPBindingCodec
    public static createXMLCodec(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.pipe.Codec
    public static createSOAPBindingCodec(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec): com.sun.xml.internal.ws.api.pipe.SOAPBindingCodec
    public static createSOAPEnvelopeXmlCodec(arg0: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec
    public static createSOAPEnvelopeXmlCodec(arg0: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec
    public static createSOAPEnvelopeXmlCodec(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.pipe.StreamSOAPCodec
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}