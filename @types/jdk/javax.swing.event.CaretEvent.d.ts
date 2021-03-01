declare namespace javax {
  namespace swing {
    namespace event {

      abstract class CaretEvent extends java.util.EventObject {

        public constructor(arg0: java.lang.Object)
        public abstract getDot(): int
        public abstract getMark(): int
      }

    }
  }
}
