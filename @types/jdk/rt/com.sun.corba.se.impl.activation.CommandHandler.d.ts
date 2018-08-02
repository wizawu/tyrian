declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace activation {
                        interface CommandHandler {
                            shortHelp: boolean
                            longHelp: boolean
                            parseError: boolean
                            commandDone: boolean
                            getCommandName(): string
                            printCommandHelp(arg0: java.io.PrintStream, arg1: boolean): void
                            processCommand(arg0: java.lang.String[], arg1: org.omg.CORBA.ORB, arg2: java.io.PrintStream): boolean
                        }
                    }
                }
            }
        }
    }
}