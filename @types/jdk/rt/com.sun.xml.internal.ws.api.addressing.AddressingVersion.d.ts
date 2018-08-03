declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace addressing {
                            abstract class AddressingVersion extends java.lang.Enum<com.sun.xml.internal.ws.api.addressing.AddressingVersion> {
                                public static readonly W3C: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static readonly MEMBER: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public readonly nsUri: string
                                public readonly wsdlNsUri: string
                                public readonly eprType: com.sun.xml.internal.ws.api.addressing.AddressingVersion$EPR
                                public readonly policyNsUri: string
                                public readonly anonymousUri: string
                                public readonly noneUri: string
                                public readonly anonymousEpr: com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public readonly toTag: javax.xml.namespace.QName
                                public readonly fromTag: javax.xml.namespace.QName
                                public readonly replyToTag: javax.xml.namespace.QName
                                public readonly faultToTag: javax.xml.namespace.QName
                                public readonly actionTag: javax.xml.namespace.QName
                                public readonly messageIDTag: javax.xml.namespace.QName
                                public readonly relatesToTag: javax.xml.namespace.QName
                                public readonly mapRequiredTag: javax.xml.namespace.QName
                                public readonly actionMismatchTag: javax.xml.namespace.QName
                                public readonly actionNotSupportedTag: javax.xml.namespace.QName
                                public readonly actionNotSupportedText: string
                                public readonly invalidMapTag: javax.xml.namespace.QName
                                public readonly invalidCardinalityTag: javax.xml.namespace.QName
                                public readonly invalidAddressTag: javax.xml.namespace.QName
                                public readonly problemHeaderQNameTag: javax.xml.namespace.QName
                                public readonly problemActionTag: javax.xml.namespace.QName
                                public readonly faultDetailTag: javax.xml.namespace.QName
                                public readonly fault_missingAddressInEpr: javax.xml.namespace.QName
                                public readonly wsdlActionTag: javax.xml.namespace.QName
                                public readonly wsdlExtensionTag: javax.xml.namespace.QName
                                public readonly wsdlAnonymousTag: javax.xml.namespace.QName
                                public readonly isReferenceParameterTag: javax.xml.namespace.QName
                                public static readonly UNSET_OUTPUT_ACTION: string
                                public static readonly UNSET_INPUT_ACTION: string
                                public static readonly fault_duplicateAddressInEpr: javax.xml.namespace.QName
                                public static values(): com.sun.xml.internal.ws.api.addressing.AddressingVersion[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromNsUri(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromBinding(arg0: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static fromPort(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public getNsUri(): string
                                public abstract isReferenceParameter(arg0: java.lang.String | string): boolean
                                public abstract getWsaHelper(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.model.SEIModel, arg2: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.addressing.WsaTubeHelper
                                public getNoneUri(): string
                                public getAnonymousUri(): string
                                public getDefaultFaultAction(): string
                                public abstract getMapRequiredText(): string
                                public abstract getInvalidMapText(): string
                                public abstract getPrefix(): string
                                public abstract getWsdlPrefix(): string
                                public abstract getFeatureClass(): java.lang.Class<javax.xml.ws.WebServiceFeature>
                                public static fromFeature(arg0: javax.xml.ws.WebServiceFeature | javax.xml.ws.WebServiceFeature$$Lambda): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static getFeature(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): javax.xml.ws.WebServiceFeature
                                public static fromSpecClass(arg0: java.lang.Class<javax.xml.ws.EndpointReference>): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                                public static isRequired(arg0: javax.xml.ws.WebServiceFeature | javax.xml.ws.WebServiceFeature$$Lambda): boolean
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