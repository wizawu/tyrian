declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
interface DomHandler<ElementT, ResultT extends javax.xml.transform.Result> {
    createUnmarshaller(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): ResultT
    getElement(arg0: ResultT): ElementT
    marshal(arg0: ElementT, arg1: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): javax.xml.transform.Source
}

            }
        }
    }
}