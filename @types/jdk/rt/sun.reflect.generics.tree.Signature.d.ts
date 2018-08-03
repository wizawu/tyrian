declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace tree {
                interface Signature extends sun.reflect.generics.tree.Tree {
                    getFormalTypeParameters(): sun.reflect.generics.tree.FormalTypeParameter[]
                }
                interface Signature$$Lambda extends sun.reflect.generics.tree.Tree {
                    (): sun.reflect.generics.tree.FormalTypeParameter[]
                }
            }
        }
    }
}