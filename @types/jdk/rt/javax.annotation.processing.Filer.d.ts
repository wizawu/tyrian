declare namespace javax {
    namespace annotation {
        namespace processing {
interface Filer {
    createSourceFile(arg0: java.lang.CharSequence, ...arg1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject
    createClassFile(arg0: java.lang.CharSequence, ...arg1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject
    createResource(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence, ...arg3: javax.lang.model.element.Element[]): javax.tools.FileObject
    getResource(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence): javax.tools.FileObject
}

        }
    }
}