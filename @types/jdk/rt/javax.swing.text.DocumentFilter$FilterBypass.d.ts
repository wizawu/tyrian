declare namespace javax {
    namespace swing {
        namespace text {
            abstract class DocumentFilter$FilterBypass {
                public constructor()
                public abstract getDocument(): javax.swing.text.Document
                public abstract remove(arg0: int, arg1: int): void
                public abstract insertString(arg0: int, arg1: java.lang.String | string, arg2: javax.swing.text.AttributeSet): void
                public abstract replace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: javax.swing.text.AttributeSet): void
                public static class: java.lang.Class<any>
            }
        }
    }
}