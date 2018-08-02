declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace repository {
abstract class AbstractRepository<T extends sun.reflect.generics.tree.Tree> {
    protected getTree(): T
    protected getReifier(): sun.reflect.generics.visitor.Reifier
    protected constructor(arg0: java.lang.String | string, arg1: sun.reflect.generics.factory.GenericsFactory)
    protected parse(arg0: java.lang.String | string): T
    public static class: java.lang.Class<any>
}

            }
        }
    }
}