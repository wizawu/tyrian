declare namespace java {
  namespace beans {
    namespace beancontext {

      class BeanContextSupport extends java.beans.beancontext.BeanContextChildSupport implements java.beans.beancontext.BeanContext, java.io.Serializable, java.beans.PropertyChangeListener, java.beans.VetoableChangeListener {
        static readonly serialVersionUID: long
        protected children: java.util.HashMap<java.lang.Object,java.beans.beancontext.BeanContextSupport$BCSChild>
        protected bcmListeners: java.util.ArrayList<java.beans.beancontext.BeanContextMembershipListener>
        protected locale: java.util.Locale
        protected okToUseGui: boolean
        protected designTime: boolean
        public constructor(arg0: java.beans.beancontext.BeanContext, arg1: java.util.Locale, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean)
        public constructor(arg0: java.beans.beancontext.BeanContext, arg1: java.util.Locale, arg2: boolean | java.lang.Boolean)
        public constructor(arg0: java.beans.beancontext.BeanContext, arg1: java.util.Locale)
        public constructor(arg0: java.beans.beancontext.BeanContext)
        public constructor()
        public getBeanContextPeer(): java.beans.beancontext.BeanContext
        public instantiateChild(arg0: java.lang.String | string): java.lang.Object
        public size(): number
        public isEmpty(): boolean
        public contains(arg0: java.lang.Object | any): boolean
        public containsKey(arg0: java.lang.Object | any): boolean
        public iterator(): java.util.Iterator<java.lang.Object>
        public toArray(): java.lang.Object[]
        public toArray(arg0: java.lang.Object[] | any[]): java.lang.Object[]
        protected createBCSChild(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.beans.beancontext.BeanContextSupport$BCSChild
        public add(arg0: java.lang.Object | any): boolean
        public remove(arg0: java.lang.Object | any): boolean
        protected remove(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): boolean
        public containsAll(arg0: java.util.Collection): boolean
        public addAll(arg0: java.util.Collection): boolean
        public removeAll(arg0: java.util.Collection): boolean
        public retainAll(arg0: java.util.Collection): boolean
        public clear(): void
        public addBeanContextMembershipListener(arg0: java.beans.beancontext.BeanContextMembershipListener): void
        public removeBeanContextMembershipListener(arg0: java.beans.beancontext.BeanContextMembershipListener): void
        public getResourceAsStream(arg0: java.lang.String | string, arg1: java.beans.beancontext.BeanContextChild): java.io.InputStream
        public getResource(arg0: java.lang.String | string, arg1: java.beans.beancontext.BeanContextChild): java.net.URL
        public setDesignTime(arg0: boolean | java.lang.Boolean): void
        public isDesignTime(): boolean
        public setLocale(arg0: java.util.Locale): void
        public getLocale(): java.util.Locale
        public needsGui(): boolean
        public dontUseGui(): void
        public okToUseGui(): void
        public avoidingGui(): boolean
        public isSerializing(): boolean
        protected bcsChildren(): java.util.Iterator<java.beans.beancontext.BeanContextSupport$BCSChild>
        protected bcsPreSerializationHook(arg0: java.io.ObjectOutputStream): void
        protected bcsPreDeserializationHook(arg0: java.io.ObjectInputStream): void
        protected childDeserializedHook(arg0: java.lang.Object | any, arg1: java.beans.beancontext.BeanContextSupport$BCSChild): void
        protected serialize(arg0: java.io.ObjectOutputStream, arg1: java.util.Collection<unknown>): void
        protected deserialize(arg0: java.io.ObjectInputStream, arg1: java.util.Collection): void
        public writeChildren(arg0: java.io.ObjectOutputStream): void
        public readChildren(arg0: java.io.ObjectInputStream): void
        public vetoableChange(arg0: java.beans.PropertyChangeEvent): void
        public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        protected validatePendingAdd(arg0: java.lang.Object | any): boolean
        protected validatePendingRemove(arg0: java.lang.Object | any): boolean
        protected childJustAddedHook(arg0: java.lang.Object | any, arg1: java.beans.beancontext.BeanContextSupport$BCSChild): void
        protected childJustRemovedHook(arg0: java.lang.Object | any, arg1: java.beans.beancontext.BeanContextSupport$BCSChild): void
        protected static getChildVisibility(arg0: java.lang.Object | any): java.beans.Visibility
        protected static getChildSerializable(arg0: java.lang.Object | any): java.io.Serializable
        protected static getChildPropertyChangeListener(arg0: java.lang.Object | any): java.beans.PropertyChangeListener
        protected static getChildVetoableChangeListener(arg0: java.lang.Object | any): java.beans.VetoableChangeListener
        protected static getChildBeanContextMembershipListener(arg0: java.lang.Object | any): java.beans.beancontext.BeanContextMembershipListener
        protected static getChildBeanContextChild(arg0: java.lang.Object | any): java.beans.beancontext.BeanContextChild
        protected fireChildrenAdded(arg0: java.beans.beancontext.BeanContextMembershipEvent): void
        protected fireChildrenRemoved(arg0: java.beans.beancontext.BeanContextMembershipEvent): void
        protected initialize(): void
        protected copyChildren(): java.lang.Object[]
        protected static classEquals(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
      }

    }
  }
}
