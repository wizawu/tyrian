declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace CORBA {
class OperationDescription implements org.omg.CORBA.portable.IDLEntity {
    public name: string
    public id: string
    public defined_in: string
    public version: string
    public result: org.omg.CORBA.TypeCode
    public mode: com.sun.org.omg.CORBA.OperationMode
    public contexts: java.lang.String[]
    public parameters: com.sun.org.omg.CORBA.ParameterDescription[]
    public exceptions: com.sun.org.omg.CORBA.ExceptionDescription[]
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: org.omg.CORBA.TypeCode, arg5: com.sun.org.omg.CORBA.OperationMode, arg6: java.lang.String[], arg7: com.sun.org.omg.CORBA.ParameterDescription[], arg8: com.sun.org.omg.CORBA.ExceptionDescription[])
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}