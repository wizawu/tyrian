declare namespace com {
    namespace ibm {
        namespace oti {
            namespace vm {
                abstract class ORBBase {
                    public constructor()
                    public abstract quickCopyIfPossible(arg0: java.lang.Object, arg1: java.lang.Class, arg2: java.lang.ClassLoader, arg3: java.util.Map, arg4: java.lang.Class): java.lang.Object
                    public abstract deepCopyIfRequired(arg0: java.lang.Object, arg1: java.lang.Class, arg2: java.lang.ClassLoader, arg3: java.util.Map, arg4: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}