declare namespace javax {
  namespace swing {
    namespace event {
      class SwingPropertyChangeSupport extends java.beans.PropertyChangeSupport {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.Object | any)
        public constructor(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean)
        public firePropertyChange(arg0: java.beans.PropertyChangeEvent): void
        public isNotifyOnEDT(): boolean
      }
    }
  }
}
