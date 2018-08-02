declare namespace org {
    namespace omg {
        namespace CosNaming {
interface BindingIteratorOperations {
    next_one(arg0: org.omg.CosNaming.BindingHolder): boolean
    next_n(arg0: int, arg1: org.omg.CosNaming.BindingListHolder): boolean
    destroy(): void
}

        }
    }
}