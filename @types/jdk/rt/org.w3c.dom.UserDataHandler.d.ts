declare namespace org {
    namespace w3c {
        namespace dom {
            interface UserDataHandler {
                NODE_CLONED: short
                NODE_IMPORTED: short
                NODE_DELETED: short
                NODE_RENAMED: short
                NODE_ADOPTED: short
                handle(arg0: short, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: org.w3c.dom.Node, arg4: org.w3c.dom.Node): void
            }
            interface UserDataHandler$$Lambda {
                (arg0: short, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: org.w3c.dom.Node, arg4: org.w3c.dom.Node): void
            }
        }
    }
}