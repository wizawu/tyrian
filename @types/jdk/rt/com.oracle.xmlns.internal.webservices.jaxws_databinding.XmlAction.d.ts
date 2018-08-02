declare namespace com {
    namespace oracle {
        namespace xmlns {
            namespace internal {
                namespace webservices {
                    namespace jaxws_databinding {
class XmlAction implements javax.xml.ws.Action {
    protected faultAction: java.util.List<com.oracle.xmlns.internal.webservices.jaxws_databinding.XmlFaultAction>
    protected input: string
    protected output: string
    public constructor()
    public getFaultAction(): java.util.List<com.oracle.xmlns.internal.webservices.jaxws_databinding.XmlFaultAction>
    public getInput(): string
    public setInput(arg0: java.lang.String | string): void
    public getOutput(): string
    public setOutput(arg0: java.lang.String | string): void
    public input(): string
    public output(): string
    public fault(): javax.xml.ws.FaultAction[]
    public annotationType(): java.lang.Class<java.lang.annotation.Annotation>
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}