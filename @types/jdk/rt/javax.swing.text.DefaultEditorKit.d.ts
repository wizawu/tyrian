declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultEditorKit extends javax.swing.text.EditorKit {
                public static EndOfLineStringProperty: string
                public static insertContentAction: string
                public static insertBreakAction: string
                public static insertTabAction: string
                public static deletePrevCharAction: string
                public static deleteNextCharAction: string
                public static deleteNextWordAction: string
                public static deletePrevWordAction: string
                public static readOnlyAction: string
                public static writableAction: string
                public static cutAction: string
                public static copyAction: string
                public static pasteAction: string
                public static beepAction: string
                public static pageUpAction: string
                public static pageDownAction: string
                public static forwardAction: string
                public static backwardAction: string
                public static selectionForwardAction: string
                public static selectionBackwardAction: string
                public static upAction: string
                public static downAction: string
                public static selectionUpAction: string
                public static selectionDownAction: string
                public static beginWordAction: string
                public static endWordAction: string
                public static selectionBeginWordAction: string
                public static selectionEndWordAction: string
                public static previousWordAction: string
                public static nextWordAction: string
                public static selectionPreviousWordAction: string
                public static selectionNextWordAction: string
                public static beginLineAction: string
                public static endLineAction: string
                public static selectionBeginLineAction: string
                public static selectionEndLineAction: string
                public static beginParagraphAction: string
                public static endParagraphAction: string
                public static selectionBeginParagraphAction: string
                public static selectionEndParagraphAction: string
                public static beginAction: string
                public static endAction: string
                public static selectionBeginAction: string
                public static selectionEndAction: string
                public static selectWordAction: string
                public static selectLineAction: string
                public static selectParagraphAction: string
                public static selectAllAction: string
                public static defaultKeyTypedAction: string
                public constructor()
                public getContentType(): string
                public getViewFactory(): javax.swing.text.ViewFactory
                public getActions(): javax.swing.Action[]
                public createCaret(): javax.swing.text.Caret
                public createDefaultDocument(): javax.swing.text.Document
                public read(arg0: java.io.InputStream, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.OutputStream, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}