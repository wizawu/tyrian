declare namespace org {
    namespace omg {
        namespace CORBA {
            class ServiceInformation implements org.omg.CORBA.portable.IDLEntity {
                public service_options: int[]
                public service_details: org.omg.CORBA.ServiceDetail[]
                public constructor()
                public constructor(arg0: int[], arg1: org.omg.CORBA.ServiceDetail[])
                public static class: java.lang.Class<any>
            }
        }
    }
}