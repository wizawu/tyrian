declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ServerRequest {
                public constructor()
                public op_name(): string
                public operation(): string
                public params(arg0: org.omg.CORBA.NVList): void
                public arguments(arg0: org.omg.CORBA.NVList): void
                public result(arg0: org.omg.CORBA.Any): void
                public set_result(arg0: org.omg.CORBA.Any): void
                public except(arg0: org.omg.CORBA.Any): void
                public set_exception(arg0: org.omg.CORBA.Any): void
                public ctx(): org.omg.CORBA.Context
                public static class: java.lang.Class<any>
            }
        }
    }
}