declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
interface ResponseHandler {
    createReply(): org.omg.CORBA.portable.OutputStream
    createExceptionReply(): org.omg.CORBA.portable.OutputStream
}

            }
        }
    }
}