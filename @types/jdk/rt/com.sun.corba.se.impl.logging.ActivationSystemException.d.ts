declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
class ActivationSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
    public static CANNOT_READ_REPOSITORY_DB: int
    public static CANNOT_ADD_INITIAL_NAMING: int
    public static CANNOT_WRITE_REPOSITORY_DB: int
    public static SERVER_NOT_EXPECTED_TO_REGISTER: int
    public static UNABLE_TO_START_PROCESS: int
    public static SERVER_NOT_RUNNING: int
    public static ERROR_IN_BAD_SERVER_ID_HANDLER: int
    public constructor(arg0: java.util.logging.Logger)
    public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.ActivationSystemException
    public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.ActivationSystemException
    public cannotReadRepositoryDb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
    public cannotReadRepositoryDb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
    public cannotReadRepositoryDb(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
    public cannotReadRepositoryDb(): org.omg.CORBA.INITIALIZE
    public cannotAddInitialNaming(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
    public cannotAddInitialNaming(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
    public cannotAddInitialNaming(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
    public cannotAddInitialNaming(): org.omg.CORBA.INITIALIZE
    public cannotWriteRepositoryDb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public cannotWriteRepositoryDb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public cannotWriteRepositoryDb(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public cannotWriteRepositoryDb(): org.omg.CORBA.INTERNAL
    public serverNotExpectedToRegister(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public serverNotExpectedToRegister(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public serverNotExpectedToRegister(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public serverNotExpectedToRegister(): org.omg.CORBA.INTERNAL
    public unableToStartProcess(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public unableToStartProcess(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public unableToStartProcess(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public unableToStartProcess(): org.omg.CORBA.INTERNAL
    public serverNotRunning(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public serverNotRunning(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public serverNotRunning(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public serverNotRunning(): org.omg.CORBA.INTERNAL
    public errorInBadServerIdHandler(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
    public errorInBadServerIdHandler(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
    public errorInBadServerIdHandler(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
    public errorInBadServerIdHandler(): org.omg.CORBA.OBJECT_NOT_EXIST
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}