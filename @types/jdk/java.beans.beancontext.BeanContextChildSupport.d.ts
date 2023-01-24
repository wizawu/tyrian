declare namespace java {
  namespace beans {
    namespace beancontext {
      class BeanContextChildSupport
        implements
          java.beans.beancontext.BeanContextChild,
          java.beans.beancontext.BeanContextServicesListener,
          java.io.Serializable
      {
        static readonly serialVersionUID: long
        public beanContextChildPeer: java.beans.beancontext.BeanContextChild
        protected pcSupport: java.beans.PropertyChangeSupport
        protected vcSupport: java.beans.VetoableChangeSupport
        protected beanContext: java.beans.beancontext.BeanContext
        protected rejectedSetBCOnce: boolean
        public constructor()
        public constructor(arg0: java.beans.beancontext.BeanContextChild)
        public setBeanContext(arg0: java.beans.beancontext.BeanContext): void
        public getBeanContext(): java.beans.beancontext.BeanContext
        public addPropertyChangeListener(
          arg0: java.lang.String | string,
          arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
        ): void
        public removePropertyChangeListener(
          arg0: java.lang.String | string,
          arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
        ): void
        public addVetoableChangeListener(
          arg0: java.lang.String | string,
          arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda
        ): void
        public removeVetoableChangeListener(
          arg0: java.lang.String | string,
          arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda
        ): void
        public serviceRevoked(arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
        public serviceAvailable(arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
        public getBeanContextChildPeer(): java.beans.beancontext.BeanContextChild
        public isDelegated(): boolean
        public firePropertyChange(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): void
        public fireVetoableChange(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): void
        public validatePendingSetBeanContext(arg0: java.beans.beancontext.BeanContext): boolean
        protected releaseBeanContextResources(): void
        protected initializeBeanContextResources(): void
      }
    }
  }
}
