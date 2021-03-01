declare namespace java {
  namespace awt {
    namespace event {

      class ContainerEvent extends java.awt.event.ComponentEvent {

        public static readonly CONTAINER_FIRST: int
        public static readonly CONTAINER_LAST: int
        public static readonly COMPONENT_ADDED: int
        public static readonly COMPONENT_REMOVED: int
        child: java.awt.Component
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component)
        public getContainer(): java.awt.Container
        public getChild(): java.awt.Component
        public paramString(): java.lang.String
      }

    }
  }
}
