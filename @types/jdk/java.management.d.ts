declare namespace com {
    namespace sun {
        namespace jmx {
            namespace defaults {
                class JmxProperties {
                    public static JMX_INITIAL_BUILDER: string
                    public static MLET_LIB_DIR: string
                    public static JMX_SPEC_NAME: string
                    public static JMX_SPEC_VERSION: string
                    public static JMX_SPEC_VENDOR: string
                    public static JMX_IMPL_NAME: string
                    public static JMX_IMPL_VENDOR: string
                    public static JMX_IMPL_VERSION: string
                    public static MBEANSERVER_LOGGER_NAME: string
                    public static MBEANSERVER_LOGGER: java.util.logging.Logger
                    public static MLET_LOGGER_NAME: string
                    public static MLET_LOGGER: java.util.logging.Logger
                    public static MONITOR_LOGGER_NAME: string
                    public static MONITOR_LOGGER: java.util.logging.Logger
                    public static TIMER_LOGGER_NAME: string
                    public static TIMER_LOGGER: java.util.logging.Logger
                    public static NOTIFICATION_LOGGER_NAME: string
                    public static NOTIFICATION_LOGGER: java.util.logging.Logger
                    public static RELATION_LOGGER_NAME: string
                    public static RELATION_LOGGER: java.util.logging.Logger
                    public static MODELMBEAN_LOGGER_NAME: string
                    public static MODELMBEAN_LOGGER: java.util.logging.Logger
                    public static MISC_LOGGER_NAME: string
                    public static MISC_LOGGER: java.util.logging.Logger
                    public static SNMP_LOGGER_NAME: string
                    public static SNMP_LOGGER: java.util.logging.Logger
                    public static SNMP_ADAPTOR_LOGGER_NAME: string
                    public static SNMP_ADAPTOR_LOGGER: java.util.logging.Logger
                    public static class: java.lang.Class<any>
                }
                class ServiceName {
                    public static DELEGATE: string
                    public static MLET: string
                    public static DOMAIN: string
                    public static JMX_SPEC_NAME: string
                    public static JMX_SPEC_VERSION: string
                    public static JMX_SPEC_VENDOR: string
                    public static JMX_IMPL_NAME: string
                    public static JMX_IMPL_VENDOR: string
                    public static class: java.lang.Class<any>
                }
            }
            namespace interceptor {
                class DefaultMBeanServerInterceptor implements com.sun.jmx.interceptor.MBeanServerInterceptor {
                    public constructor(arg0: javax.management.MBeanServer, arg1: javax.management.MBeanServerDelegate, arg2: com.sun.jmx.mbeanserver.MBeanInstantiator, arg3: com.sun.jmx.mbeanserver.Repository)
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                    public registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public unregisterMBean(arg0: javax.management.ObjectName): void
                    public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                    public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                    public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                    public isRegistered(arg0: javax.management.ObjectName): boolean
                    public getDomains(): java.lang.String[]
                    public getMBeanCount(): java.lang.Integer
                    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                    public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public getDefaultDomain(): string
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                    public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public instantiate(arg0: java.lang.String | string): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                    public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                    public static class: java.lang.Class<any>
                }
                interface MBeanServerInterceptor extends javax.management.MBeanServer {
                    instantiate(arg0: java.lang.String | string): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                    deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                    deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                    getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                }
            }
            namespace mbeanserver {
                class ClassLoaderRepositorySupport implements com.sun.jmx.mbeanserver.ModifiableClassLoaderRepository {
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public addClassLoader(arg0: java.lang.ClassLoader): void
                    public removeClassLoader(arg0: java.lang.ClassLoader): void
                    public addClassLoader(arg0: javax.management.ObjectName, arg1: java.lang.ClassLoader): void
                    public removeClassLoader(arg0: javax.management.ObjectName): void
                    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public static class: java.lang.Class<any>
                }
                class ConvertingMethod {
                    public static class: java.lang.Class<any>
                }
                class DefaultMXBeanMappingFactory extends com.sun.jmx.mbeanserver.MXBeanMappingFactory {
                    public constructor()
                    public mappingForType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: com.sun.jmx.mbeanserver.MXBeanMappingFactory): com.sun.jmx.mbeanserver.MXBeanMapping
                    public static decapitalize(arg0: java.lang.String | string): string
                    public static propertyName(arg0: java.lang.reflect.Method): string
                    public static class: java.lang.Class<any>
                }
                class DescriptorCache {
                    public static getInstance(arg0: javax.management.JMX): com.sun.jmx.mbeanserver.DescriptorCache
                    public get(arg0: javax.management.ImmutableDescriptor): javax.management.ImmutableDescriptor
                    public union(...arg0: javax.management.Descriptor[]): javax.management.ImmutableDescriptor
                    public static class: java.lang.Class<any>
                }
                interface DynamicMBean2 extends javax.management.DynamicMBean {
                    getResource(): java.lang.Object
                    getClassName(): string
                    preRegister2(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
                    registerFailed(): void
                }
                class GetPropertyAction implements java.security.PrivilegedAction<java.lang.String> {
                    public constructor(arg0: java.lang.String | string)
                    public run(): string
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Introspector {
                    public static ALLOW_NONPUBLIC_MBEAN: boolean
                    public static isDynamic(arg0: java.lang.Class<any>): boolean
                    public static testCreation(arg0: java.lang.Class<any>): void
                    public static checkCompliance(arg0: java.lang.Class<any>): void
                    public static makeDynamicMBean<T>(arg0: T): javax.management.DynamicMBean
                    public static testCompliance(arg0: java.lang.Class<any>): javax.management.MBeanInfo
                    public static testComplianceMXBeanInterface(arg0: java.lang.Class<any>): void
                    public static testComplianceMBeanInterface(arg0: java.lang.Class<any>): void
                    public static testCompliance(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): javax.management.MBeanInfo
                    public static getMBeanInterface(arg0: java.lang.Class<any>): java.lang.Class<any>
                    public static getStandardMBeanInterface<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
                    public static getMXBeanInterface<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
                    public static descriptorForElement(arg0: java.lang.reflect.AnnotatedElement): javax.management.Descriptor
                    public static descriptorForAnnotations(arg0: java.lang.annotation.Annotation[]): javax.management.Descriptor
                    public static elementFromComplex(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class JmxMBeanServer implements com.sun.jmx.mbeanserver.SunJmxMBeanServer {
                    public static DEFAULT_FAIR_LOCK_POLICY: boolean
                    public interceptorsEnabled(): boolean
                    public getMBeanInstantiator(): com.sun.jmx.mbeanserver.MBeanInstantiator
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                    public registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                    public unregisterMBean(arg0: javax.management.ObjectName): void
                    public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                    public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                    public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                    public isRegistered(arg0: javax.management.ObjectName): boolean
                    public getMBeanCount(): java.lang.Integer
                    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                    public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public getDefaultDomain(): string
                    public getDomains(): java.lang.String[]
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                    public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                    public instantiate(arg0: java.lang.String | string): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                    public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                    public getMBeanServerInterceptor(): javax.management.MBeanServer
                    public setMBeanServerInterceptor(arg0: javax.management.MBeanServer): void
                    public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                    public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                    public getMBeanServerDelegate(): javax.management.MBeanServerDelegate
                    public static newMBeanServerDelegate(): javax.management.MBeanServerDelegate
                    public static newMBeanServer(arg0: java.lang.String | string, arg1: javax.management.MBeanServer, arg2: javax.management.MBeanServerDelegate, arg3: boolean): javax.management.MBeanServer
                    public static class: java.lang.Class<any>
                }
                class JmxMBeanServerBuilder extends javax.management.MBeanServerBuilder {
                    public constructor()
                    public newMBeanServerDelegate(): javax.management.MBeanServerDelegate
                    public newMBeanServer(arg0: java.lang.String | string, arg1: javax.management.MBeanServer, arg2: javax.management.MBeanServerDelegate): javax.management.MBeanServer
                    public static class: java.lang.Class<any>
                }
                class MBeanAnalyzer<M> {
                    public static class: java.lang.Class<any>
                }
                class MBeanInstantiator {
                    public testCreation(arg0: java.lang.Class<any>): void
                    public findClassWithDefaultLoaderRepository(arg0: java.lang.String | string): java.lang.Class<any>
                    public findClass(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<any>
                    public findClass(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Class<any>
                    public findSignatureClasses(arg0: java.lang.String[], arg1: java.lang.ClassLoader): java.lang.Class<any>[]
                    public instantiate(arg0: java.lang.Class<any>): java.lang.Object
                    public instantiate(arg0: java.lang.Class<any>, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: java.lang.ClassLoader): java.lang.Object
                    public deserialize(arg0: java.lang.ClassLoader, arg1: byte[]): java.io.ObjectInputStream
                    public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[], arg3: java.lang.ClassLoader): java.io.ObjectInputStream
                    public instantiate(arg0: java.lang.String | string): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.ClassLoader): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: java.lang.ClassLoader): java.lang.Object
                    public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[], arg4: java.lang.ClassLoader): java.lang.Object
                    public getClassLoaderRepository(): com.sun.jmx.mbeanserver.ModifiableClassLoaderRepository
                    public static class: java.lang.Class<any>
                }
                abstract class MBeanIntrospector<M> {
                    public static class: java.lang.Class<any>
                }
                class MBeanServerDelegateImpl extends javax.management.MBeanServerDelegate implements javax.management.DynamicMBean , javax.management.MBeanRegistration {
                    public constructor()
                    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                    public postRegister(arg0: java.lang.Boolean | boolean): void
                    public preDeregister(): void
                    public postDeregister(): void
                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public setAttribute(arg0: javax.management.Attribute): void
                    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
                    public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public getMBeanInfo(): javax.management.MBeanInfo
                    public static class: java.lang.Class<any>
                }
                abstract class MBeanSupport<M> implements com.sun.jmx.mbeanserver.DynamicMBean2 , javax.management.MBeanRegistration {
                    public isMXBean(): boolean
                    public register(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
                    public unregister(): void
                    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                    public preRegister2(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
                    public registerFailed(): void
                    public postRegister(arg0: java.lang.Boolean | boolean): void
                    public preDeregister(): void
                    public postDeregister(): void
                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.Attribute): void
                    public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
                    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public getMBeanInfo(): javax.management.MBeanInfo
                    public getClassName(): string
                    public getResource(): java.lang.Object
                    public getMBeanInterface(): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class MXBeanIntrospector extends com.sun.jmx.mbeanserver.MBeanIntrospector<com.sun.jmx.mbeanserver.ConvertingMethod> {
                    public static class: java.lang.Class<any>
                }
                class MXBeanLookup {
                    public static class: java.lang.Class<any>
                }
                abstract class MXBeanMapping {
                    protected constructor(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: javax.management.openmbean.OpenType<any>)
                    public getJavaType(): java.lang.reflect.Type
                    public getOpenType(): javax.management.openmbean.OpenType<any>
                    public getOpenClass(): java.lang.Class<any>
                    public fromOpenValue(arg0: java.lang.Object): java.lang.Object
                    public toOpenValue(arg0: java.lang.Object): java.lang.Object
                    public checkReconstructible(): void
                    public static class: java.lang.Class<any>
                }
                abstract class MXBeanMappingFactory {
                    public static DEFAULT: com.sun.jmx.mbeanserver.MXBeanMappingFactory
                    protected constructor()
                    public mappingForType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: com.sun.jmx.mbeanserver.MXBeanMappingFactory): com.sun.jmx.mbeanserver.MXBeanMapping
                    public static class: java.lang.Class<any>
                }
                class MXBeanProxy {
                    public constructor(arg0: java.lang.Class<any>)
                    public invoke(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.reflect.Method, arg3: java.lang.Object[]): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class MXBeanSupport extends com.sun.jmx.mbeanserver.MBeanSupport<com.sun.jmx.mbeanserver.ConvertingMethod> {
                    public constructor(arg0: T, arg1: java.lang.Class<T>)
                    public register<T>(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
                    public unregister<T>(): void
                    public static class: java.lang.Class<any>
                }
                interface ModifiableClassLoaderRepository extends javax.management.loading.ClassLoaderRepository {
                    addClassLoader(arg0: java.lang.ClassLoader): void
                    removeClassLoader(arg0: java.lang.ClassLoader): void
                    addClassLoader(arg0: javax.management.ObjectName, arg1: java.lang.ClassLoader): void
                    removeClassLoader(arg0: javax.management.ObjectName): void
                    getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                }
                class NamedObject {
                    public constructor(arg0: javax.management.ObjectName, arg1: javax.management.DynamicMBean)
                    public constructor(arg0: java.lang.String | string, arg1: javax.management.DynamicMBean)
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getName(): javax.management.ObjectName
                    public getObject(): javax.management.DynamicMBean
                    public static class: java.lang.Class<any>
                }
                class ObjectInputStreamWithLoader extends java.io.ObjectInputStream {
                    public constructor(arg0: java.io.InputStream, arg1: java.lang.ClassLoader)
                    protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class PerInterface<M> {
                    public static class: java.lang.Class<any>
                }
                class Repository {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: boolean)
                    public getDomains(): java.lang.String[]
                    public addMBean(arg0: javax.management.DynamicMBean, arg1: javax.management.ObjectName, arg2: com.sun.jmx.mbeanserver.Repository$RegistrationContext): void
                    public contains(arg0: javax.management.ObjectName): boolean
                    public retrieve(arg0: javax.management.ObjectName): javax.management.DynamicMBean
                    public query(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<com.sun.jmx.mbeanserver.NamedObject>
                    public remove(arg0: javax.management.ObjectName, arg1: com.sun.jmx.mbeanserver.Repository$RegistrationContext): void
                    public getCount(): java.lang.Integer
                    public getDefaultDomain(): string
                    public static class: java.lang.Class<any>
                }
                class SecureClassLoaderRepository implements javax.management.loading.ClassLoaderRepository {
                    public constructor(arg0: javax.management.loading.ClassLoaderRepository)
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class StandardMBeanIntrospector extends com.sun.jmx.mbeanserver.MBeanIntrospector<java.lang.reflect.Method> {
                    public static class: java.lang.Class<any>
                }
                class StandardMBeanSupport extends com.sun.jmx.mbeanserver.MBeanSupport<java.lang.reflect.Method> {
                    public constructor(arg0: T, arg1: java.lang.Class<T>)
                    public register<T>(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
                    public unregister<T>(): void
                    public getMBeanInfo<T>(): javax.management.MBeanInfo
                    public static class: java.lang.Class<any>
                }
                interface SunJmxMBeanServer extends javax.management.MBeanServer {
                    getMBeanInstantiator(): com.sun.jmx.mbeanserver.MBeanInstantiator
                    interceptorsEnabled(): boolean
                    getMBeanServerInterceptor(): javax.management.MBeanServer
                    setMBeanServerInterceptor(arg0: javax.management.MBeanServer): void
                    getMBeanServerDelegate(): javax.management.MBeanServerDelegate
                }
                class Util {
                    public constructor()
                    public static newObjectName(arg0: java.lang.String | string): javax.management.ObjectName
                    public static cast<T>(arg0: java.lang.Object): T
                    public static hashCode(arg0: java.lang.String[], arg1: java.lang.Object[]): int
                    public static wildmatch(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
                class WeakIdentityHashMap<K, V> {
                    public put(arg0: K, arg1: V): V
                    public remove(arg0: K): V
                    public static class: java.lang.Class<any>
                }
            }
            namespace remote {
                namespace internal {
                    class ArrayNotificationBuffer implements com.sun.jmx.remote.internal.NotificationBuffer {
                        public static getNotificationBuffer(arg0: javax.management.MBeanServer, arg1: java.util.Map<java.lang.String, any>): com.sun.jmx.remote.internal.NotificationBuffer
                        public dispose(): void
                        public fetchNotifications(arg0: com.sun.jmx.remote.internal.NotificationBufferFilter | com.sun.jmx.remote.internal.NotificationBufferFilter$$Lambda, arg1: long, arg2: long, arg3: int): javax.management.remote.NotificationResult
                        public static class: java.lang.Class<any>
                    }
                    class ArrayQueue<T> extends java.util.AbstractList<T> {
                        public constructor(arg0: int)
                        public resize(arg0: int): void
                        public add(arg0: T): boolean
                        public remove(arg0: int): T
                        public get(arg0: int): T
                        public size(): int
                        public static class: java.lang.Class<any>
                    }
                    abstract class ClientCommunicatorAdmin {
                        public constructor(arg0: long)
                        public gotIOException(arg0: java.io.IOException): void
                        protected checkConnection(): void
                        protected doStart(): void
                        protected doStop(): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                    class ClientListenerInfo {
                        public constructor(arg0: java.lang.Integer, arg1: javax.management.ObjectName, arg2: javax.management.NotificationListener, arg3: javax.management.NotificationFilter, arg4: java.lang.Object, arg5: javax.security.auth.Subject)
                        public getObjectName(): javax.management.ObjectName
                        public getListenerID(): java.lang.Integer
                        public getNotificationFilter(): javax.management.NotificationFilter
                        public getListener(): javax.management.NotificationListener
                        public getHandback(): java.lang.Object
                        public getDelegationSubject(): javax.security.auth.Subject
                        public sameAs(arg0: javax.management.ObjectName): boolean
                        public sameAs(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): boolean
                        public sameAs(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): boolean
                        public static class: java.lang.Class<any>
                    }
                    abstract class ClientNotifForwarder {
                        public constructor(arg0: java.util.Map)
                        public constructor(arg0: java.lang.ClassLoader, arg1: java.util.Map<java.lang.String, any>)
                        protected fetchNotifs(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                        protected addListenerForMBeanRemovedNotif(): java.lang.Integer
                        protected removeListenerForMBeanRemovedNotif(arg0: java.lang.Integer): void
                        protected lostNotifs(arg0: java.lang.String | string, arg1: long): void
                        public addNotificationListener(arg0: java.lang.Integer, arg1: javax.management.ObjectName, arg2: javax.management.NotificationListener, arg3: javax.management.NotificationFilter, arg4: java.lang.Object, arg5: javax.security.auth.Subject): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): java.lang.Integer[]
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): java.lang.Integer
                        public removeNotificationListener(arg0: javax.management.ObjectName): java.lang.Integer[]
                        public preReconnection(): com.sun.jmx.remote.internal.ClientListenerInfo[]
                        public postReconnection(arg0: com.sun.jmx.remote.internal.ClientListenerInfo[]): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                    interface NotificationBuffer {
                        fetchNotifications(arg0: com.sun.jmx.remote.internal.NotificationBufferFilter | com.sun.jmx.remote.internal.NotificationBufferFilter$$Lambda, arg1: long, arg2: long, arg3: int): javax.management.remote.NotificationResult
                        dispose(): void
                    }
                    interface NotificationBufferFilter {
                        apply(arg0: java.util.List<javax.management.remote.TargetedNotification>, arg1: javax.management.ObjectName, arg2: javax.management.Notification): void
                    }
                    interface NotificationBufferFilter$$Lambda {
                        (arg0: java.util.List<javax.management.remote.TargetedNotification>, arg1: javax.management.ObjectName, arg2: javax.management.Notification): void
                    }
                    abstract class ServerCommunicatorAdmin {
                        public constructor(arg0: long)
                        public reqIncoming(): boolean
                        public rspOutgoing(): boolean
                        protected doStop(): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                    class ServerNotifForwarder {
                        public constructor(arg0: javax.management.MBeanServer, arg1: java.util.Map<java.lang.String, any>, arg2: com.sun.jmx.remote.internal.NotificationBuffer, arg3: java.lang.String | string)
                        public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationFilter): java.lang.Integer
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: java.lang.Integer[]): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: java.lang.Integer): void
                        public fetchNotifs(arg0: long, arg1: long, arg2: int): javax.management.remote.NotificationResult
                        public terminate(): void
                        public checkMBeanPermission(arg0: javax.management.ObjectName, arg1: java.lang.String | string): void
                        public static class: java.lang.Class<any>
                    }
                }
                namespace security {
                    class FileLoginModule implements javax.security.auth.spi.LoginModule {
                        public constructor()
                        public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                        public login(): boolean
                        public commit(): boolean
                        public abort(): boolean
                        public logout(): boolean
                        public static class: java.lang.Class<any>
                    }
                    class JMXPluggableAuthenticator implements javax.management.remote.JMXAuthenticator {
                        public constructor(arg0: java.util.Map<any, any>)
                        public authenticate(arg0: java.lang.Object): javax.security.auth.Subject
                        public static class: java.lang.Class<any>
                    }
                    class JMXPluggableAuthenticator$$Lambda implements javax.management.remote.JMXAuthenticator {
                        public constructor(arg0: java.util.Map<any, any>)
                    }
                    class JMXSubjectDomainCombiner extends javax.security.auth.SubjectDomainCombiner {
                        public constructor(arg0: javax.security.auth.Subject)
                        public combine(arg0: java.security.ProtectionDomain[], arg1: java.security.ProtectionDomain[]): java.security.ProtectionDomain[]
                        public static getContext(arg0: javax.security.auth.Subject): java.security.AccessControlContext
                        public static getDomainCombinerContext(arg0: javax.security.auth.Subject): java.security.AccessControlContext
                        public static class: java.lang.Class<any>
                    }
                    abstract class MBeanServerAccessController implements javax.management.remote.MBeanServerForwarder {
                        public constructor()
                        public getMBeanServer(): javax.management.MBeanServer
                        public setMBeanServer(arg0: javax.management.MBeanServer): void
                        protected checkRead(): void
                        protected checkWrite(): void
                        protected checkCreate(arg0: java.lang.String | string): void
                        protected checkUnregister(arg0: javax.management.ObjectName): void
                        public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                        public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
                        public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
                        public deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
                        public deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
                        public deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
                        public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
                        public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                        public getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
                        public getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
                        public getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                        public getDefaultDomain(): string
                        public getDomains(): java.lang.String[]
                        public getMBeanCount(): java.lang.Integer
                        public getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
                        public getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
                        public instantiate(arg0: java.lang.String | string): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
                        public instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                        public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                        public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
                        public isRegistered(arg0: javax.management.ObjectName): boolean
                        public queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
                        public queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
                        public registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
                        public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                        public setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
                        public unregisterMBean(arg0: javax.management.ObjectName): void
                        public static class: java.lang.Class<any>
                    }
                    class MBeanServerFileAccessController extends com.sun.jmx.remote.security.MBeanServerAccessController {
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: javax.management.MBeanServer)
                        public constructor(arg0: java.util.Properties)
                        public constructor(arg0: java.util.Properties, arg1: javax.management.MBeanServer)
                        public checkRead(): void
                        public checkWrite(): void
                        public checkCreate(arg0: java.lang.String | string): void
                        public checkUnregister(arg0: javax.management.ObjectName): void
                        public refresh(): void
                        public static class: java.lang.Class<any>
                    }
                    interface NotificationAccessController {
                        addNotificationListener(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                        removeNotificationListener(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                        fetchNotification(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.Notification, arg3: javax.security.auth.Subject): void
                    }
                    class SubjectDelegator {
                        public constructor()
                        public delegatedContext(arg0: java.security.AccessControlContext, arg1: javax.security.auth.Subject, arg2: boolean): java.security.AccessControlContext
                        public static checkRemoveCallerContext(arg0: javax.security.auth.Subject): boolean
                        public static class: java.lang.Class<any>
                    }
                }
                namespace util {
                    class ClassLoaderWithRepository extends java.lang.ClassLoader {
                        public constructor(arg0: javax.management.loading.ClassLoaderRepository, arg1: java.lang.ClassLoader)
                        protected findClass(arg0: java.lang.String | string): java.lang.Class<any>
                        public static class: java.lang.Class<any>
                    }
                    class ClassLogger {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                        public traceOn(): boolean
                        public debugOn(): boolean
                        public warningOn(): boolean
                        public infoOn(): boolean
                        public configOn(): boolean
                        public fineOn(): boolean
                        public finerOn(): boolean
                        public finestOn(): boolean
                        public debug(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public debug(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public debug(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public trace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public trace(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public trace(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public error(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public error(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public finest(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public finest(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public finest(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public finer(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public finer(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public finer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public fine(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public fine(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public fine(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public config(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public config(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public config(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public info(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public info(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public info(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public warning(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public warning(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public warning(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public severe(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public severe(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public severe(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                        public static class: java.lang.Class<any>
                    }
                    class EnvHelp {
                        public static CREDENTIAL_TYPES: string
                        public static CREDENTIALS_FILTER_PATTERN: string
                        public static SERIAL_FILTER_PATTERN: string
                        public static BUFFER_SIZE_PROPERTY: string
                        public static MAX_FETCH_NOTIFS: string
                        public static FETCH_TIMEOUT: string
                        public static NOTIF_ACCESS_CONTROLLER: string
                        public static DEFAULT_ORB: string
                        public static HIDDEN_ATTRIBUTES: string
                        public static DEFAULT_HIDDEN_ATTRIBUTES: string
                        public static SERVER_CONNECTION_TIMEOUT: string
                        public static CLIENT_CONNECTION_CHECK_PERIOD: string
                        public static JMX_SERVER_DAEMON: string
                        public constructor()
                        public static resolveServerClassLoader(arg0: java.util.Map<java.lang.String, any>, arg1: javax.management.MBeanServer): java.lang.ClassLoader
                        public static resolveClientClassLoader(arg0: java.util.Map<java.lang.String, any>): java.lang.ClassLoader
                        public static initCause<T extends java.lang.Throwable>(arg0: T, arg1: java.lang.Throwable): T
                        public static getCause(arg0: java.lang.Throwable): java.lang.Throwable
                        public static getNotifBufferSize(arg0: java.util.Map<java.lang.String, any>): int
                        public static getMaxFetchNotifNumber(arg0: java.util.Map<java.lang.String, any>): int
                        public static getFetchTimeout(arg0: java.util.Map<java.lang.String, any>): long
                        public static getNotificationAccessController(arg0: java.util.Map<java.lang.String, any>): com.sun.jmx.remote.security.NotificationAccessController
                        public static getIntegerAttribute(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string, arg2: long, arg3: long, arg4: long): long
                        public static checkAttributes(arg0: java.util.Map<any, any>): void
                        public static filterAttributes<V>(arg0: java.util.Map<java.lang.String, V>): java.util.Map<java.lang.String, V>
                        public static getServerConnectionTimeout(arg0: java.util.Map<java.lang.String, any>): long
                        public static getConnectionCheckPeriod(arg0: java.util.Map<java.lang.String, any>): long
                        public static computeBooleanFromString(arg0: java.lang.String | string): boolean
                        public static computeBooleanFromString(arg0: java.lang.String | string, arg1: boolean): boolean
                        public static mapToHashtable<K, V>(arg0: java.util.Map<K, V>): java.util.Hashtable<K, V>
                        public static isServerDaemon(arg0: java.util.Map<java.lang.String, any>): boolean
                        public static class: java.lang.Class<any>
                    }
                    class OrderClassLoaders extends java.lang.ClassLoader {
                        public constructor(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader)
                        protected loadClass(arg0: java.lang.String | string, arg1: boolean): java.lang.Class<any>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
declare namespace java {
    namespace lang {
        namespace management {
            interface BufferPoolMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                getCount(): long
                getTotalCapacity(): long
                getMemoryUsed(): long
            }
            interface ClassLoadingMXBean extends java.lang.management.PlatformManagedObject {
                getLoadedClassCount(): int
                getTotalLoadedClassCount(): long
                getUnloadedClassCount(): long
                isVerbose(): boolean
                setVerbose(arg0: boolean): void
            }
            interface CompilationMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                getTotalCompilationTime(): long
                isCompilationTimeMonitoringSupported(): boolean
            }
            interface GarbageCollectorMXBean extends java.lang.management.MemoryManagerMXBean {
                getCollectionCount(): long
                getCollectionTime(): long
            }
            class LockInfo {
                public constructor(arg0: java.lang.String | string, arg1: int)
                public getClassName(): string
                public getIdentityHashCode(): int
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.LockInfo
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class ManagementFactory {
                public static CLASS_LOADING_MXBEAN_NAME: string
                public static COMPILATION_MXBEAN_NAME: string
                public static GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE: string
                public static MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE: string
                public static MEMORY_MXBEAN_NAME: string
                public static MEMORY_POOL_MXBEAN_DOMAIN_TYPE: string
                public static OPERATING_SYSTEM_MXBEAN_NAME: string
                public static RUNTIME_MXBEAN_NAME: string
                public static THREAD_MXBEAN_NAME: string
                public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
                public static getCompilationMXBean(): java.lang.management.CompilationMXBean
                public static getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>
                public static getMemoryManagerMXBeans(): java.util.List<java.lang.management.MemoryManagerMXBean>
                public static getMemoryMXBean(): java.lang.management.MemoryMXBean
                public static getMemoryPoolMXBeans(): java.util.List<java.lang.management.MemoryPoolMXBean>
                public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
                public static getPlatformMBeanServer(): javax.management.MBeanServer
                public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean
                public static getThreadMXBean(): java.lang.management.ThreadMXBean
                public static newPlatformMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.String | string, arg2: java.lang.Class<T>): T
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): T
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): java.util.List<T>
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.Class<T>): T
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.Class<T>): java.util.List<T>
                public static getPlatformManagementInterfaces(): java.util.Set<java.lang.Class<java.lang.management.PlatformManagedObject>>
                public static class: java.lang.Class<any>
            }
            class ManagementPermission extends java.security.BasicPermission {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface MemoryMXBean extends java.lang.management.PlatformManagedObject {
                gc(): void
                getHeapMemoryUsage(): java.lang.management.MemoryUsage
                getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
                getObjectPendingFinalizationCount(): int
                isVerbose(): boolean
                setVerbose(arg0: boolean): void
            }
            interface MemoryManagerMXBean extends java.lang.management.PlatformManagedObject {
                getMemoryPoolNames(): java.lang.String[]
                getName(): string
                isValid(): boolean
            }
            class MemoryNotificationInfo {
                public static MEMORY_THRESHOLD_EXCEEDED: string
                public static MEMORY_COLLECTION_THRESHOLD_EXCEEDED: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.management.MemoryUsage, arg2: long)
                public getCount(): long
                public getPoolName(): string
                public getUsage(): java.lang.management.MemoryUsage
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryNotificationInfo
                public static class: java.lang.Class<any>
            }
            interface MemoryPoolMXBean extends java.lang.management.PlatformManagedObject {
                getCollectionUsage(): java.lang.management.MemoryUsage
                getCollectionUsageThreshold(): long
                getCollectionUsageThresholdCount(): long
                getMemoryManagerNames(): java.lang.String[]
                getName(): string
                getPeakUsage(): java.lang.management.MemoryUsage
                getType(): java.lang.management.MemoryType
                getUsage(): java.lang.management.MemoryUsage
                getUsageThreshold(): long
                getUsageThresholdCount(): long
                isCollectionUsageThresholdExceeded(): boolean
                isCollectionUsageThresholdSupported(): boolean
                isUsageThresholdExceeded(): boolean
                isUsageThresholdSupported(): boolean
                isValid(): boolean
                resetPeakUsage(): void
                setCollectionUsageThreshold(arg0: long): void
                setUsageThreshold(arg0: long): void
            }
            class MemoryType extends java.lang.Enum<java.lang.management.MemoryType> {
                public static HEAP: java.lang.management.MemoryType
                public static NON_HEAP: java.lang.management.MemoryType
                public static values(): java.lang.management.MemoryType[]
                public static valueOf(arg0: java.lang.String | string): java.lang.management.MemoryType
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class MemoryUsage {
                public constructor(arg0: long, arg1: long, arg2: long, arg3: long)
                public getCommitted(): long
                public getInit(): long
                public getMax(): long
                public getUsed(): long
                public toString(): string
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class MonitorInfo extends java.lang.management.LockInfo {
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.lang.StackTraceElement)
                public getLockedStackDepth(): int
                public getLockedStackFrame(): java.lang.StackTraceElement
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MonitorInfo
                public static class: java.lang.Class<any>
            }
            interface OperatingSystemMXBean extends java.lang.management.PlatformManagedObject {
                getArch(): string
                getAvailableProcessors(): int
                getName(): string
                getVersion(): string
                getSystemLoadAverage(): double
            }
            interface PlatformLoggingMXBean extends java.lang.management.PlatformManagedObject {
                getLoggerLevel(arg0: java.lang.String | string): string
                getLoggerNames(): java.util.List<java.lang.String>
                getParentLoggerName(arg0: java.lang.String | string): string
                setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            }
            interface PlatformManagedObject {
                getObjectName(): javax.management.ObjectName
            }
            interface PlatformManagedObject$$Lambda {
                (): javax.management.ObjectName
            }
            interface RuntimeMXBean extends java.lang.management.PlatformManagedObject {
                getBootClassPath(): string
                getClassPath(): string
                getInputArguments(): java.util.List<java.lang.String>
                getLibraryPath(): string
                getManagementSpecVersion(): string
                getName(): string
                getSpecName(): string
                getSpecVendor(): string
                getSpecVersion(): string
                getStartTime(): long
                getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
                getUptime(): long
                getVmName(): string
                getVmVendor(): string
                getVmVersion(): string
                isBootClassPathSupported(): boolean
            }
            class ThreadInfo {
                public getBlockedCount(): long
                public getBlockedTime(): long
                public getLockName(): string
                public getLockOwnerId(): long
                public getLockOwnerName(): string
                public getLockInfo(): java.lang.management.LockInfo
                public getStackTrace(): java.lang.StackTraceElement[]
                public getThreadId(): long
                public getThreadName(): string
                public getThreadState(): java.lang.Thread$State
                public getWaitedCount(): long
                public getWaitedTime(): long
                public isInNative(): boolean
                public isSuspended(): boolean
                public getLockedMonitors(): java.lang.management.MonitorInfo[]
                public getLockedSynchronizers(): java.lang.management.LockInfo[]
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            interface ThreadMXBean extends java.lang.management.PlatformManagedObject {
                findMonitorDeadlockedThreads(): long[]
                getAllThreadIds(): long[]
                getCurrentThreadCpuTime(): long
                getCurrentThreadUserTime(): long
                getDaemonThreadCount(): int
                getPeakThreadCount(): int
                getThreadCount(): int
                getThreadCpuTime(arg0: long): long
                getThreadInfo(arg0: long): java.lang.management.ThreadInfo
                getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
                getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
                getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
                getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
                getThreadUserTime(arg0: long): long
                getTotalStartedThreadCount(): long
                isCurrentThreadCpuTimeSupported(): boolean
                isThreadContentionMonitoringEnabled(): boolean
                isThreadContentionMonitoringSupported(): boolean
                isThreadCpuTimeEnabled(): boolean
                isThreadCpuTimeSupported(): boolean
                resetPeakThreadCount(): void
                setThreadContentionMonitoringEnabled(arg0: boolean): void
                setThreadCpuTimeEnabled(arg0: boolean): void
                isObjectMonitorUsageSupported(): boolean
                isSynchronizerUsageSupported(): boolean
                findDeadlockedThreads(): long[]
                dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
            }
        }
    }
}
declare namespace javax {
    namespace management {
        class AndQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp)
            public getLeftExp(): javax.management.QueryExp
            public getRightExp(): javax.management.QueryExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class Attribute implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
            public getName(): string
            public getValue(): java.lang.Object
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class AttributeChangeNotification extends javax.management.Notification {
            public static ATTRIBUTE_CHANGE: string
            public constructor(arg0: java.lang.Object, arg1: long, arg2: long, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.Object, arg7: java.lang.Object)
            public getAttributeName(): string
            public getAttributeType(): string
            public getOldValue(): java.lang.Object
            public getNewValue(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class AttributeChangeNotificationFilter implements javax.management.NotificationFilter {
            public constructor()
            public isNotificationEnabled(arg0: javax.management.Notification): boolean
            public enableAttribute(arg0: java.lang.String | string): void
            public disableAttribute(arg0: java.lang.String | string): void
            public disableAllAttributes(): void
            public getEnabledAttributes(): java.util.Vector<java.lang.String>
            public static class: java.lang.Class<any>
        }
        class AttributeList extends java.util.ArrayList<java.lang.Object> {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: javax.management.AttributeList)
            public constructor(arg0: java.util.List<javax.management.Attribute>)
            public asList(): java.util.List<javax.management.Attribute>
            public add(arg0: javax.management.Attribute): void
            public add(arg0: int, arg1: javax.management.Attribute): void
            public set(arg0: int, arg1: javax.management.Attribute): void
            public addAll(arg0: javax.management.AttributeList): boolean
            public addAll(arg0: int, arg1: javax.management.AttributeList): boolean
            public add(arg0: java.lang.Object): boolean
            public add(arg0: int, arg1: java.lang.Object): void
            public addAll(arg0: java.util.Collection<any>): boolean
            public addAll(arg0: int, arg1: java.util.Collection<any>): boolean
            public set(arg0: int, arg1: java.lang.Object): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class AttributeNotFoundException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class AttributeValueExp implements javax.management.ValueExp {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public getAttributeName(): string
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public toString(): string
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            protected getAttribute(arg0: javax.management.ObjectName): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class BadAttributeValueExpException extends java.lang.Exception {
            public constructor(arg0: java.lang.Object)
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class BadBinaryOpValueExpException extends java.lang.Exception {
            public constructor(arg0: javax.management.ValueExp)
            public getExp(): javax.management.ValueExp
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class BadStringOperationException extends java.lang.Exception {
            public constructor(arg0: java.lang.String | string)
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class BetweenQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp)
            public getCheckedValue(): javax.management.ValueExp
            public getLowerBound(): javax.management.ValueExp
            public getUpperBound(): javax.management.ValueExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class BinaryOpValueExp extends javax.management.QueryEval implements javax.management.ValueExp {
            public constructor()
            public constructor(arg0: int, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp)
            public getOperator(): int
            public getLeftValue(): javax.management.ValueExp
            public getRightValue(): javax.management.ValueExp
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public toString(): string
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static class: java.lang.Class<any>
        }
        class BinaryRelQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: int, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp)
            public getOperator(): int
            public getLeftValue(): javax.management.ValueExp
            public getRightValue(): javax.management.ValueExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class BooleanValueExp extends javax.management.QueryEval implements javax.management.ValueExp {
            public getValue(): boolean
            public toString(): string
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static class: java.lang.Class<any>
        }
        class ClassAttributeValueExp extends javax.management.AttributeValueExp {
            public constructor()
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public toString(): string
            protected getValue(arg0: javax.management.ObjectName): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class DefaultLoaderRepository {
            public constructor()
            public static loadClass(arg0: java.lang.String | string): java.lang.Class<any>
            public static loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
            public static class: java.lang.Class<any>
        }
        interface Descriptor extends java.io.Serializable , java.lang.Cloneable {
            getFieldValue(arg0: java.lang.String | string): java.lang.Object
            setField(arg0: java.lang.String | string, arg1: java.lang.Object): void
            getFields(): java.lang.String[]
            getFieldNames(): java.lang.String[]
            getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
            removeField(arg0: java.lang.String | string): void
            setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
            clone(): java.lang.Object
            isValid(): boolean
            equals(arg0: java.lang.Object): boolean
            hashCode(): int
        }
        interface DescriptorAccess extends javax.management.DescriptorRead {
            setDescriptor(arg0: javax.management.Descriptor): void
        }
        interface DescriptorKey extends java.lang.annotation.Annotation {
            value(): string
        }
        interface DescriptorRead {
            getDescriptor(): javax.management.Descriptor
        }
        interface DescriptorRead$$Lambda {
            (): javax.management.Descriptor
        }
        interface DynamicMBean {
            getAttribute(arg0: java.lang.String | string): java.lang.Object
            setAttribute(arg0: javax.management.Attribute): void
            getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
            setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
            invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            getMBeanInfo(): javax.management.MBeanInfo
        }
        class ImmutableDescriptor implements javax.management.Descriptor {
            public static EMPTY_DESCRIPTOR: javax.management.ImmutableDescriptor
            public constructor(arg0: java.lang.String[], arg1: java.lang.Object[])
            public constructor(...arg0: java.lang.String[])
            public constructor(arg0: java.util.Map<java.lang.String, any>)
            public static union(...arg0: javax.management.Descriptor[]): javax.management.ImmutableDescriptor
            public getFieldValue(arg0: java.lang.String | string): java.lang.Object
            public getFields(): java.lang.String[]
            public getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
            public getFieldNames(): java.lang.String[]
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public isValid(): boolean
            public clone(): javax.management.Descriptor
            public setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
            public setField(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public removeField(arg0: java.lang.String | string): void
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class InQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp[])
            public getCheckedValue(): javax.management.ValueExp
            public getExplicitValues(): javax.management.ValueExp[]
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class InstanceAlreadyExistsException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class InstanceNotFoundException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class InstanceOfQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor(arg0: javax.management.StringValueExp)
            public getClassNameValue(): javax.management.StringValueExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class IntrospectionException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class InvalidApplicationException extends java.lang.Exception {
            public constructor(arg0: java.lang.Object)
            public static class: java.lang.Class<any>
        }
        class InvalidAttributeValueException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class JMException extends java.lang.Exception {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class JMRuntimeException extends java.lang.RuntimeException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class JMX {
            public static DEFAULT_VALUE_FIELD: string
            public static IMMUTABLE_INFO_FIELD: string
            public static INTERFACE_CLASS_NAME_FIELD: string
            public static LEGAL_VALUES_FIELD: string
            public static MAX_VALUE_FIELD: string
            public static MIN_VALUE_FIELD: string
            public static MXBEAN_FIELD: string
            public static OPEN_TYPE_FIELD: string
            public static ORIGINAL_TYPE_FIELD: string
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static isMXBeanInterface(arg0: java.lang.Class<any>): boolean
            public static class: java.lang.Class<any>
        }
        class ListenerNotFoundException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class MBeanAttributeInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
            public clone(): java.lang.Object
            public getType(): string
            public isReadable(): boolean
            public isWritable(): boolean
            public isIs(): boolean
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanConstructorInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[])
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getSignature(): javax.management.MBeanParameterInfo[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanException extends javax.management.JMException {
            public constructor(arg0: java.lang.Exception)
            public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
            public getTargetException(): java.lang.Exception
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class MBeanFeatureInfo implements java.io.Serializable , javax.management.DescriptorRead {
            protected name: string
            protected description: string
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.Descriptor)
            public getName(): string
            public getDescription(): string
            public getDescriptor(): javax.management.Descriptor
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanFeatureInfo$$Lambda implements java.io.Serializable , javax.management.DescriptorRead {
            protected name: string
        }
        class MBeanInfo implements java.lang.Cloneable , java.io.Serializable , javax.management.DescriptorRead {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanAttributeInfo[], arg3: javax.management.MBeanConstructorInfo[], arg4: javax.management.MBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[])
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanAttributeInfo[], arg3: javax.management.MBeanConstructorInfo[], arg4: javax.management.MBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[], arg6: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getClassName(): string
            public getDescription(): string
            public getAttributes(): javax.management.MBeanAttributeInfo[]
            public getOperations(): javax.management.MBeanOperationInfo[]
            public getConstructors(): javax.management.MBeanConstructorInfo[]
            public getNotifications(): javax.management.MBeanNotificationInfo[]
            public getDescriptor(): javax.management.Descriptor
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanInfo$$Lambda implements java.lang.Cloneable , java.io.Serializable , javax.management.DescriptorRead {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanAttributeInfo[], arg3: javax.management.MBeanConstructorInfo[], arg4: javax.management.MBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[])
        }
        class MBeanNotificationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getNotifTypes(): java.lang.String[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanOperationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public static INFO: int
            public static ACTION: int
            public static ACTION_INFO: int
            public static UNKNOWN: int
            public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int, arg5: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getReturnType(): string
            public getSignature(): javax.management.MBeanParameterInfo[]
            public getImpact(): int
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanParameterInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getType(): string
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class MBeanPermission extends java.security.Permission {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.ObjectName, arg3: java.lang.String | string)
            public getActions(): string
            public hashCode(): int
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
        interface MBeanRegistration {
            preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
            postRegister(arg0: java.lang.Boolean | boolean): void
            preDeregister(): void
            postDeregister(): void
        }
        class MBeanRegistrationException extends javax.management.MBeanException {
            public constructor(arg0: java.lang.Exception)
            public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        interface MBeanServer extends javax.management.MBeanServerConnection {
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
            registerMBean(arg0: java.lang.Object, arg1: javax.management.ObjectName): javax.management.ObjectInstance
            unregisterMBean(arg0: javax.management.ObjectName): void
            getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
            queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
            queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
            isRegistered(arg0: javax.management.ObjectName): boolean
            getMBeanCount(): java.lang.Integer
            getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
            getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
            setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
            setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
            invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
            getDefaultDomain(): string
            getDomains(): java.lang.String[]
            addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
            isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
            instantiate(arg0: java.lang.String | string): java.lang.Object
            instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName): java.lang.Object
            instantiate(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            instantiate(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
            deserialize(arg0: javax.management.ObjectName, arg1: byte[]): java.io.ObjectInputStream
            deserialize(arg0: java.lang.String | string, arg1: byte[]): java.io.ObjectInputStream
            deserialize(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: byte[]): java.io.ObjectInputStream
            getClassLoaderFor(arg0: javax.management.ObjectName): java.lang.ClassLoader
            getClassLoader(arg0: javax.management.ObjectName): java.lang.ClassLoader
            getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
        }
        class MBeanServerBuilder {
            public constructor()
            public newMBeanServerDelegate(): javax.management.MBeanServerDelegate
            public newMBeanServer(arg0: java.lang.String | string, arg1: javax.management.MBeanServer, arg2: javax.management.MBeanServerDelegate): javax.management.MBeanServer
            public static class: java.lang.Class<any>
        }
        interface MBeanServerConnection {
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
            createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
            unregisterMBean(arg0: javax.management.ObjectName): void
            getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
            queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
            queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
            isRegistered(arg0: javax.management.ObjectName): boolean
            getMBeanCount(): java.lang.Integer
            getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string): java.lang.Object
            getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
            setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
            setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
            invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
            getDefaultDomain(): string
            getDomains(): java.lang.String[]
            addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
            removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
            getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
            isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string): boolean
        }
        class MBeanServerDelegate implements javax.management.MBeanServerDelegateMBean , javax.management.NotificationEmitter {
            public static DELEGATE_NAME: javax.management.ObjectName
            public constructor()
            public getMBeanServerId(): string
            public getSpecificationName(): string
            public getSpecificationVersion(): string
            public getSpecificationVendor(): string
            public getImplementationName(): string
            public getImplementationVersion(): string
            public getImplementationVendor(): string
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener): void
            public sendNotification(arg0: javax.management.Notification): void
            public static class: java.lang.Class<any>
        }
        interface MBeanServerDelegateMBean {
            getMBeanServerId(): string
            getSpecificationName(): string
            getSpecificationVersion(): string
            getSpecificationVendor(): string
            getImplementationName(): string
            getImplementationVersion(): string
            getImplementationVendor(): string
        }
        class MBeanServerFactory {
            public static releaseMBeanServer(arg0: javax.management.MBeanServer): void
            public static createMBeanServer(): javax.management.MBeanServer
            public static createMBeanServer(arg0: java.lang.String | string): javax.management.MBeanServer
            public static newMBeanServer(): javax.management.MBeanServer
            public static newMBeanServer(arg0: java.lang.String | string): javax.management.MBeanServer
            public static findMBeanServer(arg0: java.lang.String | string): java.util.ArrayList<javax.management.MBeanServer>
            public static getClassLoaderRepository(arg0: javax.management.MBeanServer): javax.management.loading.ClassLoaderRepository
            public static class: java.lang.Class<any>
        }
        class MBeanServerInvocationHandler implements java.lang.reflect.InvocationHandler {
            public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName)
            public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: boolean)
            public getMBeanServerConnection(): javax.management.MBeanServerConnection
            public getObjectName(): javax.management.ObjectName
            public isMXBean(): boolean
            public static newProxyInstance<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class MBeanServerInvocationHandler$$Lambda implements java.lang.reflect.InvocationHandler {
            public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName)
        }
        class MBeanServerNotification extends javax.management.Notification {
            public static REGISTRATION_NOTIFICATION: string
            public static UNREGISTRATION_NOTIFICATION: string
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: javax.management.ObjectName)
            public getMBeanName(): javax.management.ObjectName
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class MBeanServerPermission extends java.security.BasicPermission {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public hashCode(): int
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public newPermissionCollection(): java.security.PermissionCollection
            public static class: java.lang.Class<any>
        }
        class MBeanTrustPermission extends java.security.BasicPermission {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        interface MXBean extends java.lang.annotation.Annotation {
            value(): boolean
        }
        class MalformedObjectNameException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class MatchQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp)
            public getAttribute(): javax.management.AttributeValueExp
            public getPattern(): string
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class NotCompliantMBeanException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class NotQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.QueryExp)
            public getNegatedExp(): javax.management.QueryExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class Notification extends java.util.EventObject {
            protected source: java.lang.Object
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string)
            public setSource(arg0: java.lang.Object): void
            public getSequenceNumber(): long
            public setSequenceNumber(arg0: long): void
            public getType(): string
            public getTimeStamp(): long
            public setTimeStamp(arg0: long): void
            public getMessage(): string
            public getUserData(): java.lang.Object
            public setUserData(arg0: java.lang.Object): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
        interface NotificationBroadcaster {
            addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            removeNotificationListener(arg0: javax.management.NotificationListener): void
            getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        }
        class NotificationBroadcasterSupport implements javax.management.NotificationEmitter {
            public constructor()
            public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda)
            public constructor(...arg0: javax.management.MBeanNotificationInfo[])
            public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda, ...arg1: javax.management.MBeanNotificationInfo[])
            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener): void
            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public sendNotification(arg0: javax.management.Notification): void
            protected handleNotification(arg0: javax.management.NotificationListener, arg1: javax.management.Notification, arg2: java.lang.Object): void
            public static class: java.lang.Class<any>
        }
        interface NotificationEmitter extends javax.management.NotificationBroadcaster {
            removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
        }
        interface NotificationFilter extends java.io.Serializable {
            isNotificationEnabled(arg0: javax.management.Notification): boolean
        }
        class NotificationFilterSupport implements javax.management.NotificationFilter {
            public constructor()
            public isNotificationEnabled(arg0: javax.management.Notification): boolean
            public enableType(arg0: java.lang.String | string): void
            public disableType(arg0: java.lang.String | string): void
            public disableAllTypes(): void
            public getEnabledTypes(): java.util.Vector<java.lang.String>
            public static class: java.lang.Class<any>
        }
        interface NotificationListener extends java.util.EventListener {
            handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
        }
        class NumericValueExp extends javax.management.QueryEval implements javax.management.ValueExp {
            public constructor()
            public doubleValue(): double
            public longValue(): long
            public isLong(): boolean
            public toString(): string
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static class: java.lang.Class<any>
        }
        class ObjectInstance implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: javax.management.ObjectName, arg1: java.lang.String | string)
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public getObjectName(): javax.management.ObjectName
            public getClassName(): string
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class ObjectName implements java.lang.Comparable<javax.management.ObjectName> , javax.management.QueryExp {
            public static WILDCARD: javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string): javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string, arg1: java.util.Hashtable<java.lang.String, java.lang.String>): javax.management.ObjectName
            public static getInstance(arg0: javax.management.ObjectName): javax.management.ObjectName
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Hashtable<java.lang.String, java.lang.String>)
            public isPattern(): boolean
            public isDomainPattern(): boolean
            public isPropertyPattern(): boolean
            public isPropertyListPattern(): boolean
            public isPropertyValuePattern(): boolean
            public isPropertyValuePattern(arg0: java.lang.String | string): boolean
            public getCanonicalName(): string
            public getDomain(): string
            public getKeyProperty(arg0: java.lang.String | string): string
            public getKeyPropertyList(): java.util.Hashtable<java.lang.String, java.lang.String>
            public getKeyPropertyListString(): string
            public getCanonicalKeyPropertyListString(): string
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static quote(arg0: java.lang.String | string): string
            public static unquote(arg0: java.lang.String | string): string
            public apply(arg0: javax.management.ObjectName): boolean
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public compareTo(arg0: javax.management.ObjectName): int
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
        class OperationsException extends javax.management.JMException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class OrQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp)
            public getLeftExp(): javax.management.QueryExp
            public getRightExp(): javax.management.QueryExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
        interface PersistentMBean {
            load(): void
            store(): void
        }
        class QualifiedAttributeValueExp extends javax.management.AttributeValueExp {
            public constructor()
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public getAttrClassName(): string
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class Query {
            public static GT: int
            public static LT: int
            public static GE: int
            public static LE: int
            public static EQ: int
            public static PLUS: int
            public static MINUS: int
            public static TIMES: int
            public static DIV: int
            public constructor()
            public static and(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp): javax.management.QueryExp
            public static or(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp): javax.management.QueryExp
            public static gt(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static geq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static leq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static lt(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static eq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static between(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp): javax.management.QueryExp
            public static match(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static attr(arg0: java.lang.String | string): javax.management.AttributeValueExp
            public static attr(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.AttributeValueExp
            public static classattr(): javax.management.AttributeValueExp
            public static not(arg0: javax.management.QueryExp): javax.management.QueryExp
            public static in(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp[]): javax.management.QueryExp
            public static value(arg0: java.lang.String | string): javax.management.StringValueExp
            public static value(arg0: java.lang.Number): javax.management.ValueExp
            public static value(arg0: int): javax.management.ValueExp
            public static value(arg0: long): javax.management.ValueExp
            public static value(arg0: float): javax.management.ValueExp
            public static value(arg0: double): javax.management.ValueExp
            public static value(arg0: boolean): javax.management.ValueExp
            public static plus(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static times(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static minus(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static div(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static initialSubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static anySubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static finalSubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static isInstanceOf(arg0: javax.management.StringValueExp): javax.management.QueryExp
            public static class: java.lang.Class<any>
        }
        abstract class QueryEval implements java.io.Serializable {
            public constructor()
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static getMBeanServer(): javax.management.MBeanServer
            public static class: java.lang.Class<any>
        }
        interface QueryExp extends java.io.Serializable {
            apply(arg0: javax.management.ObjectName): boolean
            setMBeanServer(arg0: javax.management.MBeanServer): void
        }
        class ReflectionException extends javax.management.JMException {
            public constructor(arg0: java.lang.Exception)
            public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
            public getTargetException(): java.lang.Exception
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class RuntimeErrorException extends javax.management.JMRuntimeException {
            public constructor(arg0: java.lang.Error)
            public constructor(arg0: java.lang.Error, arg1: java.lang.String | string)
            public getTargetError(): java.lang.Error
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class RuntimeMBeanException extends javax.management.JMRuntimeException {
            public constructor(arg0: java.lang.RuntimeException)
            public constructor(arg0: java.lang.RuntimeException, arg1: java.lang.String | string)
            public getTargetException(): java.lang.RuntimeException
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class RuntimeOperationsException extends javax.management.JMRuntimeException {
            public constructor(arg0: java.lang.RuntimeException)
            public constructor(arg0: java.lang.RuntimeException, arg1: java.lang.String | string)
            public getTargetException(): java.lang.RuntimeException
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class ServiceNotFoundException extends javax.management.OperationsException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class StandardEmitterMBean extends javax.management.StandardMBean implements javax.management.NotificationEmitter {
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: javax.management.NotificationEmitter)
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean, arg3: javax.management.NotificationEmitter)
            protected constructor(arg0: java.lang.Class<any>, arg1: javax.management.NotificationEmitter)
            protected constructor(arg0: java.lang.Class<any>, arg1: boolean, arg2: javax.management.NotificationEmitter)
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener): void
            public removeNotificationListener<T>(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public addNotificationListener<T>(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public getNotificationInfo<T>(): javax.management.MBeanNotificationInfo[]
            public sendNotification<T>(arg0: javax.management.Notification): void
            public static class: java.lang.Class<any>
        }
        class StandardMBean implements javax.management.DynamicMBean , javax.management.MBeanRegistration {
            public constructor(arg0: T, arg1: java.lang.Class<T>)
            protected constructor(arg0: java.lang.Class<any>)
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean)
            protected constructor(arg0: java.lang.Class<any>, arg1: boolean)
            public setImplementation<T>(arg0: java.lang.Object): void
            public getImplementation<T>(): java.lang.Object
            public getMBeanInterface<T>(): java.lang.Class<any>
            public getImplementationClass<T>(): java.lang.Class<any>
            public getAttribute<T>(arg0: java.lang.String | string): java.lang.Object
            public setAttribute<T>(arg0: javax.management.Attribute): void
            public getAttributes<T>(arg0: java.lang.String[]): javax.management.AttributeList
            public setAttributes<T>(arg0: javax.management.AttributeList): javax.management.AttributeList
            public invoke<T>(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            public getMBeanInfo<T>(): javax.management.MBeanInfo
            protected getClassName<T>(arg0: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): string
            protected getDescription<T>(arg0: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): string
            protected getDescription<T>(arg0: javax.management.MBeanFeatureInfo | javax.management.MBeanFeatureInfo$$Lambda): string
            protected getDescription<T>(arg0: javax.management.MBeanAttributeInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanConstructorInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getParameterName<T>(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getDescription<T>(arg0: javax.management.MBeanOperationInfo): string
            protected getImpact<T>(arg0: javax.management.MBeanOperationInfo): int
            protected getParameterName<T>(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getDescription<T>(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getConstructors<T>(arg0: javax.management.MBeanConstructorInfo[], arg1: java.lang.Object): javax.management.MBeanConstructorInfo[]
            protected getCachedMBeanInfo<T>(): javax.management.MBeanInfo
            protected cacheMBeanInfo<T>(arg0: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): void
            public preRegister<T>(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
            public postRegister<T>(arg0: java.lang.Boolean | boolean): void
            public preDeregister<T>(): void
            public postDeregister<T>(): void
            public static class: java.lang.Class<any>
        }
        class StringValueExp implements javax.management.ValueExp {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public getValue(): string
            public toString(): string
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public static class: java.lang.Class<any>
        }
        interface ValueExp extends java.io.Serializable {
            apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            setMBeanServer(arg0: javax.management.MBeanServer): void
        }
        namespace loading {
            interface ClassLoaderRepository {
                loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                loadClassBefore(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
            }
            class DefaultLoaderRepository {
                public constructor()
                public static loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                public static loadClassWithout(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Class<any>
                public static class: java.lang.Class<any>
            }
            class MLet extends java.net.URLClassLoader implements javax.management.loading.MLetMBean , javax.management.MBeanRegistration , java.io.Externalizable {
                public constructor()
                public constructor(arg0: java.net.URL[])
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader)
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$Lambda)
                public constructor(arg0: java.net.URL[], arg1: boolean)
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: boolean)
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$Lambda, arg3: boolean)
                public addURL(arg0: java.net.URL): void
                public addURL(arg0: java.lang.String | string): void
                public getURLs(): java.net.URL[]
                public getMBeansFromURL(arg0: java.net.URL): java.util.Set<java.lang.Object>
                public getMBeansFromURL(arg0: java.lang.String | string): java.util.Set<java.lang.Object>
                public getLibraryDirectory(): string
                public setLibraryDirectory(arg0: java.lang.String | string): void
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public loadClass(arg0: java.lang.String | string, arg1: javax.management.loading.ClassLoaderRepository): java.lang.Class<any>
                protected findClass(arg0: java.lang.String | string): java.lang.Class<any>
                protected findLibrary(arg0: java.lang.String | string): string
                protected check(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.lang.String | string, arg3: javax.management.loading.MLetContent): java.net.URL
                public static class: java.lang.Class<any>
            }
            class MLetContent {
                public constructor(arg0: java.net.URL, arg1: java.util.Map<java.lang.String, java.lang.String>, arg2: java.util.List<java.lang.String>, arg3: java.util.List<java.lang.String>)
                public getAttributes(): java.util.Map<java.lang.String, java.lang.String>
                public getDocumentBase(): java.net.URL
                public getCodeBase(): java.net.URL
                public getJarFiles(): string
                public getCode(): string
                public getSerializedObject(): string
                public getName(): string
                public getVersion(): string
                public getParameterTypes(): java.util.List<java.lang.String>
                public getParameterValues(): java.util.List<java.lang.String>
                public static class: java.lang.Class<any>
            }
            interface MLetMBean {
                getMBeansFromURL(arg0: java.lang.String | string): java.util.Set<java.lang.Object>
                getMBeansFromURL(arg0: java.net.URL): java.util.Set<java.lang.Object>
                addURL(arg0: java.net.URL): void
                addURL(arg0: java.lang.String | string): void
                getURLs(): java.net.URL[]
                getResource(arg0: java.lang.String | string): java.net.URL
                getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
                getResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
                getLibraryDirectory(): string
                setLibraryDirectory(arg0: java.lang.String | string): void
            }
            class MLetObjectInputStream extends java.io.ObjectInputStream {
                public constructor(arg0: java.io.InputStream, arg1: javax.management.loading.MLet)
                protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
                public getClassLoader(): java.lang.ClassLoader
                public static class: java.lang.Class<any>
            }
            class MLetParser {
                public constructor()
                public skipSpace(arg0: java.io.Reader): void
                public scanIdentifier(arg0: java.io.Reader): string
                public scanTag(arg0: java.io.Reader): java.util.Map<java.lang.String, java.lang.String>
                public parse(arg0: java.net.URL): java.util.List<javax.management.loading.MLetContent>
                public parseURL(arg0: java.lang.String | string): java.util.List<javax.management.loading.MLetContent>
                public static class: java.lang.Class<any>
            }
            interface PrivateClassLoader {
            }
            class PrivateMLet extends javax.management.loading.MLet implements javax.management.loading.PrivateClassLoader {
                public constructor(arg0: java.net.URL[], arg1: boolean)
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: boolean)
                public constructor(arg0: java.net.URL[], arg1: java.lang.ClassLoader, arg2: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$Lambda, arg3: boolean)
                public static class: java.lang.Class<any>
            }
        }
        namespace modelmbean {
            class DescriptorSupport implements javax.management.Descriptor {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: javax.management.modelmbean.DescriptorSupport)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String[], arg1: java.lang.Object[])
                public constructor(...arg0: java.lang.String[])
                public getFieldValue(arg0: java.lang.String | string): java.lang.Object
                public setField(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getFields(): java.lang.String[]
                public getFieldNames(): java.lang.String[]
                public getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
                public setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
                public clone(): java.lang.Object
                public removeField(arg0: java.lang.String | string): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public isValid(): boolean
                public toXMLString(): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class InvalidTargetObjectTypeException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface ModelMBean extends javax.management.DynamicMBean , javax.management.PersistentMBean , javax.management.modelmbean.ModelMBeanNotificationBroadcaster {
                setModelMBeanInfo(arg0: javax.management.modelmbean.ModelMBeanInfo): void
                setManagedResource(arg0: java.lang.Object, arg1: java.lang.String | string): void
            }
            class ModelMBeanAttributeInfo extends javax.management.MBeanAttributeInfo implements javax.management.DescriptorAccess {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method, arg4: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
                public constructor(arg0: javax.management.modelmbean.ModelMBeanAttributeInfo)
                public getDescriptor(): javax.management.Descriptor
                public setDescriptor(arg0: javax.management.Descriptor): void
                public clone(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class ModelMBeanConstructorInfo extends javax.management.MBeanConstructorInfo implements javax.management.DescriptorAccess {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>, arg2: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
                public clone(): java.lang.Object
                public getDescriptor(): javax.management.Descriptor
                public setDescriptor(arg0: javax.management.Descriptor): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface ModelMBeanInfo {
                getDescriptors(arg0: java.lang.String | string): javax.management.Descriptor[]
                setDescriptors(arg0: javax.management.Descriptor[]): void
                getDescriptor(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.Descriptor
                setDescriptor(arg0: javax.management.Descriptor, arg1: java.lang.String | string): void
                getMBeanDescriptor(): javax.management.Descriptor
                setMBeanDescriptor(arg0: javax.management.Descriptor): void
                getAttribute(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo
                getOperation(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
                getNotification(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo
                clone(): java.lang.Object
                getAttributes(): javax.management.MBeanAttributeInfo[]
                getClassName(): string
                getConstructors(): javax.management.MBeanConstructorInfo[]
                getDescription(): string
                getNotifications(): javax.management.MBeanNotificationInfo[]
                getOperations(): javax.management.MBeanOperationInfo[]
            }
            class ModelMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.modelmbean.ModelMBeanInfo {
                public constructor(arg0: javax.management.modelmbean.ModelMBeanInfo)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.modelmbean.ModelMBeanAttributeInfo[], arg3: javax.management.modelmbean.ModelMBeanConstructorInfo[], arg4: javax.management.modelmbean.ModelMBeanOperationInfo[], arg5: javax.management.modelmbean.ModelMBeanNotificationInfo[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.modelmbean.ModelMBeanAttributeInfo[], arg3: javax.management.modelmbean.ModelMBeanConstructorInfo[], arg4: javax.management.modelmbean.ModelMBeanOperationInfo[], arg5: javax.management.modelmbean.ModelMBeanNotificationInfo[], arg6: javax.management.Descriptor)
                public clone(): java.lang.Object
                public getDescriptors(arg0: java.lang.String | string): javax.management.Descriptor[]
                public setDescriptors(arg0: javax.management.Descriptor[]): void
                public getDescriptor(arg0: java.lang.String | string): javax.management.Descriptor
                public getDescriptor(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.Descriptor
                public setDescriptor(arg0: javax.management.Descriptor, arg1: java.lang.String | string): void
                public getAttribute(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo
                public getOperation(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
                public getConstructor(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanConstructorInfo
                public getNotification(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo
                public getDescriptor(): javax.management.Descriptor
                public getMBeanDescriptor(): javax.management.Descriptor
                public setMBeanDescriptor(arg0: javax.management.Descriptor): void
                public static class: java.lang.Class<any>
            }
            interface ModelMBeanNotificationBroadcaster extends javax.management.NotificationBroadcaster {
                sendNotification(arg0: javax.management.Notification): void
                sendNotification(arg0: java.lang.String | string): void
                sendAttributeChangeNotification(arg0: javax.management.AttributeChangeNotification): void
                sendAttributeChangeNotification(arg0: javax.management.Attribute, arg1: javax.management.Attribute): void
                addAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string, arg2: java.lang.Object): void
                removeAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string): void
            }
            class ModelMBeanNotificationInfo extends javax.management.MBeanNotificationInfo implements javax.management.DescriptorAccess {
                public constructor(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string)
                public constructor(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.management.Descriptor)
                public constructor(arg0: javax.management.modelmbean.ModelMBeanNotificationInfo)
                public clone(): java.lang.Object
                public getDescriptor(): javax.management.Descriptor
                public setDescriptor(arg0: javax.management.Descriptor): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class ModelMBeanOperationInfo extends javax.management.MBeanOperationInfo implements javax.management.DescriptorAccess {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method, arg2: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int, arg5: javax.management.Descriptor)
                public constructor(arg0: javax.management.modelmbean.ModelMBeanOperationInfo)
                public clone(): java.lang.Object
                public getDescriptor(): javax.management.Descriptor
                public setDescriptor(arg0: javax.management.Descriptor): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class RequiredModelMBean implements javax.management.modelmbean.ModelMBean , javax.management.MBeanRegistration , javax.management.NotificationEmitter {
                public constructor()
                public constructor(arg0: javax.management.modelmbean.ModelMBeanInfo)
                public setModelMBeanInfo(arg0: javax.management.modelmbean.ModelMBeanInfo): void
                public setManagedResource(arg0: java.lang.Object, arg1: java.lang.String | string): void
                public load(): void
                public store(): void
                public getMBeanInfo(): javax.management.MBeanInfo
                public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
                public setAttribute(arg0: javax.management.Attribute): void
                public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
                public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                public removeNotificationListener(arg0: javax.management.NotificationListener): void
                public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                public sendNotification(arg0: javax.management.Notification): void
                public sendNotification(arg0: java.lang.String | string): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public addAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string, arg2: java.lang.Object): void
                public removeAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string): void
                public sendAttributeChangeNotification(arg0: javax.management.AttributeChangeNotification): void
                public sendAttributeChangeNotification(arg0: javax.management.Attribute, arg1: javax.management.Attribute): void
                protected getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public static class: java.lang.Class<any>
            }
            class XMLParseException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
        }
        namespace monitor {
            class CounterMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.CounterMonitorMBean {
                public constructor()
                public start(): void
                public stop(): void
                public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
                public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                public getThreshold(arg0: javax.management.ObjectName): java.lang.Number
                public getInitThreshold(): java.lang.Number
                public setInitThreshold(arg0: java.lang.Number): void
                public getDerivedGauge(): java.lang.Number
                public getDerivedGaugeTimeStamp(): long
                public getThreshold(): java.lang.Number
                public setThreshold(arg0: java.lang.Number): void
                public getOffset(): java.lang.Number
                public setOffset(arg0: java.lang.Number): void
                public getModulus(): java.lang.Number
                public setModulus(arg0: java.lang.Number): void
                public getNotify(): boolean
                public setNotify(arg0: boolean): void
                public getDifferenceMode(): boolean
                public setDifferenceMode(arg0: boolean): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
                public static class: java.lang.Class<any>
            }
            interface CounterMonitorMBean extends javax.management.monitor.MonitorMBean {
                getDerivedGauge(): java.lang.Number
                getDerivedGaugeTimeStamp(): long
                getThreshold(): java.lang.Number
                setThreshold(arg0: java.lang.Number): void
                getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
                getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                getThreshold(arg0: javax.management.ObjectName): java.lang.Number
                getInitThreshold(): java.lang.Number
                setInitThreshold(arg0: java.lang.Number): void
                getOffset(): java.lang.Number
                setOffset(arg0: java.lang.Number): void
                getModulus(): java.lang.Number
                setModulus(arg0: java.lang.Number): void
                getNotify(): boolean
                setNotify(arg0: boolean): void
                getDifferenceMode(): boolean
                setDifferenceMode(arg0: boolean): void
            }
            class GaugeMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.GaugeMonitorMBean {
                public constructor()
                public start(): void
                public stop(): void
                public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
                public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                public getDerivedGauge(): java.lang.Number
                public getDerivedGaugeTimeStamp(): long
                public getHighThreshold(): java.lang.Number
                public getLowThreshold(): java.lang.Number
                public setThresholds(arg0: java.lang.Number, arg1: java.lang.Number): void
                public getNotifyHigh(): boolean
                public setNotifyHigh(arg0: boolean): void
                public getNotifyLow(): boolean
                public setNotifyLow(arg0: boolean): void
                public getDifferenceMode(): boolean
                public setDifferenceMode(arg0: boolean): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
                public static class: java.lang.Class<any>
            }
            interface GaugeMonitorMBean extends javax.management.monitor.MonitorMBean {
                getDerivedGauge(): java.lang.Number
                getDerivedGaugeTimeStamp(): long
                getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
                getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                getHighThreshold(): java.lang.Number
                getLowThreshold(): java.lang.Number
                setThresholds(arg0: java.lang.Number, arg1: java.lang.Number): void
                getNotifyHigh(): boolean
                setNotifyHigh(arg0: boolean): void
                getNotifyLow(): boolean
                setNotifyLow(arg0: boolean): void
                getDifferenceMode(): boolean
                setDifferenceMode(arg0: boolean): void
            }
            abstract class Monitor extends javax.management.NotificationBroadcasterSupport implements javax.management.monitor.MonitorMBean , javax.management.MBeanRegistration {
                protected static capacityIncrement: int
                protected elementCount: int
                protected alreadyNotified: int
                protected alreadyNotifieds: int[]
                protected server: javax.management.MBeanServer
                protected static RESET_FLAGS_ALREADY_NOTIFIED: int
                protected static OBSERVED_OBJECT_ERROR_NOTIFIED: int
                protected static OBSERVED_ATTRIBUTE_ERROR_NOTIFIED: int
                protected static OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED: int
                protected static RUNTIME_ERROR_NOTIFIED: int
                protected dbgTag: string
                public constructor()
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public start(): void
                public stop(): void
                public getObservedObject(): javax.management.ObjectName
                public setObservedObject(arg0: javax.management.ObjectName): void
                public addObservedObject(arg0: javax.management.ObjectName): void
                public removeObservedObject(arg0: javax.management.ObjectName): void
                public containsObservedObject(arg0: javax.management.ObjectName): boolean
                public getObservedObjects(): javax.management.ObjectName[]
                public getObservedAttribute(): string
                public setObservedAttribute(arg0: java.lang.String | string): void
                public getGranularityPeriod(): long
                public setGranularityPeriod(arg0: long): void
                public isActive(): boolean
                public static class: java.lang.Class<any>
            }
            interface MonitorMBean {
                start(): void
                stop(): void
                addObservedObject(arg0: javax.management.ObjectName): void
                removeObservedObject(arg0: javax.management.ObjectName): void
                containsObservedObject(arg0: javax.management.ObjectName): boolean
                getObservedObjects(): javax.management.ObjectName[]
                getObservedObject(): javax.management.ObjectName
                setObservedObject(arg0: javax.management.ObjectName): void
                getObservedAttribute(): string
                setObservedAttribute(arg0: java.lang.String | string): void
                getGranularityPeriod(): long
                setGranularityPeriod(arg0: long): void
                isActive(): boolean
            }
            class MonitorNotification extends javax.management.Notification {
                public static OBSERVED_OBJECT_ERROR: string
                public static OBSERVED_ATTRIBUTE_ERROR: string
                public static OBSERVED_ATTRIBUTE_TYPE_ERROR: string
                public static THRESHOLD_ERROR: string
                public static RUNTIME_ERROR: string
                public static THRESHOLD_VALUE_EXCEEDED: string
                public static THRESHOLD_HIGH_VALUE_EXCEEDED: string
                public static THRESHOLD_LOW_VALUE_EXCEEDED: string
                public static STRING_TO_COMPARE_VALUE_MATCHED: string
                public static STRING_TO_COMPARE_VALUE_DIFFERED: string
                public getObservedObject(): javax.management.ObjectName
                public getObservedAttribute(): string
                public getDerivedGauge(): java.lang.Object
                public getTrigger(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class MonitorSettingException extends javax.management.JMRuntimeException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class StringMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.StringMonitorMBean {
                public constructor()
                public start(): void
                public stop(): void
                public getDerivedGauge(arg0: javax.management.ObjectName): string
                public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                public getDerivedGauge(): string
                public getDerivedGaugeTimeStamp(): long
                public getStringToCompare(): string
                public setStringToCompare(arg0: java.lang.String | string): void
                public getNotifyMatch(): boolean
                public setNotifyMatch(arg0: boolean): void
                public getNotifyDiffer(): boolean
                public setNotifyDiffer(arg0: boolean): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
                public static class: java.lang.Class<any>
            }
            interface StringMonitorMBean extends javax.management.monitor.MonitorMBean {
                getDerivedGauge(): string
                getDerivedGaugeTimeStamp(): long
                getDerivedGauge(arg0: javax.management.ObjectName): string
                getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                getStringToCompare(): string
                setStringToCompare(arg0: java.lang.String | string): void
                getNotifyMatch(): boolean
                setNotifyMatch(arg0: boolean): void
                getNotifyDiffer(): boolean
                setNotifyDiffer(arg0: boolean): void
            }
        }
        namespace openmbean {
            class ArrayType<T> extends javax.management.openmbean.OpenType<T> {
                public constructor(arg0: int, arg1: javax.management.openmbean.OpenType<any>)
                public constructor(arg0: javax.management.openmbean.SimpleType<any>, arg1: boolean)
                public getDimension(): int
                public getElementOpenType(): javax.management.openmbean.OpenType<any>
                public isPrimitiveArray(): boolean
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static getArrayType<E>(arg0: javax.management.openmbean.OpenType<E>): javax.management.openmbean.ArrayType<E[]>
                public static getPrimitiveArrayType<T>(arg0: java.lang.Class<T>): javax.management.openmbean.ArrayType<T>
                public static class: java.lang.Class<any>
            }
            interface CompositeData {
                getCompositeType(): javax.management.openmbean.CompositeType
                get(arg0: java.lang.String | string): java.lang.Object
                getAll(arg0: java.lang.String[]): java.lang.Object[]
                containsKey(arg0: java.lang.String | string): boolean
                containsValue(arg0: java.lang.Object): boolean
                values(): java.util.Collection<any>
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class CompositeDataInvocationHandler implements java.lang.reflect.InvocationHandler {
                public constructor(arg0: javax.management.openmbean.CompositeData)
                public getCompositeData(): javax.management.openmbean.CompositeData
                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class CompositeDataInvocationHandler$$Lambda implements java.lang.reflect.InvocationHandler {
                public constructor(arg0: javax.management.openmbean.CompositeData)
            }
            class CompositeDataSupport implements javax.management.openmbean.CompositeData , java.io.Serializable {
                public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.lang.String[], arg2: java.lang.Object[])
                public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.util.Map<java.lang.String, any>)
                public getCompositeType(): javax.management.openmbean.CompositeType
                public get(arg0: java.lang.String | string): java.lang.Object
                public getAll(arg0: java.lang.String[]): java.lang.Object[]
                public containsKey(arg0: java.lang.String | string): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public values(): java.util.Collection<any>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface CompositeDataView {
                toCompositeData(arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
            }
            interface CompositeDataView$$Lambda {
                (arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
            }
            class CompositeType extends javax.management.openmbean.OpenType<javax.management.openmbean.CompositeData> {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: java.lang.String[], arg4: javax.management.openmbean.OpenType<any>[])
                public containsKey(arg0: java.lang.String | string): boolean
                public getDescription(arg0: java.lang.String | string): string
                public getType(arg0: java.lang.String | string): javax.management.openmbean.OpenType<any>
                public keySet(): java.util.Set<java.lang.String>
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class InvalidKeyException extends java.lang.IllegalArgumentException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidOpenTypeException extends java.lang.IllegalArgumentException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class KeyAlreadyExistsException extends java.lang.IllegalArgumentException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class OpenDataException extends javax.management.JMException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface OpenMBeanAttributeInfo extends javax.management.openmbean.OpenMBeanParameterInfo {
                isReadable(): boolean
                isWritable(): boolean
                isIs(): boolean
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class OpenMBeanAttributeInfoSupport extends javax.management.MBeanAttributeInfo implements javax.management.openmbean.OpenMBeanAttributeInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: T[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg8: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>)
                public getOpenType<T>(): javax.management.openmbean.OpenType<any>
                public getDefaultValue<T>(): java.lang.Object
                public getLegalValues<T>(): java.util.Set<any>
                public getMinValue<T>(): java.lang.Comparable<any>
                public getMaxValue<T>(): java.lang.Comparable<any>
                public hasDefaultValue<T>(): boolean
                public hasLegalValues<T>(): boolean
                public hasMinValue<T>(): boolean
                public hasMaxValue<T>(): boolean
                public isValue<T>(arg0: java.lang.Object): boolean
                public equals<T>(arg0: java.lang.Object): boolean
                public hashCode<T>(): int
                public toString<T>(): string
                public static class: java.lang.Class<any>
            }
            interface OpenMBeanConstructorInfo {
                getDescription(): string
                getName(): string
                getSignature(): javax.management.MBeanParameterInfo[]
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class OpenMBeanConstructorInfoSupport extends javax.management.MBeanConstructorInfo implements javax.management.openmbean.OpenMBeanConstructorInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.Descriptor)
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface OpenMBeanInfo {
                getClassName(): string
                getDescription(): string
                getAttributes(): javax.management.MBeanAttributeInfo[]
                getOperations(): javax.management.MBeanOperationInfo[]
                getConstructors(): javax.management.MBeanConstructorInfo[]
                getNotifications(): javax.management.MBeanNotificationInfo[]
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class OpenMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.openmbean.OpenMBeanInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanAttributeInfo[], arg3: javax.management.openmbean.OpenMBeanConstructorInfo[], arg4: javax.management.openmbean.OpenMBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanAttributeInfo[], arg3: javax.management.openmbean.OpenMBeanConstructorInfo[], arg4: javax.management.openmbean.OpenMBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[], arg6: javax.management.Descriptor)
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface OpenMBeanOperationInfo {
                getDescription(): string
                getName(): string
                getSignature(): javax.management.MBeanParameterInfo[]
                getImpact(): int
                getReturnType(): string
                getReturnOpenType(): javax.management.openmbean.OpenType<any>
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class OpenMBeanOperationInfoSupport extends javax.management.MBeanOperationInfo implements javax.management.openmbean.OpenMBeanOperationInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<any>, arg4: int)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<any>, arg4: int, arg5: javax.management.Descriptor)
                public getReturnOpenType(): javax.management.openmbean.OpenType<any>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface OpenMBeanParameterInfo {
                getDescription(): string
                getName(): string
                getOpenType(): javax.management.openmbean.OpenType<any>
                getDefaultValue(): java.lang.Object
                getLegalValues(): java.util.Set<any>
                getMinValue(): java.lang.Comparable<any>
                getMaxValue(): java.lang.Comparable<any>
                hasDefaultValue(): boolean
                hasLegalValues(): boolean
                hasMinValue(): boolean
                hasMaxValue(): boolean
                isValue(arg0: java.lang.Object): boolean
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class OpenMBeanParameterInfoSupport extends javax.management.MBeanParameterInfo implements javax.management.openmbean.OpenMBeanParameterInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: T[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg5: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>)
                public getOpenType<T>(): javax.management.openmbean.OpenType<any>
                public getDefaultValue<T>(): java.lang.Object
                public getLegalValues<T>(): java.util.Set<any>
                public getMinValue<T>(): java.lang.Comparable<any>
                public getMaxValue<T>(): java.lang.Comparable<any>
                public hasDefaultValue<T>(): boolean
                public hasLegalValues<T>(): boolean
                public hasMinValue<T>(): boolean
                public hasMaxValue<T>(): boolean
                public isValue<T>(arg0: java.lang.Object): boolean
                public equals<T>(arg0: java.lang.Object): boolean
                public hashCode<T>(): int
                public toString<T>(): string
                public static class: java.lang.Class<any>
            }
            abstract class OpenType<T> implements java.io.Serializable {
                public static ALLOWED_CLASSNAMES_LIST: java.util.List<java.lang.String>
                public static ALLOWED_CLASSNAMES: java.lang.String[]
                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getClassName(): string
                public getTypeName(): string
                public getDescription(): string
                public isArray(): boolean
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SimpleType<T> extends javax.management.openmbean.OpenType<T> {
                public static VOID: javax.management.openmbean.SimpleType<java.lang.Void>
                public static BOOLEAN: javax.management.openmbean.SimpleType<java.lang.Boolean>
                public static CHARACTER: javax.management.openmbean.SimpleType<java.lang.Character>
                public static BYTE: javax.management.openmbean.SimpleType<java.lang.Byte>
                public static SHORT: javax.management.openmbean.SimpleType<java.lang.Short>
                public static INTEGER: javax.management.openmbean.SimpleType<java.lang.Integer>
                public static LONG: javax.management.openmbean.SimpleType<java.lang.Long>
                public static FLOAT: javax.management.openmbean.SimpleType<java.lang.Float>
                public static DOUBLE: javax.management.openmbean.SimpleType<java.lang.Double>
                public static STRING: javax.management.openmbean.SimpleType<java.lang.String>
                public static BIGDECIMAL: javax.management.openmbean.SimpleType<java.math.BigDecimal>
                public static BIGINTEGER: javax.management.openmbean.SimpleType<java.math.BigInteger>
                public static DATE: javax.management.openmbean.SimpleType<java.util.Date>
                public static OBJECTNAME: javax.management.openmbean.SimpleType<javax.management.ObjectName>
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public readResolve(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            interface TabularData {
                getTabularType(): javax.management.openmbean.TabularType
                calculateIndex(arg0: javax.management.openmbean.CompositeData): java.lang.Object[]
                size(): int
                isEmpty(): boolean
                containsKey(arg0: java.lang.Object[]): boolean
                containsValue(arg0: javax.management.openmbean.CompositeData): boolean
                get(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
                put(arg0: javax.management.openmbean.CompositeData): void
                remove(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
                putAll(arg0: javax.management.openmbean.CompositeData[]): void
                clear(): void
                keySet(): java.util.Set<any>
                values(): java.util.Collection<any>
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
            class TabularDataSupport implements javax.management.openmbean.TabularData , java.util.Map<java.lang.Object, java.lang.Object> , java.lang.Cloneable , java.io.Serializable {
                public constructor(arg0: javax.management.openmbean.TabularType)
                public constructor(arg0: javax.management.openmbean.TabularType, arg1: int, arg2: float)
                public getTabularType(): javax.management.openmbean.TabularType
                public calculateIndex(arg0: javax.management.openmbean.CompositeData): java.lang.Object[]
                public containsKey(arg0: java.lang.Object): boolean
                public containsKey(arg0: java.lang.Object[]): boolean
                public containsValue(arg0: javax.management.openmbean.CompositeData): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public get(arg0: java.lang.Object): java.lang.Object
                public get(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
                public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                public put(arg0: javax.management.openmbean.CompositeData): void
                public remove(arg0: java.lang.Object): java.lang.Object
                public remove(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
                public putAll(arg0: java.util.Map<any, any>): void
                public putAll(arg0: javax.management.openmbean.CompositeData[]): void
                public clear(): void
                public size(): int
                public isEmpty(): boolean
                public keySet(): java.util.Set<java.lang.Object>
                public values(): java.util.Collection<java.lang.Object>
                public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class TabularType extends javax.management.openmbean.OpenType<javax.management.openmbean.TabularData> {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.CompositeType, arg3: java.lang.String[])
                public getRowType(): javax.management.openmbean.CompositeType
                public getIndexNames(): java.util.List<java.lang.String>
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
        namespace relation {
            class InvalidRelationIdException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidRelationServiceException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidRelationTypeException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidRoleInfoException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidRoleValueException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class MBeanServerNotificationFilter extends javax.management.NotificationFilterSupport {
                public constructor()
                public disableAllObjectNames(): void
                public disableObjectName(arg0: javax.management.ObjectName): void
                public enableAllObjectNames(): void
                public enableObjectName(arg0: javax.management.ObjectName): void
                public getEnabledObjectNames(): java.util.Vector<javax.management.ObjectName>
                public getDisabledObjectNames(): java.util.Vector<javax.management.ObjectName>
                public isNotificationEnabled(arg0: javax.management.Notification): boolean
                public static class: java.lang.Class<any>
            }
            interface Relation {
                getRole(arg0: java.lang.String | string): java.util.List<javax.management.ObjectName>
                getRoles(arg0: java.lang.String[]): javax.management.relation.RoleResult
                getRoleCardinality(arg0: java.lang.String | string): java.lang.Integer
                getAllRoles(): javax.management.relation.RoleResult
                retrieveAllRoles(): javax.management.relation.RoleList
                setRole(arg0: javax.management.relation.Role): void
                setRoles(arg0: javax.management.relation.RoleList): javax.management.relation.RoleResult
                handleMBeanUnregistration(arg0: javax.management.ObjectName, arg1: java.lang.String | string): void
                getReferencedMBeans(): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                getRelationTypeName(): string
                getRelationServiceName(): javax.management.ObjectName
                getRelationId(): string
            }
            class RelationException extends javax.management.JMException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RelationNotFoundException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RelationNotification extends javax.management.Notification {
                public static RELATION_BASIC_CREATION: string
                public static RELATION_MBEAN_CREATION: string
                public static RELATION_BASIC_UPDATE: string
                public static RELATION_MBEAN_UPDATE: string
                public static RELATION_BASIC_REMOVAL: string
                public static RELATION_MBEAN_REMOVAL: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: javax.management.ObjectName, arg8: java.util.List<javax.management.ObjectName>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: javax.management.ObjectName, arg8: java.lang.String | string, arg9: java.util.List<javax.management.ObjectName>, arg10: java.util.List<javax.management.ObjectName>)
                public getRelationId(): string
                public getRelationTypeName(): string
                public getObjectName(): javax.management.ObjectName
                public getMBeansToUnregister(): java.util.List<javax.management.ObjectName>
                public getRoleName(): string
                public getOldRoleValue(): java.util.List<javax.management.ObjectName>
                public getNewRoleValue(): java.util.List<javax.management.ObjectName>
                public static class: java.lang.Class<any>
            }
            class RelationService extends javax.management.NotificationBroadcasterSupport implements javax.management.relation.RelationServiceMBean , javax.management.MBeanRegistration , javax.management.NotificationListener {
                public constructor(arg0: boolean)
                public isActive(): void
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public getPurgeFlag(): boolean
                public setPurgeFlag(arg0: boolean): void
                public createRelationType(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[]): void
                public addRelationType(arg0: javax.management.relation.RelationType): void
                public getAllRelationTypeNames(): java.util.List<java.lang.String>
                public getRoleInfos(arg0: java.lang.String | string): java.util.List<javax.management.relation.RoleInfo>
                public getRoleInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.relation.RoleInfo
                public removeRelationType(arg0: java.lang.String | string): void
                public createRelation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.relation.RoleList): void
                public addRelation(arg0: javax.management.ObjectName): void
                public isRelationMBean(arg0: java.lang.String | string): javax.management.ObjectName
                public isRelation(arg0: javax.management.ObjectName): string
                public hasRelation(arg0: java.lang.String | string): boolean
                public getAllRelationIds(): java.util.List<java.lang.String>
                public checkRoleReading(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                public checkRoleWriting(arg0: javax.management.relation.Role, arg1: java.lang.String | string, arg2: java.lang.Boolean | boolean): java.lang.Integer
                public sendRelationCreationNotification(arg0: java.lang.String | string): void
                public sendRoleUpdateNotification(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                public sendRelationRemovalNotification(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>): void
                public updateRoleMap(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                public removeRelation(arg0: java.lang.String | string): void
                public purgeRelations(): void
                public findReferencingRelations(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                public findAssociatedMBeans(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                public findRelationsOfType(arg0: java.lang.String | string): java.util.List<java.lang.String>
                public getRole(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<javax.management.ObjectName>
                public getRoles(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.management.relation.RoleResult
                public getAllRoles(arg0: java.lang.String | string): javax.management.relation.RoleResult
                public getRoleCardinality(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                public setRole(arg0: java.lang.String | string, arg1: javax.management.relation.Role): void
                public setRoles(arg0: java.lang.String | string, arg1: javax.management.relation.RoleList): javax.management.relation.RoleResult
                public getReferencedMBeans(arg0: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                public getRelationTypeName(arg0: java.lang.String | string): string
                public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public static class: java.lang.Class<any>
            }
            interface RelationServiceMBean {
                isActive(): void
                getPurgeFlag(): boolean
                setPurgeFlag(arg0: boolean): void
                createRelationType(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[]): void
                addRelationType(arg0: javax.management.relation.RelationType): void
                getAllRelationTypeNames(): java.util.List<java.lang.String>
                getRoleInfos(arg0: java.lang.String | string): java.util.List<javax.management.relation.RoleInfo>
                getRoleInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.relation.RoleInfo
                removeRelationType(arg0: java.lang.String | string): void
                createRelation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.relation.RoleList): void
                addRelation(arg0: javax.management.ObjectName): void
                isRelationMBean(arg0: java.lang.String | string): javax.management.ObjectName
                isRelation(arg0: javax.management.ObjectName): string
                hasRelation(arg0: java.lang.String | string): boolean
                getAllRelationIds(): java.util.List<java.lang.String>
                checkRoleReading(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                checkRoleWriting(arg0: javax.management.relation.Role, arg1: java.lang.String | string, arg2: java.lang.Boolean | boolean): java.lang.Integer
                sendRelationCreationNotification(arg0: java.lang.String | string): void
                sendRoleUpdateNotification(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                sendRelationRemovalNotification(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>): void
                updateRoleMap(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                removeRelation(arg0: java.lang.String | string): void
                purgeRelations(): void
                findReferencingRelations(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                findAssociatedMBeans(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                findRelationsOfType(arg0: java.lang.String | string): java.util.List<java.lang.String>
                getRole(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<javax.management.ObjectName>
                getRoles(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.management.relation.RoleResult
                getAllRoles(arg0: java.lang.String | string): javax.management.relation.RoleResult
                getRoleCardinality(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                setRole(arg0: java.lang.String | string, arg1: javax.management.relation.Role): void
                setRoles(arg0: java.lang.String | string, arg1: javax.management.relation.RoleList): javax.management.relation.RoleResult
                getReferencedMBeans(arg0: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                getRelationTypeName(arg0: java.lang.String | string): string
            }
            class RelationServiceNotRegisteredException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RelationSupport implements javax.management.relation.RelationSupportMBean , javax.management.MBeanRegistration {
                public constructor(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.lang.String | string, arg3: javax.management.relation.RoleList)
                public constructor(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.MBeanServer, arg3: java.lang.String | string, arg4: javax.management.relation.RoleList)
                public getRole(arg0: java.lang.String | string): java.util.List<javax.management.ObjectName>
                public getRoles(arg0: java.lang.String[]): javax.management.relation.RoleResult
                public getAllRoles(): javax.management.relation.RoleResult
                public retrieveAllRoles(): javax.management.relation.RoleList
                public getRoleCardinality(arg0: java.lang.String | string): java.lang.Integer
                public setRole(arg0: javax.management.relation.Role): void
                public setRoles(arg0: javax.management.relation.RoleList): javax.management.relation.RoleResult
                public handleMBeanUnregistration(arg0: javax.management.ObjectName, arg1: java.lang.String | string): void
                public getReferencedMBeans(): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                public getRelationTypeName(): string
                public getRelationServiceName(): javax.management.ObjectName
                public getRelationId(): string
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public isInRelationService(): boolean
                public setRelationServiceManagementFlag(arg0: java.lang.Boolean | boolean): void
                public static class: java.lang.Class<any>
            }
            interface RelationSupportMBean extends javax.management.relation.Relation {
                isInRelationService(): boolean
                setRelationServiceManagementFlag(arg0: java.lang.Boolean | boolean): void
            }
            interface RelationType extends java.io.Serializable {
                getRelationTypeName(): string
                getRoleInfos(): java.util.List<javax.management.relation.RoleInfo>
                getRoleInfo(arg0: java.lang.String | string): javax.management.relation.RoleInfo
            }
            class RelationTypeNotFoundException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RelationTypeSupport implements javax.management.relation.RelationType {
                public constructor(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[])
                protected constructor(arg0: java.lang.String | string)
                public getRelationTypeName(): string
                public getRoleInfos(): java.util.List<javax.management.relation.RoleInfo>
                public getRoleInfo(arg0: java.lang.String | string): javax.management.relation.RoleInfo
                protected addRoleInfo(arg0: javax.management.relation.RoleInfo): void
                public static class: java.lang.Class<any>
            }
            class Role implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>)
                public getRoleName(): string
                public getRoleValue(): java.util.List<javax.management.ObjectName>
                public setRoleName(arg0: java.lang.String | string): void
                public setRoleValue(arg0: java.util.List<javax.management.ObjectName>): void
                public toString(): string
                public clone(): java.lang.Object
                public static roleValueToString(arg0: java.util.List<javax.management.ObjectName>): string
                public static class: java.lang.Class<any>
            }
            class RoleInfo implements java.io.Serializable {
                public static ROLE_CARDINALITY_INFINITY: int
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean, arg4: int, arg5: int, arg6: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: javax.management.relation.RoleInfo)
                public getName(): string
                public isReadable(): boolean
                public isWritable(): boolean
                public getDescription(): string
                public getMinDegree(): int
                public getMaxDegree(): int
                public getRefMBeanClassName(): string
                public checkMinDegree(arg0: int): boolean
                public checkMaxDegree(arg0: int): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class RoleInfoNotFoundException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RoleList extends java.util.ArrayList<java.lang.Object> {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.List<javax.management.relation.Role>)
                public asList(): java.util.List<javax.management.relation.Role>
                public add(arg0: javax.management.relation.Role): void
                public add(arg0: int, arg1: javax.management.relation.Role): void
                public set(arg0: int, arg1: javax.management.relation.Role): void
                public addAll(arg0: javax.management.relation.RoleList): boolean
                public addAll(arg0: int, arg1: javax.management.relation.RoleList): boolean
                public add(arg0: java.lang.Object): boolean
                public add(arg0: int, arg1: java.lang.Object): void
                public addAll(arg0: java.util.Collection<any>): boolean
                public addAll(arg0: int, arg1: java.util.Collection<any>): boolean
                public set(arg0: int, arg1: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class RoleNotFoundException extends javax.management.relation.RelationException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RoleResult implements java.io.Serializable {
                public constructor(arg0: javax.management.relation.RoleList, arg1: javax.management.relation.RoleUnresolvedList)
                public getRoles(): javax.management.relation.RoleList
                public getRolesUnresolved(): javax.management.relation.RoleUnresolvedList
                public setRoles(arg0: javax.management.relation.RoleList): void
                public setRolesUnresolved(arg0: javax.management.relation.RoleUnresolvedList): void
                public static class: java.lang.Class<any>
            }
            class RoleStatus {
                public static NO_ROLE_WITH_NAME: int
                public static ROLE_NOT_READABLE: int
                public static ROLE_NOT_WRITABLE: int
                public static LESS_THAN_MIN_ROLE_DEGREE: int
                public static MORE_THAN_MAX_ROLE_DEGREE: int
                public static REF_MBEAN_OF_INCORRECT_CLASS: int
                public static REF_MBEAN_NOT_REGISTERED: int
                public constructor()
                public static isRoleStatus(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
            class RoleUnresolved implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>, arg2: int)
                public getRoleName(): string
                public getRoleValue(): java.util.List<javax.management.ObjectName>
                public getProblemType(): int
                public setRoleName(arg0: java.lang.String | string): void
                public setRoleValue(arg0: java.util.List<javax.management.ObjectName>): void
                public setProblemType(arg0: int): void
                public clone(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class RoleUnresolvedList extends java.util.ArrayList<java.lang.Object> {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.List<javax.management.relation.RoleUnresolved>)
                public asList(): java.util.List<javax.management.relation.RoleUnresolved>
                public add(arg0: javax.management.relation.RoleUnresolved): void
                public add(arg0: int, arg1: javax.management.relation.RoleUnresolved): void
                public set(arg0: int, arg1: javax.management.relation.RoleUnresolved): void
                public addAll(arg0: javax.management.relation.RoleUnresolvedList): boolean
                public addAll(arg0: int, arg1: javax.management.relation.RoleUnresolvedList): boolean
                public add(arg0: java.lang.Object): boolean
                public add(arg0: int, arg1: java.lang.Object): void
                public addAll(arg0: java.util.Collection<any>): boolean
                public addAll(arg0: int, arg1: java.util.Collection<any>): boolean
                public set(arg0: int, arg1: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
        namespace remote {
            interface JMXAddressable {
                getAddress(): javax.management.remote.JMXServiceURL
            }
            interface JMXAddressable$$Lambda {
                (): javax.management.remote.JMXServiceURL
            }
            interface JMXAuthenticator {
                authenticate(arg0: java.lang.Object): javax.security.auth.Subject
            }
            interface JMXAuthenticator$$Lambda {
                (arg0: java.lang.Object): javax.security.auth.Subject
            }
            class JMXConnectionNotification extends javax.management.Notification {
                public static OPENED: string
                public static CLOSED: string
                public static FAILED: string
                public static NOTIFS_LOST: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: long, arg4: java.lang.String | string, arg5: java.lang.Object)
                public getConnectionId(): string
                public static class: java.lang.Class<any>
            }
            interface JMXConnector extends java.io.Closeable {
                CREDENTIALS: string
                connect(): void
                connect(arg0: java.util.Map<java.lang.String, any>): void
                getMBeanServerConnection(): javax.management.MBeanServerConnection
                getMBeanServerConnection(arg0: javax.security.auth.Subject): javax.management.MBeanServerConnection
                close(): void
                addConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                removeConnectionNotificationListener(arg0: javax.management.NotificationListener): void
                removeConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                getConnectionId(): string
            }
            class JMXConnectorFactory {
                public static DEFAULT_CLASS_LOADER: string
                public static PROTOCOL_PROVIDER_PACKAGES: string
                public static PROTOCOL_PROVIDER_CLASS_LOADER: string
                public static connect(arg0: javax.management.remote.JMXServiceURL): javax.management.remote.JMXConnector
                public static connect(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                public static newJMXConnector(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                public static class: java.lang.Class<any>
            }
            interface JMXConnectorProvider {
                newJMXConnector(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
            }
            interface JMXConnectorProvider$$Lambda {
                (arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
            }
            abstract class JMXConnectorServer extends javax.management.NotificationBroadcasterSupport implements javax.management.remote.JMXConnectorServerMBean , javax.management.MBeanRegistration , javax.management.remote.JMXAddressable {
                public static AUTHENTICATOR: string
                public constructor()
                public constructor(arg0: javax.management.MBeanServer)
                public getMBeanServer(): javax.management.MBeanServer
                public setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
                public getConnectionIds(): java.lang.String[]
                public toJMXConnector(arg0: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                protected connectionOpened(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                protected connectionClosed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                protected connectionFailed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public static class: java.lang.Class<any>
            }
            abstract class JMXConnectorServer$$Lambda extends javax.management.NotificationBroadcasterSupport implements javax.management.remote.JMXConnectorServerMBean , javax.management.MBeanRegistration , javax.management.remote.JMXAddressable {
                public static AUTHENTICATOR: string
            }
            class JMXConnectorServerFactory {
                public static DEFAULT_CLASS_LOADER: string
                public static DEFAULT_CLASS_LOADER_NAME: string
                public static PROTOCOL_PROVIDER_PACKAGES: string
                public static PROTOCOL_PROVIDER_CLASS_LOADER: string
                public static newJMXConnectorServer(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
                public static class: java.lang.Class<any>
            }
            interface JMXConnectorServerMBean {
                start(): void
                stop(): void
                isActive(): boolean
                setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
                getConnectionIds(): java.lang.String[]
                getAddress(): javax.management.remote.JMXServiceURL
                getAttributes(): java.util.Map<java.lang.String, any>
                toJMXConnector(arg0: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
            }
            interface JMXConnectorServerProvider {
                newJMXConnectorServer(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
            }
            interface JMXConnectorServerProvider$$Lambda {
                (arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
            }
            class JMXPrincipal implements java.security.Principal , java.io.Serializable {
                public constructor(arg0: java.lang.String | string)
                public getName(): string
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class JMXProviderException extends java.io.IOException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public getCause(): java.lang.Throwable
                public static class: java.lang.Class<any>
            }
            class JMXServerErrorException extends java.io.IOException {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Error)
                public getCause(): java.lang.Throwable
                public static class: java.lang.Class<any>
            }
            class JMXServiceURL implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string)
                public getProtocol(): string
                public getHost(): string
                public getPort(): int
                public getURLPath(): string
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            interface MBeanServerForwarder extends javax.management.MBeanServer {
                getMBeanServer(): javax.management.MBeanServer
                setMBeanServer(arg0: javax.management.MBeanServer): void
            }
            class NotificationResult implements java.io.Serializable {
                public constructor(arg0: long, arg1: long, arg2: javax.management.remote.TargetedNotification[])
                public getEarliestSequenceNumber(): long
                public getNextSequenceNumber(): long
                public getTargetedNotifications(): javax.management.remote.TargetedNotification[]
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SubjectDelegationPermission extends java.security.BasicPermission {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class TargetedNotification implements java.io.Serializable {
                public constructor(arg0: javax.management.Notification, arg1: java.lang.Integer)
                public getNotification(): javax.management.Notification
                public getListenerID(): java.lang.Integer
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
        namespace timer {
            class Timer extends javax.management.NotificationBroadcasterSupport implements javax.management.timer.TimerMBean , javax.management.MBeanRegistration {
                public static ONE_SECOND: long
                public static ONE_MINUTE: long
                public static ONE_HOUR: long
                public static ONE_DAY: long
                public static ONE_WEEK: long
                public constructor()
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public start(): void
                public stop(): void
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long, arg6: boolean): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date): java.lang.Integer
                public removeNotification(arg0: java.lang.Integer): void
                public removeNotifications(arg0: java.lang.String | string): void
                public removeAllNotifications(): void
                public getNbNotifications(): int
                public getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
                public getNotificationIDs(arg0: java.lang.String | string): java.util.Vector<java.lang.Integer>
                public getNotificationType(arg0: java.lang.Integer): string
                public getNotificationMessage(arg0: java.lang.Integer): string
                public getNotificationUserData(arg0: java.lang.Integer): java.lang.Object
                public getDate(arg0: java.lang.Integer): java.util.Date
                public getPeriod(arg0: java.lang.Integer): java.lang.Long
                public getNbOccurences(arg0: java.lang.Integer): java.lang.Long
                public getFixedRate(arg0: java.lang.Integer): boolean
                public getSendPastNotifications(): boolean
                public setSendPastNotifications(arg0: boolean): void
                public isActive(): boolean
                public isEmpty(): boolean
                public static class: java.lang.Class<any>
            }
            class TimerAlarmClock extends java.util.TimerTask {
                public constructor(arg0: javax.management.timer.Timer, arg1: long)
                public constructor(arg0: javax.management.timer.Timer, arg1: java.util.Date)
                public run(): void
                public static class: java.lang.Class<any>
            }
            class TimerAlarmClockNotification extends javax.management.Notification {
                public constructor(arg0: javax.management.timer.TimerAlarmClock)
                public static class: java.lang.Class<any>
            }
            interface TimerMBean {
                start(): void
                stop(): void
                addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long, arg6: boolean): java.lang.Integer
                addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long): java.lang.Integer
                addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long): java.lang.Integer
                addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date): java.lang.Integer
                removeNotification(arg0: java.lang.Integer): void
                removeNotifications(arg0: java.lang.String | string): void
                removeAllNotifications(): void
                getNbNotifications(): int
                getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
                getNotificationIDs(arg0: java.lang.String | string): java.util.Vector<java.lang.Integer>
                getNotificationType(arg0: java.lang.Integer): string
                getNotificationMessage(arg0: java.lang.Integer): string
                getNotificationUserData(arg0: java.lang.Integer): java.lang.Object
                getDate(arg0: java.lang.Integer): java.util.Date
                getPeriod(arg0: java.lang.Integer): java.lang.Long
                getNbOccurences(arg0: java.lang.Integer): java.lang.Long
                getFixedRate(arg0: java.lang.Integer): boolean
                getSendPastNotifications(): boolean
                setSendPastNotifications(arg0: boolean): void
                isActive(): boolean
                isEmpty(): boolean
            }
            class TimerNotification extends javax.management.Notification {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.Integer)
                public getNotificationID(): java.lang.Integer
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace sun {
    namespace management {
        class BaseOperatingSystemImpl implements java.lang.management.OperatingSystemMXBean {
            protected constructor(arg0: sun.management.VMManagement)
            public getName(): string
            public getArch(): string
            public getVersion(): string
            public getAvailableProcessors(): int
            public getSystemLoadAverage(): double
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class ClassLoadingImpl implements java.lang.management.ClassLoadingMXBean {
            public getTotalLoadedClassCount(): long
            public getLoadedClassCount(): int
            public getUnloadedClassCount(): long
            public isVerbose(): boolean
            public setVerbose(arg0: boolean): void
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class CompilationImpl implements java.lang.management.CompilationMXBean {
            public getName(): string
            public isCompilationTimeMonitoringSupported(): boolean
            public getTotalCompilationTime(): long
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class CompilerThreadStat implements java.io.Serializable {
            public getName(): string
            public getCompileTaskCount(): long
            public getCompileTime(): long
            public getLastCompiledMethodInfo(): sun.management.MethodInfo
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class GarbageCollectorImpl extends sun.management.MemoryManagerImpl implements com.sun.management.GarbageCollectorMXBean {
            public getCollectionCount(): long
            public getCollectionTime(): long
            public getLastGcInfo(): com.sun.management.GcInfo
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener): void
            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class HotspotClassLoading implements sun.management.HotspotClassLoadingMBean {
            public getLoadedClassSize(): long
            public getUnloadedClassSize(): long
            public getClassLoadingTime(): long
            public getMethodDataSize(): long
            public getInitializedClassCount(): long
            public getClassInitializationTime(): long
            public getClassVerificationTime(): long
            public getInternalClassLoadingCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        interface HotspotClassLoadingMBean {
            getLoadedClassSize(): long
            getUnloadedClassSize(): long
            getClassLoadingTime(): long
            getMethodDataSize(): long
            getInitializedClassCount(): long
            getClassInitializationTime(): long
            getClassVerificationTime(): long
            getInternalClassLoadingCounters(): java.util.List<sun.management.counter.Counter>
        }
        class HotspotCompilation implements sun.management.HotspotCompilationMBean {
            public getCompilerThreadCount(): int
            public getTotalCompileCount(): long
            public getBailoutCompileCount(): long
            public getInvalidatedCompileCount(): long
            public getCompiledMethodCodeSize(): long
            public getCompiledMethodSize(): long
            public getCompilerThreadStats(): java.util.List<sun.management.CompilerThreadStat>
            public getLastCompile(): sun.management.MethodInfo
            public getFailedCompile(): sun.management.MethodInfo
            public getInvalidatedCompile(): sun.management.MethodInfo
            public getInternalCompilerCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        interface HotspotCompilationMBean {
            getCompilerThreadCount(): int
            getCompilerThreadStats(): java.util.List<sun.management.CompilerThreadStat>
            getTotalCompileCount(): long
            getBailoutCompileCount(): long
            getInvalidatedCompileCount(): long
            getLastCompile(): sun.management.MethodInfo
            getFailedCompile(): sun.management.MethodInfo
            getInvalidatedCompile(): sun.management.MethodInfo
            getCompiledMethodCodeSize(): long
            getCompiledMethodSize(): long
            getInternalCompilerCounters(): java.util.List<sun.management.counter.Counter>
        }
        class HotspotInternal implements sun.management.HotspotInternalMBean , javax.management.MBeanRegistration {
            public constructor()
            public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
            public postRegister(arg0: java.lang.Boolean | boolean): void
            public preDeregister(): void
            public postDeregister(): void
            public static class: java.lang.Class<any>
        }
        interface HotspotInternalMBean {
        }
        class HotspotMemory implements sun.management.HotspotMemoryMBean {
            public getInternalMemoryCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        class HotspotMemory$$Lambda implements sun.management.HotspotMemoryMBean {
            public (): java.util.List<sun.management.counter.Counter>
        }
        interface HotspotMemoryMBean {
            getInternalMemoryCounters(): java.util.List<sun.management.counter.Counter>
        }
        interface HotspotMemoryMBean$$Lambda {
            (): java.util.List<sun.management.counter.Counter>
        }
        class HotspotRuntime implements sun.management.HotspotRuntimeMBean {
            public getSafepointCount(): long
            public getTotalSafepointTime(): long
            public getSafepointSyncTime(): long
            public getInternalRuntimeCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        interface HotspotRuntimeMBean {
            getSafepointCount(): long
            getTotalSafepointTime(): long
            getSafepointSyncTime(): long
            getInternalRuntimeCounters(): java.util.List<sun.management.counter.Counter>
        }
        class HotspotThread implements sun.management.HotspotThreadMBean {
            public getInternalThreadCount(): int
            public getInternalThreadCpuTimes(): java.util.Map<java.lang.String, java.lang.Long>
            public getInternalThreadTimes0(arg0: java.lang.String[], arg1: long[]): int
            public getInternalThreadingCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        interface HotspotThreadMBean {
            getInternalThreadCount(): int
            getInternalThreadCpuTimes(): java.util.Map<java.lang.String, java.lang.Long>
            getInternalThreadingCounters(): java.util.List<sun.management.counter.Counter>
        }
        abstract class LazyCompositeData implements javax.management.openmbean.CompositeData , java.io.Serializable {
            public constructor()
            public containsKey(arg0: java.lang.String | string): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public equals(arg0: java.lang.Object): boolean
            public get(arg0: java.lang.String | string): java.lang.Object
            public getAll(arg0: java.lang.String[]): java.lang.Object[]
            public getCompositeType(): javax.management.openmbean.CompositeType
            public hashCode(): int
            public toString(): string
            public values(): java.util.Collection<any>
            protected writeReplace(): java.lang.Object
            protected getCompositeData(): javax.management.openmbean.CompositeData
            protected static isTypeMatched(arg0: javax.management.openmbean.CompositeType, arg1: javax.management.openmbean.CompositeType): boolean
            protected static isTypeMatched(arg0: javax.management.openmbean.TabularType, arg1: javax.management.openmbean.TabularType): boolean
            protected static isTypeMatched(arg0: javax.management.openmbean.ArrayType<any>, arg1: javax.management.openmbean.ArrayType<any>): boolean
            public static class: java.lang.Class<any>
        }
        class LockInfoCompositeData extends sun.management.LazyCompositeData {
            public getLockInfo(): java.lang.management.LockInfo
            public static toCompositeData(arg0: java.lang.management.LockInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static toLockInfo(arg0: javax.management.openmbean.CompositeData): java.lang.management.LockInfo
            public static class: java.lang.Class<any>
        }
        class ManagementFactoryHelper {
            public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
            public static getMemoryMXBean(): java.lang.management.MemoryMXBean
            public static getThreadMXBean(): java.lang.management.ThreadMXBean
            public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean
            public static getCompilationMXBean(): java.lang.management.CompilationMXBean
            public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
            public static getMemoryPoolMXBeans(): java.util.List<java.lang.management.MemoryPoolMXBean>
            public static getMemoryManagerMXBeans(): java.util.List<java.lang.management.MemoryManagerMXBean>
            public static getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>
            public static getPlatformLoggingMXBean(): java.lang.management.PlatformLoggingMXBean
            public static getBufferPoolMXBeans(): java.util.List<java.lang.management.BufferPoolMXBean>
            public static getDiagnosticMXBean(): com.sun.management.HotSpotDiagnosticMXBean
            public static getHotspotRuntimeMBean(): sun.management.HotspotRuntimeMBean
            public static getHotspotClassLoadingMBean(): sun.management.HotspotClassLoadingMBean
            public static getHotspotThreadMBean(): sun.management.HotspotThreadMBean
            public static getHotspotMemoryMBean(): sun.management.HotspotMemoryMBean
            public static getDiagnosticCommandMBean(): com.sun.management.DiagnosticCommandMBean
            public static getHotspotCompilationMBean(): sun.management.HotspotCompilationMBean
            public static getPlatformDynamicMBeans(): java.util.HashMap<javax.management.ObjectName, javax.management.DynamicMBean>
            public static isThreadSuspended(arg0: int): boolean
            public static isThreadRunningNative(arg0: int): boolean
            public static toThreadState(arg0: int): java.lang.Thread$State
            public static class: java.lang.Class<any>
        }
        abstract class MappedMXBeanType {
            public constructor()
            public static toOpenType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): javax.management.openmbean.OpenType<any>
            public static toJavaTypeData(arg0: java.lang.Object, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Object
            public static toOpenTypeData(arg0: java.lang.Object, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class MemoryImpl extends sun.management.NotificationEmitterSupport implements java.lang.management.MemoryMXBean {
            public getObjectPendingFinalizationCount(): int
            public gc(): void
            public getHeapMemoryUsage(): java.lang.management.MemoryUsage
            public getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
            public isVerbose(): boolean
            public setVerbose(arg0: boolean): void
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class MemoryManagerImpl extends sun.management.NotificationEmitterSupport implements java.lang.management.MemoryManagerMXBean {
            public getName(): string
            public isValid(): boolean
            public getMemoryPoolNames(): java.lang.String[]
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class MemoryNotifInfoCompositeData extends sun.management.LazyCompositeData {
            public getMemoryNotifInfo(): java.lang.management.MemoryNotificationInfo
            public static toCompositeData(arg0: java.lang.management.MemoryNotificationInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getPoolName(arg0: javax.management.openmbean.CompositeData): string
            public static getUsage(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
            public static getCount(arg0: javax.management.openmbean.CompositeData): long
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
        class MemoryPoolImpl implements java.lang.management.MemoryPoolMXBean {
            public getName(): string
            public isValid(): boolean
            public getType(): java.lang.management.MemoryType
            public getUsage(): java.lang.management.MemoryUsage
            public getPeakUsage(): java.lang.management.MemoryUsage
            public getUsageThreshold(): long
            public setUsageThreshold(arg0: long): void
            public getMemoryManagerNames(): java.lang.String[]
            public resetPeakUsage(): void
            public isUsageThresholdExceeded(): boolean
            public getUsageThresholdCount(): long
            public isUsageThresholdSupported(): boolean
            public getCollectionUsageThreshold(): long
            public setCollectionUsageThreshold(arg0: long): void
            public isCollectionUsageThresholdExceeded(): boolean
            public getCollectionUsageThresholdCount(): long
            public getCollectionUsage(): java.lang.management.MemoryUsage
            public isCollectionUsageThresholdSupported(): boolean
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class MemoryUsageCompositeData extends sun.management.LazyCompositeData {
            public getMemoryUsage(): java.lang.management.MemoryUsage
            public static toCompositeData(arg0: java.lang.management.MemoryUsage): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getInit(arg0: javax.management.openmbean.CompositeData): long
            public static getUsed(arg0: javax.management.openmbean.CompositeData): long
            public static getCommitted(arg0: javax.management.openmbean.CompositeData): long
            public static getMax(arg0: javax.management.openmbean.CompositeData): long
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
        class MethodInfo implements java.io.Serializable {
            public getName(): string
            public getType(): long
            public getCompileSize(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class MonitorInfoCompositeData extends sun.management.LazyCompositeData {
            public getMonitorInfo(): java.lang.management.MonitorInfo
            public static toCompositeData(arg0: java.lang.management.MonitorInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getClassName(arg0: javax.management.openmbean.CompositeData): string
            public static getIdentityHashCode(arg0: javax.management.openmbean.CompositeData): int
            public static getLockedStackFrame(arg0: javax.management.openmbean.CompositeData): java.lang.StackTraceElement
            public static getLockedStackDepth(arg0: javax.management.openmbean.CompositeData): int
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
        abstract class NotificationEmitterSupport implements javax.management.NotificationEmitter {
            protected constructor()
            public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener): void
            public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public static class: java.lang.Class<any>
        }
        class RuntimeImpl implements java.lang.management.RuntimeMXBean {
            public getName(): string
            public getManagementSpecVersion(): string
            public getVmName(): string
            public getVmVendor(): string
            public getVmVersion(): string
            public getSpecName(): string
            public getSpecVendor(): string
            public getSpecVersion(): string
            public getClassPath(): string
            public getLibraryPath(): string
            public getBootClassPath(): string
            public getInputArguments(): java.util.List<java.lang.String>
            public getUptime(): long
            public getStartTime(): long
            public isBootClassPathSupported(): boolean
            public getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        abstract class Sensor {
            public constructor(arg0: java.lang.String | string)
            public getName(): string
            public getCount(): long
            public isOn(): boolean
            public trigger(): void
            public trigger(arg0: int): void
            public trigger(arg0: int, arg1: java.lang.management.MemoryUsage): void
            public clear(): void
            public clear(arg0: int): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class StackTraceElementCompositeData extends sun.management.LazyCompositeData {
            public getStackTraceElement(): java.lang.StackTraceElement
            public static from(arg0: javax.management.openmbean.CompositeData): java.lang.StackTraceElement
            public static toCompositeData(arg0: java.lang.StackTraceElement): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
        class ThreadImpl implements com.sun.management.ThreadMXBean {
            public getThreadCount(): int
            public getPeakThreadCount(): int
            public getTotalStartedThreadCount(): long
            public getDaemonThreadCount(): int
            public isThreadContentionMonitoringSupported(): boolean
            public isThreadContentionMonitoringEnabled(): boolean
            public isThreadCpuTimeSupported(): boolean
            public isCurrentThreadCpuTimeSupported(): boolean
            public isThreadAllocatedMemorySupported(): boolean
            public isThreadCpuTimeEnabled(): boolean
            public isThreadAllocatedMemoryEnabled(): boolean
            public getAllThreadIds(): long[]
            public getThreadInfo(arg0: long): java.lang.management.ThreadInfo
            public getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
            public getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
            public getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
            public setThreadContentionMonitoringEnabled(arg0: boolean): void
            public getCurrentThreadCpuTime(): long
            public getThreadCpuTime(arg0: long): long
            public getThreadCpuTime(arg0: long[]): long[]
            public getCurrentThreadUserTime(): long
            public getThreadUserTime(arg0: long): long
            public getThreadUserTime(arg0: long[]): long[]
            public setThreadCpuTimeEnabled(arg0: boolean): void
            public getThreadAllocatedBytes(arg0: long): long
            public getThreadAllocatedBytes(arg0: long[]): long[]
            public setThreadAllocatedMemoryEnabled(arg0: boolean): void
            public findMonitorDeadlockedThreads(): long[]
            public findDeadlockedThreads(): long[]
            public resetPeakThreadCount(): void
            public isObjectMonitorUsageSupported(): boolean
            public isSynchronizerUsageSupported(): boolean
            public getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
            public dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        class ThreadInfoCompositeData extends sun.management.LazyCompositeData {
            public getThreadInfo(): java.lang.management.ThreadInfo
            public isCurrentVersion(): boolean
            public static getInstance(arg0: javax.management.openmbean.CompositeData): sun.management.ThreadInfoCompositeData
            public static toCompositeData(arg0: java.lang.management.ThreadInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static isCurrentVersion(arg0: javax.management.openmbean.CompositeData): boolean
            public threadId(): long
            public threadName(): string
            public threadState(): java.lang.Thread$State
            public blockedTime(): long
            public blockedCount(): long
            public waitedTime(): long
            public waitedCount(): long
            public lockName(): string
            public lockOwnerId(): long
            public lockOwnerName(): string
            public suspended(): boolean
            public inNative(): boolean
            public stackTrace(): java.lang.StackTraceElement[]
            public lockInfo(): java.lang.management.LockInfo
            public lockedMonitors(): java.lang.management.MonitorInfo[]
            public lockedSynchronizers(): java.lang.management.LockInfo[]
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
        class Util {
            public static newObjectName(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.ObjectName
            public static newObjectName(arg0: java.lang.String | string): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
        interface VMManagement {
            isCompilationTimeMonitoringSupported(): boolean
            isThreadContentionMonitoringSupported(): boolean
            isThreadContentionMonitoringEnabled(): boolean
            isCurrentThreadCpuTimeSupported(): boolean
            isOtherThreadCpuTimeSupported(): boolean
            isThreadCpuTimeEnabled(): boolean
            isBootClassPathSupported(): boolean
            isObjectMonitorUsageSupported(): boolean
            isSynchronizerUsageSupported(): boolean
            isThreadAllocatedMemorySupported(): boolean
            isThreadAllocatedMemoryEnabled(): boolean
            isGcNotificationSupported(): boolean
            isRemoteDiagnosticCommandsSupported(): boolean
            getTotalClassCount(): long
            getLoadedClassCount(): int
            getUnloadedClassCount(): long
            getVerboseClass(): boolean
            getVerboseGC(): boolean
            getManagementVersion(): string
            getVmId(): string
            getVmName(): string
            getVmVendor(): string
            getVmVersion(): string
            getVmSpecName(): string
            getVmSpecVendor(): string
            getVmSpecVersion(): string
            getClassPath(): string
            getLibraryPath(): string
            getBootClassPath(): string
            getVmArguments(): java.util.List<java.lang.String>
            getStartupTime(): long
            getUptime(): long
            getAvailableProcessors(): int
            getCompilerName(): string
            getTotalCompileTime(): long
            getTotalThreadCount(): long
            getLiveThreadCount(): int
            getPeakThreadCount(): int
            getDaemonThreadCount(): int
            getOsName(): string
            getOsArch(): string
            getOsVersion(): string
            getSafepointCount(): long
            getTotalSafepointTime(): long
            getSafepointSyncTime(): long
            getTotalApplicationNonStoppedTime(): long
            getLoadedClassSize(): long
            getUnloadedClassSize(): long
            getClassLoadingTime(): long
            getMethodDataSize(): long
            getInitializedClassCount(): long
            getClassInitializationTime(): long
            getClassVerificationTime(): long
            getInternalCounters(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
        }
        class VMManagementImpl implements sun.management.VMManagement {
            public isCompilationTimeMonitoringSupported(): boolean
            public isThreadContentionMonitoringSupported(): boolean
            public isCurrentThreadCpuTimeSupported(): boolean
            public isOtherThreadCpuTimeSupported(): boolean
            public isBootClassPathSupported(): boolean
            public isObjectMonitorUsageSupported(): boolean
            public isSynchronizerUsageSupported(): boolean
            public isThreadAllocatedMemorySupported(): boolean
            public isGcNotificationSupported(): boolean
            public isRemoteDiagnosticCommandsSupported(): boolean
            public isThreadContentionMonitoringEnabled(): boolean
            public isThreadCpuTimeEnabled(): boolean
            public isThreadAllocatedMemoryEnabled(): boolean
            public getLoadedClassCount(): int
            public getTotalClassCount(): long
            public getUnloadedClassCount(): long
            public getVerboseClass(): boolean
            public getVerboseGC(): boolean
            public getManagementVersion(): string
            public getVmId(): string
            public getVmName(): string
            public getVmVendor(): string
            public getVmVersion(): string
            public getVmSpecName(): string
            public getVmSpecVendor(): string
            public getVmSpecVersion(): string
            public getClassPath(): string
            public getLibraryPath(): string
            public getBootClassPath(): string
            public getUptime(): long
            public getVmArguments(): java.util.List<java.lang.String>
            public getVmArguments0(): java.lang.String[]
            public getStartupTime(): long
            public getAvailableProcessors(): int
            public getCompilerName(): string
            public getTotalCompileTime(): long
            public getTotalThreadCount(): long
            public getLiveThreadCount(): int
            public getPeakThreadCount(): int
            public getDaemonThreadCount(): int
            public getOsName(): string
            public getOsArch(): string
            public getOsVersion(): string
            public getSafepointCount(): long
            public getTotalSafepointTime(): long
            public getSafepointSyncTime(): long
            public getTotalApplicationNonStoppedTime(): long
            public getLoadedClassSize(): long
            public getUnloadedClassSize(): long
            public getClassLoadingTime(): long
            public getMethodDataSize(): long
            public getInitializedClassCount(): long
            public getClassInitializationTime(): long
            public getClassVerificationTime(): long
            public getInternalCounters(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
        namespace counter {
            abstract class AbstractCounter implements sun.management.counter.Counter {
                protected constructor(arg0: java.lang.String | string, arg1: sun.management.counter.Units, arg2: sun.management.counter.Variability, arg3: int, arg4: int)
                protected constructor(arg0: java.lang.String | string, arg1: sun.management.counter.Units, arg2: sun.management.counter.Variability, arg3: int)
                public getName(): string
                public getUnits(): sun.management.counter.Units
                public getVariability(): sun.management.counter.Variability
                public isVector(): boolean
                public getVectorLength(): int
                public isInternal(): boolean
                public getFlags(): int
                public getValue(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface ByteArrayCounter extends sun.management.counter.Counter {
                byteArrayValue(): byte[]
                byteAt(arg0: int): byte
            }
            interface Counter extends java.io.Serializable {
                getName(): string
                getUnits(): sun.management.counter.Units
                getVariability(): sun.management.counter.Variability
                isVector(): boolean
                getVectorLength(): int
                getValue(): java.lang.Object
                isInternal(): boolean
                getFlags(): int
            }
            interface LongArrayCounter extends sun.management.counter.Counter {
                longArrayValue(): long[]
                longAt(arg0: int): long
            }
            interface LongCounter extends sun.management.counter.Counter {
                longValue(): long
            }
            interface StringCounter extends sun.management.counter.Counter {
                stringValue(): string
            }
            class Units implements java.io.Serializable {
                public static INVALID: sun.management.counter.Units
                public static NONE: sun.management.counter.Units
                public static BYTES: sun.management.counter.Units
                public static TICKS: sun.management.counter.Units
                public static EVENTS: sun.management.counter.Units
                public static STRING: sun.management.counter.Units
                public static HERTZ: sun.management.counter.Units
                public toString(): string
                public intValue(): int
                public static toUnits(arg0: int): sun.management.counter.Units
                public static class: java.lang.Class<any>
            }
            class Variability implements java.io.Serializable {
                public static INVALID: sun.management.counter.Variability
                public static CONSTANT: sun.management.counter.Variability
                public static MONOTONIC: sun.management.counter.Variability
                public static VARIABLE: sun.management.counter.Variability
                public toString(): string
                public intValue(): int
                public static toVariability(arg0: int): sun.management.counter.Variability
                public static class: java.lang.Class<any>
            }
            namespace perf {
                class ByteArrayCounterSnapshot extends sun.management.counter.AbstractCounter implements sun.management.counter.ByteArrayCounter {
                    public getValue(): java.lang.Object
                    public byteArrayValue(): byte[]
                    public byteAt(arg0: int): byte
                    public static class: java.lang.Class<any>
                }
                class InstrumentationException extends java.lang.RuntimeException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class LongArrayCounterSnapshot extends sun.management.counter.AbstractCounter implements sun.management.counter.LongArrayCounter {
                    public getValue(): java.lang.Object
                    public longArrayValue(): long[]
                    public longAt(arg0: int): long
                    public static class: java.lang.Class<any>
                }
                class LongCounterSnapshot extends sun.management.counter.AbstractCounter implements sun.management.counter.LongCounter {
                    public getValue(): java.lang.Object
                    public longValue(): long
                    public static class: java.lang.Class<any>
                }
                class PerfByteArrayCounter extends sun.management.counter.AbstractCounter implements sun.management.counter.ByteArrayCounter {
                    public getValue(): java.lang.Object
                    public byteArrayValue(): byte[]
                    public byteAt(arg0: int): byte
                    public toString(): string
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PerfDataEntry {
                    public size(): int
                    public name(): string
                    public type(): sun.management.counter.perf.PerfDataType
                    public units(): sun.management.counter.Units
                    public flags(): int
                    public vectorLength(): int
                    public variability(): sun.management.counter.Variability
                    public byteData(): java.nio.ByteBuffer
                    public longData(): java.nio.LongBuffer
                    public static class: java.lang.Class<any>
                }
                class PerfDataType {
                    public static BOOLEAN: sun.management.counter.perf.PerfDataType
                    public static CHAR: sun.management.counter.perf.PerfDataType
                    public static FLOAT: sun.management.counter.perf.PerfDataType
                    public static DOUBLE: sun.management.counter.perf.PerfDataType
                    public static BYTE: sun.management.counter.perf.PerfDataType
                    public static SHORT: sun.management.counter.perf.PerfDataType
                    public static INT: sun.management.counter.perf.PerfDataType
                    public static LONG: sun.management.counter.perf.PerfDataType
                    public static ILLEGAL: sun.management.counter.perf.PerfDataType
                    public toString(): string
                    public byteValue(): byte
                    public size(): int
                    public static toPerfDataType(arg0: byte): sun.management.counter.perf.PerfDataType
                    public static class: java.lang.Class<any>
                }
                class PerfInstrumentation {
                    public constructor(arg0: java.nio.ByteBuffer)
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getModificationTimeStamp(): long
                    public getAllCounters(): java.util.List<sun.management.counter.Counter>
                    public findByPattern(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
                    public static class: java.lang.Class<any>
                }
                class PerfLongArrayCounter extends sun.management.counter.AbstractCounter implements sun.management.counter.LongArrayCounter {
                    public getValue(): java.lang.Object
                    public longArrayValue(): long[]
                    public longAt(arg0: int): long
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PerfLongCounter extends sun.management.counter.AbstractCounter implements sun.management.counter.LongCounter {
                    public getValue(): java.lang.Object
                    public longValue(): long
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PerfStringCounter extends sun.management.counter.perf.PerfByteArrayCounter implements sun.management.counter.StringCounter {
                    public isVector(): boolean
                    public getVectorLength(): int
                    public getValue(): java.lang.Object
                    public stringValue(): string
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Prologue {
                    public getMagic(): int
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getByteOrder(): java.nio.ByteOrder
                    public getEntryOffset(): int
                    public getUsed(): int
                    public getOverflow(): int
                    public getModificationTimeStamp(): long
                    public getNumEntries(): int
                    public isAccessible(): boolean
                    public static class: java.lang.Class<any>
                }
                class StringCounterSnapshot extends sun.management.counter.AbstractCounter implements sun.management.counter.StringCounter {
                    public getValue(): java.lang.Object
                    public stringValue(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
