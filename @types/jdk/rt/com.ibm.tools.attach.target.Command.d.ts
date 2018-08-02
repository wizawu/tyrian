declare namespace com {
    namespace ibm {
        namespace tools {
            namespace attach {
                namespace target {
                    interface Command {
                        LOADAGENT: string
                        LOADAGENTPATH: string
                        LOADAGENTLIBRARY: string
                        DETACH: string
                        GET_SYSTEM_PROPERTIES: string
                        GET_AGENT_PROPERTIES: string
                        START_MANAGEMENT_AGENT: string
                        START_LOCAL_MANAGEMENT_AGENT: string
                    }
                }
            }
        }
    }
}