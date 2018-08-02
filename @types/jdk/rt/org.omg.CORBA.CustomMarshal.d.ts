declare namespace org {
    namespace omg {
        namespace CORBA {
            interface CustomMarshal {
                marshal(arg0: org.omg.CORBA.DataOutputStream): void
                unmarshal(arg0: org.omg.CORBA.DataInputStream): void
            }
        }
    }
}