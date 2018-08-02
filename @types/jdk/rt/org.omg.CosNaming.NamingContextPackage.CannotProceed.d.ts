declare namespace org {
    namespace omg {
        namespace CosNaming {
            namespace NamingContextPackage {
                class CannotProceed extends org.omg.CORBA.UserException {
                    public cxt: org.omg.CosNaming.NamingContext
                    public rest_of_name: org.omg.CosNaming.NameComponent[]
                    public constructor()
                    public constructor(arg0: org.omg.CosNaming.NamingContext, arg1: org.omg.CosNaming.NameComponent[])
                    public constructor(arg0: java.lang.String | string, arg1: org.omg.CosNaming.NamingContext, arg2: org.omg.CosNaming.NameComponent[])
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}