declare namespace javax {
  namespace naming {
    namespace event {
      class NamingEvent extends java.util.EventObject {
        public static readonly OBJECT_ADDED: int
        public static readonly OBJECT_REMOVED: int
        public static readonly OBJECT_RENAMED: int
        public static readonly OBJECT_CHANGED: int
        protected changeInfo: java.lang.Object
        protected type: int
        protected oldBinding: javax.naming.Binding
        protected newBinding: javax.naming.Binding
        public constructor(
          arg0: javax.naming.event.EventContext,
          arg1: number | java.lang.Integer,
          arg2: javax.naming.Binding,
          arg3: javax.naming.Binding,
          arg4: java.lang.Object | any
        )
        public getType(): number
        public getEventContext(): javax.naming.event.EventContext
        public getOldBinding(): javax.naming.Binding
        public getNewBinding(): javax.naming.Binding
        public getChangeInfo(): java.lang.Object
        public dispatch(arg0: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$lambda): void
      }
    }
  }
}
