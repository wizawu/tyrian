declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                class AddressingFeature extends javax.xml.ws.WebServiceFeature {
                    public static ID: string
                    protected required: boolean
                    public constructor()
                    public constructor(arg0: boolean)
                    public constructor(arg0: boolean, arg1: boolean)
                    public constructor(arg0: boolean, arg1: boolean, arg2: javax.xml.ws.soap.AddressingFeature$Responses)
                    public getID(): string
                    public isRequired(): boolean
                    public getResponses(): javax.xml.ws.soap.AddressingFeature$Responses
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}