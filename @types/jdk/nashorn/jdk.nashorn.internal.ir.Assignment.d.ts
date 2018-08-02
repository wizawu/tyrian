declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                interface Assignment<D extends jdk.nashorn.internal.ir.Expression> {
                    getAssignmentDest(): D
                    getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    setAssignmentDest(arg0: D): jdk.nashorn.internal.ir.Node
                }
            }
        }
    }
}