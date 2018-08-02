declare namespace javax {
    namespace xml {
        namespace soap {
            interface SOAPFault extends javax.xml.soap.SOAPBodyElement {
                setFaultCode(arg0: javax.xml.soap.Name): void
                setFaultCode(arg0: javax.xml.namespace.QName): void
                setFaultCode(arg0: java.lang.String | string): void
                getFaultCodeAsName(): javax.xml.soap.Name
                getFaultCodeAsQName(): javax.xml.namespace.QName
                getFaultSubcodes(): java.util.Iterator
                removeAllFaultSubcodes(): void
                appendFaultSubcode(arg0: javax.xml.namespace.QName): void
                getFaultCode(): string
                setFaultActor(arg0: java.lang.String | string): void
                getFaultActor(): string
                setFaultString(arg0: java.lang.String | string): void
                setFaultString(arg0: java.lang.String | string, arg1: java.util.Locale): void
                getFaultString(): string
                getFaultStringLocale(): java.util.Locale
                hasDetail(): boolean
                getDetail(): javax.xml.soap.Detail
                addDetail(): javax.xml.soap.Detail
                getFaultReasonLocales(): java.util.Iterator
                getFaultReasonTexts(): java.util.Iterator
                getFaultReasonText(arg0: java.util.Locale): string
                addFaultReasonText(arg0: java.lang.String | string, arg1: java.util.Locale): void
                getFaultNode(): string
                setFaultNode(arg0: java.lang.String | string): void
                getFaultRole(): string
                setFaultRole(arg0: java.lang.String | string): void
            }
        }
    }
}