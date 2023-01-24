declare namespace java {
  namespace beans {
    namespace beancontext {
      class BeanContextServicesSupport
        extends java.beans.beancontext.BeanContextSupport
        implements java.beans.beancontext.BeanContextServices
      {
        protected services: java.util.HashMap<
          java.lang.Object,
          java.beans.beancontext.BeanContextServicesSupport$BCSSServiceProvider
        >
        protected serializable: int
        protected proxy: java.beans.beancontext.BeanContextServicesSupport$BCSSProxyServiceProvider
        protected bcsListeners: java.util.ArrayList<java.beans.beancontext.BeanContextServicesListener>
        public constructor(
          arg0: java.beans.beancontext.BeanContextServices,
          arg1: java.util.Locale,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: java.beans.beancontext.BeanContextServices,
          arg1: java.util.Locale,
          arg2: boolean | java.lang.Boolean
        )
        public constructor(arg0: java.beans.beancontext.BeanContextServices, arg1: java.util.Locale)
        public constructor(arg0: java.beans.beancontext.BeanContextServices)
        public constructor()
        public initialize(): void
        public getBeanContextServicesPeer(): java.beans.beancontext.BeanContextServices
        protected createBCSChild(
          arg0: java.lang.Object | any,
          arg1: java.lang.Object | any
        ): java.beans.beancontext.BeanContextSupport$BCSChild
        protected createBCSSServiceProvider(
          arg0: java.lang.Class<unknown>,
          arg1: java.beans.beancontext.BeanContextServiceProvider
        ): java.beans.beancontext.BeanContextServicesSupport$BCSSServiceProvider
        public addBeanContextServicesListener(arg0: java.beans.beancontext.BeanContextServicesListener): void
        public removeBeanContextServicesListener(arg0: java.beans.beancontext.BeanContextServicesListener): void
        public addService(
          arg0: java.lang.Class<unknown>,
          arg1: java.beans.beancontext.BeanContextServiceProvider
        ): boolean
        protected addService(
          arg0: java.lang.Class<unknown>,
          arg1: java.beans.beancontext.BeanContextServiceProvider,
          arg2: boolean | java.lang.Boolean
        ): boolean
        public revokeService(
          arg0: java.lang.Class<unknown>,
          arg1: java.beans.beancontext.BeanContextServiceProvider,
          arg2: boolean | java.lang.Boolean
        ): void
        public hasService(arg0: java.lang.Class<unknown>): boolean
        public getService(
          arg0: java.beans.beancontext.BeanContextChild,
          arg1: java.lang.Object | any,
          arg2: java.lang.Class<unknown>,
          arg3: java.lang.Object | any,
          arg4:
            | java.beans.beancontext.BeanContextServiceRevokedListener
            | java.beans.beancontext.BeanContextServiceRevokedListener$$lambda
        ): java.lang.Object
        public releaseService(
          arg0: java.beans.beancontext.BeanContextChild,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): void
        public getCurrentServiceClasses(): java.util.Iterator<java.lang.Object>
        public getCurrentServiceSelectors(arg0: java.lang.Class<unknown>): java.util.Iterator<unknown>
        public serviceAvailable(arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
        public serviceRevoked(arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
        protected static getChildBeanContextServicesListener(
          arg0: java.lang.Object | any
        ): java.beans.beancontext.BeanContextServicesListener
        protected childJustRemovedHook(
          arg0: java.lang.Object | any,
          arg1: java.beans.beancontext.BeanContextSupport$BCSChild
        ): void
        protected releaseBeanContextResources(): void
        protected initializeBeanContextResources(): void
        protected fireServiceAdded(arg0: java.lang.Class<unknown>): void
        protected fireServiceAdded(arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
        protected fireServiceRevoked(arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
        protected fireServiceRevoked(arg0: java.lang.Class<unknown>, arg1: boolean | java.lang.Boolean): void
        protected bcsPreSerializationHook(arg0: java.io.ObjectOutputStream): void
        protected bcsPreDeserializationHook(arg0: java.io.ObjectInputStream): void
      }
    }
  }
}
