declare namespace org {
    namespace omg {
        namespace CosNaming {
interface NamingContextExtOperations extends org.omg.CosNaming.NamingContextOperations {
    to_string(arg0: org.omg.CosNaming.NameComponent[]): string
    to_name(arg0: java.lang.String | string): org.omg.CosNaming.NameComponent[]
    to_url(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    resolve_str(arg0: java.lang.String | string): org.omg.CORBA.Object
}

        }
    }
}