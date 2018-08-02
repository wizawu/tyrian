declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace addressing {
                            abstract class AddressingVersion extends java.lang.Enum<com.sun.xml.internal.ws.api.addressing.AddressingVersion> {
                                public static W3C: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static MEMBER: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public nsUri: string
                                public wsdlNsUri: string
                                public eprType: com.sun.xml.internal.ws.api.addressing.AddressingVersion$EPR
                                public policyNsUri: string
                                public anonymousUri: string
                                public noneUri: string
                                public anonymousEpr: com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public toTag: javax.xml.namespace.QName
                                public fromTag: javax.xml.namespace.QName
                                public replyToTag: javax.xml.namespace.QName
                                public faultToTag: javax.xml.namespace.QName
                                public actionTag: javax.xml.namespace.QName
                                public messageIDTag: javax.xml.namespace.QName
                                public relatesToTag: javax.xml.namespace.QName
                                public mapRequiredTag: javax.xml.namespace.QName
                                public actionMismatchTag: javax.xml.namespace.QName
                                public actionNotSupportedTag: javax.xml.namespace.QName
                                public actionNotSupportedText: string
                                public invalidMapTag: javax.xml.namespace.QName
                                public invalidCardinalityTag: javax.xml.namespace.QName
                                public invalidAddressTag: javax.xml.namespace.QName
                                public problemHeaderQNameTag: javax.xml.namespace.QName
                                public problemActionTag: javax.xml.namespace.QName
                                public faultDetailTag: javax.xml.namespace.QName
                                public fault_missingAddressInEpr: javax.xml.namespace.QName
                                public wsdlActionTag: javax.xml.namespace.QName
                                public wsdlExtensionTag: javax.xml.namespace.QName
                                public wsdlAnonymousTag: javax.xml.namespace.QName
                                public isReferenceParameterTag: javax.xml.namespace.QName
                                public static UNSET_OUTPUT_ACTION: string
                                public static UNSET_INPUT_ACTION: string
                                public static fault_duplicateAddressInEpr: javax.xml.namespace.QName
                                public static values(): com.sun.xml.internal.ws.api.addressing.AddressingVersion[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromNsUri(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromBinding(arg0: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromPort(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public getNsUri(): string
                                public isReferenceParameter(arg0: java.lang.String | string): boolean
                                public getWsaHelper(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.model.SEIModel, arg2: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.addressing.WsaTubeHelper
                                public getNoneUri(): string
                                public getAnonymousUri(): string
                                public getDefaultFaultAction(): string
                                public getMapRequiredText(): string
                                public getInvalidMapText(): string
                                public getPrefix(): string
                                public getWsdlPrefix(): string
                                public getFeatureClass(): java.lang.Class<javax.xml.ws.WebServiceFeature>
                                public static fromFeature(arg0: javax.xml.ws.WebServiceFeature): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static getFeature(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): javax.xml.ws.WebServiceFeature
                                public static fromSpecClass(arg0: java.lang.Class<javax.xml.ws.EndpointReference>): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static isRequired(arg0: javax.xml.ws.WebServiceFeature): boolean
                                public static isRequired(arg0: com.sun.xml.internal.ws.api.WSBinding): boolean
                                public static isEnabled(arg0: com.sun.xml.internal.ws.api.WSBinding): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}