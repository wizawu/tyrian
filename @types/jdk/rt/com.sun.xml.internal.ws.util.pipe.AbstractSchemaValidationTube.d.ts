declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace pipe {
                            abstract class AbstractSchemaValidationTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
                                protected binding: com.sun.xml.internal.ws.api.WSBinding
                                protected feature: com.sun.xml.internal.ws.developer.SchemaValidationFeature
                                protected resolver: com.sun.xml.internal.ws.api.server.DocumentAddressResolver
                                protected sf: javax.xml.validation.SchemaFactory
                                public constructor(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.pipe.Tube)
                                protected constructor(arg0: com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                                protected getValidator(): javax.xml.validation.Validator
                                protected isNoValidation(): boolean
                                protected getSchemaSources(arg0: java.lang.Iterable<com.sun.xml.internal.ws.api.server.SDDocument>, arg1: com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube$MetadataResolverImpl): javax.xml.transform.Source[]
                                protected doProcess(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}