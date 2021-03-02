declare namespace javax {
  namespace swing {
    namespace undo {

      class CompoundEdit extends javax.swing.undo.AbstractUndoableEdit {
        inProgress: boolean
        protected edits: java.util.Vector<javax.swing.undo.UndoableEdit>
        public constructor()
        public undo(): void
        public redo(): void
        protected lastEdit(): javax.swing.undo.UndoableEdit
        public die(): void
        public addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
        public end(): void
        public canUndo(): boolean
        public canRedo(): boolean
        public isInProgress(): boolean
        public isSignificant(): boolean
        public getPresentationName(): java.lang.String
        public getUndoPresentationName(): java.lang.String
        public getRedoPresentationName(): java.lang.String
        public toString(): java.lang.String
      }

    }
  }
}
