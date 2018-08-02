declare namespace org {
    namespace omg {
        namespace CosNaming {
interface NamingContextOperations {
    bind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
    bind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
    rebind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
    rebind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
    resolve(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CORBA.Object
    unbind(arg0: org.omg.CosNaming.NameComponent[]): void
    list(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
    new_context(): org.omg.CosNaming.NamingContext
    bind_new_context(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CosNaming.NamingContext
    destroy(): void
}

        }
    }
}