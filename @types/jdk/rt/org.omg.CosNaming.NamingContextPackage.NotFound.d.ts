declare namespace org {
    namespace omg {
        namespace CosNaming {
            namespace NamingContextPackage {
                class NotFound extends org.omg.CORBA.UserException {
                    public why: org.omg.CosNaming.NamingContextPackage.NotFoundReason
                    public rest_of_name: org.omg.CosNaming.NameComponent[]
                    public constructor()
                    public constructor(arg0: org.omg.CosNaming.NamingContextPackage.NotFoundReason, arg1: org.omg.CosNaming.NameComponent[])
                    public constructor(arg0: java.lang.String | string, arg1: org.omg.CosNaming.NamingContextPackage.NotFoundReason, arg2: org.omg.CosNaming.NameComponent[])
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}