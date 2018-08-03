declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultEditorKit extends javax.swing.text.EditorKit {
                public static readonly EndOfLineStringProperty: string
                public static readonly insertContentAction: string
                public static readonly insertBreakAction: string
                public static readonly insertTabAction: string
                public static readonly deletePrevCharAction: string
                public static readonly deleteNextCharAction: string
                public static readonly deleteNextWordAction: string
                public static readonly deletePrevWordAction: string
                public static readonly readOnlyAction: string
                public static readonly writableAction: string
                public static readonly cutAction: string
                public static readonly copyAction: string
                public static readonly pasteAction: string
                public static readonly beepAction: string
                public static readonly pageUpAction: string
                public static readonly pageDownAction: string
                public static readonly forwardAction: string
                public static readonly backwardAction: string
                public static readonly selectionForwardAction: string
                public static readonly selectionBackwardAction: string
                public static readonly upAction: string
                public static readonly downAction: string
                public static readonly selectionUpAction: string
                public static readonly selectionDownAction: string
                public static readonly beginWordAction: string
                public static readonly endWordAction: string
                public static readonly selectionBeginWordAction: string
                public static readonly selectionEndWordAction: string
                public static readonly previousWordAction: string
                public static readonly nextWordAction: string
                public static readonly selectionPreviousWordAction: string
                public static readonly selectionNextWordAction: string
                public static readonly beginLineAction: string
                public static readonly endLineAction: string
                public static readonly selectionBeginLineAction: string
                public static readonly selectionEndLineAction: string
                public static readonly beginParagraphAction: string
                public static readonly endParagraphAction: string
                public static readonly selectionBeginParagraphAction: string
                public static readonly selectionEndParagraphAction: string
                public static readonly beginAction: string
                public static readonly endAction: string
                public static readonly selectionBeginAction: string
                public static readonly selectionEndAction: string
                public static readonly selectWordAction: string
                public static readonly selectLineAction: string
                public static readonly selectParagraphAction: string
                public static readonly selectAllAction: string
                public static readonly defaultKeyTypedAction: string
                public constructor()
                public getContentType(): string
                public getViewFactory(): javax.swing.text.ViewFactory
                public getActions(): javax.swing.Action[]
                public createCaret(): javax.swing.text.Caret
                public createDefaultDocument(): javax.swing.text.Document
                public read(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
                public write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}