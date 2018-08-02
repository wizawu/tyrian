declare namespace javax {
    namespace xml {
        namespace ws {
abstract class EndpointReference {
    protected constructor()
    public static readFrom(arg0: javax.xml.transform.Source): javax.xml.ws.EndpointReference
    public writeTo(arg0: javax.xml.transform.Result): void
    public getPort<T>(arg0: java.lang.Class<T>, ...arg1: javax.xml.ws.WebServiceFeature[]): T
    public toString<T>(): string
    public static class: java.lang.Class<any>
}

        }
    }
}