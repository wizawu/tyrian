declare namespace javax {
  namespace swing {
    namespace undo {

      class AbstractUndoableEdit implements javax.swing.undo.UndoableEdit, java.io.Serializable {

        protected static readonly UndoName: java.lang.String
        protected static readonly RedoName: java.lang.String
        hasBeenDone: boolean
        alive: boolean
        public constructor()
        public die(): void
        public undo(): void
        public canUndo(): boolean
        public redo(): void
        public canRedo(): boolean
        public addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
        public replaceEdit(arg0: javax.swing.undo.UndoableEdit): boolean
        public isSignificant(): boolean
        public getPresentationName(): java.lang.String
        public getUndoPresentationName(): java.lang.String
        public getRedoPresentationName(): java.lang.String
        public toString(): java.lang.String
      }

    }
  }
}
