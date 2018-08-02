declare namespace javax {
    namespace xml {
        namespace soap {
            interface SOAPConstants {
                DYNAMIC_SOAP_PROTOCOL: string
                SOAP_1_1_PROTOCOL: string
                SOAP_1_2_PROTOCOL: string
                DEFAULT_SOAP_PROTOCOL: string
                URI_NS_SOAP_1_1_ENVELOPE: string
                URI_NS_SOAP_1_2_ENVELOPE: string
                URI_NS_SOAP_ENVELOPE: string
                URI_NS_SOAP_ENCODING: string
                URI_NS_SOAP_1_2_ENCODING: string
                SOAP_1_1_CONTENT_TYPE: string
                SOAP_1_2_CONTENT_TYPE: string
                URI_SOAP_ACTOR_NEXT: string
                URI_SOAP_1_2_ROLE_NEXT: string
                URI_SOAP_1_2_ROLE_NONE: string
                URI_SOAP_1_2_ROLE_ULTIMATE_RECEIVER: string
                SOAP_ENV_PREFIX: string
                SOAP_VERSIONMISMATCH_FAULT: javax.xml.namespace.QName
                SOAP_MUSTUNDERSTAND_FAULT: javax.xml.namespace.QName
                SOAP_DATAENCODINGUNKNOWN_FAULT: javax.xml.namespace.QName
                SOAP_SENDER_FAULT: javax.xml.namespace.QName
                SOAP_RECEIVER_FAULT: javax.xml.namespace.QName
            }
        }
    }
}