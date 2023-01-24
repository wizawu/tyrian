declare namespace javax {
  namespace swing {
    namespace event {
      abstract class CaretEvent extends java.util.EventObject {
        public constructor(arg0: java.lang.Object | any)
        public abstract getDot(): number
        public abstract getMark(): number
      }
    }
  }
}
