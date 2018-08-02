declare namespace sun {
    namespace misc {
interface JavaOISAccess {
    setObjectInputFilter(arg0: java.io.ObjectInputStream, arg1: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda): void
    getObjectInputFilter(arg0: java.io.ObjectInputStream): sun.misc.ObjectInputFilter
    checkArray(arg0: java.io.ObjectInputStream, arg1: java.lang.Class<any>, arg2: int): void
}

    }
}