declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace repository {
                class ClassRepository extends sun.reflect.generics.repository.GenericDeclRepository<sun.reflect.generics.tree.ClassSignature> {
                    public static NONE: sun.reflect.generics.repository.ClassRepository
                    protected parse(arg0: java.lang.String | string): sun.reflect.generics.tree.ClassSignature
                    public static make(arg0: java.lang.String | string, arg1: sun.reflect.generics.factory.GenericsFactory): sun.reflect.generics.repository.ClassRepository
                    public getSuperclass(): java.lang.reflect.Type
                    public getSuperInterfaces(): java.lang.reflect.Type[]
                    protected parse(arg0: java.lang.String | string): sun.reflect.generics.tree.Tree
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}