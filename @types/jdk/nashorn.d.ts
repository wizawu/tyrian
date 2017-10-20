declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace beans {
                class DynamicMethodLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class StaticClassLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    public static class: java.lang.Class<any>
                }
                class StaticClassLinker$SingleClassStaticsLinker extends jdk.internal.dynalink.beans.AbstractJavaLinker {
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class StaticClassLinker$1 extends java.lang.ClassValue<jdk.internal.dynalink.beans.StaticClassLinker$SingleClassStaticsLinker> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.beans.StaticClassLinker$SingleClassStaticsLinker
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SimpleDynamicMethod extends jdk.internal.dynalink.beans.SingleDynamicMethod {
                    public static class: java.lang.Class<any>
                }
                class StaticClassIntrospector extends jdk.internal.dynalink.beans.FacetIntrospector {
                    public static class: java.lang.Class<any>
                }
                class CheckRestrictedPackage {
                    public static class: java.lang.Class<any>
                }
                class CheckRestrictedPackage$1 implements java.security.PrivilegedAction<java.lang.Void> {
                    public run(): java.lang.Void
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class BeanIntrospector extends jdk.internal.dynalink.beans.FacetIntrospector {
                    public static class: java.lang.Class<any>
                }
                class StaticClass implements java.io.Serializable {
                    public static forClass(arg0: java.lang.Class<any>): jdk.internal.dynalink.beans.StaticClass
                    public getRepresentedClass(): java.lang.Class<any>
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class StaticClass$1 extends java.lang.ClassValue<jdk.internal.dynalink.beans.StaticClass> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.beans.StaticClass
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CallerSensitiveDynamicMethod extends jdk.internal.dynalink.beans.SingleDynamicMethod {
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractJavaLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    protected getGuardedInvocationComponent(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkerServices, arg2: java.util.List<java.lang.String>): jdk.internal.dynalink.beans.GuardedInvocationComponent
                    public static class: java.lang.Class<any>
                }
                class AbstractJavaLinker$1 {
                    public static class: java.lang.Class<any>
                }
                class AbstractJavaLinker$AnnotatedDynamicMethod {
                    public static class: java.lang.Class<any>
                }
                class AbstractJavaLinker$MethodPair {
                    public static class: java.lang.Class<any>
                }
                class BeanLinker extends jdk.internal.dynalink.beans.AbstractJavaLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    protected getGuardedInvocationComponent(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkerServices, arg2: java.util.List<java.lang.String>): jdk.internal.dynalink.beans.GuardedInvocationComponent
                    public static class: java.lang.Class<any>
                }
                class BeanLinker$1 {
                    public static class: java.lang.Class<any>
                }
                class BeanLinker$Binder {
                    public static class: java.lang.Class<any>
                }
                class BeanLinker$CollectionType extends java.lang.Enum<jdk.internal.dynalink.beans.BeanLinker$CollectionType> {
                    public static ARRAY: jdk.internal.dynalink.beans.BeanLinker$CollectionType
                    public static LIST: jdk.internal.dynalink.beans.BeanLinker$CollectionType
                    public static MAP: jdk.internal.dynalink.beans.BeanLinker$CollectionType
                    public static values(): jdk.internal.dynalink.beans.BeanLinker$CollectionType[]
                    public static valueOf(arg0: string): jdk.internal.dynalink.beans.BeanLinker$CollectionType
                    public static class: java.lang.Class<any>
                }
                class ClassLinker extends jdk.internal.dynalink.beans.BeanLinker {
                    public static class: java.lang.Class<any>
                }
                class GuardedInvocationComponent {
                    public static class: java.lang.Class<any>
                }
                class GuardedInvocationComponent$1 {
                    public static class: java.lang.Class<any>
                }
                class GuardedInvocationComponent$Validator {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class GuardedInvocationComponent$ValidationType extends java.lang.Enum<jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType> {
                    public static NONE: jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType
                    public static INSTANCE_OF: jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType
                    public static EXACT_CLASS: jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType
                    public static IS_ARRAY: jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType
                    public static values(): jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType[]
                    public static valueOf(arg0: string): jdk.internal.dynalink.beans.GuardedInvocationComponent$ValidationType
                    public static class: java.lang.Class<any>
                }
                class MaximallySpecific {
                    public static class: java.lang.Class<any>
                }
                class MaximallySpecific$3 {
                    public static class: java.lang.Class<any>
                }
                class MaximallySpecific$2 extends jdk.internal.dynalink.beans.MaximallySpecific$MethodTypeGetter<jdk.internal.dynalink.beans.SingleDynamicMethod> {
                    public static class: java.lang.Class<any>
                }
                class MaximallySpecific$1 extends jdk.internal.dynalink.beans.MaximallySpecific$MethodTypeGetter<java.lang.invoke.MethodHandle> {
                    public static class: java.lang.Class<any>
                }
                abstract class MaximallySpecific$MethodTypeGetter<T> {
                    public static class: java.lang.Class<any>
                }
                class AccessibleMembersLookup {
                    public static class: java.lang.Class<any>
                }
                class AccessibleMembersLookup$MethodSignature {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                abstract class FacetIntrospector {
                    protected membersLookup: jdk.internal.dynalink.beans.AccessibleMembersLookup
                    public static class: java.lang.Class<any>
                }
                class BeansLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    public constructor()
                    public static getLinkerForClass(arg0: java.lang.Class<any>): jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker
                    public static isDynamicMethod(arg0: java.lang.Object): boolean
                    public static isDynamicConstructor(arg0: java.lang.Object): boolean
                    public static getConstructorMethod(arg0: java.lang.Class<any>, arg1: string): java.lang.Object
                    public static getReadableInstancePropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getWritableInstancePropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getInstanceMethodNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getReadableStaticPropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getWritableStaticPropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getStaticMethodNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class BeansLinker$1 extends java.lang.ClassValue<jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CallerSensitiveDetector {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class CallerSensitiveDetector$1 {
                    public static class: java.lang.Class<any>
                }
                class CallerSensitiveDetector$UnprivilegedDetectionStrategy extends jdk.internal.dynalink.beans.CallerSensitiveDetector$DetectionStrategy {
                    public static class: java.lang.Class<any>
                }
                class CallerSensitiveDetector$PrivilegedDetectionStrategy extends jdk.internal.dynalink.beans.CallerSensitiveDetector$DetectionStrategy {
                    public static class: java.lang.Class<any>
                }
                abstract class CallerSensitiveDetector$DetectionStrategy {
                    public static class: java.lang.Class<any>
                }
                abstract class SingleDynamicMethod extends jdk.internal.dynalink.beans.DynamicMethod {
                    public static class: java.lang.Class<any>
                }
                abstract class DynamicMethod {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class OverloadedDynamicMethod extends jdk.internal.dynalink.beans.DynamicMethod {
                    public getInvocation(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle
                    public contains(arg0: jdk.internal.dynalink.beans.SingleDynamicMethod): boolean
                    public isConstructor(): boolean
                    public toString(): string
                    public addMethod(arg0: jdk.internal.dynalink.beans.SingleDynamicMethod): void
                    public static class: java.lang.Class<any>
                }
                class ApplicableOverloadedMethods {
                    public static class: java.lang.Class<any>
                }
                class ApplicableOverloadedMethods$3 extends jdk.internal.dynalink.beans.ApplicableOverloadedMethods$ApplicabilityTest {
                    public static class: java.lang.Class<any>
                }
                class ApplicableOverloadedMethods$2 extends jdk.internal.dynalink.beans.ApplicableOverloadedMethods$ApplicabilityTest {
                    public static class: java.lang.Class<any>
                }
                class ApplicableOverloadedMethods$1 extends jdk.internal.dynalink.beans.ApplicableOverloadedMethods$ApplicabilityTest {
                    public static class: java.lang.Class<any>
                }
                abstract class ApplicableOverloadedMethods$ApplicabilityTest {
                    public static class: java.lang.Class<any>
                }
                class ClassString {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class ClassString$1 {
                    public static class: java.lang.Class<any>
                }
                class OverloadedMethod {
                    public static class: java.lang.Class<any>
                }
            }
            namespace support {
                class AutoDiscovery {
                    public static loadLinkers(): java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>
                    public static loadLinkers(arg0: java.lang.ClassLoader): java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>
                    public static class: java.lang.Class<any>
                }
                class CallSiteDescriptorFactory {
                    public static create(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    protected static createReference(arg0: jdk.internal.dynalink.CallSiteDescriptor): java.lang.ref.Reference<jdk.internal.dynalink.CallSiteDescriptor>
                    public static tokenizeName(arg0: string): java.lang.String[]
                    public static tokenizeOperators(arg0: jdk.internal.dynalink.CallSiteDescriptor): java.util.List<java.lang.String>
                    public static dropParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: int): jdk.internal.dynalink.CallSiteDescriptor
                    public static changeParameterType(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: java.lang.Class<any>): jdk.internal.dynalink.CallSiteDescriptor
                    public static changeReturnType(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Class<any>): jdk.internal.dynalink.CallSiteDescriptor
                    public static insertParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, ...arg2: java.lang.Class<any>[]): jdk.internal.dynalink.CallSiteDescriptor
                    public static insertParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: java.util.List<java.lang.Class<any>>): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
                class LinkerServicesImpl implements jdk.internal.dynalink.linker.LinkerServices {
                    public constructor(arg0: jdk.internal.dynalink.support.TypeConverterFactory, arg1: jdk.internal.dynalink.linker.GuardingDynamicLinker | jdk.internal.dynalink.linker.GuardingDynamicLinker$$Lambda, arg2: jdk.internal.dynalink.linker.MethodHandleTransformer | jdk.internal.dynalink.linker.MethodHandleTransformer$$Lambda)
                    public canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public asTypeLosslessReturn(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static getCurrentLinkRequest(): jdk.internal.dynalink.linker.LinkRequest
                    public static class: java.lang.Class<any>
                }
                class NamedDynCallSiteDescriptor extends jdk.internal.dynalink.support.UnnamedDynCallSiteDescriptor {
                    public getNameTokenCount(): int
                    public getNameToken(arg0: int): string
                    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
                class Lookup {
                    public static PUBLIC: jdk.internal.dynalink.support.Lookup
                    public constructor(arg0: java.lang.invoke.MethodHandles$Lookup)
                    public unreflect(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    public static unreflect(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    public unreflectGetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    public findGetter(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public unreflectSetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    public unreflectConstructor(arg0: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                    public static unreflectConstructor(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                    public findSpecial(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public findStatic(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public findVirtual(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static findOwnSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public findOwnSpecial(arg0: string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public static findOwnStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public findOwnStatic(arg0: string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class Guards {
                    public static isOfClass(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static isInstance(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static isInstance(arg0: java.lang.Class<any>, arg1: int, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static isArray(arg0: int, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static canReferenceDirectly(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
                    public static asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static asType(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static getClassGuard(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static getInstanceOfGuard(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static getIdentityGuard(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public static isNull(): java.lang.invoke.MethodHandle
                    public static isNotNull(): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class BottomGuardingDynamicLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                    public static INSTANCE: jdk.internal.dynalink.support.BottomGuardingDynamicLinker
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class TypeUtilities {
                    public static getCommonLosslessConversionType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.Class<any>
                    public static isMethodInvocationConvertible(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public static isConvertibleWithoutLoss(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public static isPotentiallyConvertible(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public static areAssignable(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public static isSubtype(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public static getPrimitiveTypeByName(arg0: string): java.lang.Class<any>
                    public static getPrimitiveType(arg0: java.lang.Class<any>): java.lang.Class<any>
                    public static getWrapperType(arg0: java.lang.Class<any>): java.lang.Class<any>
                    public static isWrapperType(arg0: java.lang.Class<any>): boolean
                    public static class: java.lang.Class<any>
                }
                class DefaultPrelinkFilter implements jdk.internal.dynalink.GuardedInvocationFilter {
                    public constructor()
                    public filter(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class LinkRequestImpl implements jdk.internal.dynalink.linker.LinkRequest {
                    public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object, arg2: int, arg3: boolean, ...arg4: java.lang.Object[])
                    public getArguments(): java.lang.Object[]
                    public getReceiver(): java.lang.Object
                    public getCallSiteDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
                    public getCallSiteToken(): java.lang.Object
                    public isCallSiteUnstable(): boolean
                    public getLinkCount(): int
                    public withoutRuntimeContext(): jdk.internal.dynalink.linker.LinkRequest
                    public replaceArguments(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object[]): jdk.internal.dynalink.linker.LinkRequest
                    public static class: java.lang.Class<any>
                }
                class RuntimeContextLinkRequestImpl extends jdk.internal.dynalink.support.LinkRequestImpl {
                    public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object, arg2: int, arg3: boolean, arg4: java.lang.Object[], arg5: int)
                    public withoutRuntimeContext(): jdk.internal.dynalink.linker.LinkRequest
                    public replaceArguments(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object[]): jdk.internal.dynalink.linker.LinkRequest
                    public static class: java.lang.Class<any>
                }
                class DefaultCallSiteDescriptor extends jdk.internal.dynalink.support.AbstractCallSiteDescriptor {
                    public getNameTokenCount(): int
                    public getNameToken(arg0: int): string
                    public getMethodType(): java.lang.invoke.MethodType
                    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
                class LookupCallSiteDescriptor extends jdk.internal.dynalink.support.DefaultCallSiteDescriptor {
                    public getLookup(): java.lang.invoke.MethodHandles$Lookup
                    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
                class DefaultInternalObjectFilter implements jdk.internal.dynalink.linker.MethodHandleTransformer {
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle)
                    public transform(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class CompositeGuardingDynamicLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker , java.io.Serializable {
                    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingDynamicLinker>)
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory {
                    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingTypeConverterFactory>, arg1: jdk.internal.dynalink.linker.MethodTypeConversionStrategy | jdk.internal.dynalink.linker.MethodTypeConversionStrategy$$Lambda)
                    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$NotCacheableConverter extends java.lang.RuntimeException {
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$4 implements java.security.PrivilegedAction<java.lang.ClassLoader> {
                    public run(): java.lang.ClassLoader
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$3 extends java.lang.ClassValue<jdk.internal.dynalink.support.ClassMap<java.lang.Boolean>> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.support.ClassMap<java.lang.Boolean>
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$3$1 extends jdk.internal.dynalink.support.ClassMap<java.lang.Boolean> {
                    protected computeValue(arg0: java.lang.Class<any>): boolean
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$2 extends java.lang.ClassValue<jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle>> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle>
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$2$1 extends jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle> {
                    protected computeValue(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$1 extends java.lang.ClassValue<jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle>> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle>
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TypeConverterFactory$1$1 extends jdk.internal.dynalink.support.ClassMap<java.lang.invoke.MethodHandle> {
                    protected computeValue(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NameCodec {
                    public static encode(arg0: string): string
                    public static decode(arg0: string): string
                    public static class: java.lang.Class<any>
                }
                class ClassLoaderGetterContextProvider {
                    public static GET_CLASS_LOADER_CONTEXT: java.security.AccessControlContext
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class CompositeTypeBasedGuardingDynamicLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , java.io.Serializable {
                    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker>)
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static optimize(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingDynamicLinker>): java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>
                    public static class: java.lang.Class<any>
                }
                class CompositeTypeBasedGuardingDynamicLinker$ClassToLinker extends java.lang.ClassValue<java.util.List<jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker>> {
                    protected computeValue(arg0: java.lang.Class<any>): java.util.List<jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker>
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class UnnamedDynCallSiteDescriptor extends jdk.internal.dynalink.support.AbstractCallSiteDescriptor {
                    public getNameTokenCount(): int
                    public getNameToken(arg0: int): string
                    public getMethodType(): java.lang.invoke.MethodType
                    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
                abstract class ClassMap<T> {
                    protected constructor(arg0: java.lang.ClassLoader)
                    protected computeValue(arg0: java.lang.Class<any>): T
                    public get(arg0: java.lang.Class<any>): T
                    public static class: java.lang.Class<any>
                }
                class ClassMap$1 implements java.security.PrivilegedAction<java.lang.ClassLoader> {
                    public run(): java.lang.ClassLoader
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractRelinkableCallSite extends java.lang.invoke.MutableCallSite implements jdk.internal.dynalink.RelinkableCallSite {
                    protected constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor)
                    public getDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
                    public initialize(arg0: java.lang.invoke.MethodHandle): void
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractCallSiteDescriptor implements jdk.internal.dynalink.CallSiteDescriptor {
                    public constructor()
                    public getName(): string
                    public getLookup(): java.lang.invoke.MethodHandles$Lookup
                    public equals(arg0: java.lang.Object): boolean
                    public equals(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
            class DynamicLinkerFactory {
                public static DEFAULT_UNSTABLE_RELINK_THRESHOLD: int
                public constructor()
                public setClassLoader(arg0: java.lang.ClassLoader): void
                public setPrioritizedLinkers(arg0: java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>): void
                public setPrioritizedLinkers(...arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker[]): void
                public setPrioritizedLinker(arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker | jdk.internal.dynalink.linker.GuardingDynamicLinker$$Lambda): void
                public setFallbackLinkers(arg0: java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>): void
                public setFallbackLinkers(...arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker[]): void
                public setRuntimeContextArgCount(arg0: int): void
                public setSyncOnRelink(arg0: boolean): void
                public setUnstableRelinkThreshold(arg0: int): void
                public setPrelinkFilter(arg0: jdk.internal.dynalink.GuardedInvocationFilter | jdk.internal.dynalink.GuardedInvocationFilter$$Lambda): void
                public setAutoConversionStrategy(arg0: jdk.internal.dynalink.linker.MethodTypeConversionStrategy | jdk.internal.dynalink.linker.MethodTypeConversionStrategy$$Lambda): void
                public setInternalObjectsFilter(arg0: jdk.internal.dynalink.linker.MethodHandleTransformer | jdk.internal.dynalink.linker.MethodHandleTransformer$$Lambda): void
                public createLinker(): jdk.internal.dynalink.DynamicLinker
                public static class: java.lang.Class<any>
            }
            class DynamicLinkerFactory$1 implements java.security.PrivilegedAction<java.lang.ClassLoader> {
                public run(): java.lang.ClassLoader
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class DefaultBootstrapper {
                public static bootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.CallSite
                public static publicBootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.CallSite
                public static class: java.lang.Class<any>
            }
            class NoSuchDynamicMethodException extends java.lang.RuntimeException {
                public constructor(arg0: string)
                public static class: java.lang.Class<any>
            }
            class DynamicLinker {
                public link<T extends jdk.internal.dynalink.RelinkableCallSite>(arg0: T): T
                public getLinkerServices<T extends jdk.internal.dynalink.RelinkableCallSite>(): jdk.internal.dynalink.linker.LinkerServices
                public static getLinkedCallSiteLocation<T extends jdk.internal.dynalink.RelinkableCallSite>(): java.lang.StackTraceElement
                public static getRelinkedCallSiteLocation<T extends jdk.internal.dynalink.RelinkableCallSite>(): java.lang.StackTraceElement
                public static class: java.lang.Class<any>
            }
            interface GuardedInvocationFilter {
                filter(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
            }
            interface GuardedInvocationFilter$$Lambda {
                (arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
            }
            class ChainedCallSite extends jdk.internal.dynalink.support.AbstractRelinkableCallSite {
                public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor)
                protected getMaxChainLength(): int
                public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                protected getPruneSwitchpoints(): java.lang.invoke.MethodHandle
                protected getPruneCatches(): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
            interface RelinkableCallSite {
                initialize(arg0: java.lang.invoke.MethodHandle): void
                getDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
                relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
            }
            class MonomorphicCallSite extends jdk.internal.dynalink.support.AbstractRelinkableCallSite {
                public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor)
                public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                public static class: java.lang.Class<any>
            }
            interface CallSiteDescriptor {
                SCHEME: int
                OPERATOR: int
                NAME_OPERAND: int
                TOKEN_DELIMITER: string
                OPERATOR_DELIMITER: string
                getNameTokenCount(): int
                getNameToken(arg0: int): string
                getName(): string
                getMethodType(): java.lang.invoke.MethodType
                getLookup(): java.lang.invoke.MethodHandles$Lookup
                changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
            }
            namespace linker {
                interface MethodHandleTransformer {
                    transform(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                }
                interface MethodHandleTransformer$$Lambda {
                    (arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                }
                interface GuardingTypeConverterFactory {
                    convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                }
                interface GuardingTypeConverterFactory$$Lambda {
                    (arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                }
                class GuardedTypeConversion {
                    public constructor(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: boolean)
                    public getConversionInvocation(): jdk.internal.dynalink.linker.GuardedInvocation
                    public isCacheable(): boolean
                    public static class: java.lang.Class<any>
                }
                interface MethodTypeConversionStrategy {
                    asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                }
                interface MethodTypeConversionStrategy$$Lambda {
                    (arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                }
                class GuardedInvocation {
                    public constructor(arg0: java.lang.invoke.MethodHandle)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.SwitchPoint)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint, arg3: java.lang.Class<java.lang.Throwable>)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint[], arg3: java.lang.Class<java.lang.Throwable>)
                    public getInvocation(): java.lang.invoke.MethodHandle
                    public getGuard(): java.lang.invoke.MethodHandle
                    public getSwitchPoints(): java.lang.invoke.SwitchPoint[]
                    public getException(): java.lang.Class<java.lang.Throwable>
                    public hasBeenInvalidated(): boolean
                    public assertType(arg0: java.lang.invoke.MethodType): void
                    public replaceMethods(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): jdk.internal.dynalink.linker.GuardedInvocation
                    public addSwitchPoint(arg0: java.lang.invoke.SwitchPoint): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asTypeSafeReturn(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public filterArguments(arg0: int, ...arg1: java.lang.invoke.MethodHandle[]): jdk.internal.dynalink.linker.GuardedInvocation
                    public dropArguments(arg0: int, arg1: java.util.List<java.lang.Class<any>>): jdk.internal.dynalink.linker.GuardedInvocation
                    public dropArguments(arg0: int, ...arg1: java.lang.Class<any>[]): jdk.internal.dynalink.linker.GuardedInvocation
                    public compose(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public compose(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                interface LinkerServices {
                    asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    asTypeLosslessReturn(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                }
                class LinkerServices$Implementation {
                    public constructor()
                    public static asTypeLosslessReturn(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                interface ConversionComparator {
                    compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                }
                interface ConversionComparator$$Lambda {
                    (arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                }
                class ConversionComparator$Comparison extends java.lang.Enum<jdk.internal.dynalink.linker.ConversionComparator$Comparison> {
                    public static INDETERMINATE: jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public static TYPE_1_BETTER: jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public static TYPE_2_BETTER: jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public static values(): jdk.internal.dynalink.linker.ConversionComparator$Comparison[]
                    public static valueOf(arg0: string): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public static class: java.lang.Class<any>
                }
                interface LinkRequest {
                    getCallSiteDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
                    getCallSiteToken(): java.lang.Object
                    getArguments(): java.lang.Object[]
                    getReceiver(): java.lang.Object
                    getLinkCount(): int
                    isCallSiteUnstable(): boolean
                    withoutRuntimeContext(): jdk.internal.dynalink.linker.LinkRequest
                    replaceArguments(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object[]): jdk.internal.dynalink.linker.LinkRequest
                }
                interface GuardingDynamicLinker {
                    getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                }
                interface GuardingDynamicLinker$$Lambda {
                    (arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                }
                interface TypeBasedGuardingDynamicLinker extends jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    canLinkType(arg0: java.lang.Class<any>): boolean
                }
            }
        }
    }
    namespace nashorn {
        namespace tools {
            class Shell {
                public static SUCCESS: int
                public static COMMANDLINE_ERROR: int
                public static COMPILATION_ERROR: int
                public static RUNTIME_ERROR: int
                public static IO_ERROR: int
                public static INTERNAL_ERROR: int
                protected constructor()
                public static main(arg0: java.lang.String[]): void
                public static main(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, arg3: java.lang.String[]): int
                protected run(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, arg3: java.lang.String[]): int
                protected apply(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ShellFunctions {
                public static INPUT: java.lang.invoke.MethodHandle
                public static EVALINPUT: java.lang.invoke.MethodHandle
                public static input(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                public static evalinput(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
        namespace internal {
            namespace scripts {
                class JS {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class JO extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static getInitialMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    public static allocate(arg0: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.ScriptObject
                    public static class: java.lang.Class<any>
                }
                class JD extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static getInitialMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    public static allocate(arg0: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.ScriptObject
                    public static class: java.lang.Class<any>
                }
            }
            class AssertsEnabled {
                public constructor()
                public static assertsEnabled(): boolean
                public static class: java.lang.Class<any>
            }
            class IntDeque {
                public constructor()
                public push(arg0: int): void
                public pop(): int
                public peek(): int
                public getAndIncrement(): int
                public decrementAndGet(): int
                public isEmpty(): boolean
                public static class: java.lang.Class<any>
            }
            namespace codegen {
                class FindScopeDepths extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class FindScopeDepths$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public static class: java.lang.Class<any>
                }
                class FunctionSignature {
                    public constructor(arg0: boolean, arg1: boolean, arg2: jdk.nashorn.internal.codegen.types.Type, arg3: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: boolean, arg1: boolean, arg2: jdk.nashorn.internal.codegen.types.Type, arg3: int)
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode)
                    public toString(): string
                    public size(): int
                    public getParamTypes(): jdk.nashorn.internal.codegen.types.Type[]
                    public getMethodType(): java.lang.invoke.MethodType
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public static class: java.lang.Class<any>
                }
                class ProgramPoints extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class ApplySpecialization extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class ApplySpecialization$2 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class ApplySpecialization$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public static class: java.lang.Class<any>
                }
                class ApplySpecialization$AppliesFoundException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<any>
                }
                class ApplySpecialization$TransformFailedException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<any>
                }
                class AssignSymbols extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class AssignSymbols$2 {
                    public static class: java.lang.Class<any>
                }
                class AssignSymbols$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class CacheAst extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Splitter extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static SPLIT_THRESHOLD: long
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler, arg1: jdk.nashorn.internal.ir.FunctionNode, arg2: jdk.nashorn.internal.codegen.CompileUnit)
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    protected findUnit(arg0: long): jdk.nashorn.internal.codegen.CompileUnit
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode): jdk.nashorn.internal.ir.Node
                    public leaveObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): jdk.nashorn.internal.ir.Node
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public static class: java.lang.Class<any>
                }
                class Splitter$2 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public static class: java.lang.Class<any>
                }
                class Splitter$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class FoldConstants extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                    public leaveTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class FoldConstants$2 {
                    public static class: java.lang.Class<any>
                }
                class FoldConstants$BinaryNodeConstantEvaluator extends jdk.nashorn.internal.codegen.FoldConstants$ConstantEvaluator<jdk.nashorn.internal.ir.BinaryNode> {
                    protected eval(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
                class FoldConstants$UnaryNodeConstantEvaluator extends jdk.nashorn.internal.codegen.FoldConstants$ConstantEvaluator<jdk.nashorn.internal.ir.UnaryNode> {
                    protected eval(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
                class FoldConstants$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class FoldConstants$ConstantEvaluator<T extends jdk.nashorn.internal.ir.Node> {
                    protected parent: T
                    protected token: long
                    protected finish: int
                    protected constructor(arg0: T)
                    protected eval(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
                abstract class ReplaceCompileUnits extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): jdk.nashorn.internal.ir.Node
                    public leaveObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Lower extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.ir.BlockLexicalContext> implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                    public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                    public leaveBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                    public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public leaveCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                    public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Lower$5 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Lower$4 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                    public static class: java.lang.Class<any>
                }
                class Lower$3 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Lower$2 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class Lower$1 extends jdk.nashorn.internal.ir.BlockLexicalContext {
                    public popStatements(): java.util.List<jdk.nashorn.internal.ir.Statement>
                    protected afterSetStatements(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public static class: java.lang.Class<any>
                }
                class WeighNodes extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.ir.LexicalContext> {
                    public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                    public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
                    public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode): boolean
                    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                    public leavePropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                    public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                    public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                    public leaveADD(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveAND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveGE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveGT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class SplitIntoFunctions extends jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.BlockLexicalContext> {
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                    public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): jdk.nashorn.internal.ir.Node
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                    public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class SplitIntoFunctions$SplitState {
                    public static class: java.lang.Class<any>
                }
                class SplitIntoFunctions$FunctionState {
                    public static class: java.lang.Class<any>
                }
                class SplitIntoFunctions$1 extends jdk.nashorn.internal.ir.BlockLexicalContext {
                    protected afterSetStatements(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public static class: java.lang.Class<any>
                }
                class SpillObjectCreator extends jdk.nashorn.internal.codegen.ObjectCreator<jdk.nashorn.internal.ir.Expression> {
                    public createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected loadValue(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    protected loadValue(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesCalculator extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                    public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                    public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence {
                    public constructor()
                    public static getLocationDescriptor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: jdk.nashorn.internal.codegen.types.Type[]): java.lang.Object
                    public static store(arg0: java.lang.Object, arg1: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>): void
                    public static load(arg0: java.lang.Object): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public static getVersionDirName(): string
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$PathAndTime implements java.lang.Comparable<jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime> {
                    public compareTo(arg0: jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime): int
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$9 implements java.util.function$.Predicate<java.nio.file.Path> {
                    public test(arg0: java.nio.file.Path): boolean
                    public test(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$8 implements java.util.function$.Function<java.nio.file.Path, jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime> {
                    public apply(arg0: java.nio.file.Path): jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime
                    public apply(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$7 implements java.util.function$.Function<jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime, java.nio.file.Path> {
                    public apply(arg0: jdk.nashorn.internal.codegen.OptimisticTypesPersistence$PathAndTime): java.nio.file.Path
                    public apply(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$6 implements java.util.function$.IntFunction<java.nio.file.Path[]> {
                    public apply(arg0: int): java.nio.file.Path[]
                    public apply(arg0: int): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$5 extends java.util.TimerTask {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$4 implements java.security.PrivilegedAction<java.io.File> {
                    public run(): java.io.File
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$3 implements java.security.PrivilegedAction<java.io.File> {
                    public run(): java.io.File
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$2 implements java.security.PrivilegedAction<java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>> {
                    public run(): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$1 implements java.security.PrivilegedAction<java.lang.Void> {
                    public run(): java.lang.Void
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class OptimisticTypesPersistence$LocationDescriptor {
                    public static class: java.lang.Class<any>
                }
                class DumpBytecode {
                    public constructor()
                    public static dumpBytecode(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.logging.DebugLogger, arg2: byte[], arg3: string): void
                    public static class: java.lang.Class<any>
                }
                class LocalStateRestorationInfo {
                    public getLocalVariableTypes(): jdk.nashorn.internal.codegen.types.Type[]
                    public getStackLoads(): int[]
                    public static class: java.lang.Class<any>
                }
                class BranchOptimizer {
                    public static class: java.lang.Class<any>
                }
                class BranchOptimizer$1 {
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): boolean
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                    public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): boolean
                    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                    public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                    public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                    public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                    public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
                    public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                    public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                    public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                    public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                    public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$2 {
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): jdk.nashorn.internal.ir.Node
                    public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$SymbolConversions {
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$TypeHolderExpression extends jdk.nashorn.internal.ir.Expression {
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$LvarType extends java.lang.Enum<jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType> {
                    public static UNDEFINED: jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static BOOLEAN: jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static INT: jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static DOUBLE: jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static OBJECT: jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static values(): jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.codegen.LocalVariableTypesCalculator$LvarType
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$JumpTarget {
                    public static class: java.lang.Class<any>
                }
                class LocalVariableTypesCalculator$JumpOrigin {
                    public static class: java.lang.Class<any>
                }
                class SharedScopeCall {
                    public static FAST_SCOPE_CALL_THRESHOLD: int
                    public static SLOW_SCOPE_CALL_THRESHOLD: int
                    public static FAST_SCOPE_GET_THRESHOLD: int
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected setClassAndName(arg0: jdk.nashorn.internal.codegen.CompileUnit, arg1: string): void
                    public generateInvoke(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    protected generateScopeCall(): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class MapCreator<T> {
                    public static class: java.lang.Class<any>
                }
                class MapTuple<T> {
                    public getValueType(): java.lang.Class<any>
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CodeGeneratorLexicalContext extends jdk.nashorn.internal.ir.LexicalContext {
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.codegen.CodeGeneratorLexicalContext> implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                    public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                    public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                    public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                    public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
                    public enterSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): boolean
                    public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                    public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                    public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                    public loadVOID(arg0: jdk.nashorn.internal.ir.UnaryNode, arg1: jdk.nashorn.internal.codegen.CodeGenerator$TypeBounds): void
                    public loadADD(arg0: jdk.nashorn.internal.ir.BinaryNode, arg1: jdk.nashorn.internal.codegen.CodeGenerator$TypeBounds): void
                    public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$33 {
                    public static class: java.lang.Class<any>
                }
                interface CodeGenerator$SplitLiteralCreator {
                    populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                }
                interface CodeGenerator$SplitLiteralCreator$$Lambda {
                    (arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                }
                class CodeGenerator$ContinuationInfo {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$OptimismExceptionHandlerSpec implements java.lang.Comparable<jdk.nashorn.internal.codegen.CodeGenerator$OptimismExceptionHandlerSpec> {
                    public compareTo(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimismExceptionHandlerSpec): int
                    public toString(): string
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$Store<T extends jdk.nashorn.internal.ir.Expression> {
                    protected assignNode: T
                    protected constructor(arg0: T, arg1: jdk.nashorn.internal.ir.Expression)
                    protected constructor(arg0: T)
                    protected isSelfModifying(): boolean
                    protected storeNonDiscard(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$Store$2 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$Store$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$SelfModifyingStore<T extends jdk.nashorn.internal.ir.Expression> extends jdk.nashorn.internal.codegen.CodeGenerator$Store<T> {
                    protected constructor(arg0: T, arg1: jdk.nashorn.internal.ir.Expression)
                    protected isSelfModifying(): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$32 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryArith {
                    protected op(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$31 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryArith {
                    protected op(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$30 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryArith {
                    protected op(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$29 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryArith {
                    protected op(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$BinaryArith {
                    protected op(arg0: int): void
                    protected evaluate(arg0: jdk.nashorn.internal.ir.BinaryNode, arg1: jdk.nashorn.internal.codegen.CodeGenerator$TypeBounds): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$BinaryArith$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$28 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryOptimisticSelfAssignment {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$27 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$26 extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$26$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$25 extends jdk.nashorn.internal.codegen.CodeGenerator$BinarySelfAssignment {
                    protected op(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$24 extends jdk.nashorn.internal.codegen.CodeGenerator$BinarySelfAssignment {
                    protected op(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$23 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryOptimisticSelfAssignment {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$22 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryOptimisticSelfAssignment {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$21 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryOptimisticSelfAssignment {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$20 extends jdk.nashorn.internal.codegen.CodeGenerator$BinarySelfAssignment {
                    protected op(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$19 extends jdk.nashorn.internal.codegen.CodeGenerator$BinarySelfAssignment {
                    protected op(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$18 extends jdk.nashorn.internal.codegen.CodeGenerator$BinarySelfAssignment {
                    protected op(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$17 extends jdk.nashorn.internal.codegen.CodeGenerator$BinaryOptimisticSelfAssignment {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$BinarySelfAssignment extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    protected op(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                abstract class CodeGenerator$BinaryOptimisticSelfAssignment extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    protected op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$BinaryOptimisticSelfAssignment$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$16 extends jdk.nashorn.internal.codegen.CodeGenerator$Store<jdk.nashorn.internal.ir.BinaryNode> {
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$15 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$14 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$13 extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.UnaryNode> {
                    protected evaluate(): void
                    protected storeNonDiscard(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$13$2 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$13$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$12 extends jdk.nashorn.internal.codegen.CodeGenerator$Store<jdk.nashorn.internal.ir.IdentNode> {
                    protected storeNonDiscard(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$11 implements java.util.function$.Supplier<java.lang.Boolean> {
                    public get(): boolean
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$11$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$10 extends jdk.nashorn.internal.codegen.FieldObjectCreator<jdk.nashorn.internal.ir.Expression> {
                    protected loadValue(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    protected loadValue(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$9 extends jdk.nashorn.internal.codegen.MapTuple<jdk.nashorn.internal.ir.Expression> {
                    public getValueType(): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$8 implements java.util.function$.Supplier<java.lang.Boolean> {
                    public get(): boolean
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$8$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                    public enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$7 implements jdk.nashorn.internal.codegen.CodeGenerator$SplitLiteralCreator {
                    public populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$6 extends jdk.nashorn.internal.codegen.FieldObjectCreator<jdk.nashorn.internal.ir.Symbol> {
                    protected loadValue(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    protected loadValue(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$5 extends jdk.nashorn.internal.codegen.MapTuple<jdk.nashorn.internal.ir.Symbol> {
                    public getValueType(): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$4 extends jdk.nashorn.internal.codegen.CodeGenerator$Store<jdk.nashorn.internal.ir.Expression> {
                    protected storeNonDiscard(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$4$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$7 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$6 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$5 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$4 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$3 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$2 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$3$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$2 extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.ir.LexicalContext> {
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): boolean
                    public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                    public enterADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterAND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterADD(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterGE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterGT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterLE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterLT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterNE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                    public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                    public enterNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                    public enterGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): boolean
                    public enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$2$2 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$2$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$TypeBounds {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$LoadFastScopeVar extends jdk.nashorn.internal.codegen.CodeGenerator$LoadScopeVar {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$LoadScopeVar extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                class CodeGenerator$1 extends jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation {
                    public static class: java.lang.Class<any>
                }
                abstract class ObjectCreator<T> implements jdk.nashorn.internal.codegen.CodeGenerator$SplitLiteralCreator {
                    protected propertyMap: jdk.nashorn.internal.runtime.PropertyMap
                    public makeObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected newMapCreator(arg0: java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>): jdk.nashorn.internal.codegen.MapCreator<any>
                    protected loadScope(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected loadMap(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    protected isScope(): boolean
                    protected hasArguments(): boolean
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    protected loadValue(arg0: T, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public static class: java.lang.Class<any>
                }
                abstract class FieldObjectCreator<T> extends jdk.nashorn.internal.codegen.ObjectCreator<T> {
                    public createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    public static class: java.lang.Class<any>
                }
                class Condition extends java.lang.Enum<jdk.nashorn.internal.codegen.Condition> {
                    public static EQ: jdk.nashorn.internal.codegen.Condition
                    public static NE: jdk.nashorn.internal.codegen.Condition
                    public static LE: jdk.nashorn.internal.codegen.Condition
                    public static LT: jdk.nashorn.internal.codegen.Condition
                    public static GE: jdk.nashorn.internal.codegen.Condition
                    public static GT: jdk.nashorn.internal.codegen.Condition
                    public static values(): jdk.nashorn.internal.codegen.Condition[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.codegen.Condition
                    public static class: java.lang.Class<any>
                }
                class Condition$1 {
                    public static class: java.lang.Class<any>
                }
                class Label implements java.io.Serializable {
                    public constructor(arg0: string)
                    public constructor(arg0: jdk.nashorn.internal.codegen.Label)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Label$Stack implements java.lang.Cloneable {
                    public clone(): jdk.nashorn.internal.codegen.Label$Stack
                    public toString(): string
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Namespace {
                    public constructor()
                    public constructor(arg0: jdk.nashorn.internal.codegen.Namespace)
                    public getParent(): jdk.nashorn.internal.codegen.Namespace
                    public uniqueName(arg0: string): string
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<any>
                }
                abstract class CompilationPhase {
                    protected begin(arg0: jdk.nashorn.internal.codegen.Compiler, arg1: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    protected end(arg0: jdk.nashorn.internal.codegen.Compiler, arg1: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$1 {
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$InstallPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$BytecodeGenerationPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ReinitializeCachedPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ReinitializeCachedPhase$1 extends jdk.nashorn.internal.codegen.ReplaceCompileUnits {
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ReuseCompileUnitsPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ReuseCompileUnitsPhase$1 extends jdk.nashorn.internal.codegen.ReplaceCompileUnits {
                    public leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$LocalVariableTypeCalculationPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$OptimisticTypeAssignmentPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$DeclareLocalSymbolsPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$DeclareLocalSymbolsPhase$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ScopeDepthComputationPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$SymbolAssignmentPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$CacheAstPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ProgramPointPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$SplittingPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$SplittingPhase$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): jdk.nashorn.internal.ir.LiteralNode<any>
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ApplySpecializationPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$LoweringPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompilationPhase$ConstantFoldingPhase extends jdk.nashorn.internal.codegen.CompilationPhase {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class TypeEvaluator {
                    public static class: java.lang.Class<any>
                }
                class TypeMap {
                    public constructor(arg0: int, arg1: java.lang.invoke.MethodType, arg2: boolean)
                    public getParameterTypes(arg0: int): jdk.nashorn.internal.codegen.types.Type[]
                    public needsCallee(): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class ConstantData {
                    public add(arg0: string): int
                    public add(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class ConstantData$PropertyMapWrapper {
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class ConstantData$ArrayWrapper {
                    public constructor(arg0: java.lang.Object)
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class CompileUnit implements java.lang.Comparable<jdk.nashorn.internal.codegen.CompileUnit> , java.io.Serializable {
                    public static getEmittedUnitCount(): int
                    public isUsed(): boolean
                    public hasCode(): boolean
                    public setUsed(): void
                    public getCode(): java.lang.Class<any>
                    public isInitializing(arg0: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData, arg1: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public canHold(arg0: long): boolean
                    public getClassEmitter(): jdk.nashorn.internal.codegen.ClassEmitter
                    public getUnitClassName(): string
                    public toString(): string
                    public compareTo(arg0: jdk.nashorn.internal.codegen.CompileUnit): int
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class MethodEmitter {
                    protected functionNode: jdk.nashorn.internal.ir.FunctionNode
                    public begin(): void
                    public end(): void
                    public toString(): string
                    public athrow(): void
                    protected getTypesFromStack(arg0: int): jdk.nashorn.internal.codegen.types.Type[]
                    public static class: java.lang.Class<any>
                }
                class MethodEmitter$LocalVariableDef {
                    public static class: java.lang.Class<any>
                }
                class ObjectClassGenerator implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static PRIMITIVE_FIELD_TYPE: jdk.nashorn.internal.codegen.types.Type
                    public static PACK_DOUBLE: java.lang.invoke.MethodHandle
                    public static UNPACK_DOUBLE: java.lang.invoke.MethodHandle
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context, arg1: boolean)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static pack(arg0: java.lang.Number): long
                    public static getClassName(arg0: int, arg1: boolean): string
                    public static getClassName(arg0: int, arg1: int, arg2: boolean): string
                    public static getFieldCount(arg0: java.lang.Class<any>): int
                    public static getFieldName(arg0: int, arg1: jdk.nashorn.internal.codegen.types.Type): string
                    public generate(arg0: string): byte[]
                    public generate(arg0: int): byte[]
                    public generate(arg0: int, arg1: int): byte[]
                    public static createGetter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle, arg4: int): java.lang.invoke.MethodHandle
                    public static createSetter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static createGuardBoxedPrimitiveSetter(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class ClassEmitter {
                    protected cw: jdk.internal.org.objectweb.asm.ClassWriter
                    protected context: jdk.nashorn.internal.runtime.Context
                    public getMethodNames(): java.util.Set<java.lang.String>
                    public getMethodCount(): int
                    public getClinitCount(): int
                    public getInitCount(): int
                    public getFieldCount(): int
                    public begin(): void
                    public end(): void
                    public static class: java.lang.Class<any>
                }
                class ClassEmitter$Flag extends java.lang.Enum<jdk.nashorn.internal.codegen.ClassEmitter$Flag> {
                    public static HANDLE_STATIC: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static HANDLE_NEWSPECIAL: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static HANDLE_SPECIAL: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static HANDLE_VIRTUAL: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static HANDLE_INTERFACE: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static FINAL: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static STATIC: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static PUBLIC: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static PRIVATE: jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static values(): jdk.nashorn.internal.codegen.ClassEmitter$Flag[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.codegen.ClassEmitter$Flag
                    public static class: java.lang.Class<any>
                }
                class ClassEmitter$2 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.Context> {
                    public run(): jdk.nashorn.internal.runtime.Context
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ClassEmitter$1 extends jdk.internal.org.objectweb.asm.ClassWriter {
                    protected getCommonSuperClass(arg0: string, arg1: string): string
                    public static class: java.lang.Class<any>
                }
                class Compiler implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static SCRIPTS_PACKAGE: string
                    public static OBJECTS_PACKAGE: string
                    public static forInitialCompilation(arg0: jdk.nashorn.internal.runtime.CodeInstaller, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean): jdk.nashorn.internal.codegen.Compiler
                    public static forNoInstallerCompilation(arg0: jdk.nashorn.internal.runtime.Context, arg1: jdk.nashorn.internal.runtime.Source, arg2: boolean): jdk.nashorn.internal.codegen.Compiler
                    public static forOnDemandCompilation(arg0: jdk.nashorn.internal.runtime.CodeInstaller, arg1: jdk.nashorn.internal.runtime.Source, arg2: boolean, arg3: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData, arg4: jdk.nashorn.internal.codegen.TypeMap, arg5: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>, arg6: java.lang.Object, arg7: int[], arg8: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.codegen.Compiler
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getInvalidatedProgramPoints(): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public compile(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: jdk.nashorn.internal.codegen.Compiler$CompilationPhases): jdk.nashorn.internal.ir.FunctionNode
                    public persistClassInfo(arg0: string, arg1: jdk.nashorn.internal.ir.FunctionNode): void
                    public static updateCompilationId(arg0: int): void
                    public static binaryName(arg0: string): string
                    public static class: java.lang.Class<any>
                }
                class Compiler$2 implements java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement> {
                    public compare(arg0: jdk.nashorn.internal.ir.debug.ClassHistogramElement, arg1: jdk.nashorn.internal.ir.debug.ClassHistogramElement): int
                    public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class Compiler$1 implements java.util.function$.Consumer<jdk.nashorn.internal.runtime.logging.DebugLogger> {
                    public accept(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger): void
                    public accept(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class Compiler$CompilationPhases implements java.lang.Iterable<jdk.nashorn.internal.codegen.CompilationPhase> {
                    public static RECOMPILE_CACHED_UPTO_BYTECODE: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static GENERATE_BYTECODE_AND_INSTALL: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_UPTO_BYTECODE: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_ALL_NO_INSTALL: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_ALL: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_ALL_CACHED: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static GENERATE_BYTECODE_AND_INSTALL_RESTOF: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_ALL_RESTOF: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public static COMPILE_CACHED_RESTOF: jdk.nashorn.internal.codegen.Compiler$CompilationPhases
                    public toString(): string
                    public iterator(): java.util.Iterator<jdk.nashorn.internal.codegen.CompilationPhase>
                    public static class: java.lang.Class<any>
                }
                namespace types {
                    class BooleanType extends jdk.nashorn.internal.codegen.types.Type {
                        protected constructor()
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                    class LongType extends jdk.nashorn.internal.codegen.types.Type {
                        protected constructor(arg0: string)
                        protected constructor()
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                    class NumberType extends jdk.nashorn.internal.codegen.types.NumericType {
                        protected constructor()
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: boolean): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public sub(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public mul(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public div(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public rem(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public neg(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public static class: java.lang.Class<any>
                    }
                    class IntType extends jdk.nashorn.internal.codegen.types.BitwiseType {
                        protected constructor()
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public shr(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public sar(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public shl(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public and(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public or(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public xor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public sub(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public mul(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public div(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public rem(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public neg(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: boolean): jdk.nashorn.internal.codegen.types.Type
                        public cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                    interface BytecodeArrayOps {
                        aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        arraylength(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                    }
                    class ObjectType extends jdk.nashorn.internal.codegen.types.Type {
                        protected constructor()
                        protected constructor(arg0: java.lang.Class<any>)
                        public toString(): string
                        public getShortDescriptor(): string
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public getBytecodeStackType(): char
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class ArrayType extends jdk.nashorn.internal.codegen.types.ObjectType implements jdk.nashorn.internal.codegen.types.BytecodeArrayOps {
                        protected constructor(arg0: java.lang.Class<any>)
                        public getElementType(): jdk.nashorn.internal.codegen.types.Type
                        public astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public arraylength(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public toString(): string
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public getBytecodeStackType(): char
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public getShortDescriptor(): string
                        public static class: java.lang.Class<any>
                    }
                    interface BytecodeBitwiseOps {
                        shr(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        sar(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        shl(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        and(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        or(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        xor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                    }
                    interface BytecodeNumericOps {
                        neg(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        sub(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        mul(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        div(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        rem(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: boolean): jdk.nashorn.internal.codegen.types.Type
                    }
                    abstract class NumericType extends jdk.nashorn.internal.codegen.types.Type implements jdk.nashorn.internal.codegen.types.BytecodeNumericOps {
                        protected constructor(arg0: string, arg1: java.lang.Class<any>, arg2: int, arg3: int)
                        public static class: java.lang.Class<any>
                    }
                    abstract class BitwiseType extends jdk.nashorn.internal.codegen.types.NumericType implements jdk.nashorn.internal.codegen.types.BytecodeBitwiseOps {
                        protected constructor(arg0: string, arg1: java.lang.Class<any>, arg2: int, arg3: int)
                        public static class: java.lang.Class<any>
                    }
                    interface BytecodeOps {
                        dup(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        swap(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    }
                    abstract class Type implements java.lang.Comparable<jdk.nashorn.internal.codegen.types.Type> , jdk.nashorn.internal.codegen.types.BytecodeOps , java.io.Serializable {
                        protected static MIN_WEIGHT: int
                        protected static MAX_WEIGHT: int
                        public static BOOLEAN: jdk.nashorn.internal.codegen.types.Type
                        public static INT: jdk.nashorn.internal.codegen.types.BitwiseType
                        public static NUMBER: jdk.nashorn.internal.codegen.types.NumericType
                        public static LONG: jdk.nashorn.internal.codegen.types.Type
                        public static STRING: jdk.nashorn.internal.codegen.types.Type
                        public static CHARSEQUENCE: jdk.nashorn.internal.codegen.types.Type
                        public static OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static UNDEFINED: jdk.nashorn.internal.codegen.types.Type
                        public static SCRIPT_OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static INT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static LONG_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static NUMBER_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static OBJECT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static THIS: jdk.nashorn.internal.codegen.types.Type
                        public static SCOPE: jdk.nashorn.internal.codegen.types.Type
                        public static UNKNOWN: jdk.nashorn.internal.codegen.types.Type
                        public static SLOT_2: jdk.nashorn.internal.codegen.types.Type
                        public getWeight(): int
                        public getTypeClass(): java.lang.Class<any>
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public static getMethodDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type, ...arg1: jdk.nashorn.internal.codegen.types.Type[]): string
                        public static getMethodDescriptor(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): string
                        public static getShortSignatureDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type): char
                        public static getMethodReturnType(arg0: string): jdk.nashorn.internal.codegen.types.Type
                        public static getMethodArguments(arg0: string): jdk.nashorn.internal.codegen.types.Type[]
                        public static writeTypeMap(arg0: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>, arg1: java.io.DataOutput): void
                        public static readTypeMap(arg0: java.io.DataInput): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                        public getInternalName(): string
                        public static getInternalName(arg0: java.lang.Class<any>): string
                        public isUnknown(): boolean
                        public isJSPrimitive(): boolean
                        public isBoolean(): boolean
                        public isInteger(): boolean
                        public isLong(): boolean
                        public isNumber(): boolean
                        public isNumeric(): boolean
                        public isArray(): boolean
                        public isCategory2(): boolean
                        public isObject(): boolean
                        public isPrimitive(): boolean
                        public isString(): boolean
                        public isCharSequence(): boolean
                        public isEquivalentTo(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): boolean
                        public isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static areEquivalent(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): boolean
                        public getSlots(): int
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static widest(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.Class<any>
                        public static widestReturnType(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static generic(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public narrowerThan(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public widerThan(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public narrowest(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public widest(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public getDescriptor(): string
                        public getShortDescriptor(): string
                        public toString(): string
                        public static typeFor(arg0: java.lang.Class<any>): jdk.nashorn.internal.codegen.types.Type
                        public compareTo(arg0: jdk.nashorn.internal.codegen.types.Type): int
                        public dup(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public swap(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        protected static pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): void
                        protected readResolve(): java.lang.Object
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class Type$7 extends jdk.nashorn.internal.codegen.types.Type$ValueLessType {
                        public getDescriptor(): string
                        public getBytecodeStackType(): char
                        public static class: java.lang.Class<any>
                    }
                    class Type$6 extends jdk.nashorn.internal.codegen.types.Type$ValueLessType {
                        public getDescriptor(): string
                        public getBytecodeStackType(): char
                        public static class: java.lang.Class<any>
                    }
                    abstract class Type$ValueLessType extends jdk.nashorn.internal.codegen.types.Type {
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    interface Type$Unknown {
                    }
                    class Type$5 extends jdk.nashorn.internal.codegen.types.ObjectType {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class Type$4 extends jdk.nashorn.internal.codegen.types.ObjectType {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class Type$3 extends jdk.nashorn.internal.codegen.types.ArrayType {
                        public astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public getElementType(): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                    class Type$2 extends jdk.nashorn.internal.codegen.types.ArrayType {
                        public astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public getElementType(): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                    class Type$1 extends jdk.nashorn.internal.codegen.types.ArrayType {
                        public astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public getElementType(): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                }
                class CompilerConstants extends java.lang.Enum<jdk.nashorn.internal.codegen.CompilerConstants> {
                    public static __FILE__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static __DIR__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static __LINE__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static INIT: jdk.nashorn.internal.codegen.CompilerConstants
                    public static CLINIT: jdk.nashorn.internal.codegen.CompilerConstants
                    public static EVAL: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SOURCE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static CONSTANTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static STRICT_MODE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static DEFAULT_SCRIPT_NAME: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ANON_FUNCTION_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static NESTED_FUNCTION_SEPARATOR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ID_FUNCTION_SEPARATOR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static PROGRAM: jdk.nashorn.internal.codegen.CompilerConstants
                    public static CREATE_PROGRAM_FUNCTION: jdk.nashorn.internal.codegen.CompilerConstants
                    public static THIS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static THIS_DEBUGGER: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SCOPE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static RETURN: jdk.nashorn.internal.codegen.CompilerConstants
                    public static CALLEE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static VARARGS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ARGUMENTS_VAR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ARGUMENTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static EXPLODED_ARGUMENT_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ITERATOR_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SWITCH_TAG_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static EXCEPTION_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static QUICK_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static TEMP_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static LITERAL_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static REGEX_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static JAVA_THIS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static INIT_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static INIT_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static INIT_ARGUMENTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static JS_OBJECT_DUAL_FIELD_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static JS_OBJECT_SINGLE_FIELD_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static ALLOCATE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SPLIT_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SPLIT_ARRAY_ARG: jdk.nashorn.internal.codegen.CompilerConstants
                    public static GET_STRING: jdk.nashorn.internal.codegen.CompilerConstants
                    public static GET_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static SET_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static GET_ARRAY_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static GET_ARRAY_SUFFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static values(): jdk.nashorn.internal.codegen.CompilerConstants[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.codegen.CompilerConstants
                    public static isCompilerConstant(arg0: string): boolean
                    public symbolName(): string
                    public type(): java.lang.Class<any>
                    public slot(): int
                    public descriptor(): string
                    public static className(arg0: java.lang.Class<any>): string
                    public static methodDescriptor(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): string
                    public static typeDescriptor(arg0: java.lang.Class<any>): string
                    public static constructorNoLookup(arg0: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static constructorNoLookup(arg0: string, ...arg1: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static constructorNoLookup(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCallNoLookup(arg0: string, arg1: string, arg2: string): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCallNoLookup(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static staticCallNoLookup(arg0: string, arg1: string, arg2: string): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static staticCallNoLookup(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualCallNoLookup(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static interfaceCallNoLookup(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualField(arg0: string, arg1: string, arg2: string): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static virtualField(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticField(arg0: string, arg1: string, arg2: string): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticField(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static isInternalMethodName(arg0: string): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class CompilerConstants$Call extends jdk.nashorn.internal.codegen.CompilerConstants$Access {
                    protected constructor(arg0: string, arg1: string, arg2: string)
                    protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: string, arg2: string, arg3: string)
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public descriptor(): string
                    public name(): string
                    public className(): string
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                abstract class CompilerConstants$FieldAccess extends jdk.nashorn.internal.codegen.CompilerConstants$Access {
                    protected constructor(arg0: string, arg1: string, arg2: string)
                    protected get(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    protected put(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public descriptor(): string
                    public name(): string
                    public className(): string
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                abstract class CompilerConstants$Access {
                    protected methodHandle: java.lang.invoke.MethodHandle
                    protected className: string
                    protected name: string
                    protected descriptor: string
                    protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: string, arg2: string, arg3: string)
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public className(): string
                    public name(): string
                    public descriptor(): string
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$9 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$8 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$7 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$6 extends jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess {
                    public get(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    public put(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$5 extends jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess {
                    public get(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    public put(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$4 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$3 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$2 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
                class CompilerConstants$1 extends jdk.nashorn.internal.codegen.CompilerConstants$Call {
                    public invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public static class: java.lang.Class<any>
                }
            }
            namespace runtime {
                class NumberToString {
                    public static stringFor(arg0: double): string
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class JSONFunctions {
                    public static quote(arg0: string): string
                    public static parse(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class JSONFunctions$1 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class WithObject extends jdk.nashorn.internal.runtime.Scope {
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findProperty(arg0: string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    protected invokeNoSuchProperty(arg0: string, arg1: boolean, arg2: int): java.lang.Object
                    public setSplitState(arg0: int): void
                    public getSplitState(): int
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    public static withFilterExpression(arg0: java.lang.Object): java.lang.Object
                    public static withFilterScope(arg0: java.lang.Object): java.lang.Object
                    public getExpression(): jdk.nashorn.internal.runtime.ScriptObject
                    public static class: java.lang.Class<any>
                }
                class WithObject$1 extends jdk.nashorn.api.scripting.AbstractJSObject {
                    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class QuotedStringTokenizer {
                    public constructor(arg0: string)
                    public constructor(arg0: string, arg1: string)
                    public countTokens(): int
                    public hasMoreTokens(): boolean
                    public nextToken(): string
                    public static class: java.lang.Class<any>
                }
                class OptimisticReturnFilters {
                    public constructor()
                    public static filterOptimisticReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    public static filterOptimisticReturnValue(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public static ensureInt(arg0: java.lang.Object, arg1: int): int
                    public static ensureNumber(arg0: java.lang.Object, arg1: int): double
                    public static class: java.lang.Class<any>
                }
                class NativeJavaPackage extends jdk.nashorn.internal.runtime.ScriptObject {
                    public constructor(arg0: string, arg1: jdk.nashorn.internal.runtime.ScriptObject)
                    public getClassName(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getName(): string
                    public safeToString(): string
                    public toString(): string
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static __noSuchMethod__(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected invokeNoSuchProperty(arg0: string, arg1: boolean, arg2: int): java.lang.Object
                    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class ScriptingFunctions {
                    public static READLINE: java.lang.invoke.MethodHandle
                    public static READFULLY: java.lang.invoke.MethodHandle
                    public static EXEC: java.lang.invoke.MethodHandle
                    public static EXEC_NAME: string
                    public static OUT_NAME: string
                    public static ERR_NAME: string
                    public static EXIT_NAME: string
                    public static THROW_ON_ERROR_NAME: string
                    public static ENV_NAME: string
                    public static PWD_NAME: string
                    public static readLine(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static readFully(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static exec(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static tokenizeString(arg0: string): java.util.List<java.lang.String>
                    public static class: java.lang.Class<any>
                }
                class ScriptingFunctions$2 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class ScriptingFunctions$1 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class Version {
                    public static version(): string
                    public static fullVersion(): string
                    public static class: java.lang.Class<any>
                }
                class PrototypeObject extends jdk.nashorn.internal.runtime.ScriptObject {
                    protected constructor()
                    protected constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.ScriptFunction)
                    public static getConstructor(arg0: java.lang.Object): java.lang.Object
                    public static setConstructor(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class URIUtils {
                    public static class: java.lang.Class<any>
                }
                class AstSerializer {
                    public static class: java.lang.Class<any>
                }
                class SetMethodCreator {
                    public static class: java.lang.Class<any>
                }
                class SetMethodCreator$SetMethod {
                    public static class: java.lang.Class<any>
                }
                class ListAdapter extends java.util.AbstractList<java.lang.Object> implements java.util.RandomAccess , java.util.Deque<java.lang.Object> {
                    public static create(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ListAdapter
                    public get(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object): java.lang.Object
                    public size(): int
                    public push(arg0: java.lang.Object): void
                    public add(arg0: java.lang.Object): boolean
                    public addFirst(arg0: java.lang.Object): void
                    public addLast(arg0: java.lang.Object): void
                    public add(arg0: int, arg1: java.lang.Object): void
                    public offer(arg0: java.lang.Object): boolean
                    public offerFirst(arg0: java.lang.Object): boolean
                    public offerLast(arg0: java.lang.Object): boolean
                    public pop(): java.lang.Object
                    public remove(): java.lang.Object
                    public removeFirst(): java.lang.Object
                    public removeLast(): java.lang.Object
                    public remove(arg0: int): java.lang.Object
                    protected removeRange(arg0: int, arg1: int): void
                    public poll(): java.lang.Object
                    public pollFirst(): java.lang.Object
                    public pollLast(): java.lang.Object
                    public peek(): java.lang.Object
                    public peekFirst(): java.lang.Object
                    public peekLast(): java.lang.Object
                    public element(): java.lang.Object
                    public getFirst(): java.lang.Object
                    public getLast(): java.lang.Object
                    public descendingIterator(): java.util.Iterator<java.lang.Object>
                    public removeFirstOccurrence(arg0: java.lang.Object): boolean
                    public removeLastOccurrence(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class ListAdapter$2 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ListAdapter$1 implements java.util.Iterator<java.lang.Object> {
                    public hasNext(): boolean
                    public next(): java.lang.Object
                    public remove(): void
                    public static class: java.lang.Class<any>
                }
                class JSONListAdapter extends jdk.nashorn.internal.runtime.ListAdapter implements jdk.nashorn.api.scripting.JSObject {
                    public constructor(arg0: jdk.nashorn.api.scripting.JSObject, arg1: jdk.nashorn.internal.objects.Global)
                    public unwrap(arg0: java.lang.Object): java.lang.Object
                    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public newObject(...arg0: java.lang.Object[]): java.lang.Object
                    public eval(arg0: string): java.lang.Object
                    public getMember(arg0: string): java.lang.Object
                    public getSlot(arg0: int): java.lang.Object
                    public hasMember(arg0: string): boolean
                    public hasSlot(arg0: int): boolean
                    public removeMember(arg0: string): void
                    public setMember(arg0: string, arg1: java.lang.Object): void
                    public setSlot(arg0: int, arg1: java.lang.Object): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<java.lang.Object>
                    public isInstance(arg0: java.lang.Object): boolean
                    public isInstanceOf(arg0: java.lang.Object): boolean
                    public getClassName(): string
                    public isFunction(): boolean
                    public isStrictFunction(): boolean
                    public isArray(): boolean
                    public toNumber(): double
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class FunctionScope extends jdk.nashorn.internal.runtime.Scope {
                    public arguments: jdk.nashorn.internal.runtime.ScriptObject
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.ScriptObject)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.ScriptObject)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    public static class: java.lang.Class<any>
                }
                class GlobalFunctions {
                    public static PARSEINT: java.lang.invoke.MethodHandle
                    public static PARSEINT_OI: java.lang.invoke.MethodHandle
                    public static PARSEINT_Z: java.lang.invoke.MethodHandle
                    public static PARSEINT_I: java.lang.invoke.MethodHandle
                    public static PARSEINT_O: java.lang.invoke.MethodHandle
                    public static PARSEFLOAT: java.lang.invoke.MethodHandle
                    public static IS_NAN_I: java.lang.invoke.MethodHandle
                    public static IS_NAN_J: java.lang.invoke.MethodHandle
                    public static IS_NAN_D: java.lang.invoke.MethodHandle
                    public static IS_NAN: java.lang.invoke.MethodHandle
                    public static IS_FINITE: java.lang.invoke.MethodHandle
                    public static ENCODE_URI: java.lang.invoke.MethodHandle
                    public static ENCODE_URICOMPONENT: java.lang.invoke.MethodHandle
                    public static DECODE_URI: java.lang.invoke.MethodHandle
                    public static DECODE_URICOMPONENT: java.lang.invoke.MethodHandle
                    public static ESCAPE: java.lang.invoke.MethodHandle
                    public static UNESCAPE: java.lang.invoke.MethodHandle
                    public static ANONYMOUS: java.lang.invoke.MethodHandle
                    public static parseInt(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static parseInt(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): double
                    public static parseInt(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static parseFloat(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static isNaN(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isFinite(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static encodeURI(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static encodeURIComponent(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static decodeURI(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static decodeURIComponent(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static escape(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static unescape(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static anonymous(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Debug {
                    public static firstJSFrame(arg0: java.lang.Throwable): string
                    public static firstJSFrame(): string
                    public static scriptStack(): string
                    public static id(arg0: java.lang.Object): string
                    public static intId(arg0: java.lang.Object): int
                    public static stackTraceElementAt(arg0: int): string
                    public static caller(arg0: int, arg1: int, ...arg2: java.lang.String[]): string
                    public static dumpTokens(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.Lexer, arg2: jdk.nashorn.internal.parser.TokenStream): void
                    public static class: java.lang.Class<any>
                }
                class ConsString implements java.lang.CharSequence {
                    public constructor(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence)
                    public toString(): string
                    public length(): int
                    public charAt(arg0: int): char
                    public subSequence(arg0: int, arg1: int): java.lang.CharSequence
                    public getComponents(): java.lang.CharSequence[]
                    public static class: java.lang.Class<any>
                }
                class FinalScriptFunctionData extends jdk.nashorn.internal.runtime.ScriptFunctionData {
                    protected needsCallee(): boolean
                    public static class: java.lang.Class<any>
                }
                class ArgumentSetter {
                    public static SET_ARGUMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_ARRAY_ELEMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static setArgument(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int): void
                    public static setArrayElement(arg0: java.lang.Object, arg1: java.lang.Object[], arg2: int): void
                    public static class: java.lang.Class<any>
                }
                class AstDeserializer {
                    public static class: java.lang.Class<any>
                }
                class RewriteException extends java.lang.Exception {
                    public static GET_BYTECODE_SLOTS: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_PROGRAM_POINT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_RETURN_VALUE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static BOOTSTRAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_LONG_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_DOUBLE_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_OBJECT_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static INSTANCE_OR_NULL: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static ASSERT_ARRAY_LENGTH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static create(arg0: jdk.nashorn.internal.runtime.UnwarrantedOptimismException, arg1: java.lang.Object[], arg2: java.lang.String[]): jdk.nashorn.internal.runtime.RewriteException
                    public static create(arg0: jdk.nashorn.internal.runtime.UnwarrantedOptimismException, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: int[]): jdk.nashorn.internal.runtime.RewriteException
                    public static populateArrayBootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                    public static populateArray(arg0: java.lang.Object[], arg1: int, arg2: java.lang.Object[]): java.lang.Object[]
                    public static toLongArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): long[]
                    public static toDoubleArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): double[]
                    public static toObjectArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): java.lang.Object[]
                    public static instanceOrNull(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static assertArrayLength(arg0: java.lang.Object[], arg1: int): void
                    public getReturnValueDestructive(): java.lang.Object
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public getProgramPoint(): int
                    public getByteCodeSlots(): java.lang.Object[]
                    public getPreviousContinuationEntryPoints(): int[]
                    public getRuntimeScope(): jdk.nashorn.internal.runtime.ScriptObject
                    public getMessage(): string
                    public getMessageShort(): string
                    public static class: java.lang.Class<any>
                }
                class BitVector implements java.lang.Cloneable {
                    public constructor()
                    public constructor(arg0: long)
                    public constructor(arg0: long[])
                    public copy(arg0: jdk.nashorn.internal.runtime.BitVector): void
                    public resize(arg0: long): void
                    public set(arg0: long): void
                    public clear(arg0: long): void
                    public toggle(arg0: long): void
                    public setTo(arg0: long): void
                    public clearAll(): void
                    public isSet(arg0: long): boolean
                    public isClear(arg0: long): boolean
                    public shiftLeft(arg0: long, arg1: long): void
                    public shiftRight(arg0: long, arg1: long): void
                    public setRange(arg0: long, arg1: long): void
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction$OptimismInfo {
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction$3 implements java.util.function$.Supplier<java.lang.invoke.MethodHandle> {
                    public get(): java.lang.invoke.MethodHandle
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction$2 implements java.util.function$.Supplier<java.lang.invoke.MethodHandle> {
                    public get(): java.lang.invoke.MethodHandle
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction$1 implements java.util.function$.Supplier<java.lang.invoke.MethodHandle> {
                    public get(): java.lang.invoke.MethodHandle
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CompiledFunction$HandleAndAssumptions {
                    public static class: java.lang.Class<any>
                }
                class AllocationStrategy implements java.io.Serializable {
                    public constructor(arg0: int, arg1: boolean)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class AllocationStrategy$AllocatorMap {
                    public static class: java.lang.Class<any>
                }
                class Timing implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: boolean)
                    public getLogInfo(): string
                    public getLogInfoLines(): java.lang.String[]
                    public accumulateTime(arg0: string, arg1: long): void
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static toMillisPrint(arg0: long): string
                    public static class: java.lang.Class<any>
                }
                class Timing$TimeSupplier implements java.util.function$.Supplier<java.lang.String> {
                    public get(): string
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Timing$TimeSupplier$1 implements java.util.function$.Function<java.lang.String, java.util.concurrent.atomic.LongAdder> {
                    public apply(arg0: string): java.util.concurrent.atomic.LongAdder
                    public apply(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Timing$1 extends java.lang.Thread {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                namespace events {
                    class RecompilationEvent extends jdk.nashorn.internal.runtime.events.RuntimeEvent<jdk.nashorn.internal.runtime.RewriteException> {
                        public constructor(arg0: java.util.logging.Level, arg1: jdk.nashorn.internal.runtime.RewriteException, arg2: java.lang.Object)
                        public getReturnValue(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class RuntimeEvent<T> {
                        public static RUNTIME_EVENT_QUEUE_SIZE: int
                        public constructor(arg0: java.util.logging.Level, arg1: T)
                        public getValue(): T
                        public toString(): string
                        public getValueClass(): java.lang.Class<any>
                        public static class: java.lang.Class<any>
                    }
                }
                class RecompilableScriptFunctionData extends jdk.nashorn.internal.runtime.ScriptFunctionData implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static RECOMPILATION_PREFIX: string
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: jdk.nashorn.internal.runtime.CodeInstaller, arg2: jdk.nashorn.internal.runtime.AllocationStrategy, arg3: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.RecompilableScriptFunctionData>, arg4: java.util.Map<java.lang.String, java.lang.Integer>, arg5: java.util.Set<java.lang.String>)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public hasInternalSymbol(arg0: string): boolean
                    public getExternalSymbolDepth(arg0: string): int
                    public getExternalSymbolNames(): java.util.Set<java.lang.String>
                    public getEndParserState(): java.lang.Object
                    public getParent(): jdk.nashorn.internal.runtime.RecompilableScriptFunctionData
                    public initTransients(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.CodeInstaller): void
                    public toString(): string
                    public toStringVerbose(): string
                    public getFunctionName(): string
                    public inDynamicContext(): boolean
                    public setCachedAst(arg0: jdk.nashorn.internal.ir.FunctionNode): void
                    public initializeCode(arg0: jdk.nashorn.internal.ir.FunctionNode): void
                    public getReturnType(arg0: java.lang.invoke.MethodType, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Class<any>
                    public needsCallee(): boolean
                    public getFunctionFlags(): int
                    public getFunctionNodeId(): int
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public getScriptFunctionData(arg0: int): jdk.nashorn.internal.runtime.RecompilableScriptFunctionData
                    public isGlobalSymbol(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: string): boolean
                    public restoreFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    public static class: java.lang.Class<any>
                }
                class RecompilableScriptFunctionData$4 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public static class: java.lang.Class<any>
                }
                class RecompilableScriptFunctionData$3 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class RecompilableScriptFunctionData$SerializedAst {
                    public static class: java.lang.Class<any>
                }
                class RecompilableScriptFunctionData$2 implements java.util.concurrent.ThreadFactory {
                    public newThread(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.lang.Thread
                    public static class: java.lang.Class<any>
                }
                class RecompilableScriptFunctionData$1 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                interface CodeInstaller {
                    getContext(): jdk.nashorn.internal.runtime.Context
                    install(arg0: string, arg1: byte[]): java.lang.Class<any>
                    initialize(arg0: java.util.Collection<java.lang.Class<any>>, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.Object[]): void
                    verify(arg0: byte[]): void
                    getUniqueScriptId(): long
                    storeScript(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): void
                    loadScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: string): jdk.nashorn.internal.runtime.StoredScript
                    withNewLoader(): jdk.nashorn.internal.runtime.CodeInstaller
                    isCompatibleWith(arg0: jdk.nashorn.internal.runtime.CodeInstaller): boolean
                }
                class StoredScript implements java.io.Serializable {
                    public constructor(arg0: int, arg1: string, arg2: java.util.Map<java.lang.String, byte[]>, arg3: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg4: java.lang.Object[])
                    public getCompilationId(): int
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class FunctionInitializer implements java.io.Serializable {
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode)
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>)
                    public getClassName(): string
                    public getMethodType(): java.lang.invoke.MethodType
                    public getFlags(): int
                    public getCode(): java.lang.Class<any>
                    public getInvalidatedProgramPoints(): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public static class: java.lang.Class<any>
                }
                class StructureLoader extends jdk.nashorn.internal.runtime.NashornLoader {
                    protected findClass(arg0: string): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class ErrorManager {
                    public constructor()
                    public constructor(arg0: java.io.PrintWriter)
                    public static format(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: int, arg3: int, arg4: long): string
                    public error(arg0: jdk.nashorn.internal.runtime.ParserException): void
                    public error(arg0: string): void
                    public warning(arg0: jdk.nashorn.internal.runtime.ParserException): void
                    public warning(arg0: string): void
                    public hasErrors(): boolean
                    public getLimit(): int
                    public setLimit(arg0: int): void
                    public isWarningsAsErrors(): boolean
                    public setWarningsAsErrors(arg0: boolean): void
                    public getNumberOfErrors(): int
                    public getNumberOfWarnings(): int
                    public static class: java.lang.Class<any>
                }
                abstract class NashornLoader extends java.security.SecureClassLoader {
                    protected static checkPackageAccess(arg0: string): void
                    protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
                    public static class: java.lang.Class<any>
                }
                class ScriptLoader extends jdk.nashorn.internal.runtime.NashornLoader {
                    protected loadClass(arg0: string, arg1: boolean): java.lang.Class<any>
                    protected findClass(arg0: string): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class PropertyListeners {
                    public static getListenersAdded(): long
                    public static getListenersRemoved(): long
                    public static getListenerCount(arg0: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getListenerCount(): int
                    public static addListener(arg0: jdk.nashorn.internal.runtime.PropertyListeners, arg1: string, arg2: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.PropertyListeners
                    public propertyAdded(arg0: jdk.nashorn.internal.runtime.Property): void
                    public propertyDeleted(arg0: jdk.nashorn.internal.runtime.Property): void
                    public propertyModified(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): void
                    public protoChanged(): void
                    public static class: java.lang.Class<any>
                }
                class PropertyListeners$WeakPropertyMapSet {
                    public static class: java.lang.Class<any>
                }
                class SharedPropertyMap extends jdk.nashorn.internal.runtime.PropertyMap {
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public propertyAdded(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyDeleted(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyModified(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property, arg2: boolean): void
                    public static class: java.lang.Class<any>
                }
                class DebuggerSupport {
                    public static class: java.lang.Class<any>
                }
                class DebuggerSupport$1 {
                    public static class: java.lang.Class<any>
                }
                class DebuggerSupport$SourceInfo {
                    public static class: java.lang.Class<any>
                }
                class DebuggerSupport$DebuggerValueDesc {
                    public static class: java.lang.Class<any>
                }
                class Specialization {
                    public constructor(arg0: java.lang.invoke.MethodHandle)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: boolean)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>, arg2: boolean)
                    public getMethodHandle(): java.lang.invoke.MethodHandle
                    public getLinkLogicClass(): java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>
                    public isOptimistic(): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class ScriptFunctionData implements java.io.Serializable {
                    protected name: string
                    protected code: java.util.LinkedList<jdk.nashorn.internal.runtime.CompiledFunction>
                    protected flags: int
                    public static IS_STRICT: int
                    public static IS_BUILTIN: int
                    public static IS_CONSTRUCTOR: int
                    public static NEEDS_CALLEE: int
                    public static USES_THIS: int
                    public static IS_VARIABLE_ARITY: int
                    public static IS_PROPERTY_ACCESSOR: int
                    public static IS_STRICT_OR_BUILTIN: int
                    public static IS_BUILTIN_CONSTRUCTOR: int
                    public isStrict(): boolean
                    protected getFunctionName(): string
                    public toString(): string
                    public toStringVerbose(): string
                    protected ensureCompiled(): void
                    protected static needsCallee(arg0: java.lang.invoke.MethodHandle): boolean
                    protected static isVarArg(arg0: java.lang.invoke.MethodHandle): boolean
                    public inDynamicContext(): boolean
                    public static class: java.lang.Class<any>
                }
                class ScriptFunctionData$1 {
                    public static class: java.lang.Class<any>
                }
                class ScriptFunctionData$GenericInvokers {
                    public static class: java.lang.Class<any>
                }
                class SpillProperty extends jdk.nashorn.internal.runtime.AccessorProperty {
                    public constructor(arg0: string, arg1: int, arg2: int)
                    public constructor(arg0: string, arg1: int, arg2: int, arg3: java.lang.Class<any>)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.SpillProperty)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.SpillProperty, arg1: java.lang.Class<any>)
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    public isSpill(): boolean
                    public static class: java.lang.Class<any>
                }
                class SpillProperty$Accessors {
                    public static class: java.lang.Class<any>
                }
                class UserAccessorProperty extends jdk.nashorn.internal.runtime.SpillProperty {
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    protected getLocalType(): java.lang.Class<any>
                    public hasGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public hasSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
                    public getSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public static class: java.lang.Class<any>
                }
                class UserAccessorProperty$2 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class UserAccessorProperty$1 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class UserAccessorProperty$Accessors {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class GlobalConstants implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static GLOBAL_ONLY: boolean
                    public constructor(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public invalidateAll(): void
                    public invalidateForever(): void
                    public static staticConstantGetter(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class GlobalConstants$1 {
                    public static class: java.lang.Class<any>
                }
                class GlobalConstants$Access {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty extends jdk.nashorn.internal.runtime.Property {
                    public static create(arg0: string, arg1: int, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.AccessorProperty
                    protected constructor(arg0: string, arg1: int, arg2: int, arg3: java.lang.invoke.MethodHandle, arg4: java.lang.invoke.MethodHandle, arg5: java.lang.invoke.MethodHandle, arg6: java.lang.invoke.MethodHandle)
                    public constructor(arg0: string, arg1: int, arg2: java.lang.Class<any>, arg3: int)
                    protected constructor(arg0: string, arg1: int, arg2: int, arg3: jdk.nashorn.internal.runtime.ScriptObject, arg4: java.lang.Object)
                    public constructor(arg0: string, arg1: int, arg2: java.lang.Class<any>, arg3: int, arg4: java.lang.Class<any>)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.AccessorProperty, arg1: java.lang.Class<any>)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.AccessorProperty)
                    protected setInitialValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): void
                    protected initializeType(): void
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: int): void
                    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: double): void
                    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    protected isUndefined(): boolean
                    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
                    public canChangeType(): boolean
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$5 implements java.util.function$.Supplier<java.lang.String> {
                    public get(): string
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$4 implements java.util.function$.Supplier<java.lang.String> {
                    public get(): string
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$3 implements java.util.function$.Supplier<java.lang.String> {
                    public get(): string
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$2 implements java.util.function$.Supplier<java.lang.String> {
                    public get(): string
                    public get(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$Accessors {
                    public static class: java.lang.Class<any>
                }
                class AccessorProperty$1 extends java.lang.ClassValue<jdk.nashorn.internal.runtime.AccessorProperty$Accessors> {
                    protected computeValue(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.AccessorProperty$Accessors
                    protected computeValue(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class FindProperty {
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.Property)
                    public replaceProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.FindProperty
                    public getGetter(arg0: java.lang.Class<any>, arg1: int, arg2: jdk.internal.dynalink.linker.LinkRequest): java.lang.invoke.MethodHandle
                    public getSetter(arg0: java.lang.Class<any>, arg1: boolean, arg2: jdk.internal.dynalink.linker.LinkRequest): java.lang.invoke.MethodHandle
                    public getOwner(): jdk.nashorn.internal.runtime.ScriptObject
                    public getSelf(): jdk.nashorn.internal.runtime.ScriptObject
                    public getGetterReceiver(): jdk.nashorn.internal.runtime.ScriptObject
                    public getSetterReceiver(): jdk.nashorn.internal.runtime.ScriptObject
                    public getProperty(): jdk.nashorn.internal.runtime.Property
                    public isInherited(): boolean
                    public isSelf(): boolean
                    public isScope(): boolean
                    public getIntValue(): int
                    public getDoubleValue(): double
                    public getObjectValue(): java.lang.Object
                    public setValue(arg0: int, arg1: boolean): void
                    public setValue(arg0: double, arg1: boolean): void
                    public setValue(arg0: java.lang.Object, arg1: boolean): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface OptimisticBuiltins {
                    getLinkLogic(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                    hasPerInstanceAssumptions(): boolean
                }
                class ScriptEnvironment {
                    public _class_cache_size: int
                    public _compile_only: boolean
                    public _const_as_var: boolean
                    public _callsite_flags: int
                    public _debug_lines: boolean
                    public _dest_dir: string
                    public _dump_on_error: boolean
                    public _early_lvalue_error: boolean
                    public _empty_statements: boolean
                    public _fullversion: boolean
                    public _fx: boolean
                    public _global_per_engine: boolean
                    public _es6: boolean
                    public static COMPILE_ONLY_OPTIMISTIC_ARG: string
                    public _function_statement: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public _lazy_compilation: boolean
                    public _optimistic_types: boolean
                    public _loader_per_compile: boolean
                    public _no_java: boolean
                    public _no_syntax_extensions: boolean
                    public _no_typed_arrays: boolean
                    public _parse_only: boolean
                    public _persistent_cache: boolean
                    public _print_ast: boolean
                    public _print_lower_ast: boolean
                    public _print_code: boolean
                    public _print_code_dir: string
                    public _print_code_func: string
                    public _print_mem_usage: boolean
                    public _print_no_newline: boolean
                    public _print_parse: boolean
                    public _print_lower_parse: boolean
                    public _print_symbols: boolean
                    public _scripting: boolean
                    public _strict: boolean
                    public _version: boolean
                    public _verify_code: boolean
                    public _timezone: java.util.TimeZone
                    public _locale: java.util.Locale
                    public _loggers: java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.options.LoggingOption$LoggerInfo>
                    public _timing: jdk.nashorn.internal.runtime.Timing
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: java.io.PrintWriter, arg2: java.io.PrintWriter)
                    public getOut(): java.io.PrintWriter
                    public getErr(): java.io.PrintWriter
                    public getNamespace(): jdk.nashorn.internal.codegen.Namespace
                    public getFiles(): java.util.List<java.lang.String>
                    public getArguments(): java.util.List<java.lang.String>
                    public hasLogger(arg0: string): boolean
                    public isTimingEnabled(): boolean
                    public static class: java.lang.Class<any>
                }
                class ScriptEnvironment$FunctionStatementBehavior extends java.lang.Enum<jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior> {
                    public static ACCEPT: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public static WARNING: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public static ERROR: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public static values(): jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public static class: java.lang.Class<any>
                }
                class Context {
                    public static NASHORN_SET_CONFIG: string
                    public static NASHORN_CREATE_CONTEXT: string
                    public static NASHORN_CREATE_GLOBAL: string
                    public static NASHORN_GET_CONTEXT: string
                    public static NASHORN_JAVA_REFLECTION: string
                    public static NASHORN_DEBUG_MODE: string
                    public static DEBUG: boolean
                    public static getGlobal(): jdk.nashorn.internal.objects.Global
                    public static setGlobal(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public static setGlobal(arg0: jdk.nashorn.internal.objects.Global): void
                    public static getContext(): jdk.nashorn.internal.runtime.Context
                    public static getCurrentErr(): java.io.PrintWriter
                    public static err(arg0: string): void
                    public static err(arg0: string, arg1: boolean): void
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.lang.ClassLoader)
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.lang.ClassLoader, arg3: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda)
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.io.PrintWriter, arg3: java.io.PrintWriter, arg4: java.lang.ClassLoader)
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.io.PrintWriter, arg3: java.io.PrintWriter, arg4: java.lang.ClassLoader, arg5: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda)
                    public getClassFilter(): jdk.nashorn.api.scripting.ClassFilter
                    public getErrorManager(): jdk.nashorn.internal.runtime.ErrorManager
                    public getEnv(): jdk.nashorn.internal.runtime.ScriptEnvironment
                    public getOut(): java.io.PrintWriter
                    public getErr(): java.io.PrintWriter
                    public useDualFields(): boolean
                    public static getGlobalMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public compileScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public compileScript(arg0: jdk.nashorn.internal.runtime.Source): jdk.nashorn.internal.runtime.Context$MultiGlobalCompiledScript
                    public eval(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: string, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public eval(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: string, arg2: java.lang.Object, arg3: java.lang.Object, arg4: boolean, arg5: boolean): java.lang.Object
                    public load(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public loadWithNewGlobal(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static forStructureClass(arg0: string): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    public static checkPackageAccess(arg0: java.lang.Class<any>): void
                    public static checkPackageAccess(arg0: string): void
                    public static isStructureClass(arg0: string): boolean
                    public static isAccessibleClass(arg0: java.lang.Class<any>): boolean
                    public findClass(arg0: string): java.lang.Class<any>
                    public static printStackTrace(arg0: java.lang.Throwable): void
                    public verify(arg0: byte[]): void
                    public createGlobal(): jdk.nashorn.internal.objects.Global
                    public newGlobal(): jdk.nashorn.internal.objects.Global
                    public initGlobal(arg0: jdk.nashorn.internal.objects.Global, arg1: javax.script.ScriptEngine): jdk.nashorn.internal.objects.Global
                    public initGlobal(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.objects.Global
                    public getLogger(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.util.function$.Consumer<jdk.nashorn.internal.runtime.logging.DebugLogger>): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public addLoggingToHandle(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.lang.invoke.MethodHandle, arg2: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): java.lang.invoke.MethodHandle
                    public addLoggingToHandle(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.util.logging.Level, arg2: java.lang.invoke.MethodHandle, arg3: int, arg4: boolean, arg5: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): java.lang.invoke.MethodHandle
                    public newBuiltinSwitchPoint(arg0: string): java.lang.invoke.SwitchPoint
                    public getBuiltinSwitchPoint(arg0: string): java.lang.invoke.SwitchPoint
                    public static class: java.lang.Class<any>
                }
                class Context$BuiltinSwitchPoint extends java.lang.invoke.SwitchPoint {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class Context$ClassReference extends java.lang.ref.SoftReference<java.lang.Class<any>> {
                    public static class: java.lang.Class<any>
                }
                class Context$ClassCache extends java.util.LinkedHashMap<jdk.nashorn.internal.runtime.Source, jdk.nashorn.internal.runtime.Context$ClassReference> {
                    protected removeEldestEntry(arg0: java.util.Map$Entry<jdk.nashorn.internal.runtime.Source, jdk.nashorn.internal.runtime.Context$ClassReference>): boolean
                    public get(arg0: java.lang.Object): jdk.nashorn.internal.runtime.Context$ClassReference
                    public get(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$6 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.ScriptLoader> {
                    public run(): jdk.nashorn.internal.runtime.ScriptLoader
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$5 implements java.security.PrivilegedAction<java.lang.Void> {
                    public run(): java.lang.Void
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$4 implements java.security.PrivilegedAction<jdk.nashorn.internal.objects.Global> {
                    public run(): jdk.nashorn.internal.objects.Global
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$3 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.Source> {
                    public run(): jdk.nashorn.internal.runtime.Source
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$2 implements jdk.nashorn.internal.runtime.Context$MultiGlobalCompiledScript {
                    public getFunction(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptFunction
                    public static class: java.lang.Class<any>
                }
                interface Context$MultiGlobalCompiledScript {
                    getFunction(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptFunction
                }
                interface Context$MultiGlobalCompiledScript$$Lambda {
                    (arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptFunction
                }
                class Context$ThrowErrorManager extends jdk.nashorn.internal.runtime.ErrorManager {
                    public constructor()
                    public error(arg0: string): void
                    public error(arg0: jdk.nashorn.internal.runtime.ParserException): void
                    public static class: java.lang.Class<any>
                }
                class Context$1 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.StructureLoader> {
                    public run(): jdk.nashorn.internal.runtime.StructureLoader
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$ContextCodeInstaller implements jdk.nashorn.internal.runtime.CodeInstaller {
                    public getContext(): jdk.nashorn.internal.runtime.Context
                    public install(arg0: string, arg1: byte[]): java.lang.Class<any>
                    public initialize(arg0: java.util.Collection<java.lang.Class<any>>, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.Object[]): void
                    public verify(arg0: byte[]): void
                    public getUniqueScriptId(): long
                    public storeScript(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): void
                    public loadScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: string): jdk.nashorn.internal.runtime.StoredScript
                    public withNewLoader(): jdk.nashorn.internal.runtime.CodeInstaller
                    public isCompatibleWith(arg0: jdk.nashorn.internal.runtime.CodeInstaller): boolean
                    public static class: java.lang.Class<any>
                }
                class Context$ContextCodeInstaller$1 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                    public run(): java.lang.Void
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Context$FieldMode extends java.lang.Enum<jdk.nashorn.internal.runtime.Context$FieldMode> {
                    public static AUTO: jdk.nashorn.internal.runtime.Context$FieldMode
                    public static OBJECTS: jdk.nashorn.internal.runtime.Context$FieldMode
                    public static DUAL: jdk.nashorn.internal.runtime.Context$FieldMode
                    public static values(): jdk.nashorn.internal.runtime.Context$FieldMode[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.runtime.Context$FieldMode
                    public static class: java.lang.Class<any>
                }
                namespace options {
                    class OptionTemplate implements java.lang.Comparable<jdk.nashorn.internal.runtime.options.OptionTemplate> {
                        public isHelp(): boolean
                        public isXHelp(): boolean
                        public getResource(): string
                        public getType(): string
                        public getKey(): string
                        public getDefaultValue(): string
                        public getDependency(): string
                        public getConflict(): string
                        public isUndocumented(): boolean
                        public getShortName(): string
                        public getName(): string
                        public getDescription(): string
                        public isValueNextArg(): boolean
                        public toString(): string
                        public compareTo(arg0: jdk.nashorn.internal.runtime.options.OptionTemplate): int
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class Options {
                        public constructor(arg0: string)
                        public constructor(arg0: string, arg1: java.io.PrintWriter)
                        public getResource(): string
                        public toString(): string
                        public static getBooleanProperty(arg0: string, arg1: boolean): boolean
                        public static getBooleanProperty(arg0: string): boolean
                        public static getStringProperty(arg0: string, arg1: string): string
                        public static getIntProperty(arg0: string, arg1: int): int
                        public get(arg0: string): jdk.nashorn.internal.runtime.options.Option<any>
                        public getBoolean(arg0: string): boolean
                        public getInteger(arg0: string): int
                        public getString(arg0: string): string
                        public set(arg0: string, arg1: jdk.nashorn.internal.runtime.options.Option<any>): void
                        public set(arg0: string, arg1: boolean): void
                        public set(arg0: string, arg1: string): void
                        public getArguments(): java.util.List<java.lang.String>
                        public getFiles(): java.util.List<java.lang.String>
                        public static getValidOptions(): java.util.Collection<jdk.nashorn.internal.runtime.options.OptionTemplate>
                        public displayHelp(arg0: java.lang.IllegalArgumentException): void
                        public displayHelp(arg0: boolean): void
                        public process(arg0: java.lang.String[]): void
                        public getOptionTemplateByKey(arg0: string): jdk.nashorn.internal.runtime.options.OptionTemplate
                        public static class: java.lang.Class<any>
                    }
                    class Options$ParsedArg {
                        public static class: java.lang.Class<any>
                    }
                    class Options$IllegalOptionException extends java.lang.IllegalArgumentException {
                        public static class: java.lang.Class<any>
                    }
                    class Options$3 implements java.security.PrivilegedAction<java.lang.Integer> {
                        public run(): java.lang.Integer
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class Options$2 implements java.security.PrivilegedAction<java.lang.String> {
                        public run(): string
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class Options$1 implements java.security.PrivilegedAction<java.lang.Boolean> {
                        public run(): boolean
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class Option<T> {
                        protected value: T
                        public getValue(): T
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class KeyValueOption extends jdk.nashorn.internal.runtime.options.Option<java.lang.String> {
                        protected map: java.util.Map<java.lang.String, java.lang.String>
                        public hasValue(arg0: string): boolean
                        public static class: java.lang.Class<any>
                    }
                    class LoggingOption extends jdk.nashorn.internal.runtime.options.KeyValueOption {
                        public getLoggers(): java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.options.LoggingOption$LoggerInfo>
                        public static class: java.lang.Class<any>
                    }
                    class LoggingOption$LoggerInfo {
                        public getLevel(): java.util.logging.Level
                        public isQuiet(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
                abstract class CodeStore implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static NASHORN_PROVIDE_CODE_STORE: string
                    protected constructor()
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static newCodeStore(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.CodeStore
                    public store(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): jdk.nashorn.internal.runtime.StoredScript
                    public store(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.StoredScript): jdk.nashorn.internal.runtime.StoredScript
                    public load(arg0: jdk.nashorn.internal.runtime.Source, arg1: string): jdk.nashorn.internal.runtime.StoredScript
                    public storedScriptFor(arg0: jdk.nashorn.internal.runtime.Source, arg1: string, arg2: java.util.Map<java.lang.String, byte[]>, arg3: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg4: java.lang.Object[], arg5: int): jdk.nashorn.internal.runtime.StoredScript
                    public static getCacheKey(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type[]): string
                    public static class: java.lang.Class<any>
                }
                class CodeStore$DirectoryCodeStore extends jdk.nashorn.internal.runtime.CodeStore {
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context)
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context, arg1: string, arg2: boolean, arg3: int)
                    public load(arg0: jdk.nashorn.internal.runtime.Source, arg1: string): jdk.nashorn.internal.runtime.StoredScript
                    public store(arg0: string, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.StoredScript): jdk.nashorn.internal.runtime.StoredScript
                    public static class: java.lang.Class<any>
                }
                class CodeStore$DirectoryCodeStore$3 implements java.security.PrivilegedExceptionAction<jdk.nashorn.internal.runtime.StoredScript> {
                    public run(): jdk.nashorn.internal.runtime.StoredScript
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CodeStore$DirectoryCodeStore$2 implements java.security.PrivilegedExceptionAction<jdk.nashorn.internal.runtime.StoredScript> {
                    public run(): jdk.nashorn.internal.runtime.StoredScript
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CodeStore$DirectoryCodeStore$1 implements java.security.PrivilegedExceptionAction<java.io.File> {
                    public run(): java.io.File
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PropertyMap implements java.lang.Iterable<java.lang.Object> , java.io.Serializable {
                    protected constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public static newMap(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>, arg1: string, arg2: int, arg3: int, arg4: int): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(arg0: java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public size(): int
                    public getListenerCount(): int
                    public addListener(arg0: string, arg1: jdk.nashorn.internal.runtime.PropertyMap): void
                    public propertyAdded(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyDeleted(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyModified(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property, arg2: boolean): void
                    public protoChanged(arg0: boolean): void
                    public getSwitchPoint(arg0: string): java.lang.invoke.SwitchPoint
                    public addPropertyNoHistory(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public addProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public deleteProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public replaceProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public newUserAccessors(arg0: string, arg1: int): jdk.nashorn.internal.runtime.UserAccessorProperty
                    public findProperty(arg0: string): jdk.nashorn.internal.runtime.Property
                    public addAll(arg0: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.PropertyMap
                    public getProperties(): jdk.nashorn.internal.runtime.Property[]
                    public getClassName(): string
                    public equalsWithoutType(arg0: jdk.nashorn.internal.runtime.PropertyMap): boolean
                    public toString(): string
                    public iterator(): java.util.Iterator<java.lang.Object>
                    public containsArrayKeys(): boolean
                    public changeProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyMap
                    public getSharedProtoMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public static diff(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.PropertyMap): string
                    public static getCount(): long
                    public static getClonedCount(): long
                    public static getHistoryHit(): long
                    public static getProtoInvalidations(): long
                    public static getProtoHistoryHit(): long
                    public static getSetProtoNewMapCount(): long
                    public static class: java.lang.Class<any>
                }
                class PropertyMap$PropertyMapIterator implements java.util.Iterator<java.lang.Object> {
                    public hasNext(): boolean
                    public next(): java.lang.Object
                    public remove(): void
                    public static class: java.lang.Class<any>
                }
                abstract class Property implements java.io.Serializable {
                    public static WRITABLE_ENUMERABLE_CONFIGURABLE: int
                    public static NOT_WRITABLE: int
                    public static NOT_ENUMERABLE: int
                    public static NOT_CONFIGURABLE: int
                    public static IS_PARAMETER: int
                    public static HAS_ARGUMENTS: int
                    public static IS_FUNCTION_DECLARATION: int
                    public static IS_NASGEN_PRIMITIVE: int
                    public static IS_BUILTIN: int
                    public static IS_BOUND: int
                    public static NEEDS_DECLARATION: int
                    public static IS_LEXICAL_BINDING: int
                    public static DUAL_FIELDS: int
                    protected builtinSwitchPoint: java.lang.invoke.SwitchPoint
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    public setBuiltinSwitchPoint(arg0: java.lang.invoke.SwitchPoint): void
                    public getBuiltinSwitchPoint(): java.lang.invoke.SwitchPoint
                    public isBuiltin(): boolean
                    public hasGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public hasSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public isWritable(): boolean
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isParameter(): boolean
                    public hasArguments(): boolean
                    public isSpill(): boolean
                    public isBound(): boolean
                    public needsDeclaration(): boolean
                    public addFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public getFlags(): int
                    public removeFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public setFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getKey(): string
                    public getSlot(): int
                    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
                    public getGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public toStringShort(): string
                    public toString(): string
                    public getType(): java.lang.Class<any>
                    public setType(arg0: java.lang.Class<any>): void
                    protected getLocalType(): java.lang.Class<any>
                    public canChangeType(): boolean
                    public isFunctionDeclaration(): boolean
                    public isLexicalBinding(): boolean
                    public hasDualFields(): boolean
                    public static class: java.lang.Class<any>
                }
                class PropertyHashMap implements java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.Property> {
                    public static EMPTY_HASHMAP: jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableReplace(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(...arg0: jdk.nashorn.internal.runtime.Property[]): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableAdd(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableRemove(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyHashMap
                    public immutableRemove(arg0: string): jdk.nashorn.internal.runtime.PropertyHashMap
                    public find(arg0: string): jdk.nashorn.internal.runtime.Property
                    public size(): int
                    public isEmpty(): boolean
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsKey(arg0: string): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public get(arg0: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public get(arg0: string): jdk.nashorn.internal.runtime.Property
                    public put(arg0: string, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.Property
                    public remove(arg0: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public putAll(arg0: java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.Property>): void
                    public clear(): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<jdk.nashorn.internal.runtime.Property>
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, jdk.nashorn.internal.runtime.Property>>
                    public remove(arg0: java.lang.Object): java.lang.Object
                    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public get(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PropertyHashMap$Element implements java.util.Map$Entry<java.lang.String, jdk.nashorn.internal.runtime.Property> {
                    public equals(arg0: java.lang.Object): boolean
                    public getKey(): string
                    public getValue(): jdk.nashorn.internal.runtime.Property
                    public hashCode(): int
                    public setValue(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.Property
                    public toString(): string
                    public setValue(arg0: java.lang.Object): java.lang.Object
                    public getValue(): java.lang.Object
                    public getKey(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                namespace regexp {
                    class JdkRegExp extends jdk.nashorn.internal.runtime.regexp.RegExp {
                        public constructor(arg0: string, arg1: string)
                        public match(arg0: string): jdk.nashorn.internal.runtime.regexp.RegExpMatcher
                        public static class: java.lang.Class<any>
                    }
                    class JdkRegExp$DefaultMatcher implements jdk.nashorn.internal.runtime.regexp.RegExpMatcher {
                        public search(arg0: int): boolean
                        public getInput(): string
                        public start(): int
                        public start(arg0: int): int
                        public end(): int
                        public end(arg0: int): int
                        public group(): string
                        public group(arg0: int): string
                        public groupCount(): int
                        public static class: java.lang.Class<any>
                    }
                    class RegExpScanner extends jdk.nashorn.internal.parser.Scanner {
                        public static scan(arg0: string): jdk.nashorn.internal.runtime.regexp.RegExpScanner
                        public static class: java.lang.Class<any>
                    }
                    class RegExpScanner$Capture {
                        public static class: java.lang.Class<any>
                    }
                    class RegExpFactory {
                        public constructor()
                        public compile(arg0: string, arg1: string): jdk.nashorn.internal.runtime.regexp.RegExp
                        public static create(arg0: string, arg1: string): jdk.nashorn.internal.runtime.regexp.RegExp
                        public static validate(arg0: string, arg1: string): void
                        public static usesJavaUtilRegex(): boolean
                        public static class: java.lang.Class<any>
                    }
                    namespace joni {
                        interface Config {
                            CHAR_TABLE_SIZE: int
                            VANILLA: boolean
                            INTERNAL_ENC_CASE_FOLD_MULTI_CHAR: int
                            ENC_CASE_FOLD_MIN: int
                            ENC_CASE_FOLD_DEFAULT: int
                            USE_MONOMANIAC_CHECK_CAPTURES_IN_ENDLESS_REPEAT: boolean
                            USE_NEWLINE_AT_END_OF_STRING_HAS_EMPTY_LINE: boolean
                            USE_WARNING_REDUNDANT_NESTED_REPEAT_OPERATOR: boolean
                            CASE_FOLD_IS_APPLIED_INSIDE_NEGATIVE_CCLASS: boolean
                            USE_MATCH_RANGE_MUST_BE_INSIDE_OF_SPECIFIED_RANGE: boolean
                            USE_VARIABLE_META_CHARS: boolean
                            USE_WORD_BEGIN_END: boolean
                            USE_POSIX_API_REGION_OPTION: boolean
                            USE_FIND_LONGEST_SEARCH_ALL_OF_RANGE: boolean
                            NREGION: int
                            MAX_BACKREF_NUM: int
                            MAX_REPEAT_NUM: int
                            MAX_MULTI_BYTE_RANGES_NUM: int
                            USE_WARN: boolean
                            USE_PARSE_TREE_NODE_RECYCLE: boolean
                            USE_OP_PUSH_OR_JUMP_EXACT: boolean
                            USE_SHARED_CCLASS_TABLE: boolean
                            USE_QTFR_PEEK_NEXT: boolean
                            INIT_MATCH_STACK_SIZE: int
                            DEFAULT_MATCH_STACK_LIMIT_SIZE: int
                            NUMBER_OF_POOLED_STACKS: int
                            DONT_OPTIMIZE: boolean
                            USE_STRING_TEMPLATES: boolean
                            NON_UNICODE_SDW: boolean
                            log: java.io.PrintStream
                            err: java.io.PrintStream
                            DEBUG_ALL: boolean
                            DEBUG: boolean
                            DEBUG_PARSE_TREE: boolean
                            DEBUG_PARSE_TREE_RAW: boolean
                            DEBUG_COMPILE: boolean
                            DEBUG_COMPILE_BYTE_CODE_INFO: boolean
                            DEBUG_SEARCH: boolean
                            DEBUG_MATCH: boolean
                        }
                        class ByteCodeMachine extends jdk.nashorn.internal.runtime.regexp.joni.StackMachine {
                            protected matchAt(arg0: int, arg1: int, arg2: int): int
                            public static class: java.lang.Class<any>
                        }
                        class EncodingHelper {
                            public constructor()
                            public static digitVal(arg0: int): int
                            public static odigitVal(arg0: int): int
                            public static isXDigit(arg0: int): boolean
                            public static xdigitVal(arg0: int): int
                            public static isDigit(arg0: int): boolean
                            public static isWord(arg0: int): boolean
                            public static isNewLine(arg0: int): boolean
                            public static isNewLine(arg0: char[], arg1: int, arg2: int): boolean
                            public static prevCharHead(arg0: int, arg1: int): int
                            public static rightAdjustCharHeadWithPrev(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): int
                            public static stepBack(arg0: int, arg1: int, arg2: int): int
                            public static mbcodeStartPosition(): int
                            public static caseFoldCodesByString(arg0: int, arg1: char): char[]
                            public static applyAllCaseFold(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.ApplyCaseFold, arg2: java.lang.Object): void
                            public static toLowerCase(arg0: char): char
                            public static toLowerCase(arg0: int): int
                            public static toUpperCase(arg0: char): char
                            public static toUpperCase(arg0: int): int
                            public static ctypeCodeRange(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): int[]
                            public static isInCodeRange(arg0: int[], arg1: int, arg2: int): boolean
                            public static isCodeCType(arg0: int, arg1: int): boolean
                            public static class: java.lang.Class<any>
                        }
                        class ArrayCompiler extends jdk.nashorn.internal.runtime.regexp.joni.Compiler {
                            protected prepare(): void
                            protected finish(): void
                            protected compileAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): void
                            protected addCompileString(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                            protected compileCClassNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                            protected compileAnyCharNode(): void
                            protected compileBackrefNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.BackRefNode): void
                            protected compileNonCECQuantifierNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                            protected compileOptionNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileEncloseNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileAnchorNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.AnchorNode): void
                            public static class: java.lang.Class<any>
                        }
                        class ByteCodePrinter {
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex)
                            public byteCodeListToString(): string
                            public compiledByteCodeToString(arg0: java.lang.StringBuilder, arg1: int): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class StackMachine extends jdk.nashorn.internal.runtime.regexp.joni.Matcher implements jdk.nashorn.internal.runtime.regexp.joni.constants.StackType {
                            protected static INVALID_INDEX: int
                            protected stack: jdk.nashorn.internal.runtime.regexp.joni.StackEntry[]
                            protected stk: int
                            protected repeatStk: int[]
                            protected memStartStk: int
                            protected memEndStk: int
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int)
                            protected init(): void
                            protected ensure1(): jdk.nashorn.internal.runtime.regexp.joni.StackEntry
                            protected pushType(arg0: int): void
                            protected pushEnsured(arg0: int, arg1: int): void
                            protected pushAlt(arg0: int, arg1: int, arg2: int): void
                            protected pushPos(arg0: int, arg1: int): void
                            protected pushPosNot(arg0: int, arg1: int, arg2: int): void
                            protected pushStopBT(): void
                            protected pushLookBehindNot(arg0: int, arg1: int, arg2: int): void
                            protected pushRepeat(arg0: int, arg1: int): void
                            protected pushRepeatInc(arg0: int): void
                            protected pushMemStart(arg0: int, arg1: int): void
                            protected pushMemEnd(arg0: int, arg1: int): void
                            protected pushMemEndMark(arg0: int): void
                            protected getMemStart(arg0: int): int
                            protected pushNullCheckStart(arg0: int, arg1: int): void
                            protected pushNullCheckEnd(arg0: int): void
                            protected popOne(): void
                            protected pop(): jdk.nashorn.internal.runtime.regexp.joni.StackEntry
                            protected popTilPosNot(): void
                            protected popTilLookBehindNot(): void
                            protected posEnd(): int
                            protected stopBtEnd(): void
                            protected nullCheck(arg0: int, arg1: int): int
                            protected nullCheckMemSt(arg0: int, arg1: int): int
                            protected getRepeat(arg0: int): int
                            protected sreturn(): int
                            public static class: java.lang.Class<any>
                        }
                        class StackMachine$1 extends java.lang.ThreadLocal<java.lang.ref.WeakReference<jdk.nashorn.internal.runtime.regexp.joni.StackEntry[]>> {
                            protected initialValue(): java.lang.ref.WeakReference<jdk.nashorn.internal.runtime.regexp.joni.StackEntry[]>
                            protected initialValue(): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                        class StackEntry {
                            public static class: java.lang.Class<any>
                        }
                        abstract class Compiler implements jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages {
                            protected analyser: jdk.nashorn.internal.runtime.regexp.joni.Analyser
                            protected regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Analyser)
                            protected prepare(): void
                            protected finish(): void
                            protected compileAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): void
                            protected addCompileString(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                            protected compileCClassNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                            protected compileAnyCharNode(): void
                            protected compileBackrefNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.BackRefNode): void
                            protected compileNonCECQuantifierNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                            protected compileOptionNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileEncloseNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileAnchorNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.AnchorNode): void
                            protected compileTree(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                            protected compileTreeNTimes(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: int): void
                            protected newSyntaxException(arg0: string): void
                            protected newInternalException(arg0: string): void
                            public static class: java.lang.Class<any>
                        }
                        interface Warnings {
                            INVALID_BACKREFERENCE: string
                            INVALID_SUBEXP_CALL: string
                            INVALID_UNICODE_PROPERTY: string
                        }
                        class ApplyCaseFold {
                            public static apply(arg0: int, arg1: int, arg2: java.lang.Object): void
                            public static class: java.lang.Class<any>
                        }
                        class ApplyCaseFoldArg {
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode)
                            public static class: java.lang.Class<any>
                        }
                        class MinMaxLen {
                            public static class: java.lang.Class<any>
                        }
                        class Region {
                            public numRegs: int
                            public beg: int[]
                            public end: int[]
                            public constructor(arg0: int)
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                        class Token {
                            public static class: java.lang.Class<any>
                        }
                        class CodeRangeBuffer implements java.lang.Cloneable {
                            public constructor()
                            public isInCodeRange(arg0: int): boolean
                            public toString(): string
                            public expand(arg0: int): void
                            public ensureSize(arg0: int): void
                            protected moveLeft(arg0: int, arg1: int, arg2: int): void
                            public writeCodePoint(arg0: int, arg1: int): void
                            public clone(): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addCodeRangeToBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addCodeRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg2: int, arg3: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            protected static setAllMultiByteRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addAllMultiByteRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static notCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static orCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg3: boolean): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static andCodeRange1(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: int, arg2: int, arg3: int[], arg4: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static andCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg3: boolean): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public clone(): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                        class BitSet {
                            public static SINGLE_BYTE_SIZE: int
                            public constructor()
                            public toString(): string
                            public at(arg0: int): boolean
                            public set(arg0: int): void
                            public clear(arg0: int): void
                            public clear(): void
                            public isEmpty(): boolean
                            public setRange(arg0: int, arg1: int): void
                            public invert(): void
                            public invertTo(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public and(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public or(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public copy(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public numOn(): int
                            public static class: java.lang.Class<any>
                        }
                        class OptEnvironment {
                            public static class: java.lang.Class<any>
                        }
                        class NodeOptInfo {
                            public constructor()
                            public setBoundNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.MinMaxLen): void
                            public clear(): void
                            public copy(arg0: jdk.nashorn.internal.runtime.regexp.joni.NodeOptInfo): void
                            public concatLeftNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.NodeOptInfo): void
                            public altMerge(arg0: jdk.nashorn.internal.runtime.regexp.joni.NodeOptInfo, arg1: jdk.nashorn.internal.runtime.regexp.joni.OptEnvironment): void
                            public setBound(arg0: jdk.nashorn.internal.runtime.regexp.joni.MinMaxLen): void
                            public static class: java.lang.Class<any>
                        }
                        class ScanEnvironment {
                            public syntax: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public reg: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            public numMem: int
                            public memNodes: jdk.nashorn.internal.runtime.regexp.joni.ast.Node[]
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: jdk.nashorn.internal.runtime.regexp.joni.Syntax)
                            public clear(): void
                            public addMemEntry(): int
                            public setMemNode(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                            public convertBackslashValue(arg0: int): int
                            public static class: java.lang.Class<any>
                        }
                        class OptAnchorInfo implements jdk.nashorn.internal.runtime.regexp.joni.constants.AnchorType {
                            public static class: java.lang.Class<any>
                        }
                        class OptMapInfo {
                            public static class: java.lang.Class<any>
                        }
                        class OptExactInfo {
                            public static class: java.lang.Class<any>
                        }
                        abstract class Matcher extends jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder {
                            protected regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected chars: char[]
                            protected str: int
                            protected end: int
                            protected msaStart: int
                            protected msaOptions: int
                            protected msaRegion: jdk.nashorn.internal.runtime.regexp.joni.Region
                            protected msaBestLen: int
                            protected msaBestS: int
                            protected msaBegin: int
                            protected msaEnd: int
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[])
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int)
                            protected matchAt(arg0: int, arg1: int, arg2: int): int
                            public getRegion(): jdk.nashorn.internal.runtime.regexp.joni.Region
                            public getBegin(): int
                            public getEnd(): int
                            protected msaInit(arg0: int, arg1: int): void
                            public match(arg0: int, arg1: int, arg2: int): int
                            public search(arg0: int, arg1: int, arg2: int): int
                            public static class: java.lang.Class<any>
                        }
                        class Syntax implements jdk.nashorn.internal.runtime.regexp.joni.constants.SyntaxProperties {
                            public options: int
                            public metaCharTable: jdk.nashorn.internal.runtime.regexp.joni.Syntax$MetaCharTable
                            public static RUBY: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static DEFAULT: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static ASIS: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static PosixBasic: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static PosixExtended: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static Emacs: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static Grep: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static GnuRegex: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static Java: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static Perl: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static PerlNG: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public static JAVASCRIPT: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax$MetaCharTable)
                            protected isOp(arg0: int): boolean
                            public opVariableMetaCharacters(): boolean
                            public opDotAnyChar(): boolean
                            public opAsteriskZeroInf(): boolean
                            public opEscAsteriskZeroInf(): boolean
                            public opPlusOneInf(): boolean
                            public opEscPlusOneInf(): boolean
                            public opQMarkZeroOne(): boolean
                            public opEscQMarkZeroOne(): boolean
                            public opBraceInterval(): boolean
                            public opEscBraceInterval(): boolean
                            public opVBarAlt(): boolean
                            public opEscVBarAlt(): boolean
                            public opLParenSubexp(): boolean
                            public opEscLParenSubexp(): boolean
                            public opEscAZBufAnchor(): boolean
                            public opEscCapitalGBeginAnchor(): boolean
                            public opDecimalBackref(): boolean
                            public opBracketCC(): boolean
                            public opEscWWord(): boolean
                            public opEscLtGtWordBeginEnd(): boolean
                            public opEscBWordBound(): boolean
                            public opEscSWhiteSpace(): boolean
                            public opEscDDigit(): boolean
                            public opLineAnchor(): boolean
                            public opPosixBracket(): boolean
                            public opQMarkNonGreedy(): boolean
                            public opEscControlChars(): boolean
                            public opEscCControl(): boolean
                            public opEscOctal3(): boolean
                            public opEscXHex2(): boolean
                            public opEscXBraceHex8(): boolean
                            protected isOp2(arg0: int): boolean
                            public op2EscCapitalQQuote(): boolean
                            public op2QMarkGroupEffect(): boolean
                            public op2OptionPerl(): boolean
                            public op2OptionRuby(): boolean
                            public op2PlusPossessiveRepeat(): boolean
                            public op2PlusPossessiveInterval(): boolean
                            public op2CClassSetOp(): boolean
                            public op2QMarkLtNamedGroup(): boolean
                            public op2EscKNamedBackref(): boolean
                            public op2EscGSubexpCall(): boolean
                            public op2AtMarkCaptureHistory(): boolean
                            public op2EscCapitalCBarControl(): boolean
                            public op2EscCapitalMBarMeta(): boolean
                            public op2EscVVtab(): boolean
                            public op2EscUHex4(): boolean
                            public op2EscGnuBufAnchor(): boolean
                            public op2EscPBraceCharProperty(): boolean
                            public op2EscPBraceCircumflexNot(): boolean
                            public op2EscHXDigit(): boolean
                            public op2IneffectiveEscape(): boolean
                            protected isBehavior(arg0: int): boolean
                            public contextIndepRepeatOps(): boolean
                            public contextInvalidRepeatOps(): boolean
                            public allowUnmatchedCloseSubexp(): boolean
                            public allowInvalidInterval(): boolean
                            public allowIntervalLowAbbrev(): boolean
                            public strictCheckBackref(): boolean
                            public differentLengthAltLookBehind(): boolean
                            public captureOnlyNamedGroup(): boolean
                            public allowMultiplexDefinitionName(): boolean
                            public fixedIntervalIsGreedyOnly(): boolean
                            public notNewlineInNegativeCC(): boolean
                            public backSlashEscapeInCC(): boolean
                            public allowEmptyRangeInCC(): boolean
                            public allowDoubleRangeOpInCC(): boolean
                            public warnCCOpNotEscaped(): boolean
                            public warnReduntantNestedRepeat(): boolean
                            public static class: java.lang.Class<any>
                        }
                        class Syntax$MetaCharTable {
                            public esc: int
                            public anyChar: int
                            public anyTime: int
                            public zeroOrOneTime: int
                            public oneOrMoreTime: int
                            public anyCharAnyTime: int
                            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
                            public static class: java.lang.Class<any>
                        }
                        abstract class SearchAlgorithm {
                            public static NONE: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static SLOW: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static BM: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static MAP: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public constructor()
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        class SearchAlgorithm$4 extends jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm {
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        class SearchAlgorithm$3 extends jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm {
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        class SearchAlgorithm$SLOW_IC extends jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm {
                            public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex)
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        class SearchAlgorithm$2 extends jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm {
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        class SearchAlgorithm$1 extends jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm {
                            public getName(): string
                            public search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                        namespace exception {
                            class InternalException extends jdk.nashorn.internal.runtime.regexp.joni.exception.JOniException {
                                public constructor(arg0: string)
                                public static class: java.lang.Class<any>
                            }
                            class JOniException extends java.lang.RuntimeException {
                                public constructor(arg0: string)
                                public static class: java.lang.Class<any>
                            }
                            class SyntaxException extends jdk.nashorn.internal.runtime.regexp.joni.exception.JOniException {
                                public constructor(arg0: string)
                                public static class: java.lang.Class<any>
                            }
                            class ValueException extends jdk.nashorn.internal.runtime.regexp.joni.exception.SyntaxException {
                                public constructor(arg0: string)
                                public constructor(arg0: string, arg1: string)
                                public static class: java.lang.Class<any>
                            }
                            interface ErrorMessages {
                                ERR_INVALID_CODE_POINT_VALUE: string
                                ERR_TOO_BIG_WIDE_CHAR_VALUE: string
                                ERR_TOO_LONG_WIDE_CHAR_VALUE: string
                                ERR_PARSER_BUG: string
                                ERR_UNDEFINED_BYTECODE: string
                                ERR_UNEXPECTED_BYTECODE: string
                                ERR_END_PATTERN_AT_LEFT_BRACE: string
                                ERR_END_PATTERN_AT_LEFT_BRACKET: string
                                ERR_EMPTY_CHAR_CLASS: string
                                ERR_PREMATURE_END_OF_CHAR_CLASS: string
                                ERR_END_PATTERN_AT_ESCAPE: string
                                ERR_END_PATTERN_AT_META: string
                                ERR_END_PATTERN_AT_CONTROL: string
                                ERR_META_CODE_SYNTAX: string
                                ERR_CONTROL_CODE_SYNTAX: string
                                ERR_CHAR_CLASS_VALUE_AT_END_OF_RANGE: string
                                ERR_UNMATCHED_RANGE_SPECIFIER_IN_CHAR_CLASS: string
                                ERR_TARGET_OF_REPEAT_OPERATOR_NOT_SPECIFIED: string
                                ERR_TARGET_OF_REPEAT_OPERATOR_INVALID: string
                                ERR_UNMATCHED_CLOSE_PARENTHESIS: string
                                ERR_END_PATTERN_WITH_UNMATCHED_PARENTHESIS: string
                                ERR_END_PATTERN_IN_GROUP: string
                                ERR_UNDEFINED_GROUP_OPTION: string
                                ERR_INVALID_POSIX_BRACKET_TYPE: string
                                ERR_INVALID_LOOK_BEHIND_PATTERN: string
                                ERR_INVALID_REPEAT_RANGE_PATTERN: string
                                ERR_TOO_BIG_NUMBER: string
                                ERR_TOO_BIG_NUMBER_FOR_REPEAT_RANGE: string
                                ERR_UPPER_SMALLER_THAN_LOWER_IN_REPEAT_RANGE: string
                                ERR_EMPTY_RANGE_IN_CHAR_CLASS: string
                                ERR_TOO_MANY_MULTI_BYTE_RANGES: string
                                ERR_TOO_SHORT_MULTI_BYTE_STRING: string
                                ERR_INVALID_BACKREF: string
                                ERR_NUMBERED_BACKREF_OR_CALL_NOT_ALLOWED: string
                                ERR_EMPTY_GROUP_NAME: string
                                ERR_INVALID_GROUP_NAME: string
                                ERR_INVALID_CHAR_IN_GROUP_NAME: string
                                ERR_GROUP_NUMBER_OVER_FOR_CAPTURE_HISTORY: string
                                ERR_INVALID_COMBINATION_OF_OPTIONS: string
                            }
                        }
                        namespace encoding {
                            interface CharacterType {
                                NEWLINE: int
                                ALPHA: int
                                BLANK: int
                                CNTRL: int
                                DIGIT: int
                                GRAPH: int
                                LOWER: int
                                PRINT: int
                                PUNCT: int
                                SPACE: int
                                UPPER: int
                                XDIGIT: int
                                WORD: int
                                ALNUM: int
                                ASCII: int
                                SPECIAL_MASK: int
                                S: int
                                D: int
                                W: int
                                LETTER_MASK: int
                                ALPHA_MASK: int
                                ALNUM_MASK: int
                                WORD_MASK: int
                                PUNCT_MASK: int
                                CNTRL_MASK: int
                                SPACE_MASK: int
                                GRAPH_MASK: int
                                PRINT_MASK: int
                            }
                            class ObjPtr<T> {
                                public p: T
                                public constructor()
                                public constructor(arg0: T)
                                public static class: java.lang.Class<any>
                            }
                            class IntHolder {
                                public value: int
                                public constructor()
                                public static class: java.lang.Class<any>
                            }
                        }
                        abstract class ScannerSupport extends jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder implements jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages {
                            protected chars: char[]
                            protected p: int
                            protected stop: int
                            protected c: int
                            protected _p: int
                            protected constructor(arg0: char[], arg1: int, arg2: int)
                            protected getBegin(): int
                            protected getEnd(): int
                            protected scanUnsignedNumber(): int
                            protected scanUnsignedHexadecimalNumber(arg0: int): int
                            protected scanUnsignedOctalNumber(arg0: int): int
                            protected reset(): void
                            protected mark(): void
                            protected restore(): void
                            protected inc(): void
                            protected fetch(): void
                            protected fetchTo(): int
                            protected unfetch(): void
                            protected peek(): int
                            protected peekIs(arg0: int): boolean
                            protected left(): boolean
                            public static class: java.lang.Class<any>
                        }
                        class Lexer extends jdk.nashorn.internal.runtime.regexp.joni.ScannerSupport {
                            protected env: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment
                            protected syntax: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            protected token: jdk.nashorn.internal.runtime.regexp.joni.Token
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: char[], arg2: int, arg3: int)
                            protected fetchTokenInCC(): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                            protected fetchToken(): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                            protected syntaxWarn(arg0: string, arg1: char): void
                            protected syntaxWarn(arg0: string): void
                            public static class: java.lang.Class<any>
                        }
                        class Parser extends jdk.nashorn.internal.runtime.regexp.joni.Lexer {
                            protected regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected root: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                            protected returnCode: int
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: char[], arg2: int, arg3: int)
                            protected parse(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                            public static class: java.lang.Class<any>
                        }
                        class Parser$1 {
                            public static class: java.lang.Class<any>
                        }
                        class Analyser extends jdk.nashorn.internal.runtime.regexp.joni.Parser {
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: char[], arg2: int, arg3: int)
                            protected compile(): void
                            protected getCharLengthTree(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): int
                            protected setupTree(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: int): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                            protected setOptimizedInfoFromTree(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                            public static class: java.lang.Class<any>
                        }
                        namespace ast {
                            class AnyCharNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node {
                                public constructor()
                                public getType(): int
                                public getName(): string
                                public toString(arg0: int): string
                                public static class: java.lang.Class<any>
                            }
                            class AnchorNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.AnchorType {
                                public type: int
                                public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public charLength: int
                                public constructor(arg0: int)
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public getName(): string
                                public toString(arg0: int): string
                                public typeToString(): string
                                public static class: java.lang.Class<any>
                            }
                            class EncloseNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.StateNode implements jdk.nashorn.internal.runtime.regexp.joni.constants.EncloseType {
                                public type: int
                                public regNum: int
                                public option: int
                                public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public callAddr: int
                                public minLength: int
                                public maxLength: int
                                public charLength: int
                                public optCount: int
                                public constructor(arg0: int)
                                public constructor()
                                public constructor(arg0: int, arg1: int)
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public getName(): string
                                public toString(arg0: int): string
                                public typeToString(): string
                                public isMemory(): boolean
                                public isOption(): boolean
                                public isStopBacktrack(): boolean
                                public static class: java.lang.Class<any>
                            }
                            class BackRefNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.StateNode {
                                public backRef: int
                                public constructor(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment)
                                public getType(): int
                                public getName(): string
                                public toString(arg0: int): string
                                public static class: java.lang.Class<any>
                            }
                            class StringNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.StringType {
                                public static EMPTY: jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
                                public chars: char[]
                                public p: int
                                public end: int
                                public flag: int
                                public constructor()
                                public constructor(arg0: char[], arg1: int, arg2: int)
                                public constructor(arg0: char)
                                public ensure(arg0: int): void
                                public getType(): int
                                public getName(): string
                                public toString(arg0: int): string
                                public length(): int
                                public splitLastChar(): jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
                                public canBeSplit(): boolean
                                public set(arg0: char[], arg1: int, arg2: int): void
                                public cat(arg0: char[], arg1: int, arg2: int): void
                                public cat(arg0: char): void
                                public catCode(arg0: int): void
                                public clear(): void
                                public setRaw(): void
                                public clearRaw(): void
                                public isRaw(): boolean
                                public setAmbig(): void
                                public clearAmbig(): void
                                public isAmbig(): boolean
                                public setDontGetOptInfo(): void
                                public clearDontGetOptInfo(): void
                                public isDontGetOptInfo(): boolean
                                public setShared(): void
                                public clearShared(): void
                                public isShared(): boolean
                                public static class: java.lang.Class<any>
                            }
                            class CClassNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node {
                                public bs: jdk.nashorn.internal.runtime.regexp.joni.BitSet
                                public mbuf: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                                public constructor()
                                public clear(): void
                                public getType(): int
                                public getName(): string
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public toString(arg0: int): string
                                public flagsToString(): string
                                public isEmpty(): boolean
                                public addCodeRangeToBuf(arg0: int, arg1: int): void
                                public addCodeRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: int, arg2: int): void
                                public addAllMultiByteRange(): void
                                public clearNotFlag(): void
                                public and(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                                public or(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                                public addCTypeByRange(arg0: int, arg1: boolean, arg2: int, arg3: int[]): void
                                public addCType(arg0: int, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg3: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): void
                                public nextStateClass(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode$CCStateArg, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment): void
                                public nextStateValue(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode$CCStateArg, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment): void
                                public isCodeInCCLength(arg0: int): boolean
                                public isCodeInCC(arg0: int): boolean
                                public setNot(): void
                                public clearNot(): void
                                public isNot(): boolean
                                public setShare(): void
                                public clearShare(): void
                                public isShare(): boolean
                                public static class: java.lang.Class<any>
                            }
                            class CClassNode$1 {
                                public static class: java.lang.Class<any>
                            }
                            class CClassNode$CCStateArg {
                                public v: int
                                public vs: int
                                public vsIsRaw: boolean
                                public vIsRaw: boolean
                                public inType: jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public type: jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public state: jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public constructor()
                                public static class: java.lang.Class<any>
                            }
                            abstract class StateNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.NodeStatus {
                                protected state: int
                                public constructor()
                                public toString(arg0: int): string
                                public stateToString(): string
                                public isMinFixed(): boolean
                                public setMinFixed(): void
                                public isMaxFixed(): boolean
                                public setMaxFixed(): void
                                public isCLenFixed(): boolean
                                public setCLenFixed(): void
                                public isMark1(): boolean
                                public setMark1(): void
                                public isMark2(): boolean
                                public setMark2(): void
                                public clearMark2(): void
                                public isMemBackrefed(): boolean
                                public setMemBackrefed(): void
                                public isStopBtSimpleRepeat(): boolean
                                public setStopBtSimpleRepeat(): void
                                public isRecursion(): boolean
                                public setRecursion(): void
                                public isCalled(): boolean
                                public setCalled(): void
                                public isAddrFixed(): boolean
                                public setAddrFixed(): void
                                public isInRepeat(): boolean
                                public setInRepeat(): void
                                public isNestLevel(): boolean
                                public setNestLevel(): void
                                public isByNumber(): boolean
                                public setByNumber(): void
                                public static class: java.lang.Class<any>
                            }
                            class QuantifierNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.StateNode {
                                public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public lower: int
                                public upper: int
                                public greedy: boolean
                                public targetEmptyInfo: int
                                public headExact: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public nextHeadExact: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public isRefered: boolean
                                public static REPEAT_INFINITE: int
                                public constructor(arg0: int, arg1: int, arg2: boolean)
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public convertToString(arg0: int): jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
                                public getName(): string
                                public toString(arg0: int): string
                                public isAnyCharStar(): boolean
                                protected popularNum(): int
                                protected set(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                                public reduceNestedQuantifier(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                                public setQuantifier(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg3: char[], arg4: int, arg5: int): int
                                public static isRepeatInfinite(arg0: int): boolean
                                public static class: java.lang.Class<any>
                            }
                            class QuantifierNode$1 {
                                public static class: java.lang.Class<any>
                            }
                            class QuantifierNode$ReduceType extends java.lang.Enum<jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType> {
                                public static ASIS: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static DEL: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static A: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static AQ: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static QQ: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static P_QQ: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static PQ_Q: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static values(): jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType[]
                                public static valueOf(arg0: string): jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode$ReduceType
                                public static class: java.lang.Class<any>
                            }
                            abstract class Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.NodeType {
                                public parent: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public constructor()
                                public getType(): int
                                public getType2Bit(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public swap(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public verifyTree(arg0: java.util.Set<jdk.nashorn.internal.runtime.regexp.joni.ast.Node>, arg1: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback): void
                                public getName(): string
                                protected toString(arg0: int): string
                                public getAddressName(): string
                                public toString(): string
                                protected static pad(arg0: java.lang.Object, arg1: int): string
                                public isInvalidQuantifier(): boolean
                                public isAllowedInLookBehind(): boolean
                                public isSimple(): boolean
                                public static class: java.lang.Class<any>
                            }
                            class ConsAltNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node {
                                public car: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public cdr: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
                                public static newAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
                                public static newListNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
                                public static listAdd(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
                                public toListNode(): void
                                public toAltNode(): void
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public swap(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public verifyTree(arg0: java.util.Set<jdk.nashorn.internal.runtime.regexp.joni.ast.Node>, arg1: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback): void
                                public setCar(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setCdr(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
                                public getName(): string
                                public toString(arg0: int): string
                                public static class: java.lang.Class<any>
                            }
                        }
                        class Option {
                            public static NONE: int
                            public static IGNORECASE: int
                            public static EXTEND: int
                            public static MULTILINE: int
                            public static SINGLELINE: int
                            public static FIND_LONGEST: int
                            public static FIND_NOT_EMPTY: int
                            public static NEGATE_SINGLELINE: int
                            public static DONT_CAPTURE_GROUP: int
                            public static CAPTURE_GROUP: int
                            public static NOTBOL: int
                            public static NOTEOL: int
                            public static POSIX_REGION: int
                            public static MAXBIT: int
                            public static DEFAULT: int
                            public constructor()
                            public static toString(arg0: int): string
                            public static isIgnoreCase(arg0: int): boolean
                            public static isExtend(arg0: int): boolean
                            public static isSingleline(arg0: int): boolean
                            public static isMultiline(arg0: int): boolean
                            public static isFindLongest(arg0: int): boolean
                            public static isFindNotEmpty(arg0: int): boolean
                            public static isFindCondition(arg0: int): boolean
                            public static isNegateSingleline(arg0: int): boolean
                            public static isDontCaptureGroup(arg0: int): boolean
                            public static isCaptureGroup(arg0: int): boolean
                            public static isNotBol(arg0: int): boolean
                            public static isNotEol(arg0: int): boolean
                            public static isPosixRegion(arg0: int): boolean
                            public static isDynamic(arg0: int): boolean
                            public static class: java.lang.Class<any>
                        }
                        class BitStatus {
                            public static BIT_STATUS_BITS_NUM: int
                            public static bsClear(): int
                            public static bsAll(): int
                            public static bsAt(arg0: int, arg1: int): boolean
                            public static bsOnAt(arg0: int, arg1: int): int
                            public static bsOnOff(arg0: int, arg1: int, arg2: boolean): int
                            public static class: java.lang.Class<any>
                        }
                        abstract class MatcherFactory {
                            public constructor()
                            public create(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int): jdk.nashorn.internal.runtime.regexp.joni.Matcher
                            public static class: java.lang.Class<any>
                        }
                        class MatcherFactory$1 extends jdk.nashorn.internal.runtime.regexp.joni.MatcherFactory {
                            public create(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int): jdk.nashorn.internal.runtime.regexp.joni.Matcher
                            public static class: java.lang.Class<any>
                        }
                        interface WarnCallback {
                            DEFAULT: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback
                            warn(arg0: string): void
                        }
                        class WarnCallback$1 implements jdk.nashorn.internal.runtime.regexp.joni.WarnCallback {
                            public warn(arg0: string): void
                            public static class: java.lang.Class<any>
                        }
                        namespace constants {
                            interface OPCode {
                                FINISH: int
                                END: int
                                EXACT1: int
                                EXACT2: int
                                EXACT3: int
                                EXACT4: int
                                EXACT5: int
                                EXACTN: int
                                EXACT1_IC: int
                                EXACTN_IC: int
                                CCLASS: int
                                CCLASS_MB: int
                                CCLASS_MIX: int
                                CCLASS_NOT: int
                                CCLASS_MB_NOT: int
                                CCLASS_MIX_NOT: int
                                CCLASS_NODE: int
                                ANYCHAR: int
                                ANYCHAR_ML: int
                                ANYCHAR_STAR: int
                                ANYCHAR_ML_STAR: int
                                ANYCHAR_STAR_PEEK_NEXT: int
                                ANYCHAR_ML_STAR_PEEK_NEXT: int
                                WORD: int
                                NOT_WORD: int
                                WORD_BOUND: int
                                NOT_WORD_BOUND: int
                                WORD_BEGIN: int
                                WORD_END: int
                                BEGIN_BUF: int
                                END_BUF: int
                                BEGIN_LINE: int
                                END_LINE: int
                                SEMI_END_BUF: int
                                BEGIN_POSITION: int
                                BACKREF1: int
                                BACKREF2: int
                                BACKREFN: int
                                BACKREFN_IC: int
                                BACKREF_MULTI: int
                                BACKREF_MULTI_IC: int
                                BACKREF_WITH_LEVEL: int
                                MEMORY_START: int
                                MEMORY_START_PUSH: int
                                MEMORY_END_PUSH: int
                                MEMORY_END_PUSH_REC: int
                                MEMORY_END: int
                                MEMORY_END_REC: int
                                FAIL: int
                                JUMP: int
                                PUSH: int
                                POP: int
                                PUSH_OR_JUMP_EXACT1: int
                                PUSH_IF_PEEK_NEXT: int
                                REPEAT: int
                                REPEAT_NG: int
                                REPEAT_INC: int
                                REPEAT_INC_NG: int
                                REPEAT_INC_SG: int
                                REPEAT_INC_NG_SG: int
                                NULL_CHECK_START: int
                                NULL_CHECK_END: int
                                NULL_CHECK_END_MEMST: int
                                NULL_CHECK_END_MEMST_PUSH: int
                                PUSH_POS: int
                                POP_POS: int
                                PUSH_POS_NOT: int
                                FAIL_POS: int
                                PUSH_STOP_BT: int
                                POP_STOP_BT: int
                                LOOK_BEHIND: int
                                PUSH_LOOK_BEHIND_NOT: int
                                FAIL_LOOK_BEHIND_NOT: int
                                CALL: int
                                RETURN: int
                                STATE_CHECK_PUSH: int
                                STATE_CHECK_PUSH_OR_JUMP: int
                                STATE_CHECK: int
                                STATE_CHECK_ANYCHAR_STAR: int
                                STATE_CHECK_ANYCHAR_ML_STAR: int
                                SET_OPTION_PUSH: int
                                SET_OPTION: int
                            }
                            interface OPSize {
                                OPCODE: int
                                RELADDR: int
                                ABSADDR: int
                                LENGTH: int
                                MEMNUM: int
                                STATE_CHECK_NUM: int
                                REPEATNUM: int
                                OPTION: int
                                CODE_POINT: int
                                POINTER: int
                                INDEX: int
                                ANYCHAR_STAR: int
                                ANYCHAR_STAR_PEEK_NEXT: int
                                JUMP: int
                                PUSH: int
                                POP: int
                                PUSH_OR_JUMP_EXACT1: int
                                PUSH_IF_PEEK_NEXT: int
                                REPEAT_INC: int
                                REPEAT_INC_NG: int
                                PUSH_POS: int
                                PUSH_POS_NOT: int
                                POP_POS: int
                                FAIL_POS: int
                                SET_OPTION: int
                                SET_OPTION_PUSH: int
                                FAIL: int
                                MEMORY_START: int
                                MEMORY_START_PUSH: int
                                MEMORY_END_PUSH: int
                                MEMORY_END_PUSH_REC: int
                                MEMORY_END: int
                                MEMORY_END_REC: int
                                PUSH_STOP_BT: int
                                POP_STOP_BT: int
                                NULL_CHECK_START: int
                                NULL_CHECK_END: int
                                LOOK_BEHIND: int
                                PUSH_LOOK_BEHIND_NOT: int
                                FAIL_LOOK_BEHIND_NOT: int
                                CALL: int
                                RETURN: int
                                STATE_CHECK: int
                                STATE_CHECK_PUSH: int
                                STATE_CHECK_PUSH_OR_JUMP: int
                                STATE_CHECK_ANYCHAR_STAR: int
                            }
                            interface Arguments {
                                SPECIAL: int
                                NON: int
                                RELADDR: int
                                ABSADDR: int
                                LENGTH: int
                                MEMNUM: int
                                OPTION: int
                                STATE_CHECK: int
                            }
                            interface StackPopLevel {
                                FREE: int
                                MEM_START: int
                                ALL: int
                            }
                            interface Traverse {
                                TRAVERSE_CALLBACK_AT_FIRST: int
                                TRAVERSE_CALLBACK_AT_LAST: int
                                TRAVERSE_CALLBACK_AT_BOTH: int
                            }
                            interface StackType {
                                INVALID_STACK_INDEX: int
                                ALT: int
                                LOOK_BEHIND_NOT: int
                                POS_NOT: int
                                MEM_START: int
                                MEM_END: int
                                REPEAT_INC: int
                                STATE_CHECK_MARK: int
                                NULL_CHECK_START: int
                                NULL_CHECK_END: int
                                MEM_END_MARK: int
                                POS: int
                                STOP_BT: int
                                REPEAT: int
                                CALL_FRAME: int
                                RETURN: int
                                VOID: int
                                MASK_POP_USED: int
                                MASK_TO_VOID_TARGET: int
                                MASK_MEM_END_OR_MARK: int
                            }
                            interface TargetInfo {
                                ISNOT_EMPTY: int
                                IS_EMPTY: int
                                IS_EMPTY_MEM: int
                            }
                            interface AsmConstants {
                                THIS: int
                                RANGE: int
                                SSTART: int
                                SPREV: int
                                S: int
                                BYTES: int
                                LAST_INDEX: int
                                STR: string
                                END: string
                                MSA_START: string
                                MSA_OPTONS: string
                                MSA_BEST_LEN: string
                                MSA_BEST_S: string
                                MSA_BEGIN: string
                                MSA_END: string
                                BITSET: string
                                CODERANGE: string
                                TEMPLATE: string
                            }
                            interface EncloseType {
                                MEMORY: int
                                OPTION: int
                                STOP_BACKTRACK: int
                                ALLOWED_IN_LB: int
                                ALLOWED_IN_LB_NOT: int
                            }
                            class CCSTATE extends java.lang.Enum<jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE> {
                                public static VALUE: jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public static RANGE: jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public static COMPLETE: jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public static START: jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public static values(): jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE[]
                                public static valueOf(arg0: string): jdk.nashorn.internal.runtime.regexp.joni.constants.CCSTATE
                                public static class: java.lang.Class<any>
                            }
                            class CCVALTYPE extends java.lang.Enum<jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE> {
                                public static SB: jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public static CODE_POINT: jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public static CLASS: jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public static values(): jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE[]
                                public static valueOf(arg0: string): jdk.nashorn.internal.runtime.regexp.joni.constants.CCVALTYPE
                                public static class: java.lang.Class<any>
                            }
                            class TokenType extends java.lang.Enum<jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType> {
                                public static EOT: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static RAW_BYTE: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CHAR: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static STRING: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CODE_POINT: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static ANYCHAR: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CHAR_TYPE: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static BACKREF: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CALL: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static ANCHOR: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static OP_REPEAT: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static INTERVAL: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static ANYCHAR_ANYTIME: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static ALT: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static SUBEXP_OPEN: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static SUBEXP_CLOSE: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CC_OPEN: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static QUOTE_OPEN: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CHAR_PROPERTY: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CC_CLOSE: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CC_RANGE: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static POSIX_BRACKET_OPEN: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CC_AND: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static CC_CC_OPEN: jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static values(): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType[]
                                public static valueOf(arg0: string): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                                public static class: java.lang.Class<any>
                            }
                            interface StringType {
                                NSTR_RAW: int
                                NSTR_AMBIG: int
                                NSTR_DONT_GET_OPT_INFO: int
                                NSTR_SHARED: int
                            }
                            interface AnchorType {
                                BEGIN_BUF: int
                                BEGIN_LINE: int
                                BEGIN_POSITION: int
                                END_BUF: int
                                SEMI_END_BUF: int
                                END_LINE: int
                                WORD_BOUND: int
                                NOT_WORD_BOUND: int
                                WORD_BEGIN: int
                                WORD_END: int
                                PREC_READ: int
                                PREC_READ_NOT: int
                                LOOK_BEHIND: int
                                LOOK_BEHIND_NOT: int
                                ANYCHAR_STAR: int
                                ANYCHAR_STAR_ML: int
                                ANYCHAR_STAR_MASK: int
                                END_BUF_MASK: int
                                ALLOWED_IN_LB: int
                                ALLOWED_IN_LB_NOT: int
                            }
                            interface SyntaxProperties {
                                OP_VARIABLE_META_CHARACTERS: int
                                OP_DOT_ANYCHAR: int
                                OP_ASTERISK_ZERO_INF: int
                                OP_ESC_ASTERISK_ZERO_INF: int
                                OP_PLUS_ONE_INF: int
                                OP_ESC_PLUS_ONE_INF: int
                                OP_QMARK_ZERO_ONE: int
                                OP_ESC_QMARK_ZERO_ONE: int
                                OP_BRACE_INTERVAL: int
                                OP_ESC_BRACE_INTERVAL: int
                                OP_VBAR_ALT: int
                                OP_ESC_VBAR_ALT: int
                                OP_LPAREN_SUBEXP: int
                                OP_ESC_LPAREN_SUBEXP: int
                                OP_ESC_AZ_BUF_ANCHOR: int
                                OP_ESC_CAPITAL_G_BEGIN_ANCHOR: int
                                OP_DECIMAL_BACKREF: int
                                OP_BRACKET_CC: int
                                OP_ESC_W_WORD: int
                                OP_ESC_LTGT_WORD_BEGIN_END: int
                                OP_ESC_B_WORD_BOUND: int
                                OP_ESC_S_WHITE_SPACE: int
                                OP_ESC_D_DIGIT: int
                                OP_LINE_ANCHOR: int
                                OP_POSIX_BRACKET: int
                                OP_QMARK_NON_GREEDY: int
                                OP_ESC_CONTROL_CHARS: int
                                OP_ESC_C_CONTROL: int
                                OP_ESC_OCTAL3: int
                                OP_ESC_X_HEX2: int
                                OP_ESC_X_BRACE_HEX8: int
                                OP2_ESC_CAPITAL_Q_QUOTE: int
                                OP2_QMARK_GROUP_EFFECT: int
                                OP2_OPTION_PERL: int
                                OP2_OPTION_RUBY: int
                                OP2_PLUS_POSSESSIVE_REPEAT: int
                                OP2_PLUS_POSSESSIVE_INTERVAL: int
                                OP2_CCLASS_SET_OP: int
                                OP2_QMARK_LT_NAMED_GROUP: int
                                OP2_ESC_K_NAMED_BACKREF: int
                                OP2_ESC_G_SUBEXP_CALL: int
                                OP2_ATMARK_CAPTURE_HISTORY: int
                                OP2_ESC_CAPITAL_C_BAR_CONTROL: int
                                OP2_ESC_CAPITAL_M_BAR_META: int
                                OP2_ESC_V_VTAB: int
                                OP2_ESC_U_HEX4: int
                                OP2_ESC_GNU_BUF_ANCHOR: int
                                OP2_ESC_P_BRACE_CHAR_PROPERTY: int
                                OP2_ESC_P_BRACE_CIRCUMFLEX_NOT: int
                                OP2_ESC_H_XDIGIT: int
                                OP2_INEFFECTIVE_ESCAPE: int
                                CONTEXT_INDEP_ANCHORS: int
                                CONTEXT_INDEP_REPEAT_OPS: int
                                CONTEXT_INVALID_REPEAT_OPS: int
                                ALLOW_UNMATCHED_CLOSE_SUBEXP: int
                                ALLOW_INVALID_INTERVAL: int
                                ALLOW_INTERVAL_LOW_ABBREV: int
                                STRICT_CHECK_BACKREF: int
                                DIFFERENT_LEN_ALT_LOOK_BEHIND: int
                                CAPTURE_ONLY_NAMED_GROUP: int
                                ALLOW_MULTIPLEX_DEFINITION_NAME: int
                                FIXED_INTERVAL_IS_GREEDY_ONLY: int
                                NOT_NEWLINE_IN_NEGATIVE_CC: int
                                BACKSLASH_ESCAPE_IN_CC: int
                                ALLOW_EMPTY_RANGE_IN_CC: int
                                ALLOW_DOUBLE_RANGE_OP_IN_CC: int
                                WARN_CC_OP_NOT_ESCAPED: int
                                WARN_REDUNDANT_NESTED_REPEAT: int
                                POSIX_COMMON_OP: int
                                GNU_REGEX_OP: int
                                GNU_REGEX_BV: int
                            }
                            interface MetaChar {
                                ESCAPE: int
                                ANYCHAR: int
                                ANYTIME: int
                                ZERO_OR_ONE_TIME: int
                                ONE_OR_MORE_TIME: int
                                ANYCHAR_ANYTIME: int
                                INEFFECTIVE_META_CHAR: int
                            }
                            interface NodeStatus {
                                NST_MIN_FIXED: int
                                NST_MAX_FIXED: int
                                NST_CLEN_FIXED: int
                                NST_MARK1: int
                                NST_MARK2: int
                                NST_MEM_BACKREFED: int
                                NST_STOP_BT_SIMPLE_REPEAT: int
                                NST_RECURSION: int
                                NST_CALLED: int
                                NST_ADDR_FIXED: int
                                NST_NAMED_GROUP: int
                                NST_NAME_REF: int
                                NST_IN_REPEAT: int
                                NST_NEST_LEVEL: int
                                NST_BY_NUMBER: int
                            }
                            interface NodeType {
                                STR: int
                                CCLASS: int
                                CTYPE: int
                                CANY: int
                                BREF: int
                                QTFR: int
                                ENCLOSE: int
                                ANCHOR: int
                                LIST: int
                                ALT: int
                                CALL: int
                                BIT_STR: int
                                BIT_CCLASS: int
                                BIT_CTYPE: int
                                BIT_CANY: int
                                BIT_BREF: int
                                BIT_QTFR: int
                                BIT_ENCLOSE: int
                                BIT_ANCHOR: int
                                BIT_LIST: int
                                BIT_ALT: int
                                BIT_CALL: int
                                ALLOWED_IN_LB: int
                                SIMPLE: int
                            }
                            interface RegexState {
                                NORMAL: int
                                SEARCHING: int
                                COMPILING: int
                                MODIFY: int
                            }
                        }
                        class Regex implements jdk.nashorn.internal.runtime.regexp.joni.constants.RegexState {
                            protected analyser: jdk.nashorn.internal.runtime.regexp.joni.Analyser
                            public constructor(arg0: java.lang.CharSequence)
                            public constructor(arg0: string)
                            public constructor(arg0: char[])
                            public constructor(arg0: char[], arg1: int, arg2: int)
                            public constructor(arg0: char[], arg1: int, arg2: int, arg3: int)
                            public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax)
                            public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
                            public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax, arg5: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
                            public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: jdk.nashorn.internal.runtime.regexp.joni.Syntax, arg6: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
                            public compile(): jdk.nashorn.internal.runtime.regexp.joni.MatcherFactory
                            public matcher(arg0: char[]): jdk.nashorn.internal.runtime.regexp.joni.Matcher
                            public matcher(arg0: char[], arg1: int, arg2: int): jdk.nashorn.internal.runtime.regexp.joni.Matcher
                            public getWarnings(): jdk.nashorn.internal.runtime.regexp.joni.WarnCallback
                            public numberOfCaptures(): int
                            public optimizeInfoToString(): string
                            public getOptions(): int
                            public dumpTree(): string
                            public dumpByteCode(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                    class JoniRegExp extends jdk.nashorn.internal.runtime.regexp.RegExp {
                        public constructor(arg0: string, arg1: string)
                        public match(arg0: string): jdk.nashorn.internal.runtime.regexp.RegExpMatcher
                        public static class: java.lang.Class<any>
                    }
                    class JoniRegExp$JoniMatcher implements jdk.nashorn.internal.runtime.regexp.RegExpMatcher {
                        public search(arg0: int): boolean
                        public getInput(): string
                        public start(): int
                        public start(arg0: int): int
                        public end(): int
                        public end(arg0: int): int
                        public group(): string
                        public group(arg0: int): string
                        public groupCount(): int
                        public static class: java.lang.Class<any>
                    }
                    class JoniRegExp$Factory extends jdk.nashorn.internal.runtime.regexp.RegExpFactory {
                        public constructor()
                        public compile(arg0: string, arg1: string): jdk.nashorn.internal.runtime.regexp.RegExp
                        public static class: java.lang.Class<any>
                    }
                    interface RegExpMatcher extends java.util.regex.MatchResult {
                        search(arg0: int): boolean
                        getInput(): string
                    }
                    abstract class RegExp {
                        protected groupsInNegativeLookahead: jdk.nashorn.internal.runtime.BitVector
                        protected constructor(arg0: string, arg1: string)
                        public getSource(): string
                        public setGlobal(arg0: boolean): void
                        public isGlobal(): boolean
                        public isIgnoreCase(): boolean
                        public isMultiline(): boolean
                        public getGroupsInNegativeLookahead(): jdk.nashorn.internal.runtime.BitVector
                        public match(arg0: string): jdk.nashorn.internal.runtime.regexp.RegExpMatcher
                        protected static throwParserException(arg0: string, arg1: string): void
                        public static class: java.lang.Class<any>
                    }
                    class RegExpResult {
                        public constructor(arg0: string, arg1: int, arg2: java.lang.Object[])
                        public getGroups(): java.lang.Object[]
                        public getInput(): string
                        public getIndex(): int
                        public length(): int
                        public getGroup(arg0: int): java.lang.Object
                        public getLastParen(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
                class JSErrorType extends java.lang.Enum<jdk.nashorn.internal.runtime.JSErrorType> {
                    public static ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static EVAL_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static RANGE_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static REFERENCE_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static SYNTAX_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static TYPE_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static URI_ERROR: jdk.nashorn.internal.runtime.JSErrorType
                    public static values(): jdk.nashorn.internal.runtime.JSErrorType[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.runtime.JSErrorType
                    public static class: java.lang.Class<any>
                }
                namespace logging {
                    class DebugLogger {
                        public static DISABLED_LOGGER: jdk.nashorn.internal.runtime.logging.DebugLogger
                        public constructor(arg0: string, arg1: java.util.logging.Level, arg2: boolean)
                        public getLevel(): java.util.logging.Level
                        public getOutputStream(): java.io.PrintWriter
                        public static quote(arg0: string): string
                        public isEnabled(): boolean
                        public static isEnabled(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger): boolean
                        public indent(arg0: int): void
                        public indent(): void
                        public unindent(): void
                        public isLoggable(arg0: java.util.logging.Level): boolean
                        public finest(arg0: string): void
                        public finest(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public finest(...arg0: java.lang.Object[]): void
                        public finest(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public finer(arg0: string): void
                        public finer(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public finer(...arg0: java.lang.Object[]): void
                        public finer(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public fine(arg0: string): void
                        public fine(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public fine(...arg0: java.lang.Object[]): void
                        public fine(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public config(arg0: string): void
                        public config(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public config(...arg0: java.lang.Object[]): void
                        public config(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public info(arg0: string): void
                        public info(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public info(...arg0: java.lang.Object[]): void
                        public info(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public warning(arg0: string): void
                        public warning(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public warning(...arg0: java.lang.Object[]): void
                        public warning(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public severe(arg0: string): void
                        public severe(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: string): void
                        public severe(...arg0: java.lang.Object[]): void
                        public severe(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public log(arg0: java.util.logging.Level, arg1: string): void
                        public log(arg0: java.util.logging.Level, ...arg1: java.lang.Object[]): void
                        public static class: java.lang.Class<any>
                    }
                    class DebugLogger$1 implements java.security.PrivilegedAction<java.lang.Void> {
                        public run(): java.lang.Void
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class DebugLogger$1$1 extends java.util.logging.Formatter {
                        public format(arg0: java.util.logging.LogRecord): string
                        public static class: java.lang.Class<any>
                    }
                    interface Logger extends java.lang.annotation.Annotation {
                        name(): string
                    }
                    interface Loggable {
                        initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                        getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    }
                }
                class Source implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static sourceFor(arg0: string, arg1: char[], arg2: boolean): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: char[]): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: string, arg2: boolean): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: string): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: java.net.URL): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: java.net.URL, arg2: java.nio.charset.Charset): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: java.io.File): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: java.io.File, arg2: java.nio.charset.Charset): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: string, arg1: java.io.Reader): jdk.nashorn.internal.runtime.Source
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getString(): string
                    public getName(): string
                    public getLastModified(): long
                    public getBase(): string
                    public getString(arg0: int, arg1: int): string
                    public getString(arg0: long): string
                    public getURL(): java.net.URL
                    public getExplicitURL(): string
                    public setExplicitURL(arg0: string): void
                    public isEvalCode(): boolean
                    public getLine(arg0: int): int
                    public getColumn(arg0: int): int
                    public getSourceLine(arg0: int): string
                    public getContent(): char[]
                    public getLength(): int
                    public static readFully(arg0: java.io.Reader): char[]
                    public static readFully(arg0: java.io.File): char[]
                    public static readFully(arg0: java.io.File, arg1: java.nio.charset.Charset): char[]
                    public static readFully(arg0: java.net.URL): char[]
                    public static readFully(arg0: java.net.URL, arg1: java.nio.charset.Charset): char[]
                    public getDigest(): string
                    public static baseURL(arg0: java.net.URL): string
                    public toString(): string
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static class: java.lang.Class<any>
                }
                class Source$1 {
                    public static class: java.lang.Class<any>
                }
                class Source$FileData extends jdk.nashorn.internal.runtime.Source$URLData {
                    protected checkPermissionAndClose(): void
                    protected loadMeta(): void
                    protected load(): void
                    public static class: java.lang.Class<any>
                }
                class Source$URLData implements jdk.nashorn.internal.runtime.Source$Data {
                    protected cs: java.nio.charset.Charset
                    protected array: char[]
                    protected length: int
                    protected lastModified: long
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public url(): java.net.URL
                    public length(): int
                    public lastModified(): long
                    public array(): char[]
                    public isEvalCode(): boolean
                    protected checkPermissionAndClose(): void
                    protected load(): void
                    protected loadMeta(): void
                    public static class: java.lang.Class<any>
                }
                class Source$RawData implements jdk.nashorn.internal.runtime.Source$Data {
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public url(): java.net.URL
                    public length(): int
                    public lastModified(): long
                    public array(): char[]
                    public isEvalCode(): boolean
                    public static class: java.lang.Class<any>
                }
                interface Source$Data {
                    url(): java.net.URL
                    length(): int
                    lastModified(): long
                    array(): char[]
                    isEvalCode(): boolean
                }
                class Source$Cache extends java.util.WeakHashMap<jdk.nashorn.internal.runtime.Source, java.lang.ref.WeakReference<jdk.nashorn.internal.runtime.Source>> {
                    public get(arg0: jdk.nashorn.internal.runtime.Source): jdk.nashorn.internal.runtime.Source
                    public put(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.Source): void
                    public static class: java.lang.Class<any>
                }
                class ScriptFunction extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static G$PROTOTYPE: java.lang.invoke.MethodHandle
                    public static S$PROTOTYPE: java.lang.invoke.MethodHandle
                    public static G$LENGTH: java.lang.invoke.MethodHandle
                    public static G$NAME: java.lang.invoke.MethodHandle
                    public static INVOKE_SYNC: java.lang.invoke.MethodHandle
                    public static GET_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    protected allocatorMap: jdk.nashorn.internal.runtime.PropertyMap
                    protected constructor(arg0: string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.Specialization[])
                    protected constructor(arg0: string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.PropertyMap, arg3: jdk.nashorn.internal.runtime.Specialization[])
                    public static create(arg0: java.lang.Object[], arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public static create(arg0: java.lang.Object[], arg1: int): jdk.nashorn.internal.runtime.ScriptFunction
                    public static createAnonymous(): jdk.nashorn.internal.runtime.ScriptFunction
                    public static createBuiltin(arg0: string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.Specialization[]): jdk.nashorn.internal.runtime.ScriptFunction
                    public static createBuiltin(arg0: string, arg1: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.ScriptFunction
                    public static createStrictBuiltin(arg0: string, arg1: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.ScriptFunction
                    public createBound(arg0: java.lang.Object, arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.ScriptFunction
                    public createSynchronized(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ScriptFunction
                    public getClassName(): string
                    public isInstance(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    protected getTargetFunction(): jdk.nashorn.internal.runtime.ScriptFunction
                    public setArity(arg0: int): void
                    public isStrict(): boolean
                    public needsWrappedThis(): boolean
                    public safeToString(): string
                    public toString(): string
                    public toSource(): string
                    public getPrototype(): java.lang.Object
                    public setPrototype(arg0: java.lang.Object): void
                    public getBoundInvokeHandle(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public getName(): string
                    public getScope(): jdk.nashorn.internal.runtime.ScriptObject
                    public static G$prototype(arg0: java.lang.Object): java.lang.Object
                    public static S$prototype(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static G$length(arg0: java.lang.Object): int
                    public static G$name(arg0: java.lang.Object): java.lang.Object
                    public static getPrototype(arg0: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.ScriptObject
                    public static getConstructorCount(): long
                    public static getInvokes(): long
                    public static getAllocations(): long
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class ScriptFunction$1 {
                    public static class: java.lang.Class<any>
                }
                class ScriptFunction$Bound extends jdk.nashorn.internal.runtime.ScriptFunction {
                    protected getTargetFunction(): jdk.nashorn.internal.runtime.ScriptFunction
                    public static class: java.lang.Class<any>
                }
                abstract class DefaultPropertyAccess implements jdk.nashorn.internal.runtime.PropertyAccess {
                    public constructor()
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public set(arg0: double, arg1: int, arg2: int): void
                    public set(arg0: double, arg1: double, arg2: int): void
                    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: int, arg1: int, arg2: int): void
                    public set(arg0: int, arg1: double, arg2: int): void
                    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: int): boolean
                    public has(arg0: double): boolean
                    public hasOwnProperty(arg0: int): boolean
                    public hasOwnProperty(arg0: double): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public static class: java.lang.Class<any>
                }
                class Undefined extends jdk.nashorn.internal.runtime.DefaultPropertyAccess {
                    public static getUndefined(): jdk.nashorn.internal.runtime.Undefined
                    public static getEmpty(): jdk.nashorn.internal.runtime.Undefined
                    public getClassName(): string
                    public toString(): string
                    public static lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public get(arg0: java.lang.Object): java.lang.Object
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public has(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                interface PropertyAccess {
                    getInt(arg0: java.lang.Object, arg1: int): int
                    getInt(arg0: double, arg1: int): int
                    getInt(arg0: int, arg1: int): int
                    getDouble(arg0: java.lang.Object, arg1: int): double
                    getDouble(arg0: double, arg1: int): double
                    getDouble(arg0: int, arg1: int): double
                    get(arg0: java.lang.Object): java.lang.Object
                    get(arg0: double): java.lang.Object
                    get(arg0: int): java.lang.Object
                    set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    set(arg0: double, arg1: int, arg2: int): void
                    set(arg0: double, arg1: double, arg2: int): void
                    set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    set(arg0: int, arg1: int, arg2: int): void
                    set(arg0: int, arg1: double, arg2: int): void
                    set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    has(arg0: java.lang.Object): boolean
                    has(arg0: int): boolean
                    has(arg0: double): boolean
                    hasOwnProperty(arg0: java.lang.Object): boolean
                    hasOwnProperty(arg0: int): boolean
                    hasOwnProperty(arg0: double): boolean
                    delete(arg0: int, arg1: boolean): boolean
                    delete(arg0: double, arg1: boolean): boolean
                    delete(arg0: java.lang.Object, arg1: boolean): boolean
                }
                abstract class ScriptObject implements jdk.nashorn.internal.runtime.PropertyAccess , java.lang.Cloneable {
                    public static PROTO_PROPERTY_NAME: string
                    public static NO_SUCH_METHOD_NAME: string
                    public static NO_SUCH_PROPERTY_NAME: string
                    public static IS_ARRAY: int
                    public static IS_ARGUMENTS: int
                    public static IS_LENGTH_NOT_WRITABLE: int
                    public static IS_BUILTIN: int
                    public static SPILL_RATE: int
                    protected primitiveSpill: long[]
                    protected objectSpill: java.lang.Object[]
                    public static GETPROTO: java.lang.invoke.MethodHandle
                    public static GET_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_ARGUMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_ARGUMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_PROTO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_PROTO_DEPTH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_GLOBAL_OBJECT_PROTO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_PROTO_FROM_LITERAL: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_USER_ACCESSORS: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_MAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public constructor()
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    protected isGlobal(): boolean
                    public static spillAllocationLength(arg0: int): int
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    protected addBoundProperty(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.Property, arg3: boolean): jdk.nashorn.internal.runtime.PropertyMap
                    public addBoundProperties(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.AccessorProperty[]): void
                    public propertyIterator(): java.util.Iterator<java.lang.String>
                    public valueIterator(): java.util.Iterator<java.lang.Object>
                    public isAccessorDescriptor(): boolean
                    public isDataDescriptor(): boolean
                    public toPropertyDescriptor(): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public static toPropertyDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Object): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public getOwnPropertyDescriptor(arg0: string): java.lang.Object
                    public getPropertyDescriptor(arg0: string): java.lang.Object
                    protected invalidateGlobalConstant(arg0: string): void
                    public defineOwnProperty(arg0: string, arg1: java.lang.Object, arg2: boolean): boolean
                    public defineOwnProperty(arg0: int, arg1: java.lang.Object): void
                    public addOwnProperty(arg0: string, arg1: jdk.nashorn.internal.runtime.PropertyDescriptor): void
                    public findProperty(arg0: string, arg1: boolean): jdk.nashorn.internal.runtime.FindProperty
                    protected findProperty(arg0: string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    public addOwnProperty(arg0: string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.Property
                    public addOwnProperty(arg0: string, arg1: int, arg2: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public addOwnProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.Property
                    public deleteOwnProperty(arg0: jdk.nashorn.internal.runtime.Property): boolean
                    protected initUserAccessors(arg0: string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): void
                    public modifyOwnProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.Property
                    public modifyOwnProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: int): jdk.nashorn.internal.runtime.Property
                    public setUserAccessors(arg0: string, arg1: jdk.nashorn.internal.runtime.ScriptFunction, arg2: jdk.nashorn.internal.runtime.ScriptFunction): void
                    protected getCallMethodHandle(arg0: jdk.nashorn.internal.runtime.FindProperty, arg1: java.lang.invoke.MethodType, arg2: string): java.lang.invoke.MethodHandle
                    protected static getCallMethodHandle(arg0: java.lang.Object, arg1: java.lang.invoke.MethodType, arg2: string): java.lang.invoke.MethodHandle
                    public getWithProperty(arg0: jdk.nashorn.internal.runtime.Property): java.lang.Object
                    public getProperty(arg0: string): jdk.nashorn.internal.runtime.Property
                    public getArgument(arg0: int): java.lang.Object
                    public setArgument(arg0: int, arg1: java.lang.Object): void
                    protected getContext(): jdk.nashorn.internal.runtime.Context
                    public getMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public setMap(arg0: jdk.nashorn.internal.runtime.PropertyMap): void
                    protected compareAndSetMap(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.PropertyMap): boolean
                    public getProto(): jdk.nashorn.internal.runtime.ScriptObject
                    public getProto(arg0: int): jdk.nashorn.internal.runtime.ScriptObject
                    public setProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public setInitialProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public static setGlobalObjectProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public setPrototypeOf(arg0: java.lang.Object): void
                    public setProtoFromLiteral(arg0: java.lang.Object): void
                    public getOwnKeys(arg0: boolean): java.lang.String[]
                    protected getOwnKeys(arg0: boolean, arg1: java.util.Set<java.lang.String>): java.lang.String[]
                    public hasArrayEntries(): boolean
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    public safeToString(): string
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public isInstance(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public preventExtensions(): jdk.nashorn.internal.runtime.ScriptObject
                    public static isArray(arg0: java.lang.Object): boolean
                    public isArray(): boolean
                    public setIsArray(): void
                    public isArguments(): boolean
                    public setIsArguments(): void
                    public isLengthNotWritable(): boolean
                    public setIsLengthNotWritable(): void
                    public getArray(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public getArray(): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public setArray(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): void
                    public isExtensible(): boolean
                    public seal(): jdk.nashorn.internal.runtime.ScriptObject
                    public isSealed(): boolean
                    public freeze(): jdk.nashorn.internal.runtime.ScriptObject
                    public isFrozen(): boolean
                    public isScope(): boolean
                    public setIsBuiltin(): void
                    public isBuiltin(): boolean
                    public clear(arg0: boolean): void
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
                    public isEmpty(): boolean
                    public keySet(): java.util.Set<java.lang.Object>
                    public put(arg0: java.lang.Object, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public putAll(arg0: java.util.Map<any, any>, arg1: boolean): void
                    public remove(arg0: java.lang.Object, arg1: boolean): java.lang.Object
                    public size(): int
                    public values(): java.util.Collection<java.lang.Object>
                    public lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethodMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethodHandle(arg0: java.lang.Class<any>, arg1: string, arg2: java.lang.Class<any>, arg3: jdk.internal.dynalink.CallSiteDescriptor): java.lang.invoke.MethodHandle
                    public getProtoSwitchPoints(arg0: string, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.invoke.SwitchPoint[]
                    protected findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected invokeNoSuchProperty(arg0: string, arg1: boolean, arg2: int): java.lang.Object
                    protected static pairArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static pairArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType, arg2: boolean): java.lang.invoke.MethodHandle
                    public setLength(arg0: long): void
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public setObject(arg0: jdk.nashorn.internal.runtime.FindProperty, arg1: int, arg2: string, arg3: java.lang.Object): void
                    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: double, arg1: int, arg2: int): void
                    public set(arg0: double, arg1: double, arg2: int): void
                    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: int, arg1: int, arg2: int): void
                    public set(arg0: int, arg1: double, arg2: int): void
                    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: double): boolean
                    public has(arg0: int): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: int): boolean
                    public hasOwnProperty(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public copy(): jdk.nashorn.internal.runtime.ScriptObject
                    protected clone(): jdk.nashorn.internal.runtime.ScriptObject
                    protected newUserAccessors(arg0: string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.UserAccessorProperty
                    protected useDualFields(): boolean
                    public static getCount(): long
                    protected clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObject$ValueIterator extends jdk.nashorn.internal.runtime.ScriptObject$ScriptObjectIterator<java.lang.Object> {
                    protected init(): void
                    public static class: java.lang.Class<any>
                }
                class ScriptObject$KeyIterator extends jdk.nashorn.internal.runtime.ScriptObject$ScriptObjectIterator<java.lang.String> {
                    protected init(): void
                    public static class: java.lang.Class<any>
                }
                abstract class ScriptObject$ScriptObjectIterator<T> implements java.util.Iterator<T> {
                    protected values: T[]
                    protected object: jdk.nashorn.internal.runtime.ScriptObject
                    protected init(): void
                    public hasNext(): boolean
                    public next(): T
                    public remove(): void
                    public static class: java.lang.Class<any>
                }
                namespace linker {
                    class BoundCallable {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class JavaSuperAdapterLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class JSObjectLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class JavaArgumentConverters {
                        public static class: java.lang.Class<any>
                    }
                    class BoundCallableLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterBytecodeGenerator {
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterBytecodeGenerator$2 implements java.security.PrivilegedAction<java.util.Collection<jdk.nashorn.internal.runtime.linker.JavaAdapterBytecodeGenerator$MethodInfo>> {
                        public run(): java.util.Collection<jdk.nashorn.internal.runtime.linker.JavaAdapterBytecodeGenerator$MethodInfo>
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterBytecodeGenerator$MethodInfo {
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterBytecodeGenerator$1 extends jdk.internal.org.objectweb.asm.ClassWriter {
                        protected getCommonSuperClass(arg0: string, arg1: string): string
                        public static class: java.lang.Class<any>
                    }
                    class ReflectionCheckLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class AdaptationException extends java.lang.Exception {
                        public static class: java.lang.Class<any>
                    }
                    class AdaptationResult {
                        public static class: java.lang.Class<any>
                    }
                    class AdaptationResult$Outcome extends java.lang.Enum<jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome> {
                        public static SUCCESS: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_FINAL_CLASS: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_NON_PUBLIC_CLASS: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_NO_ACCESSIBLE_CONSTRUCTOR: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_MULTIPLE_SUPERCLASSES: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_NO_COMMON_LOADER: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_FINAL_FINALIZER: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static ERROR_OTHER: jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static values(): jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome[]
                        public static valueOf(arg0: string): jdk.nashorn.internal.runtime.linker.AdaptationResult$Outcome
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterClassLoader {
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterClassLoader$2 extends java.security.SecureClassLoader {
                        public loadClass(arg0: string, arg1: boolean): java.lang.Class<any>
                        protected findClass(arg0: string): java.lang.Class<any>
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterClassLoader$2$1 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.Context> {
                        public run(): jdk.nashorn.internal.runtime.Context
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterClassLoader$1 implements java.security.PrivilegedAction<jdk.internal.dynalink.beans.StaticClass> {
                        public run(): jdk.internal.dynalink.beans.StaticClass
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class ClassAndLoader {
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public static class: java.lang.Class<any>
                    }
                    class ClassAndLoader$1 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.linker.ClassAndLoader> {
                        public run(): jdk.nashorn.internal.runtime.linker.ClassAndLoader
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterFactory {
                        public constructor()
                        public static getAdapterClassFor(arg0: java.lang.Class<any>[], arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.invoke.MethodHandles$Lookup): jdk.internal.dynalink.beans.StaticClass
                        public static getConstructor(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.invoke.MethodHandles$Lookup): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterFactory$AdapterInfo {
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterFactory$3 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.linker.JavaAdapterFactory$AdapterInfo> {
                        public run(): jdk.nashorn.internal.runtime.linker.JavaAdapterFactory$AdapterInfo
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterFactory$2 implements java.security.PrivilegedAction<java.security.ProtectionDomain> {
                        public run(): java.security.ProtectionDomain
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterFactory$1 extends java.lang.ClassValue<java.util.Map<java.util.List<java.lang.Class<any>>, jdk.nashorn.internal.runtime.linker.JavaAdapterFactory$AdapterInfo>> {
                        protected computeValue(arg0: java.lang.Class<any>): java.util.Map<java.util.List<java.lang.Class<any>>, jdk.nashorn.internal.runtime.linker.JavaAdapterFactory$AdapterInfo>
                        protected computeValue(arg0: java.lang.Class): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class Bootstrap {
                        public static BOOTSTRAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                        public static isCallable(arg0: java.lang.Object): boolean
                        public static isStrictCallable(arg0: java.lang.Object): boolean
                        public static isDynamicMethod(arg0: java.lang.Object): boolean
                        public static isFunctionalInterfaceObject(arg0: java.lang.Object): boolean
                        public static bootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                        public static mathBootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                        public static createDynamicInvoker(arg0: string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                        public static createDynamicInvoker(arg0: string, arg1: int, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                        public static createDynamicInvoker(arg0: string, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static bindCallable(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object[]): java.lang.Object
                        public static createSuperAdapter(arg0: java.lang.Object): java.lang.Object
                        public static checkReflectionAccess(arg0: java.lang.Class<any>, arg1: boolean): void
                        public static getLinkerServices(): jdk.internal.dynalink.linker.LinkerServices
                        public static class: java.lang.Class<any>
                    }
                    class Bootstrap$2 implements jdk.internal.dynalink.linker.MethodTypeConversionStrategy {
                        public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                    class Bootstrap$1 implements jdk.internal.dynalink.GuardedInvocationFilter {
                        public filter(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class BrowserJSObjectLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class BrowserJSObjectLinker$JSObjectHandles {
                        public static class: java.lang.Class<any>
                    }
                    class NashornLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , jdk.internal.dynalink.linker.GuardingTypeConverterFactory , jdk.internal.dynalink.linker.ConversionComparator {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                        public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                        public static class: java.lang.Class<any>
                    }
                    class NashornLinker$2 implements java.security.PrivilegedAction<jdk.internal.dynalink.linker.LinkRequest> {
                        public run(): jdk.internal.dynalink.linker.LinkRequest
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class NashornLinker$1 extends java.lang.ClassValue<java.lang.invoke.MethodHandle> {
                        protected computeValue(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        protected computeValue(arg0: java.lang.Class): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class NashornBeansLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                        public constructor()
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static getGuardedInvocation(arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker | jdk.internal.dynalink.linker.GuardingDynamicLinker$$Lambda, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class NashornBeansLinker$NashornBeansLinkerServices implements jdk.internal.dynalink.linker.LinkerServices {
                        public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public asTypeLosslessReturn(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                        public filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                    class NashornBeansLinker$1 extends java.lang.ClassValue<java.lang.String> {
                        protected computeValue(arg0: java.lang.Class<any>): string
                        protected computeValue(arg0: java.lang.Class): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class NashornStaticClassLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class PrimitiveLookup {
                        public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Class<any>, arg2: jdk.nashorn.internal.runtime.ScriptObject, arg3: java.lang.invoke.MethodHandle, arg4: java.lang.invoke.MethodHandle): jdk.internal.dynalink.linker.GuardedInvocation
                        public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.ScriptObject, arg3: java.lang.invoke.MethodHandle, arg4: java.lang.invoke.MethodHandle): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class JavaSuperAdapter {
                        public getAdapter(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class NashornPrimitiveLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , jdk.internal.dynalink.linker.GuardingTypeConverterFactory , jdk.internal.dynalink.linker.ConversionComparator {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                        public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                        public static class: java.lang.Class<any>
                    }
                    class LinkerCallSite extends jdk.internal.dynalink.ChainedCallSite {
                        public static ARGLIMIT: int
                        protected getPruneCatches(): java.lang.invoke.MethodHandle
                        public static getCatchInvalidationCount(arg0: java.lang.Object): int
                        public toString(): string
                        public getNashornDescriptor(): jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor
                        public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public static increaseMissCount(arg0: string, arg1: java.lang.Object): java.lang.Object
                        protected getMaxChainLength(): int
                        public static getCount(): long
                        public static getMissCount(): long
                        public static getMissSamplingPercentage(): int
                        public static getMissCounts(arg0: java.io.PrintWriter): void
                        public static class: java.lang.Class<any>
                    }
                    class LinkerCallSite$1 implements java.util.Comparator<java.util.Map$Entry<java.lang.String, java.util.concurrent.atomic.AtomicInteger>> {
                        public compare(arg0: java.util.Map$Entry<java.lang.String, java.util.concurrent.atomic.AtomicInteger>, arg1: java.util.Map$Entry<java.lang.String, java.util.concurrent.atomic.AtomicInteger>): int
                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class LinkerCallSite$TracingLinkerCallSite extends jdk.nashorn.internal.runtime.linker.LinkerCallSite {
                        public setTarget(arg0: java.lang.invoke.MethodHandle): void
                        public initialize(arg0: java.lang.invoke.MethodHandle): void
                        public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public traceObject(arg0: java.lang.invoke.MethodHandle, ...arg1: java.lang.Object[]): java.lang.Object
                        public traceVoid(arg0: java.lang.invoke.MethodHandle, ...arg1: java.lang.Object[]): void
                        public traceMiss(arg0: string, ...arg1: java.lang.Object[]): void
                        public static class: java.lang.Class<any>
                    }
                    class LinkerCallSite$ProfilingLinkerCallSite extends jdk.nashorn.internal.runtime.linker.LinkerCallSite {
                        public static newProfilingLinkerCallSite(arg0: jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor): jdk.nashorn.internal.runtime.linker.LinkerCallSite$ProfilingLinkerCallSite
                        public setTarget(arg0: java.lang.invoke.MethodHandle): void
                        public profileEntry(arg0: java.lang.Object): java.lang.Object
                        public profileExit(arg0: java.lang.Object): java.lang.Object
                        public profileVoidExit(): void
                        public static class: java.lang.Class<any>
                    }
                    class LinkerCallSite$ProfilingLinkerCallSite$ProfileDumper implements java.lang.Runnable {
                        public run(): void
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterServices {
                        public static getHandle(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static getHandle(arg0: java.lang.Object, arg1: string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static getClassOverrides(): java.lang.Object
                        public static invokeNoPermissions(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): void
                        public static setGlobal(arg0: java.lang.Object): void
                        public static getGlobal(): java.lang.Object
                        public static getObjectConverter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public static exportReturnValue(arg0: java.lang.Object): java.lang.Object
                        public static toCharPrimitive(arg0: java.lang.Object): char
                        public static toString(arg0: java.lang.Object): string
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterServices$1 implements java.security.PrivilegedAction<java.lang.ClassLoader> {
                        public run(): java.lang.ClassLoader
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class JavaAdapterServices$1$1 extends java.security.SecureClassLoader {
                        protected findClass(arg0: string): java.lang.Class<any>
                        public static class: java.lang.Class<any>
                    }
                    class NashornBottomLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker , jdk.internal.dynalink.linker.GuardingTypeConverterFactory {
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                        public static class: java.lang.Class<any>
                    }
                    class InvokeByName {
                        public constructor(arg0: string, arg1: java.lang.Class<any>)
                        public constructor(arg0: string, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[])
                        public getName(): string
                        public getGetter(): java.lang.invoke.MethodHandle
                        public getInvoker(): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                    class NashornGuards {
                        public static explicitInstanceOfCheck(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public static getScriptObjectGuard(): java.lang.invoke.MethodHandle
                        public static getNotJSObjectGuard(): java.lang.invoke.MethodHandle
                        public static getScriptObjectGuard(arg0: boolean): java.lang.invoke.MethodHandle
                        public static getMapGuard(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: boolean): java.lang.invoke.MethodHandle
                        public static getGuard(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property, arg2: jdk.internal.dynalink.CallSiteDescriptor, arg3: boolean): java.lang.invoke.MethodHandle
                        public static getIdentityGuard(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.invoke.MethodHandle
                        public static getStringGuard(): java.lang.invoke.MethodHandle
                        public static getNumberGuard(): java.lang.invoke.MethodHandle
                        public static combineGuards(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                    class NashornCallSiteDescriptor extends jdk.internal.dynalink.support.AbstractCallSiteDescriptor {
                        public static CALLSITE_SCOPE: int
                        public static CALLSITE_STRICT: int
                        public static CALLSITE_FAST_SCOPE: int
                        public static CALLSITE_OPTIMISTIC: int
                        public static CALLSITE_APPLY_TO_CALL: int
                        public static CALLSITE_DECLARE: int
                        public static CALLSITE_PROFILE: int
                        public static CALLSITE_TRACE: int
                        public static CALLSITE_TRACE_MISSES: int
                        public static CALLSITE_TRACE_ENTEREXIT: int
                        public static CALLSITE_TRACE_VALUES: int
                        public static CALLSITE_PROGRAM_POINT_SHIFT: int
                        public static MAX_PROGRAM_POINT_VALUE: int
                        public static FLAGS_MASK: int
                        public static toString(arg0: int): string
                        public static get(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: string, arg2: java.lang.invoke.MethodType, arg3: int): jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor
                        public getNameTokenCount(): int
                        public getNameToken(arg0: int): string
                        public getLookup(): java.lang.invoke.MethodHandles$Lookup
                        public equals(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public getMethodType(): java.lang.invoke.MethodType
                        public getOperator(): string
                        public getFirstOperator(): string
                        public getOperand(): string
                        public getFunctionDescription(): string
                        public static getFunctionDescription(arg0: jdk.internal.dynalink.CallSiteDescriptor): string
                        public getFunctionErrorMessage(arg0: java.lang.Object): string
                        public static getFunctionErrorMessage(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object): string
                        public static getFlags(arg0: jdk.internal.dynalink.CallSiteDescriptor): int
                        public static isScope(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isFastScope(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isStrict(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isApplyToCall(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isOptimistic(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isDeclaration(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                        public static isStrictFlag(arg0: int): boolean
                        public static isScopeFlag(arg0: int): boolean
                        public static getProgramPoint(arg0: jdk.internal.dynalink.CallSiteDescriptor): int
                        public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                        public static class: java.lang.Class<any>
                    }
                    class NashornCallSiteDescriptor$1 extends java.lang.ClassValue<java.util.concurrent.ConcurrentMap<jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor, jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor>> {
                        protected computeValue(arg0: java.lang.Class<any>): java.util.concurrent.ConcurrentMap<jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor, jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor>
                        protected computeValue(arg0: java.lang.Class): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
                namespace arrays {
                    class SparseArrayData extends jdk.nashorn.internal.runtime.arrays.ArrayData {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public nextIndex(arg0: long): long
                        public static class: java.lang.Class<any>
                    }
                    class JavaArrayIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected array: java.lang.Object
                        protected length: long
                        protected constructor(arg0: java.lang.Object, arg1: boolean)
                        protected indexInArray(): boolean
                        public next(): java.lang.Object
                        public getLength(): long
                        public hasNext(): boolean
                        public remove(): void
                        public static class: java.lang.Class<any>
                    }
                    class ReverseJavaArrayIterator extends jdk.nashorn.internal.runtime.arrays.JavaArrayIterator {
                        public constructor(arg0: java.lang.Object, arg1: boolean)
                        public isReverse(): boolean
                        protected indexInArray(): boolean
                        protected bumpIndex(): long
                        public static class: java.lang.Class<any>
                    }
                    class UndefinedArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class SealedArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public static class: java.lang.Class<any>
                    }
                    class FrozenArrayFilter extends jdk.nashorn.internal.runtime.arrays.SealedArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    abstract class IteratorAction<T> {
                        protected self: java.lang.Object
                        protected thisArg: java.lang.Object
                        protected callbackfn: java.lang.Object
                        protected result: T
                        protected index: long
                        public constructor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: T)
                        public constructor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: T, arg4: jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>)
                        protected applyLoopBegin(arg0: jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>): void
                        public apply(): T
                        protected forEach(arg0: java.lang.Object, arg1: double): boolean
                        public static class: java.lang.Class<any>
                    }
                    class ByteBufferArrayData extends jdk.nashorn.internal.runtime.arrays.ArrayData {
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public setLength(arg0: long): void
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class ReverseScriptObjectIterator extends jdk.nashorn.internal.runtime.arrays.ScriptObjectIterator {
                        public isReverse(): boolean
                        protected indexInArray(): boolean
                        protected bumpIndex(): long
                        public static class: java.lang.Class<any>
                    }
                    class LengthNotWritableFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public setLength(arg0: long): void
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public indexIterator(): java.util.Iterator<java.lang.Long>
                        public static class: java.lang.Class<any>
                    }
                    class ObjectArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.AnyElements {
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public getElementWeight(): int
                        public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ObjectArrayData
                        public asObjectArray(): java.lang.Object[]
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ObjectArrayData
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastPush(arg0: int): double
                        public fastPush(arg0: long): double
                        public fastPush(arg0: double): double
                        public fastPush(arg0: java.lang.Object): double
                        public fastPopObject(): java.lang.Object
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public convert(arg0: java.lang.Class): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class NumberArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.NumericElements {
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public getElementWeight(): int
                        public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.NumberArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastPush(arg0: int): double
                        public fastPush(arg0: long): double
                        public fastPush(arg0: double): double
                        public fastPopDouble(): double
                        public fastPopObject(): java.lang.Object
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public convert(arg0: java.lang.Class): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    interface AnyElements {
                        getElementWeight(): int
                    }
                    interface AnyElements$$Lambda {
                        (): int
                    }
                    interface NumericElements extends jdk.nashorn.internal.runtime.arrays.AnyElements {
                    }
                    interface IntOrLongElements extends jdk.nashorn.internal.runtime.arrays.NumericElements {
                    }
                    interface IntElements extends jdk.nashorn.internal.runtime.arrays.IntOrLongElements {
                    }
                    class IntArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.IntElements {
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public getElementWeight(): int
                        public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public asObjectArray(): java.lang.Object[]
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public copy(): jdk.nashorn.internal.runtime.arrays.IntArrayData
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastPush(arg0: int): double
                        public fastPopInt(): int
                        public fastPopDouble(): double
                        public fastPopObject(): java.lang.Object
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class ScriptArrayIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected array: jdk.nashorn.internal.runtime.ScriptObject
                        protected length: long
                        protected constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: boolean)
                        protected indexInArray(): boolean
                        public next(): java.lang.Object
                        public getLength(): long
                        public hasNext(): boolean
                        public remove(): void
                        public static class: java.lang.Class<any>
                    }
                    class ReverseScriptArrayIterator extends jdk.nashorn.internal.runtime.arrays.ScriptArrayIterator {
                        public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: boolean)
                        public isReverse(): boolean
                        protected indexInArray(): boolean
                        protected bumpIndex(): long
                        public static class: java.lang.Class<any>
                    }
                    class NonExtensibleArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class JavaListIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected list: java.util.List<any>
                        protected length: long
                        protected constructor(arg0: java.util.List<any>, arg1: boolean)
                        protected indexInArray(): boolean
                        public next(): java.lang.Object
                        public getLength(): long
                        public hasNext(): boolean
                        public remove(): void
                        public static class: java.lang.Class<any>
                    }
                    class ReverseJavaListIterator extends jdk.nashorn.internal.runtime.arrays.JavaListIterator {
                        public constructor(arg0: java.util.List<any>, arg1: boolean)
                        public isReverse(): boolean
                        protected indexInArray(): boolean
                        protected bumpIndex(): long
                        public static class: java.lang.Class<any>
                    }
                    class JSObjectIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected obj: jdk.nashorn.api.scripting.JSObject
                        protected indexInArray(): boolean
                        public getLength(): long
                        public hasNext(): boolean
                        public next(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class ReverseJSObjectIterator extends jdk.nashorn.internal.runtime.arrays.JSObjectIterator {
                        public isReverse(): boolean
                        protected indexInArray(): boolean
                        protected bumpIndex(): long
                        public static class: java.lang.Class<any>
                    }
                    class DeletedArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    abstract class ArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayData {
                        protected underlying: jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected getUnderlying(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setLength(arg0: long): void
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public nextIndex(arg0: long): long
                        public static class: java.lang.Class<any>
                    }
                    class DeletedRangeArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    class ScriptObjectIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected obj: jdk.nashorn.internal.runtime.ScriptObject
                        protected indexInArray(): boolean
                        public getLength(): long
                        public hasNext(): boolean
                        public next(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class EmptyArrayLikeIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        public hasNext(): boolean
                        public next(): java.lang.Object
                        public getLength(): long
                        public static class: java.lang.Class<any>
                    }
                    abstract class TypedArrayData<T extends java.nio.Buffer> extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData {
                        protected nb: T
                        protected constructor(arg0: T, arg1: int)
                        public getElementLength(): int
                        public isUnsigned(): boolean
                        public isClamped(): boolean
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public copy(): jdk.nashorn.internal.runtime.arrays.TypedArrayData<T>
                        public asObjectArray(): java.lang.Object[]
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.TypedArrayData<T>
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected getGetElem(): java.lang.invoke.MethodHandle
                        protected getSetElem(): java.lang.invoke.MethodHandle
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        protected getContinuousElementSetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public convert(arg0: java.lang.Class): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    abstract class ContinuousArrayData extends jdk.nashorn.internal.runtime.arrays.ArrayData {
                        protected static FAST_ACCESS_GUARD: java.lang.invoke.MethodHandle
                        protected constructor(arg0: long)
                        public hasRoomFor(arg0: int): boolean
                        public isEmpty(): boolean
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        protected throwHas(arg0: int): int
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public getElementType(): java.lang.Class<any>
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedElementType(): java.lang.Class<any>
                        public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        protected getContinuousElementGetter(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                        protected getContinuousElementSetter(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        protected getContinuousElementGetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>, arg3: int): java.lang.invoke.MethodHandle
                        protected getContinuousElementSetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public fastPush(arg0: int): double
                        public fastPush(arg0: long): double
                        public fastPush(arg0: double): double
                        public fastPush(arg0: java.lang.Object): double
                        public fastPopInt(): int
                        public fastPopDouble(): double
                        public fastPopObject(): java.lang.Object
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    abstract class ArrayData {
                        protected static CHUNK_SIZE: int
                        public static EMPTY_ARRAY: jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected static THROW_UNWARRANTED: jdk.nashorn.internal.codegen.CompilerConstants$Call
                        protected constructor(arg0: long)
                        public static initialArray(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected static throwUnwarranted(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData, arg1: int, arg2: int): void
                        protected static alignUp(arg0: int): int
                        public static allocate(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static allocate(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static allocate(arg0: int[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static allocate(arg0: double[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static allocate(arg0: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static allocate(arg0: java.nio.ByteBuffer): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static freeze(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static seal(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static preventExtension(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static setIsLengthNotWritable(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public length(): long
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public setLength(arg0: long): void
                        protected increaseLength(): long
                        protected decreaseLength(): long
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public safeDelete(arg0: long, arg1: long, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected computeIteratorKeys(): java.util.List<java.lang.Long>
                        public indexIterator(): java.util.Iterator<java.lang.Long>
                        public static nextSize(arg0: int): int
                        public findFastCallMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastGetMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest, arg3: string): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public static class: java.lang.Class<any>
                    }
                    class ArrayData$1 {
                        public static class: java.lang.Class<any>
                    }
                    class ArrayData$UntouchedArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public asObjectArray(): java.lang.Object[]
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftLeft(arg0: int): void
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public pop(): java.lang.Object
                        public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                    abstract class ArrayLikeIterator<T> implements java.util.Iterator<T> {
                        protected index: long
                        protected includeUndefined: boolean
                        public isReverse(): boolean
                        protected bumpIndex(): long
                        public nextIndex(): long
                        public remove(): void
                        public getLength(): long
                        public static arrayLikeIterator(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static reverseArrayLikeIterator(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static arrayLikeIterator(arg0: java.lang.Object, arg1: boolean): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static reverseArrayLikeIterator(arg0: java.lang.Object, arg1: boolean): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static class: java.lang.Class<any>
                    }
                    class ArrayIndex {
                        public static getArrayIndex(arg0: java.lang.Object): int
                        public static getArrayIndex(arg0: int): int
                        public static getArrayIndex(arg0: long): int
                        public static getArrayIndex(arg0: double): int
                        public static getArrayIndex(arg0: string): int
                        public static isValidArrayIndex(arg0: int): boolean
                        public static toLongIndex(arg0: int): long
                        public static toKey(arg0: int): string
                        public static class: java.lang.Class<any>
                    }
                }
                class UnwarrantedOptimismException extends java.lang.RuntimeException {
                    public static INVALID_PROGRAM_POINT: int
                    public static FIRST_PROGRAM_POINT: int
                    public constructor(arg0: java.lang.Object, arg1: int)
                    public static isValid(arg0: int): boolean
                    public constructor(arg0: java.lang.Object, arg1: int, arg2: jdk.nashorn.internal.codegen.types.Type)
                    public static createNarrowest(arg0: java.lang.Object, arg1: int): jdk.nashorn.internal.runtime.UnwarrantedOptimismException
                    public getReturnValueDestructive(): java.lang.Object
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public hasInvalidProgramPoint(): boolean
                    public getProgramPoint(): int
                    public hasPrimitiveReturnValue(): boolean
                    public getMessage(): string
                    public static class: java.lang.Class<any>
                }
                interface PropertyDescriptor {
                    GENERIC: int
                    DATA: int
                    ACCESSOR: int
                    CONFIGURABLE: string
                    ENUMERABLE: string
                    WRITABLE: string
                    VALUE: string
                    GET: string
                    SET: string
                    isConfigurable(): boolean
                    isEnumerable(): boolean
                    isWritable(): boolean
                    getValue(): java.lang.Object
                    getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    setConfigurable(arg0: boolean): void
                    setEnumerable(arg0: boolean): void
                    setWritable(arg0: boolean): void
                    setValue(arg0: java.lang.Object): void
                    setGetter(arg0: java.lang.Object): void
                    setSetter(arg0: java.lang.Object): void
                    fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
                    type(): int
                    has(arg0: java.lang.Object): boolean
                    hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
                }
                class Scope extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static GET_SPLIT_STATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_SPLIT_STATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    public isScope(): boolean
                    public getSplitState(): int
                    public setSplitState(arg0: int): void
                    public static getScopeCount(): long
                    public static class: java.lang.Class<any>
                }
                class ParserException extends jdk.nashorn.api.scripting.NashornException {
                    public constructor(arg0: string)
                    public constructor(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: string, arg2: jdk.nashorn.internal.runtime.Source, arg3: int, arg4: int, arg5: long)
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public getToken(): long
                    public getPosition(): int
                    public getErrorType(): jdk.nashorn.internal.runtime.JSErrorType
                    public throwAsEcmaException(): void
                    public throwAsEcmaException(arg0: jdk.nashorn.internal.objects.Global): void
                    public static class: java.lang.Class<any>
                }
                class ECMAException extends jdk.nashorn.api.scripting.NashornException {
                    public static CREATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static THROWN: jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public thrown: java.lang.Object
                    public constructor(arg0: java.lang.Object, arg1: java.lang.Throwable)
                    public static create(arg0: java.lang.Object, arg1: string, arg2: int, arg3: int): jdk.nashorn.internal.runtime.ECMAException
                    public getThrown(): java.lang.Object
                    public toString(): string
                    public static getException(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static printStackTrace(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getLineNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getColumnNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getFileName(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static safeToString(arg0: jdk.nashorn.internal.runtime.ScriptObject): string
                    public static class: java.lang.Class<any>
                }
                class ScriptRuntime {
                    public static EMPTY_ARRAY: java.lang.Object[]
                    public static UNDEFINED: jdk.nashorn.internal.runtime.Undefined
                    public static EMPTY: jdk.nashorn.internal.runtime.Undefined
                    public static ADD: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static EQ_STRICT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static OPEN_WITH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static MERGE_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_PROPERTY_ITERATOR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_VALUE_ITERATOR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static APPLY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static THROW_REFERENCE_ERROR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static THROW_CONST_TYPE_ERROR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static INVALIDATE_RESERVED_BUILTIN_NAME: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static switchTagAsInt(arg0: java.lang.Object, arg1: int): int
                    public static switchTagAsInt(arg0: boolean, arg1: int): int
                    public static switchTagAsInt(arg0: long, arg1: int): int
                    public static switchTagAsInt(arg0: double, arg1: int): int
                    public static builtinObjectToString(arg0: java.lang.Object): string
                    public static safeToString(arg0: java.lang.Object): string
                    public static toPropertyIterator(arg0: java.lang.Object): java.util.Iterator<any>
                    public static toValueIterator(arg0: java.lang.Object): java.util.Iterator<any>
                    public static mergeScope(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptObject
                    public static apply(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public static throwReferenceError(arg0: string): void
                    public static throwConstTypeError(arg0: string): void
                    public static construct(arg0: jdk.nashorn.internal.runtime.ScriptFunction, ...arg1: java.lang.Object[]): java.lang.Object
                    public static sameValue(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static parse(arg0: string, arg1: string, arg2: boolean): string
                    public static isJSWhitespace(arg0: char): boolean
                    public static openWith(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static ADD(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static DEBUGGER(): java.lang.Object
                    public static NEW(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static TYPEOF(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static REFERENCE_ERROR(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static DELETE(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static SLOW_DELETE(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static FAIL_DELETE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static EQ(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static NE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static EQ_STRICT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static NE_STRICT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static IN(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static INSTANCEOF(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static LT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static GT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static LE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static GE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static invalidateReservedBuiltinName(arg0: string): void
                    public static class: java.lang.Class<any>
                }
                class ScriptRuntime$2 {
                    public static class: java.lang.Class<any>
                }
                class ScriptRuntime$1 implements java.util.Iterator<java.lang.Object> {
                    public hasNext(): boolean
                    public next(): java.lang.Object
                    public remove(): void
                    public static class: java.lang.Class<any>
                }
                class ScriptRuntime$RangeIterator implements java.util.Iterator<java.lang.Integer> {
                    public hasNext(): boolean
                    public next(): java.lang.Integer
                    public remove(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class JSType extends java.lang.Enum<jdk.nashorn.internal.runtime.JSType> {
                    public static UNDEFINED: jdk.nashorn.internal.runtime.JSType
                    public static NULL: jdk.nashorn.internal.runtime.JSType
                    public static BOOLEAN: jdk.nashorn.internal.runtime.JSType
                    public static NUMBER: jdk.nashorn.internal.runtime.JSType
                    public static STRING: jdk.nashorn.internal.runtime.JSType
                    public static OBJECT: jdk.nashorn.internal.runtime.JSType
                    public static FUNCTION: jdk.nashorn.internal.runtime.JSType
                    public static MAX_UINT: long
                    public static TO_BOOLEAN: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_BOOLEAN_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_INTEGER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_LONG: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_LONG_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_NUMBER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_NUMBER_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_INT32: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_INT32_L: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_INT32_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_INT32_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_UINT32_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_UINT32_DOUBLE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_UINT32: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_UINT32_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_STRING_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_PRIMITIVE_TO_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_PRIMITIVE_TO_CHARSEQUENCE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static THROW_UNWARRANTED: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static ADD_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SUB_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static MUL_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static DIV_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static DIV_ZERO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static REM_ZERO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static REM_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static DECREMENT_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static INCREMENT_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static NEGATE_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TO_JAVA_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static VOID_RETURN: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static IS_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static IS_NUMBER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static TYPE_UNDEFINED_INDEX: int
                    public static TYPE_INT_INDEX: int
                    public static TYPE_DOUBLE_INDEX: int
                    public static TYPE_OBJECT_INDEX: int
                    public static CONVERT_OBJECT: java.util.List<java.lang.invoke.MethodHandle>
                    public static CONVERT_OBJECT_OPTIMISTIC: java.util.List<java.lang.invoke.MethodHandle>
                    public static UNDEFINED_INT: int
                    public static UNDEFINED_LONG: long
                    public static UNDEFINED_DOUBLE: double
                    public static GET_UNDEFINED: java.util.List<java.lang.invoke.MethodHandle>
                    public static values(): jdk.nashorn.internal.runtime.JSType[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.runtime.JSType
                    public typeName(): string
                    public static of(arg0: java.lang.Object): jdk.nashorn.internal.runtime.JSType
                    public static ofNoFunction(arg0: java.lang.Object): jdk.nashorn.internal.runtime.JSType
                    public static voidReturn(): void
                    public static isRepresentableAsInt(arg0: long): boolean
                    public static isRepresentableAsInt(arg0: double): boolean
                    public static isStrictlyRepresentableAsInt(arg0: double): boolean
                    public static isRepresentableAsInt(arg0: java.lang.Object): boolean
                    public static isRepresentableAsLong(arg0: double): boolean
                    public static isRepresentableAsDouble(arg0: long): boolean
                    public static isPrimitive(arg0: java.lang.Object): boolean
                    public static toPrimitive(arg0: java.lang.Object): java.lang.Object
                    public static toPrimitive(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static toPrimitive(arg0: jdk.nashorn.api.scripting.JSObject, arg1: java.lang.Class<any>): java.lang.Object
                    public static toPrimitiveToString(arg0: java.lang.Object): string
                    public static toPrimitiveToCharSequence(arg0: java.lang.Object): java.lang.CharSequence
                    public static toBoolean(arg0: double): boolean
                    public static toBoolean(arg0: java.lang.Object): boolean
                    public static toString(arg0: java.lang.Object): string
                    public static toCharSequence(arg0: java.lang.Object): java.lang.CharSequence
                    public static isString(arg0: java.lang.Object): boolean
                    public static isNumber(arg0: java.lang.Object): boolean
                    public static toString(arg0: int): string
                    public static toString(arg0: double): string
                    public static toString(arg0: double, arg1: int): string
                    public static toNumber(arg0: java.lang.Object): double
                    public static toNumberForEq(arg0: java.lang.Object): double
                    public static toNumberForStrictEq(arg0: java.lang.Object): double
                    public static toNarrowestNumber(arg0: long): java.lang.Number
                    public static toNumber(arg0: boolean): double
                    public static toNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): double
                    public static toNumberOptimistic(arg0: java.lang.Object, arg1: int): double
                    public static toNumberMaybeOptimistic(arg0: java.lang.Object, arg1: int): double
                    public static digit(arg0: char, arg1: int): int
                    public static digit(arg0: char, arg1: int, arg2: boolean): int
                    public static toNumber(arg0: string): double
                    public static toInteger(arg0: java.lang.Object): int
                    public static toLong(arg0: java.lang.Object): long
                    public static toLong(arg0: double): long
                    public static toInt32(arg0: java.lang.Object): int
                    public static toInt32Optimistic(arg0: java.lang.Object, arg1: int): int
                    public static toInt32MaybeOptimistic(arg0: java.lang.Object, arg1: int): int
                    public static toInt32(arg0: long): int
                    public static toInt32(arg0: double): int
                    public static toUint32(arg0: java.lang.Object): long
                    public static toUint32(arg0: double): long
                    public static toUint32(arg0: int): long
                    public static toUint32Optimistic(arg0: int, arg1: int): int
                    public static toUint32Double(arg0: int): double
                    public static toUint16(arg0: java.lang.Object): int
                    public static toUint16(arg0: int): int
                    public static toUint16(arg0: long): int
                    public static toUint16(arg0: double): int
                    public static isFinite(arg0: double): boolean
                    public static toDouble(arg0: double): java.lang.Double
                    public static toDouble(arg0: long): java.lang.Double
                    public static toDouble(arg0: int): java.lang.Double
                    public static toObject(arg0: boolean): java.lang.Object
                    public static toObject(arg0: int): java.lang.Object
                    public static toObject(arg0: long): java.lang.Object
                    public static toObject(arg0: double): java.lang.Object
                    public static toObject(arg0: java.lang.Object): java.lang.Object
                    public static toScriptObject(arg0: java.lang.Object): java.lang.Object
                    public static toScriptObject(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Object): java.lang.Object
                    public static toJavaArray(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static convertArray(arg0: java.lang.Object[], arg1: java.lang.Class<any>): java.lang.Object
                    public static nullOrUndefined(arg0: java.lang.Object): boolean
                    public static addExact(arg0: int, arg1: int, arg2: int): int
                    public static subExact(arg0: int, arg1: int, arg2: int): int
                    public static mulExact(arg0: int, arg1: int, arg2: int): int
                    public static divExact(arg0: int, arg1: int, arg2: int): int
                    public static divZero(arg0: int, arg1: int): int
                    public static remZero(arg0: int, arg1: int): int
                    public static remExact(arg0: int, arg1: int, arg2: int): int
                    public static decrementExact(arg0: int, arg1: int): int
                    public static incrementExact(arg0: int, arg1: int): int
                    public static negateExact(arg0: int, arg1: int): int
                    public static getAccessorTypeIndex(arg0: jdk.nashorn.internal.codegen.types.Type): int
                    public static getAccessorTypeIndex(arg0: java.lang.Class<any>): int
                    public static getAccessorType(arg0: int): jdk.nashorn.internal.codegen.types.Type
                    public static getNumberOfAccessorTypes(): int
                    public static unboxConstant(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public static unboxedFieldType(arg0: java.lang.Object): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
                class ECMAErrors {
                    public static asEcmaException(arg0: jdk.nashorn.internal.runtime.ParserException): jdk.nashorn.internal.runtime.ECMAException
                    public static asEcmaException(arg0: jdk.nashorn.internal.objects.Global, arg1: jdk.nashorn.internal.runtime.ParserException): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: jdk.nashorn.internal.objects.Global, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: java.lang.Throwable, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: jdk.nashorn.internal.objects.Global, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: java.lang.Throwable, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: jdk.nashorn.internal.objects.Global, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: java.lang.Throwable, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: jdk.nashorn.internal.objects.Global, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: java.lang.Throwable, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: jdk.nashorn.internal.objects.Global, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: java.lang.Throwable, arg1: string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static getMessage(arg0: string, ...arg1: java.lang.String[]): string
                    public static isScriptFrame(arg0: java.lang.StackTraceElement): boolean
                    public static class: java.lang.Class<any>
                }
                class ECMAErrors$1 {
                    public static class: java.lang.Class<any>
                }
            }
            namespace parser {
                class JSONParser {
                    public constructor(arg0: string, arg1: jdk.nashorn.internal.objects.Global, arg2: boolean)
                    public static quote(arg0: string): string
                    public parse(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class DateParser {
                    public static YEAR: int
                    public static MONTH: int
                    public static DAY: int
                    public static HOUR: int
                    public static MINUTE: int
                    public static SECOND: int
                    public static MILLISECOND: int
                    public static TIMEZONE: int
                    public constructor(arg0: string)
                    public parse(): boolean
                    public parseEcmaDate(): boolean
                    public parseLegacyDate(): boolean
                    public getDateFields(): java.lang.Integer[]
                    public static class: java.lang.Class<any>
                }
                class DateParser$1 {
                    public static class: java.lang.Class<any>
                }
                class DateParser$Name {
                    public matches(arg0: string, arg1: int, arg2: int): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class DateParser$Token extends java.lang.Enum<jdk.nashorn.internal.parser.DateParser$Token> {
                    public static UNKNOWN: jdk.nashorn.internal.parser.DateParser$Token
                    public static NUMBER: jdk.nashorn.internal.parser.DateParser$Token
                    public static SEPARATOR: jdk.nashorn.internal.parser.DateParser$Token
                    public static PARENTHESIS: jdk.nashorn.internal.parser.DateParser$Token
                    public static NAME: jdk.nashorn.internal.parser.DateParser$Token
                    public static SIGN: jdk.nashorn.internal.parser.DateParser$Token
                    public static END: jdk.nashorn.internal.parser.DateParser$Token
                    public static values(): jdk.nashorn.internal.parser.DateParser$Token[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.parser.DateParser$Token
                    public static class: java.lang.Class<any>
                }
                class TokenLookup {
                    public static lookupKeyword(arg0: char[], arg1: int, arg2: int): jdk.nashorn.internal.parser.TokenType
                    public static lookupOperator(arg0: char, arg1: char, arg2: char, arg3: char): jdk.nashorn.internal.parser.TokenType
                    public static class: java.lang.Class<any>
                }
                class Token {
                    public static toDesc(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int, arg2: int): long
                    public static descPosition(arg0: long): int
                    public static withDelimiter(arg0: long): long
                    public static descLength(arg0: long): int
                    public static descType(arg0: long): jdk.nashorn.internal.parser.TokenType
                    public static recast(arg0: long, arg1: jdk.nashorn.internal.parser.TokenType): long
                    public static toString(arg0: jdk.nashorn.internal.runtime.Source, arg1: long, arg2: boolean): string
                    public static toString(arg0: jdk.nashorn.internal.runtime.Source, arg1: long): string
                    public static toString(arg0: long): string
                    public static hashCode(arg0: long): int
                    public static class: java.lang.Class<any>
                }
                class Token$1 {
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractParser {
                    protected source: jdk.nashorn.internal.runtime.Source
                    protected errors: jdk.nashorn.internal.runtime.ErrorManager
                    protected stream: jdk.nashorn.internal.parser.TokenStream
                    protected k: int
                    protected previousToken: long
                    protected token: long
                    protected type: jdk.nashorn.internal.parser.TokenType
                    protected last: jdk.nashorn.internal.parser.TokenType
                    protected start: int
                    protected finish: int
                    protected line: int
                    protected linePosition: int
                    protected lexer: jdk.nashorn.internal.parser.Lexer
                    protected isStrictMode: boolean
                    protected lineOffset: int
                    protected constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: boolean, arg3: int)
                    protected getToken(arg0: int): long
                    protected T(arg0: int): jdk.nashorn.internal.parser.TokenType
                    protected next(): jdk.nashorn.internal.parser.TokenType
                    protected nextOrEOL(): jdk.nashorn.internal.parser.TokenType
                    protected static message(arg0: string, ...arg1: java.lang.String[]): string
                    protected error(arg0: string, arg1: long): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: string, arg2: long): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: string): jdk.nashorn.internal.runtime.ParserException
                    protected error(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: string): jdk.nashorn.internal.runtime.ParserException
                    protected warning(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: string, arg2: long): void
                    protected expectMessage(arg0: jdk.nashorn.internal.parser.TokenType): string
                    protected expect(arg0: jdk.nashorn.internal.parser.TokenType): void
                    protected expectDontAdvance(arg0: jdk.nashorn.internal.parser.TokenType): void
                    protected expectValue(arg0: jdk.nashorn.internal.parser.TokenType): java.lang.Object
                    protected getValue(): java.lang.Object
                    protected getValue(arg0: long): java.lang.Object
                    protected isNonStrictModeIdent(): boolean
                    protected getIdent(): jdk.nashorn.internal.ir.IdentNode
                    protected createIdentNode(arg0: long, arg1: int, arg2: string): jdk.nashorn.internal.ir.IdentNode
                    protected isIdentifierName(): boolean
                    protected getIdentifierName(): jdk.nashorn.internal.ir.IdentNode
                    protected getLiteral(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
                class AbstractParser$1 {
                    public static class: java.lang.Class<any>
                }
                class Parser extends jdk.nashorn.internal.parser.AbstractParser implements jdk.nashorn.internal.runtime.logging.Loggable {
                    protected lineInfoReceiver: jdk.nashorn.internal.parser.Lexer$LineInfoReceiver
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean, arg4: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean, arg4: int, arg5: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public setFunctionName(arg0: string): void
                    public setReparsedFunction(arg0: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData): void
                    public parse(): jdk.nashorn.internal.ir.FunctionNode
                    public parse(arg0: string, arg1: int, arg2: int, arg3: boolean): jdk.nashorn.internal.ir.FunctionNode
                    public parseFormalParameterList(): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public parseFunctionBody(): jdk.nashorn.internal.ir.FunctionNode
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Parser$2 {
                    public static class: java.lang.Class<any>
                }
                class Parser$ParserState implements java.io.Serializable {
                    public static class: java.lang.Class<any>
                }
                class Parser$PropertyFunction {
                    public static class: java.lang.Class<any>
                }
                class Parser$1 implements jdk.nashorn.internal.parser.Lexer$LineInfoReceiver {
                    public lineInfo(arg0: int, arg1: int): void
                    public static class: java.lang.Class<any>
                }
                class TokenStream {
                    public constructor()
                    public isEmpty(): boolean
                    public isFull(): boolean
                    public count(): int
                    public first(): int
                    public last(): int
                    public removeLast(): void
                    public put(arg0: long): void
                    public get(arg0: int): long
                    public commit(arg0: int): void
                    public grow(): void
                    public static class: java.lang.Class<any>
                }
                class Scanner {
                    protected content: char[]
                    protected position: int
                    protected limit: int
                    protected line: int
                    protected ch0: char
                    protected ch1: char
                    protected ch2: char
                    protected ch3: char
                    protected constructor(arg0: char[], arg1: int, arg2: int, arg3: int)
                    protected constructor(arg0: string)
                    protected atEOF(): boolean
                    protected charAt(arg0: int): char
                    protected reset(arg0: int): void
                    protected skip(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                class Scanner$State {
                    public position: int
                    public limit: int
                    public line: int
                    public static class: java.lang.Class<any>
                }
                class Lexer extends jdk.nashorn.internal.parser.Scanner {
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.TokenStream)
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.parser.TokenStream, arg2: boolean)
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: int, arg3: jdk.nashorn.internal.parser.TokenStream, arg4: boolean, arg5: boolean)
                    protected add(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int, arg2: int): void
                    protected add(arg0: jdk.nashorn.internal.parser.TokenType, arg1: int): void
                    public static getWhitespaceRegExp(): string
                    public static isJSWhitespace(arg0: char): boolean
                    public static isJSEOL(arg0: char): boolean
                    protected isStringDelimiter(arg0: char): boolean
                    protected isWhitespace(arg0: char): boolean
                    protected isEOL(arg0: char): boolean
                    protected skipComments(): boolean
                    public valueOfPattern(arg0: int, arg1: int): jdk.nashorn.internal.parser.Lexer$RegexToken
                    public canStartLiteral(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    protected scanLiteral(arg0: long, arg1: jdk.nashorn.internal.parser.TokenType, arg2: jdk.nashorn.internal.parser.Lexer$LineInfoReceiver | jdk.nashorn.internal.parser.Lexer$LineInfoReceiver): boolean
                    protected static convertDigit(arg0: char, arg1: int): int
                    protected scanString(arg0: boolean): void
                    protected isEscapeCharacter(arg0: char): boolean
                    protected scanNumber(): void
                    public lexify(): void
                    protected static message(arg0: string, ...arg1: java.lang.String[]): string
                    protected error(arg0: string, arg1: jdk.nashorn.internal.parser.TokenType, arg2: int, arg3: int): void
                    public static class: java.lang.Class<any>
                }
                class Lexer$1 {
                    public static class: java.lang.Class<any>
                }
                class Lexer$XMLToken extends jdk.nashorn.internal.parser.Lexer$LexerToken {
                    public constructor(arg0: string)
                    public static class: java.lang.Class<any>
                }
                class Lexer$RegexToken extends jdk.nashorn.internal.parser.Lexer$LexerToken {
                    public constructor(arg0: string, arg1: string)
                    public getOptions(): string
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                abstract class Lexer$LexerToken implements java.io.Serializable {
                    protected constructor(arg0: string)
                    public getExpression(): string
                    public static class: java.lang.Class<any>
                }
                class Lexer$EditStringLexer extends jdk.nashorn.internal.parser.Lexer {
                    public lexify(): void
                    public static class: java.lang.Class<any>
                }
                interface Lexer$LineInfoReceiver {
                    lineInfo(arg0: int, arg1: int): void
                }
                interface Lexer$LineInfoReceiver$$Lambda {
                    (arg0: int, arg1: int): void
                }
                class Lexer$State extends jdk.nashorn.internal.parser.Scanner$State {
                    public pendingLine: int
                    public linePosition: int
                    public last: jdk.nashorn.internal.parser.TokenType
                    public static class: java.lang.Class<any>
                }
                class TokenType extends java.lang.Enum<jdk.nashorn.internal.parser.TokenType> {
                    public static ERROR: jdk.nashorn.internal.parser.TokenType
                    public static EOF: jdk.nashorn.internal.parser.TokenType
                    public static EOL: jdk.nashorn.internal.parser.TokenType
                    public static COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static DIRECTIVE_COMMENT: jdk.nashorn.internal.parser.TokenType
                    public static NOT: jdk.nashorn.internal.parser.TokenType
                    public static NE: jdk.nashorn.internal.parser.TokenType
                    public static NE_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static MOD: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_MOD: jdk.nashorn.internal.parser.TokenType
                    public static BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static AND: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_AND: jdk.nashorn.internal.parser.TokenType
                    public static LPAREN: jdk.nashorn.internal.parser.TokenType
                    public static RPAREN: jdk.nashorn.internal.parser.TokenType
                    public static MUL: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_MUL: jdk.nashorn.internal.parser.TokenType
                    public static ADD: jdk.nashorn.internal.parser.TokenType
                    public static INCPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_ADD: jdk.nashorn.internal.parser.TokenType
                    public static COMMARIGHT: jdk.nashorn.internal.parser.TokenType
                    public static SUB: jdk.nashorn.internal.parser.TokenType
                    public static DECPREFIX: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SUB: jdk.nashorn.internal.parser.TokenType
                    public static PERIOD: jdk.nashorn.internal.parser.TokenType
                    public static DIV: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_DIV: jdk.nashorn.internal.parser.TokenType
                    public static COLON: jdk.nashorn.internal.parser.TokenType
                    public static SEMICOLON: jdk.nashorn.internal.parser.TokenType
                    public static LT: jdk.nashorn.internal.parser.TokenType
                    public static SHL: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SHL: jdk.nashorn.internal.parser.TokenType
                    public static LE: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN: jdk.nashorn.internal.parser.TokenType
                    public static EQ: jdk.nashorn.internal.parser.TokenType
                    public static EQ_STRICT: jdk.nashorn.internal.parser.TokenType
                    public static BIND: jdk.nashorn.internal.parser.TokenType
                    public static GT: jdk.nashorn.internal.parser.TokenType
                    public static GE: jdk.nashorn.internal.parser.TokenType
                    public static SAR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SAR: jdk.nashorn.internal.parser.TokenType
                    public static SHR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_SHR: jdk.nashorn.internal.parser.TokenType
                    public static TERNARY: jdk.nashorn.internal.parser.TokenType
                    public static LBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static RBRACKET: jdk.nashorn.internal.parser.TokenType
                    public static BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_XOR: jdk.nashorn.internal.parser.TokenType
                    public static LBRACE: jdk.nashorn.internal.parser.TokenType
                    public static BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static ASSIGN_BIT_OR: jdk.nashorn.internal.parser.TokenType
                    public static OR: jdk.nashorn.internal.parser.TokenType
                    public static RBRACE: jdk.nashorn.internal.parser.TokenType
                    public static BIT_NOT: jdk.nashorn.internal.parser.TokenType
                    public static BREAK: jdk.nashorn.internal.parser.TokenType
                    public static CASE: jdk.nashorn.internal.parser.TokenType
                    public static CATCH: jdk.nashorn.internal.parser.TokenType
                    public static CLASS: jdk.nashorn.internal.parser.TokenType
                    public static CONST: jdk.nashorn.internal.parser.TokenType
                    public static CONTINUE: jdk.nashorn.internal.parser.TokenType
                    public static DEBUGGER: jdk.nashorn.internal.parser.TokenType
                    public static DEFAULT: jdk.nashorn.internal.parser.TokenType
                    public static DELETE: jdk.nashorn.internal.parser.TokenType
                    public static DO: jdk.nashorn.internal.parser.TokenType
                    public static ELSE: jdk.nashorn.internal.parser.TokenType
                    public static ENUM: jdk.nashorn.internal.parser.TokenType
                    public static EXPORT: jdk.nashorn.internal.parser.TokenType
                    public static EXTENDS: jdk.nashorn.internal.parser.TokenType
                    public static FALSE: jdk.nashorn.internal.parser.TokenType
                    public static FINALLY: jdk.nashorn.internal.parser.TokenType
                    public static FOR: jdk.nashorn.internal.parser.TokenType
                    public static FUNCTION: jdk.nashorn.internal.parser.TokenType
                    public static IF: jdk.nashorn.internal.parser.TokenType
                    public static IMPLEMENTS: jdk.nashorn.internal.parser.TokenType
                    public static IMPORT: jdk.nashorn.internal.parser.TokenType
                    public static IN: jdk.nashorn.internal.parser.TokenType
                    public static INSTANCEOF: jdk.nashorn.internal.parser.TokenType
                    public static INTERFACE: jdk.nashorn.internal.parser.TokenType
                    public static LET: jdk.nashorn.internal.parser.TokenType
                    public static NEW: jdk.nashorn.internal.parser.TokenType
                    public static NULL: jdk.nashorn.internal.parser.TokenType
                    public static PACKAGE: jdk.nashorn.internal.parser.TokenType
                    public static PRIVATE: jdk.nashorn.internal.parser.TokenType
                    public static PROTECTED: jdk.nashorn.internal.parser.TokenType
                    public static PUBLIC: jdk.nashorn.internal.parser.TokenType
                    public static RETURN: jdk.nashorn.internal.parser.TokenType
                    public static STATIC: jdk.nashorn.internal.parser.TokenType
                    public static SUPER: jdk.nashorn.internal.parser.TokenType
                    public static SWITCH: jdk.nashorn.internal.parser.TokenType
                    public static THIS: jdk.nashorn.internal.parser.TokenType
                    public static THROW: jdk.nashorn.internal.parser.TokenType
                    public static TRUE: jdk.nashorn.internal.parser.TokenType
                    public static TRY: jdk.nashorn.internal.parser.TokenType
                    public static TYPEOF: jdk.nashorn.internal.parser.TokenType
                    public static VAR: jdk.nashorn.internal.parser.TokenType
                    public static VOID: jdk.nashorn.internal.parser.TokenType
                    public static WHILE: jdk.nashorn.internal.parser.TokenType
                    public static WITH: jdk.nashorn.internal.parser.TokenType
                    public static YIELD: jdk.nashorn.internal.parser.TokenType
                    public static DECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static OCTAL: jdk.nashorn.internal.parser.TokenType
                    public static HEXADECIMAL: jdk.nashorn.internal.parser.TokenType
                    public static FLOATING: jdk.nashorn.internal.parser.TokenType
                    public static STRING: jdk.nashorn.internal.parser.TokenType
                    public static ESCSTRING: jdk.nashorn.internal.parser.TokenType
                    public static EXECSTRING: jdk.nashorn.internal.parser.TokenType
                    public static IDENT: jdk.nashorn.internal.parser.TokenType
                    public static REGEX: jdk.nashorn.internal.parser.TokenType
                    public static XML: jdk.nashorn.internal.parser.TokenType
                    public static OBJECT: jdk.nashorn.internal.parser.TokenType
                    public static ARRAY: jdk.nashorn.internal.parser.TokenType
                    public static COMMALEFT: jdk.nashorn.internal.parser.TokenType
                    public static DECPOSTFIX: jdk.nashorn.internal.parser.TokenType
                    public static INCPOSTFIX: jdk.nashorn.internal.parser.TokenType
                    public static values(): jdk.nashorn.internal.parser.TokenType[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.parser.TokenType
                    public needsParens(arg0: jdk.nashorn.internal.parser.TokenType, arg1: boolean): boolean
                    public isOperator(arg0: boolean): boolean
                    public getLength(): int
                    public getName(): string
                    public getNameOrType(): string
                    public getNext(): jdk.nashorn.internal.parser.TokenType
                    public setNext(arg0: jdk.nashorn.internal.parser.TokenType): void
                    public getKind(): jdk.nashorn.internal.parser.TokenKind
                    public getPrecedence(): int
                    public isLeftAssociative(): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class TokenKind extends java.lang.Enum<jdk.nashorn.internal.parser.TokenKind> {
                    public static SPECIAL: jdk.nashorn.internal.parser.TokenKind
                    public static UNARY: jdk.nashorn.internal.parser.TokenKind
                    public static BINARY: jdk.nashorn.internal.parser.TokenKind
                    public static BRACKET: jdk.nashorn.internal.parser.TokenKind
                    public static KEYWORD: jdk.nashorn.internal.parser.TokenKind
                    public static LITERAL: jdk.nashorn.internal.parser.TokenKind
                    public static IR: jdk.nashorn.internal.parser.TokenKind
                    public static FUTURE: jdk.nashorn.internal.parser.TokenKind
                    public static FUTURESTRICT: jdk.nashorn.internal.parser.TokenKind
                    public static values(): jdk.nashorn.internal.parser.TokenKind[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.parser.TokenKind
                    public static class: java.lang.Class<any>
                }
            }
            namespace ir {
                class OptimisticLexicalContext extends jdk.nashorn.internal.ir.LexicalContext {
                    public constructor(arg0: boolean)
                    public isEnabled(): boolean
                    public logOptimisticAssumption(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public getOptimisticAssumptions(): java.util.List<jdk.nashorn.internal.ir.OptimisticLexicalContext$Assumption>
                    public hasOptimisticAssumptions(): boolean
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public static class: java.lang.Class<any>
                }
                class OptimisticLexicalContext$Assumption {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                namespace debug {
                    class ClassHistogramElement {
                        public static COMPARE_INSTANCES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public static COMPARE_BYTES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public static COMPARE_CLASSNAMES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public constructor(arg0: java.lang.Class<any>)
                        public addInstance(arg0: long): void
                        public getBytes(): long
                        public getClazz(): java.lang.Class<any>
                        public getInstances(): long
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class ClassHistogramElement$3 implements java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement> {
                        public compare(arg0: jdk.nashorn.internal.ir.debug.ClassHistogramElement, arg1: jdk.nashorn.internal.ir.debug.ClassHistogramElement): int
                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class ClassHistogramElement$2 implements java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement> {
                        public compare(arg0: jdk.nashorn.internal.ir.debug.ClassHistogramElement, arg1: jdk.nashorn.internal.ir.debug.ClassHistogramElement): int
                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class ClassHistogramElement$1 implements java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement> {
                        public compare(arg0: jdk.nashorn.internal.ir.debug.ClassHistogramElement, arg1: jdk.nashorn.internal.ir.debug.ClassHistogramElement): int
                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator {
                        public static getObjectSize(arg0: java.lang.Object): long
                        public constructor(arg0: jdk.nashorn.internal.ir.debug.ObjectSizeCalculator$MemoryLayoutSpecification)
                        public calculateObjectSize(arg0: java.lang.Object): long
                        public getClassHistogram(): java.util.List<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public static getEffectiveMemoryLayoutSpecification(): jdk.nashorn.internal.ir.debug.ObjectSizeCalculator$MemoryLayoutSpecification
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$3 implements jdk.nashorn.internal.ir.debug.ObjectSizeCalculator$MemoryLayoutSpecification {
                        public getArrayHeaderSize(): int
                        public getObjectHeaderSize(): int
                        public getObjectPadding(): int
                        public getReferenceSize(): int
                        public getSuperclassFieldPadding(): int
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$2 implements jdk.nashorn.internal.ir.debug.ObjectSizeCalculator$MemoryLayoutSpecification {
                        public getArrayHeaderSize(): int
                        public getObjectHeaderSize(): int
                        public getObjectPadding(): int
                        public getReferenceSize(): int
                        public getSuperclassFieldPadding(): int
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$1 implements jdk.nashorn.internal.ir.debug.ObjectSizeCalculator$MemoryLayoutSpecification {
                        public getArrayHeaderSize(): int
                        public getObjectHeaderSize(): int
                        public getObjectPadding(): int
                        public getReferenceSize(): int
                        public getSuperclassFieldPadding(): int
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$ClassSizeInfo {
                        public constructor(arg0: java.lang.Class<any>)
                        public enqueueReferencedObjects(arg0: java.lang.Object, arg1: jdk.nashorn.internal.ir.debug.ObjectSizeCalculator): void
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$ArrayElementsVisitor {
                        public visit(arg0: jdk.nashorn.internal.ir.debug.ObjectSizeCalculator): void
                        public static class: java.lang.Class<any>
                    }
                    class ObjectSizeCalculator$CurrentLayout {
                        public static class: java.lang.Class<any>
                    }
                    interface ObjectSizeCalculator$MemoryLayoutSpecification {
                        getArrayHeaderSize(): int
                        getObjectHeaderSize(): int
                        getObjectPadding(): int
                        getReferenceSize(): int
                        getSuperclassFieldPadding(): int
                    }
                    class JSONWriter extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                        public static parse(arg0: jdk.nashorn.internal.runtime.Context, arg1: string, arg2: string, arg3: boolean): string
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                        public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                        public enterCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): boolean
                        public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode): boolean
                        public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                        public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                        public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                        public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                        public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                        public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                        public static class: java.lang.Class<any>
                    }
                    class JSONWriter$1 {
                        public static class: java.lang.Class<any>
                    }
                    class ASTWriter {
                        public constructor(arg0: jdk.nashorn.internal.ir.Node)
                        public toString(): string
                        public toArray(): jdk.nashorn.internal.ir.Node[]
                        public static class: java.lang.Class<any>
                    }
                    class PrintVisitor extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                        public constructor()
                        public constructor(arg0: boolean, arg1: boolean)
                        public constructor(arg0: jdk.nashorn.internal.ir.Node)
                        public constructor(arg0: jdk.nashorn.internal.ir.Node, arg1: boolean, arg2: boolean)
                        public toString(): string
                        public enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                        public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): jdk.nashorn.internal.ir.Node
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                        public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                        public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                        public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                        public static class: java.lang.Class<any>
                    }
                    class PrintVisitor$1 implements java.lang.Runnable {
                        public run(): void
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader extends jdk.internal.org.objectweb.asm.ClassReader {
                        public constructor(arg0: byte[])
                        public accept(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: jdk.internal.org.objectweb.asm.Attribute[], arg2: int): void
                        protected readLabel(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label[]): jdk.internal.org.objectweb.asm.Label
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader$DirectInfo<T> extends jdk.nashorn.internal.ir.debug.NashornClassReader$Constant {
                        protected info: T
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader$IndexInfo2 extends jdk.nashorn.internal.ir.debug.NashornClassReader$IndexInfo {
                        protected index2: int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader$IndexInfo extends jdk.nashorn.internal.ir.debug.NashornClassReader$Constant {
                        protected index: int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    abstract class NashornClassReader$Constant {
                        protected cp: java.util.ArrayList<jdk.nashorn.internal.ir.debug.NashornClassReader$Constant>
                        protected tag: int
                        protected constructor(arg0: java.util.ArrayList<jdk.nashorn.internal.ir.debug.NashornClassReader$Constant>, arg1: int)
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader$2 extends jdk.nashorn.internal.ir.debug.NashornClassReader$IndexInfo2 {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class NashornClassReader$1 extends jdk.nashorn.internal.ir.debug.NashornClassReader$IndexInfo2 {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class NashornTextifier extends jdk.internal.org.objectweb.asm.util.Printer {
                        public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.ir.debug.NashornClassReader)
                        protected constructor(arg0: int)
                        public visit(arg0: int, arg1: int, arg2: string, arg3: string, arg4: string, arg5: java.lang.String[]): void
                        public visitSource(arg0: string, arg1: string): void
                        public visitOuterClass(arg0: string, arg1: string, arg2: string): void
                        public visitField(arg0: int, arg1: string, arg2: string, arg3: string, arg4: java.lang.Object): jdk.nashorn.internal.ir.debug.NashornTextifier
                        public visitMethod(arg0: int, arg1: string, arg2: string, arg3: string, arg4: java.lang.String[]): jdk.nashorn.internal.ir.debug.NashornTextifier
                        public visitClassEnd(): void
                        public visitFieldEnd(): void
                        public visitParameter(arg0: string, arg1: int): void
                        public visitCode(): void
                        public visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
                        public visitInsn(arg0: int): void
                        public visitIntInsn(arg0: int, arg1: int): void
                        public visitVarInsn(arg0: int, arg1: int): void
                        public visitTypeInsn(arg0: int, arg1: string): void
                        public visitFieldInsn(arg0: int, arg1: string, arg2: string, arg3: string): void
                        public visitMethodInsn(arg0: int, arg1: string, arg2: string, arg3: string, arg4: boolean): void
                        public visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
                        public visitJumpInsn(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                        public visitLabel(arg0: jdk.internal.org.objectweb.asm.Label): void
                        public visitLdcInsn(arg0: java.lang.Object): void
                        public visitIincInsn(arg0: int, arg1: int): void
                        public visitTableSwitchInsn(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
                        public visitLookupSwitchInsn(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
                        public visitMultiANewArrayInsn(arg0: string, arg1: int): void
                        public visitTryCatchBlock(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Label, arg3: string): void
                        public visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
                        public visitLineNumber(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                        public visitMaxs(arg0: int, arg1: int): void
                        public visitMethodEnd(): void
                        protected createNashornTextifier(): jdk.nashorn.internal.ir.debug.NashornTextifier
                        public visitAnnotationDefault(): jdk.internal.org.objectweb.asm.util.Printer
                        public visitClassAnnotation(arg0: string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                        public visitClassAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                        public visitFieldAnnotation(arg0: string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                        public visitFieldAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                        public visitMethodAnnotation(arg0: string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                        public visitMethodAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                        public visitParameterAnnotation(arg0: int, arg1: string, arg2: boolean): jdk.internal.org.objectweb.asm.util.Printer
                        public visit(arg0: string, arg1: java.lang.Object): void
                        public visitAnnotation(arg0: string, arg1: string): jdk.internal.org.objectweb.asm.util.Printer
                        public visitAnnotationEnd(): void
                        public visitArray(arg0: string): jdk.internal.org.objectweb.asm.util.Printer
                        public visitEnum(arg0: string, arg1: string, arg2: string): void
                        public visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: int): void
                        public visitMethod(arg0: int, arg1: string, arg2: string, arg3: string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.util.Printer
                        public visitField(arg0: int, arg1: string, arg2: string, arg3: string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.util.Printer
                        public static class: java.lang.Class<any>
                    }
                    class NashornTextifier$NashornLabel extends jdk.internal.org.objectweb.asm.Label {
                        public getOffset(): int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class NashornTextifier$Graph {
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
                class BlockLexicalContext extends jdk.nashorn.internal.ir.LexicalContext {
                    protected lastStatement: jdk.nashorn.internal.ir.Statement
                    public constructor()
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    protected popStatements<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): java.util.List<jdk.nashorn.internal.ir.Statement>
                    protected afterSetStatements<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public appendStatement<T extends jdk.nashorn.internal.ir.Node>(arg0: jdk.nashorn.internal.ir.Statement): void
                    public prependStatement<T extends jdk.nashorn.internal.ir.Node>(arg0: jdk.nashorn.internal.ir.Statement): jdk.nashorn.internal.ir.Node
                    public prependStatements<T extends jdk.nashorn.internal.ir.Node>(arg0: java.util.List<jdk.nashorn.internal.ir.Statement>): void
                    public getLastStatement<T extends jdk.nashorn.internal.ir.Node>(): jdk.nashorn.internal.ir.Statement
                    public static class: java.lang.Class<any>
                }
                class WithNode extends jdk.nashorn.internal.ir.LexicalContextStatement {
                    public constructor(arg0: int, arg1: long, arg2: int)
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.WithNode
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.WithNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class WhileNode extends jdk.nashorn.internal.ir.LoopNode {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: boolean)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public hasGoto(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.WhileNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.WhileNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.WhileNode
                    public isDoWhile(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public mustEnter(): boolean
                    public hasPerIterationScope(): boolean
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
                    public static class: java.lang.Class<any>
                }
                class VarNode extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.IdentNode> {
                    public static IS_LET: int
                    public static IS_CONST: int
                    public static IS_LAST_FUNCTION_DECLARATION: int
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression)
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression, arg5: int)
                    public isAssignment(): boolean
                    public getAssignmentDest(): jdk.nashorn.internal.ir.IdentNode
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.VarNode
                    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    public isBlockScoped(): boolean
                    public isLet(): boolean
                    public isConst(): boolean
                    public getSymbolFlags(): int
                    public hasInit(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getInit(): jdk.nashorn.internal.ir.Expression
                    public setInit(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.VarNode
                    public getName(): jdk.nashorn.internal.ir.IdentNode
                    public setName(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.VarNode
                    public getFlag(arg0: int): boolean
                    public setFlag(arg0: int): jdk.nashorn.internal.ir.VarNode
                    public isFunctionDeclaration(): boolean
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.Node
                    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
                    public static class: java.lang.Class<any>
                }
                class JoinPredecessorExpression extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor()
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression)
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class UnaryNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.Expression> , jdk.nashorn.internal.ir.Optimistic {
                    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression)
                    public constructor(arg0: long, arg1: int, arg2: int, arg3: jdk.nashorn.internal.ir.Expression)
                    public isAssignment(): boolean
                    public isSelfModifying(): boolean
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.UnaryNode
                    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isLocal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public toString(arg0: java.lang.StringBuilder, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.UnaryNode
                    public getProgramPoint(): int
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.UnaryNode
                    public canBeOptimistic(): boolean
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.UnaryNode
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.Node
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class UnaryNode$2 {
                    public static class: java.lang.Class<any>
                }
                class UnaryNode$1 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class ThrowNode extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: boolean)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.ThrowNode
                    public isSyntheticRethrow(): boolean
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public static class: java.lang.Class<any>
                }
                class TernaryNode extends jdk.nashorn.internal.ir.Expression {
                    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression, arg2: jdk.nashorn.internal.ir.JoinPredecessorExpression, arg3: jdk.nashorn.internal.ir.JoinPredecessorExpression)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public isLocal(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getTest(): jdk.nashorn.internal.ir.Expression
                    public getTrueExpression(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public getFalseExpression(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public setTest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.TernaryNode
                    public setTrueExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.TernaryNode
                    public setFalseExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.TernaryNode
                    public static class: java.lang.Class<any>
                }
                class SwitchNode extends jdk.nashorn.internal.ir.BreakableStatement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: java.util.List<jdk.nashorn.internal.ir.CaseNode>, arg5: jdk.nashorn.internal.ir.CaseNode)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getDefaultCase(): jdk.nashorn.internal.ir.CaseNode
                    public getCases(): java.util.List<jdk.nashorn.internal.ir.CaseNode>
                    public setCases(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.CaseNode>): jdk.nashorn.internal.ir.SwitchNode
                    public setCases(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.CaseNode>, arg2: jdk.nashorn.internal.ir.CaseNode): jdk.nashorn.internal.ir.SwitchNode
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.SwitchNode
                    public getTag(): jdk.nashorn.internal.ir.Symbol
                    public setTag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.SwitchNode
                    public isUniqueInteger(): boolean
                    public setUniqueInteger(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.SwitchNode
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLabels(): java.util.List
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public isBreakableWithoutLabel(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class SplitReturn extends jdk.nashorn.internal.ir.Statement {
                    public static INSTANCE: jdk.nashorn.internal.ir.SplitReturn
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class SetSplitState extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: int)
                    public getState(): int
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class RuntimeNode extends jdk.nashorn.internal.ir.Expression {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.RuntimeNode$Request, arg3: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.RuntimeNode$Request, ...arg3: jdk.nashorn.internal.ir.Expression[])
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request, ...arg2: jdk.nashorn.internal.ir.Expression[])
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request, arg2: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: jdk.nashorn.internal.ir.UnaryNode, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request)
                    public constructor(arg0: jdk.nashorn.internal.ir.BinaryNode)
                    public setRequest(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getArgs(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public setArgs(arg0: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.RuntimeNode
                    public getRequest(): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public isPrimitive(): boolean
                    public static class: java.lang.Class<any>
                }
                class RuntimeNode$1 {
                    public static class: java.lang.Class<any>
                }
                class RuntimeNode$Request extends java.lang.Enum<jdk.nashorn.internal.ir.RuntimeNode$Request> {
                    public static ADD: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static DEBUGGER: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NEW: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static TYPEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static REFERENCE_ERROR: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static SLOW_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static FAIL_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static EQ_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static EQ: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static GE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static GT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IN: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static INSTANCEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static LE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static LT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NE_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IS_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IS_NOT_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static values(): jdk.nashorn.internal.ir.RuntimeNode$Request[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public canSpecialize(): boolean
                    public getArity(): int
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public getTokenType(): jdk.nashorn.internal.parser.TokenType
                    public nonStrictName(): string
                    public static requestFor(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static isUndefinedCheck(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isEQ(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isNE(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isStrict(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static reverse(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static invert(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static isComparison(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static class: java.lang.Class<any>
                }
                class ReturnNode extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression)
                    public isTerminal(): boolean
                    public isReturn(): boolean
                    public hasExpression(): boolean
                    public isYield(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.ReturnNode
                    public static class: java.lang.Class<any>
                }
                class PropertyNode extends jdk.nashorn.internal.ir.Node {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.PropertyKey | jdk.nashorn.internal.ir.PropertyKey$$Lambda, arg3: jdk.nashorn.internal.ir.Expression, arg4: jdk.nashorn.internal.ir.FunctionNode, arg5: jdk.nashorn.internal.ir.FunctionNode)
                    public getKeyName(): string
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getGetter(): jdk.nashorn.internal.ir.FunctionNode
                    public setGetter(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.PropertyNode
                    public getKey(): jdk.nashorn.internal.ir.Expression
                    public getSetter(): jdk.nashorn.internal.ir.FunctionNode
                    public setSetter(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.PropertyNode
                    public getValue(): jdk.nashorn.internal.ir.Expression
                    public setValue(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.PropertyNode
                    public static class: java.lang.Class<any>
                }
                interface Splittable {
                    getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                }
                interface Splittable$$Lambda {
                    (): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                }
                class Splittable$SplitRange implements jdk.nashorn.internal.ir.CompileUnitHolder , java.io.Serializable {
                    public constructor(arg0: jdk.nashorn.internal.codegen.CompileUnit, arg1: int, arg2: int)
                    public getHigh(): int
                    public getLow(): int
                    public getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
                    public static class: java.lang.Class<any>
                }
                class ObjectNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
                    public constructor(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.PropertyNode>)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getElements(): java.util.List<jdk.nashorn.internal.ir.PropertyNode>
                    public setSplitRanges(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>): jdk.nashorn.internal.ir.ObjectNode
                    public getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                    public static class: java.lang.Class<any>
                }
                abstract class LiteralNode<T> extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.PropertyKey {
                    protected value: T
                    public static POSTSET_MARKER: java.lang.Object
                    protected constructor(arg0: long, arg1: int, arg2: T)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LiteralNode<T>)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LiteralNode<T>, arg1: T)
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode<any>
                    public isNull(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getPropertyName(): string
                    public getBoolean(): boolean
                    public getInt32(): int
                    public getUint32(): long
                    public getLong(): long
                    public getNumber(): double
                    public getString(): string
                    public getObject(): java.lang.Object
                    public isString(): boolean
                    public isNumeric(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getValue(): T
                    public static newInstance(arg0: long, arg1: int): jdk.nashorn.internal.ir.LiteralNode<java.lang.Object>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.LiteralNode<java.lang.Object>
                    public static newInstance(arg0: long, arg1: int, arg2: boolean): jdk.nashorn.internal.ir.LiteralNode<java.lang.Boolean>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: boolean): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: java.lang.Number): jdk.nashorn.internal.ir.LiteralNode<java.lang.Number>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: java.lang.Number): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.runtime.Undefined): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.runtime.Undefined>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: jdk.nashorn.internal.runtime.Undefined): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: string): jdk.nashorn.internal.ir.LiteralNode<java.lang.String>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: string): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.parser.Lexer$LexerToken): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.parser.Lexer$LexerToken>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: jdk.nashorn.internal.parser.Lexer$LexerToken): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static objectAsConstant(arg0: java.lang.Object): java.lang.Object
                    public static isConstant(arg0: java.lang.Object): boolean
                    public static newInstance(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression[]): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]>
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$1 {
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$ArrayLiteralNode extends jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]> implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
                    protected constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression[])
                    public getElementExpressions(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode$ArrayLiteralNode
                    public getArrayType(): jdk.nashorn.internal.codegen.types.ArrayType
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getElementType(): jdk.nashorn.internal.codegen.types.Type
                    public getPostsets(): int[]
                    public getPresets(): java.lang.Object
                    public getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                    public setSplitRanges(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>): jdk.nashorn.internal.ir.LiteralNode$ArrayLiteralNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$ArrayLiteralNode$ArrayLiteralInitializer {
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$NullLiteralNode extends jdk.nashorn.internal.ir.LiteralNode$PrimitiveLiteralNode<java.lang.Object> {
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$LexerTokenLiteralNode extends jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.parser.Lexer$LexerToken> {
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$StringLiteralNode extends jdk.nashorn.internal.ir.LiteralNode$PrimitiveLiteralNode<java.lang.String> {
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$UndefinedLiteralNode extends jdk.nashorn.internal.ir.LiteralNode$PrimitiveLiteralNode<jdk.nashorn.internal.runtime.Undefined> {
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$NumberLiteralNode extends jdk.nashorn.internal.ir.LiteralNode$PrimitiveLiteralNode<java.lang.Number> {
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$BooleanLiteralNode extends jdk.nashorn.internal.ir.LiteralNode$PrimitiveLiteralNode<java.lang.Boolean> {
                    public isTrue(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$PrimitiveLiteralNode<T> extends jdk.nashorn.internal.ir.LiteralNode<T> {
                    public isTrue(): boolean
                    public isLocal(): boolean
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public static class: java.lang.Class<any>
                }
                class JumpToInlinedFinally extends jdk.nashorn.internal.ir.JumpStatement {
                    public constructor(arg0: string)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Block
                    public getPopScopeLimit(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.TryNode
                    public getPopScopeLimit(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LexicalContextNode
                    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.BreakableNode
                    public static class: java.lang.Class<any>
                }
                class IndexNode extends jdk.nashorn.internal.ir.BaseNode {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: jdk.nashorn.internal.ir.Expression)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getIndex(): jdk.nashorn.internal.ir.Expression
                    public setIndex(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.IndexNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.IndexNode
                    public setIsFunction(): jdk.nashorn.internal.ir.IndexNode
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.IndexNode
                    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class IfNode extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: jdk.nashorn.internal.ir.Block, arg5: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFail(): jdk.nashorn.internal.ir.Block
                    public getPass(): jdk.nashorn.internal.ir.Block
                    public getTest(): jdk.nashorn.internal.ir.Expression
                    public setTest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.IfNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.IfNode
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public static class: java.lang.Class<any>
                }
                class GetSplitState extends jdk.nashorn.internal.ir.Expression {
                    public static INSTANCE: jdk.nashorn.internal.ir.GetSplitState
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class ForNode extends jdk.nashorn.internal.ir.LoopNode {
                    public static IS_FOR_IN: int
                    public static IS_FOR_EACH: int
                    public static PER_ITERATION_SCOPE: int
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: int)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public hasGoto(): boolean
                    public mustEnter(): boolean
                    public getInit(): jdk.nashorn.internal.ir.Expression
                    public setInit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.ForNode
                    public isForIn(): boolean
                    public setIsForIn(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public isForEach(): boolean
                    public setIsForEach(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public getIterator(): jdk.nashorn.internal.ir.Symbol
                    public setIterator(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.ForNode
                    public getModify(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public setModify(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.ForNode
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.ForNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.ForNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.ForNode
                    public hasPerIterationScope(): boolean
                    public setPerIterationScope(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
                    public static class: java.lang.Class<any>
                }
                class BlockStatement extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: jdk.nashorn.internal.ir.Block)
                    public constructor(arg0: int, arg1: jdk.nashorn.internal.ir.Block)
                    public static createReplacement(arg0: jdk.nashorn.internal.ir.Statement, arg1: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.BlockStatement
                    public static createReplacement(arg0: jdk.nashorn.internal.ir.Statement, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.BlockStatement
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBlock(): jdk.nashorn.internal.ir.Block
                    public setBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.BlockStatement
                    public static class: java.lang.Class<any>
                }
                class ExpressionStatement extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.ExpressionStatement
                    public static class: java.lang.Class<any>
                }
                class EmptyNode extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: jdk.nashorn.internal.ir.Statement)
                    public constructor(arg0: int, arg1: long, arg2: int)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class ContinueNode extends jdk.nashorn.internal.ir.JumpStatement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: string)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.BreakableNode
                    public static class: java.lang.Class<any>
                }
                class CaseNode extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.JoinPredecessor , jdk.nashorn.internal.ir.Labels , jdk.nashorn.internal.ir.Terminal {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public getEntry(): jdk.nashorn.internal.codegen.Label
                    public getTest(): jdk.nashorn.internal.ir.Expression
                    public setTest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.CaseNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public static class: java.lang.Class<any>
                }
                class CallNode extends jdk.nashorn.internal.ir.LexicalContextExpression implements jdk.nashorn.internal.ir.Optimistic {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: java.util.List<jdk.nashorn.internal.ir.Expression>, arg5: boolean)
                    public getLineNumber(): int
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getArgs(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public setArgs(arg0: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.CallNode
                    public getEvalArgs(): jdk.nashorn.internal.ir.CallNode$EvalArgs
                    public setEvalArgs(arg0: jdk.nashorn.internal.ir.CallNode$EvalArgs): jdk.nashorn.internal.ir.CallNode
                    public isEval(): boolean
                    public isApplyToCall(): boolean
                    public setIsApplyToCall(): jdk.nashorn.internal.ir.CallNode
                    public getFunction(): jdk.nashorn.internal.ir.Expression
                    public setFunction(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.CallNode
                    public isNew(): boolean
                    public getProgramPoint(): int
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.CallNode
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class CallNode$EvalArgs implements java.io.Serializable {
                    public constructor(arg0: java.util.List<jdk.nashorn.internal.ir.Expression>, arg1: string)
                    public getArgs(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public getLocation(): string
                    public static class: java.lang.Class<any>
                }
                abstract class JumpStatement extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: string)
                    protected constructor(arg0: jdk.nashorn.internal.ir.JumpStatement, arg1: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public hasGoto(): boolean
                    public getLabelName(): string
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.BreakableNode
                    public getTargetLabel(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.codegen.Label
                    public getPopScopeLimit(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LexicalContextNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JumpStatement
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public static class: java.lang.Class<any>
                }
                class BreakNode extends jdk.nashorn.internal.ir.JumpStatement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: string)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.BreakableNode
                    public static class: java.lang.Class<any>
                }
                interface Assignment<D extends jdk.nashorn.internal.ir.Expression> {
                    getAssignmentDest(): D
                    getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    setAssignmentDest(arg0: D): jdk.nashorn.internal.ir.Node
                }
                class BinaryNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.Expression> , jdk.nashorn.internal.ir.Optimistic {
                    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression, arg2: jdk.nashorn.internal.ir.Expression)
                    public isComparison(): boolean
                    public isRelational(): boolean
                    public isLogical(): boolean
                    public static isLogical(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    public getWidestOperandType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public isAssignment(): boolean
                    public isSelfModifying(): boolean
                    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isLocal(): boolean
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public lhs(): jdk.nashorn.internal.ir.Expression
                    public rhs(): jdk.nashorn.internal.ir.Expression
                    public setLHS(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public setRHS(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public setOperands(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public getProgramPoint(): int
                    public canBeOptimistic(): boolean
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.BinaryNode
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public isOptimisticUndecidedType(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public decideType(): jdk.nashorn.internal.ir.BinaryNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.BinaryNode
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.Node
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class BinaryNode$2 {
                    public static class: java.lang.Class<any>
                }
                class BinaryNode$1 {
                    public static class: java.lang.Class<any>
                }
                abstract class BaseNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic {
                    protected base: jdk.nashorn.internal.ir.Expression
                    protected type: jdk.nashorn.internal.codegen.types.Type
                    protected programPoint: int
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: boolean)
                    protected constructor(arg0: jdk.nashorn.internal.ir.BaseNode, arg1: jdk.nashorn.internal.ir.Expression, arg2: boolean, arg3: jdk.nashorn.internal.codegen.types.Type, arg4: int)
                    public getBase(): jdk.nashorn.internal.ir.Expression
                    public isFunction(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getProgramPoint(): int
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public isIndex(): boolean
                    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public static class: java.lang.Class<any>
                }
                class AccessNode extends jdk.nashorn.internal.ir.BaseNode {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: string)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getProperty(): string
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.AccessNode
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.AccessNode
                    public setIsFunction(): jdk.nashorn.internal.ir.AccessNode
                    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class SplitNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.CompileUnitHolder {
                    public constructor(arg0: string, arg1: jdk.nashorn.internal.ir.Block, arg2: jdk.nashorn.internal.codegen.CompileUnit)
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getName(): string
                    public getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
                    public setCompileUnit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.CompileUnit): jdk.nashorn.internal.ir.SplitNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                abstract class BreakableStatement extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.BreakableNode {
                    protected breakLabel: jdk.nashorn.internal.codegen.Label
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.codegen.Label)
                    protected constructor(arg0: jdk.nashorn.internal.ir.BreakableStatement, arg1: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public isBreakableWithoutLabel(): boolean
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public static class: java.lang.Class<any>
                }
                abstract class LoopNode extends jdk.nashorn.internal.ir.BreakableStatement {
                    protected continueLabel: jdk.nashorn.internal.codegen.Label
                    protected test: jdk.nashorn.internal.ir.JoinPredecessorExpression
                    protected body: jdk.nashorn.internal.ir.Block
                    protected controlFlowEscapes: boolean
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: boolean)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LoopNode, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression, arg2: jdk.nashorn.internal.ir.Block, arg3: boolean, arg4: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public controlFlowEscapes(): boolean
                    public isTerminal(): boolean
                    public mustEnter(): boolean
                    public getContinueLabel(): jdk.nashorn.internal.codegen.Label
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public isLoop(): boolean
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
                    public getTest(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
                    public hasPerIterationScope(): boolean
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public isBreakableWithoutLabel(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class LabelNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: string, arg4: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LabelNode
                    public getLabelName(): string
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.LabelNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public static class: java.lang.Class<any>
                }
                class CatchNode extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression, arg5: jdk.nashorn.internal.ir.Block, arg6: boolean)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getException(): jdk.nashorn.internal.ir.IdentNode
                    public getExceptionCondition(): jdk.nashorn.internal.ir.Expression
                    public setExceptionCondition(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.CatchNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setException(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.CatchNode
                    public isSyntheticRethrow(): boolean
                    public static class: java.lang.Class<any>
                }
                interface Labels {
                    getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                }
                interface Labels$$Lambda {
                    (): java.util.List<jdk.nashorn.internal.codegen.Label>
                }
                interface BreakableNode extends jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.JoinPredecessor , jdk.nashorn.internal.ir.Labels {
                    ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    isBreakableWithoutLabel(): boolean
                    getBreakLabel(): jdk.nashorn.internal.codegen.Label
                }
                class Block extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.BreakableNode , jdk.nashorn.internal.ir.Terminal , jdk.nashorn.internal.ir.Flags<jdk.nashorn.internal.ir.Block> {
                    protected statements: java.util.List<jdk.nashorn.internal.ir.Statement>
                    protected symbols: java.util.Map<java.lang.String, jdk.nashorn.internal.ir.Symbol>
                    protected flags: int
                    public static NEEDS_SCOPE: int
                    public static IS_TERMINAL: int
                    public static IS_GLOBAL_SCOPE: int
                    public constructor(arg0: long, arg1: int, ...arg2: jdk.nashorn.internal.ir.Statement[])
                    public constructor(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Statement>)
                    public isGlobalScope(): boolean
                    public hasSymbols(): boolean
                    public replaceSymbols(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.Map<jdk.nashorn.internal.ir.Symbol, jdk.nashorn.internal.ir.Symbol>): jdk.nashorn.internal.ir.Block
                    public copyWithNewSymbols(): jdk.nashorn.internal.ir.Block
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public getSymbols(): java.util.List<jdk.nashorn.internal.ir.Symbol>
                    public getExistingSymbol(arg0: string): jdk.nashorn.internal.ir.Symbol
                    public isCatchBlock(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public printSymbols(arg0: java.io.PrintWriter): boolean
                    public setIsTerminal(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.Block
                    public getFlags(): int
                    public isTerminal(): boolean
                    public getEntryLabel(): jdk.nashorn.internal.codegen.Label
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.Block
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public getStatements(): java.util.List<jdk.nashorn.internal.ir.Statement>
                    public getStatementCount(): int
                    public getFirstStatementLineNumber(): int
                    public getLastStatement(): jdk.nashorn.internal.ir.Statement
                    public setStatements(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.Block
                    public putSymbol(arg0: jdk.nashorn.internal.ir.Symbol): void
                    public needsScope(): boolean
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
                    public getFlag(arg0: int): boolean
                    public setNeedsScope(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Block
                    public nextSlot(): int
                    public isBreakableWithoutLabel(): boolean
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public static class: java.lang.Class<any>
                }
                class Block$1 implements java.util.Comparator<jdk.nashorn.internal.ir.Symbol> {
                    public compare(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.ir.Symbol): int
                    public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                namespace visitor {
                    abstract class SimpleNodeVisitor extends jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext> {
                        public constructor()
                        public static class: java.lang.Class<any>
                    }
                    abstract class NodeOperatorVisitor<T extends jdk.nashorn.internal.ir.LexicalContext> extends jdk.nashorn.internal.ir.visitor.NodeVisitor<T> {
                        public constructor(arg0: T)
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterADD(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveADD(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterAND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveAND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterGE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveGE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterGT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveGT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterIN(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterLE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveLE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterLT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveLT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterNE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveNE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public static class: java.lang.Class<any>
                    }
                    class NodeOperatorVisitor$1 {
                        public static class: java.lang.Class<any>
                    }
                    abstract class NodeVisitor<T extends jdk.nashorn.internal.ir.LexicalContext> {
                        protected lc: T
                        public constructor(arg0: T)
                        public getLexicalContext(): T
                        protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                        public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                        public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                        public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                        public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                        public enterCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): boolean
                        public leaveCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): jdk.nashorn.internal.ir.Node
                        public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                        public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                        public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                        public leaveEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): jdk.nashorn.internal.ir.Node
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public leaveBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): jdk.nashorn.internal.ir.Node
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                        public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                        public enterGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): boolean
                        public leaveGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): jdk.nashorn.internal.ir.Node
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                        public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                        public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                        public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                        public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public leaveLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): jdk.nashorn.internal.ir.Node
                        public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): boolean
                        public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): jdk.nashorn.internal.ir.Node
                        public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                        public leaveObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): jdk.nashorn.internal.ir.Node
                        public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                        public leavePropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): jdk.nashorn.internal.ir.Node
                        public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                        public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                        public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                        public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                        public enterSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): boolean
                        public leaveSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): jdk.nashorn.internal.ir.Node
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                        public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): jdk.nashorn.internal.ir.Node
                        public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
                        public leaveSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): jdk.nashorn.internal.ir.Node
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                        public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                        public leaveTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): jdk.nashorn.internal.ir.Node
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                        public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        public leaveJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.Node
                        public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                        public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                        public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                        public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                        public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                        public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                        public static class: java.lang.Class<any>
                    }
                }
                class LexicalContext {
                    public constructor()
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda, arg1: int): void
                    public setBlockNeedsScope(arg0: jdk.nashorn.internal.ir.Block): void
                    public getFlags(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): int
                    public getFunctionBody(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Block
                    public getAllNodes(): java.util.Iterator<jdk.nashorn.internal.ir.LexicalContextNode>
                    public getOutermostFunction(): jdk.nashorn.internal.ir.FunctionNode
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    public isEmpty<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): boolean
                    public size<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): int
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public applyTopFlags<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: T): T
                    public peek<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LexicalContextNode
                    public contains<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): boolean
                    public replace<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda, arg1: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): jdk.nashorn.internal.ir.LexicalContextNode
                    public getBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getFunctions<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): java.util.Iterator<jdk.nashorn.internal.ir.FunctionNode>
                    public getParentBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.Block
                    public getCurrentBlockLabelNode<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LabelNode
                    public getAncestorBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.FunctionNode
                    public getCurrentBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.Block
                    public getCurrentFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.FunctionNode
                    public getDefiningBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.Block
                    public getDefiningFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.FunctionNode
                    public isFunctionBody<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public isSplitBody<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public getParentFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    public getScopeNestingLevelTo<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): int
                    public inLoop<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public getCurrentLoop<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LoopNode
                    public getBreakable<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: string): jdk.nashorn.internal.ir.BreakableNode
                    public getContinueTo<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: string): jdk.nashorn.internal.ir.LoopNode
                    public getInlinedFinally<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: string): jdk.nashorn.internal.ir.Block
                    public getTryNodeForInlinedFinally<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: string): jdk.nashorn.internal.ir.TryNode
                    public findLabel<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: string): jdk.nashorn.internal.ir.LabelNode
                    public isExternalTarget<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.SplitNode, arg1: jdk.nashorn.internal.ir.BreakableNode): boolean
                    public inUnprotectedSwitchContext<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public toString<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): string
                    public static class: java.lang.Class<any>
                }
                class LexicalContext$NodeIterator<T extends jdk.nashorn.internal.ir.LexicalContextNode> implements java.util.Iterator<T> {
                    public hasNext(): boolean
                    public next(): T
                    public remove(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class LexicalContext$1 implements java.util.Iterator<jdk.nashorn.internal.ir.Block> {
                    public hasNext(): boolean
                    public next(): jdk.nashorn.internal.ir.Block
                    public remove(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class LocalVariableConversion {
                    public constructor(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type, arg3: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public getFrom(): jdk.nashorn.internal.codegen.types.Type
                    public getTo(): jdk.nashorn.internal.codegen.types.Type
                    public getNext(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public getSymbol(): jdk.nashorn.internal.ir.Symbol
                    public isLive(): boolean
                    public isAnyLive(): boolean
                    public static hasLiveConversion(arg0: jdk.nashorn.internal.ir.JoinPredecessor): boolean
                    public toString(): string
                    public toString(arg0: java.lang.StringBuilder): java.lang.StringBuilder
                    public static toString(arg0: jdk.nashorn.internal.ir.LocalVariableConversion, arg1: java.lang.StringBuilder): java.lang.StringBuilder
                    public static class: java.lang.Class<any>
                }
                interface Terminal {
                    isTerminal(): boolean
                }
                interface Terminal$$Lambda {
                    (): boolean
                }
                abstract class Statement extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.Terminal {
                    public constructor(arg0: int, arg1: long, arg2: int)
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.Statement)
                    public getLineNumber(): int
                    public isTerminal(): boolean
                    public hasGoto(): boolean
                    public hasTerminalFlags(): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class LexicalContextStatement extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.LexicalContextNode {
                    protected constructor(arg0: int, arg1: long, arg2: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LexicalContextStatement)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class TryNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: java.util.List<jdk.nashorn.internal.ir.Block>, arg5: jdk.nashorn.internal.ir.Block)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.TryNode
                    public getCatches(): java.util.List<jdk.nashorn.internal.ir.CatchNode>
                    public getCatchBlocks(): java.util.List<jdk.nashorn.internal.ir.Block>
                    public setCatchBlocks(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Block>): jdk.nashorn.internal.ir.TryNode
                    public getException(): jdk.nashorn.internal.ir.Symbol
                    public setException(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.TryNode
                    public getFinallyBody(): jdk.nashorn.internal.ir.Block
                    public getInlinedFinally(arg0: string): jdk.nashorn.internal.ir.Block
                    public static getLabelledInlinedFinallyBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public getInlinedFinallies(): java.util.List<jdk.nashorn.internal.ir.Block>
                    public setFinallyBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.TryNode
                    public setInlinedFinallies(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Block>): jdk.nashorn.internal.ir.TryNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                interface JoinPredecessor {
                    setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                }
                interface FunctionCall {
                    isFunction(): boolean
                }
                interface FunctionCall$$Lambda {
                    (): boolean
                }
                interface PropertyKey {
                    getPropertyName(): string
                }
                interface PropertyKey$$Lambda {
                    (): string
                }
                class IdentNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.PropertyKey , jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic , jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: long, arg1: int, arg2: string)
                    public constructor(arg0: jdk.nashorn.internal.ir.IdentNode)
                    public static createInternalIdentifier(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.IdentNode
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getName(): string
                    public getPropertyName(): string
                    public isLocal(): boolean
                    public getSymbol(): jdk.nashorn.internal.ir.Symbol
                    public setSymbol(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.IdentNode
                    public isPropertyName(): boolean
                    public setIsPropertyName(): jdk.nashorn.internal.ir.IdentNode
                    public isFutureStrictName(): boolean
                    public setIsFutureStrictName(): jdk.nashorn.internal.ir.IdentNode
                    public isInitializedHere(): boolean
                    public setIsInitializedHere(): jdk.nashorn.internal.ir.IdentNode
                    public isDead(): boolean
                    public markDead(): jdk.nashorn.internal.ir.IdentNode
                    public isDeclaredHere(): boolean
                    public setIsDeclaredHere(): jdk.nashorn.internal.ir.IdentNode
                    public isCompileTimePropertyName(): boolean
                    public isFunction(): boolean
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.IdentNode
                    public setIsFunction(): jdk.nashorn.internal.ir.IdentNode
                    public setIsNotFunction(): jdk.nashorn.internal.ir.IdentNode
                    public getProgramPoint(): int
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public isInternal(): boolean
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
                class Symbol implements java.lang.Comparable<jdk.nashorn.internal.ir.Symbol> , java.lang.Cloneable , java.io.Serializable {
                    public static IS_GLOBAL: int
                    public static IS_VAR: int
                    public static IS_PARAM: int
                    public static KINDMASK: int
                    public static IS_SCOPE: int
                    public static IS_THIS: int
                    public static IS_LET: int
                    public static IS_CONST: int
                    public static IS_INTERNAL: int
                    public static IS_FUNCTION_SELF: int
                    public static IS_FUNCTION_DECLARATION: int
                    public static IS_PROGRAM_LEVEL: int
                    public static HAS_SLOT: int
                    public static HAS_INT_VALUE: int
                    public static HAS_DOUBLE_VALUE: int
                    public static HAS_OBJECT_VALUE: int
                    public static HAS_BEEN_DECLARED: int
                    public constructor(arg0: string, arg1: int)
                    public clone(): jdk.nashorn.internal.ir.Symbol
                    public less(arg0: int): boolean
                    public setNeedsSlot(arg0: boolean): jdk.nashorn.internal.ir.Symbol
                    public slotCount(): int
                    public toString(): string
                    public compareTo(arg0: jdk.nashorn.internal.ir.Symbol): int
                    public hasSlot(): boolean
                    public isBytecodeLocal(): boolean
                    public isDead(): boolean
                    public isScope(): boolean
                    public isFunctionDeclaration(): boolean
                    public setIsScope(): jdk.nashorn.internal.ir.Symbol
                    public setIsFunctionDeclaration(): void
                    public isVar(): boolean
                    public isGlobal(): boolean
                    public isParam(): boolean
                    public isProgramLevel(): boolean
                    public isConst(): boolean
                    public isInternal(): boolean
                    public isThis(): boolean
                    public isLet(): boolean
                    public isFunctionSelf(): boolean
                    public isBlockScoped(): boolean
                    public hasBeenDeclared(): boolean
                    public setHasBeenDeclared(): void
                    public getFieldIndex(): int
                    public setFieldIndex(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public getFlags(): int
                    public setFlags(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public setFlag(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public clearFlag(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public getName(): string
                    public getFirstSlot(): int
                    public getSlot(arg0: jdk.nashorn.internal.codegen.types.Type): int
                    public hasSlotFor(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                    public setHasSlotFor(arg0: jdk.nashorn.internal.codegen.types.Type): void
                    public increaseUseCount(): void
                    public getUseCount(): int
                    public setFirstSlot(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public static setSymbolIsScope(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.Symbol
                    public clone(): java.lang.Object
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                namespace annotations {
                    interface Ignore extends java.lang.annotation.Annotation {
                    }
                    interface Reference extends java.lang.annotation.Annotation {
                    }
                    interface Immutable extends java.lang.annotation.Annotation {
                    }
                }
                interface CompileUnitHolder {
                    getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
                }
                interface CompileUnitHolder$$Lambda {
                    (): jdk.nashorn.internal.codegen.CompileUnit
                }
                interface Flags<T extends jdk.nashorn.internal.ir.LexicalContextNode> {
                    getFlags(): int
                    getFlag(arg0: int): boolean
                    clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                    setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                    setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                }
                interface LexicalContextNode {
                    accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                }
                interface LexicalContextNode$$Lambda {
                    (arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                }
                class LexicalContextNode$Acceptor {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class LexicalContextExpression extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.LexicalContextNode {
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                class FunctionNode extends jdk.nashorn.internal.ir.LexicalContextExpression implements jdk.nashorn.internal.ir.Flags<jdk.nashorn.internal.ir.FunctionNode> , jdk.nashorn.internal.ir.CompileUnitHolder {
                    public static FUNCTION_TYPE: jdk.nashorn.internal.codegen.types.Type
                    public static IS_ANONYMOUS: int
                    public static IS_DECLARED: int
                    public static IS_STRICT: int
                    public static USES_ARGUMENTS: int
                    public static IS_SPLIT: int
                    public static HAS_EVAL: int
                    public static HAS_NESTED_EVAL: int
                    public static HAS_SCOPE_BLOCK: int
                    public static DEFINES_ARGUMENTS: int
                    public static USES_ANCESTOR_SCOPE: int
                    public static HAS_FUNCTION_DECLARATIONS: int
                    public static IS_DEOPTIMIZABLE: int
                    public static HAS_APPLY_TO_CALL_SPECIALIZATION: int
                    public static IS_PROGRAM: int
                    public static USES_SELF_SYMBOL: int
                    public static USES_THIS: int
                    public static IN_DYNAMIC_CONTEXT: int
                    public static IS_PRINT_PARSE: int
                    public static IS_PRINT_LOWER_PARSE: int
                    public static IS_PRINT_AST: int
                    public static IS_PRINT_LOWER_AST: int
                    public static IS_PRINT_SYMBOLS: int
                    public static IS_PROFILE: int
                    public static IS_TRACE_ENTEREXIT: int
                    public static IS_TRACE_MISSES: int
                    public static IS_TRACE_VALUES: int
                    public static NEEDS_CALLEE: int
                    public static IS_CACHED: int
                    public static EXTENSION_CALLSITE_FLAGS: int
                    public static NEEDS_PARENT_SCOPE: int
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: long, arg3: int, arg4: long, arg5: jdk.nashorn.internal.codegen.Namespace, arg6: jdk.nashorn.internal.ir.IdentNode, arg7: string, arg8: java.util.List<jdk.nashorn.internal.ir.IdentNode>, arg9: jdk.nashorn.internal.ir.FunctionNode$Kind, arg10: int)
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public visitParameters(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public getCallSiteFlags(): int
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public initializeDeserialized(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.codegen.Namespace): jdk.nashorn.internal.ir.FunctionNode
                    public getId(): int
                    public getSourceName(): string
                    public static getSourceName(arg0: jdk.nashorn.internal.runtime.Source): string
                    public static getDirectiveFlag(arg0: string): int
                    public getLineNumber(): int
                    public uniqueName(arg0: string): string
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFlags(): int
                    public getFlag(arg0: int): boolean
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public isProgram(): boolean
                    public canBeDeoptimized(): boolean
                    public hasEval(): boolean
                    public hasNestedEval(): boolean
                    public getFirstToken(): long
                    public hasDeclaredFunctions(): boolean
                    public needsCallee(): boolean
                    public usesThis(): boolean
                    public hasApplyToCallSpecialization(): boolean
                    public getIdent(): jdk.nashorn.internal.ir.IdentNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.FunctionNode
                    public isVarArg(): boolean
                    public inDynamicContext(): boolean
                    public needsDynamicScope(): boolean
                    public setInDynamicContext(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.FunctionNode
                    public needsArguments(): boolean
                    public needsParentScope(): boolean
                    public setThisProperties(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public getThisProperties(): int
                    public hasScopeBlock(): boolean
                    public getKind(): jdk.nashorn.internal.ir.FunctionNode$Kind
                    public getLastToken(): long
                    public setLastToken(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: long): jdk.nashorn.internal.ir.FunctionNode
                    public getEndParserState(): java.lang.Object
                    public setEndParserState(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.lang.Object): jdk.nashorn.internal.ir.FunctionNode
                    public getName(): string
                    public setName(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: string): jdk.nashorn.internal.ir.FunctionNode
                    public allVarsInScope(): boolean
                    public isSplit(): boolean
                    public getParameters(): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public getNumOfParams(): int
                    public getParameter(arg0: int): jdk.nashorn.internal.ir.IdentNode
                    public setParameters(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.IdentNode>): jdk.nashorn.internal.ir.FunctionNode
                    public isDeclared(): boolean
                    public isAnonymous(): boolean
                    public usesSelfSymbol(): boolean
                    public isNamedFunctionExpression(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public setReturnType(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.FunctionNode
                    public isStrict(): boolean
                    public isCached(): boolean
                    public setCached(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.FunctionNode
                    public getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
                    public setCompileUnit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.CompileUnit): jdk.nashorn.internal.ir.FunctionNode
                    public compilerConstant(arg0: jdk.nashorn.internal.codegen.CompilerConstants): jdk.nashorn.internal.ir.Symbol
                    public getRootClass(): java.lang.Class<any>
                    public setRootClass(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.lang.Class<any>): jdk.nashorn.internal.ir.FunctionNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public static class: java.lang.Class<any>
                }
                class FunctionNode$Kind extends java.lang.Enum<jdk.nashorn.internal.ir.FunctionNode$Kind> {
                    public static NORMAL: jdk.nashorn.internal.ir.FunctionNode$Kind
                    public static SCRIPT: jdk.nashorn.internal.ir.FunctionNode$Kind
                    public static GETTER: jdk.nashorn.internal.ir.FunctionNode$Kind
                    public static SETTER: jdk.nashorn.internal.ir.FunctionNode$Kind
                    public static values(): jdk.nashorn.internal.ir.FunctionNode$Kind[]
                    public static valueOf(arg0: string): jdk.nashorn.internal.ir.FunctionNode$Kind
                    public static class: java.lang.Class<any>
                }
                abstract class Node implements java.lang.Cloneable , java.io.Serializable {
                    public static NO_LINE_NUMBER: int
                    public static NO_TOKEN: long
                    public static NO_FINISH: int
                    protected start: int
                    protected finish: int
                    public constructor(arg0: long, arg1: int)
                    protected constructor(arg0: long, arg1: int, arg2: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.Node)
                    public isLoop(): boolean
                    public isAssignment(): boolean
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(): string
                    public toString(arg0: boolean): string
                    public toString(arg0: java.lang.StringBuilder): void
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFinish(): int
                    public setFinish(arg0: int): void
                    public getStart(): int
                    protected clone(): java.lang.Object
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public position(): int
                    public length(): int
                    public tokenType(): jdk.nashorn.internal.parser.TokenType
                    public isTokenType(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    public getToken(): long
                    public static class: java.lang.Class<any>
                }
                abstract class Expression extends jdk.nashorn.internal.ir.Node {
                    protected constructor(arg0: long, arg1: int, arg2: int)
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public isLocal(): boolean
                    public isSelfModifying(): boolean
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public isOptimistic(): boolean
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public static isAlwaysFalse(arg0: jdk.nashorn.internal.ir.Expression): boolean
                    public static isAlwaysTrue(arg0: jdk.nashorn.internal.ir.Expression): boolean
                    public static class: java.lang.Class<any>
                }
                interface Optimistic {
                    getProgramPoint(): int
                    setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    canBeOptimistic(): boolean
                    getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                }
            }
            namespace objects {
                class NativeDate$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$parse(): java.lang.Object
                    public S$parse(arg0: java.lang.Object): void
                    public G$UTC(): java.lang.Object
                    public S$UTC(arg0: java.lang.Object): void
                    public G$now(): java.lang.Object
                    public public S$now(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeDate$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$toDateString(): java.lang.Object
                    public S$toDateString(arg0: java.lang.Object): void
                    public G$toTimeString(): java.lang.Object
                    public S$toTimeString(arg0: java.lang.Object): void
                    public G$toLocaleString(): java.lang.Object
                    public S$toLocaleString(arg0: java.lang.Object): void
                    public G$toLocaleDateString(): java.lang.Object
                    public S$toLocaleDateString(arg0: java.lang.Object): void
                    public G$toLocaleTimeString(): java.lang.Object
                    public S$toLocaleTimeString(arg0: java.lang.Object): void
                    public G$valueOf(): java.lang.Object
                    public S$valueOf(arg0: java.lang.Object): void
                    public G$getTime(): java.lang.Object
                    public S$getTime(arg0: java.lang.Object): void
                    public G$getFullYear(): java.lang.Object
                    public S$getFullYear(arg0: java.lang.Object): void
                    public G$getUTCFullYear(): java.lang.Object
                    public S$getUTCFullYear(arg0: java.lang.Object): void
                    public G$getYear(): java.lang.Object
                    public S$getYear(arg0: java.lang.Object): void
                    public G$getMonth(): java.lang.Object
                    public S$getMonth(arg0: java.lang.Object): void
                    public G$getUTCMonth(): java.lang.Object
                    public S$getUTCMonth(arg0: java.lang.Object): void
                    public G$getDate(): java.lang.Object
                    public S$getDate(arg0: java.lang.Object): void
                    public G$getUTCDate(): java.lang.Object
                    public S$getUTCDate(arg0: java.lang.Object): void
                    public G$getDay(): java.lang.Object
                    public S$getDay(arg0: java.lang.Object): void
                    public G$getUTCDay(): java.lang.Object
                    public S$getUTCDay(arg0: java.lang.Object): void
                    public G$getHours(): java.lang.Object
                    public S$getHours(arg0: java.lang.Object): void
                    public G$getUTCHours(): java.lang.Object
                    public S$getUTCHours(arg0: java.lang.Object): void
                    public G$getMinutes(): java.lang.Object
                    public S$getMinutes(arg0: java.lang.Object): void
                    public G$getUTCMinutes(): java.lang.Object
                    public S$getUTCMinutes(arg0: java.lang.Object): void
                    public G$getSeconds(): java.lang.Object
                    public S$getSeconds(arg0: java.lang.Object): void
                    public G$getUTCSeconds(): java.lang.Object
                    public S$getUTCSeconds(arg0: java.lang.Object): void
                    public G$getMilliseconds(): java.lang.Object
                    public S$getMilliseconds(arg0: java.lang.Object): void
                    public G$getUTCMilliseconds(): java.lang.Object
                    public S$getUTCMilliseconds(arg0: java.lang.Object): void
                    public G$getTimezoneOffset(): java.lang.Object
                    public S$getTimezoneOffset(arg0: java.lang.Object): void
                    public G$setTime(): java.lang.Object
                    public S$setTime(arg0: java.lang.Object): void
                    public G$setMilliseconds(): java.lang.Object
                    public S$setMilliseconds(arg0: java.lang.Object): void
                    public G$setUTCMilliseconds(): java.lang.Object
                    public S$setUTCMilliseconds(arg0: java.lang.Object): void
                    public G$setSeconds(): java.lang.Object
                    public S$setSeconds(arg0: java.lang.Object): void
                    public G$setUTCSeconds(): java.lang.Object
                    public S$setUTCSeconds(arg0: java.lang.Object): void
                    public G$setMinutes(): java.lang.Object
                    public S$setMinutes(arg0: java.lang.Object): void
                    public G$setUTCMinutes(): java.lang.Object
                    public S$setUTCMinutes(arg0: java.lang.Object): void
                    public G$setHours(): java.lang.Object
                    public S$setHours(arg0: java.lang.Object): void
                    public G$setUTCHours(): java.lang.Object
                    public S$setUTCHours(arg0: java.lang.Object): void
                    public G$setDate(): java.lang.Object
                    public S$setDate(arg0: java.lang.Object): void
                    public G$setUTCDate(): java.lang.Object
                    public S$setUTCDate(arg0: java.lang.Object): void
                    public G$setMonth(): java.lang.Object
                    public S$setMonth(arg0: java.lang.Object): void
                    public G$setUTCMonth(): java.lang.Object
                    public S$setUTCMonth(arg0: java.lang.Object): void
                    public G$setFullYear(): java.lang.Object
                    public S$setFullYear(arg0: java.lang.Object): void
                    public G$setUTCFullYear(): java.lang.Object
                    public S$setUTCFullYear(arg0: java.lang.Object): void
                    public G$setYear(): java.lang.Object
                    public S$setYear(arg0: java.lang.Object): void
                    public G$toUTCString(): java.lang.Object
                    public S$toUTCString(arg0: java.lang.Object): void
                    public G$toGMTString(): java.lang.Object
                    public S$toGMTString(arg0: java.lang.Object): void
                    public G$toISOString(): java.lang.Object
                    public S$toISOString(arg0: java.lang.Object): void
                    public G$toJSON(): java.lang.Object
                    public public S$toJSON(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeRegExp$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeRegExp$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$compile(): java.lang.Object
                    public S$compile(arg0: java.lang.Object): void
                    public G$exec(): java.lang.Object
                    public S$exec(arg0: java.lang.Object): void
                    public G$test(): java.lang.Object
                    public S$test(arg0: java.lang.Object): void
                    public G$toString(): java.lang.Object
                    public public S$toString(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeArray$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$isArray(): java.lang.Object
                    public public S$isArray(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeArray$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$assertNumeric(): java.lang.Object
                    public S$assertNumeric(arg0: java.lang.Object): void
                    public G$toLocaleString(): java.lang.Object
                    public S$toLocaleString(arg0: java.lang.Object): void
                    public G$concat(): java.lang.Object
                    public S$concat(arg0: java.lang.Object): void
                    public G$join(): java.lang.Object
                    public S$join(arg0: java.lang.Object): void
                    public G$pop(): java.lang.Object
                    public S$pop(arg0: java.lang.Object): void
                    public G$push(): java.lang.Object
                    public S$push(arg0: java.lang.Object): void
                    public G$reverse(): java.lang.Object
                    public S$reverse(arg0: java.lang.Object): void
                    public G$shift(): java.lang.Object
                    public S$shift(arg0: java.lang.Object): void
                    public G$slice(): java.lang.Object
                    public S$slice(arg0: java.lang.Object): void
                    public G$sort(): java.lang.Object
                    public S$sort(arg0: java.lang.Object): void
                    public G$splice(): java.lang.Object
                    public S$splice(arg0: java.lang.Object): void
                    public G$unshift(): java.lang.Object
                    public S$unshift(arg0: java.lang.Object): void
                    public G$indexOf(): java.lang.Object
                    public S$indexOf(arg0: java.lang.Object): void
                    public G$lastIndexOf(): java.lang.Object
                    public S$lastIndexOf(arg0: java.lang.Object): void
                    public G$every(): java.lang.Object
                    public S$every(arg0: java.lang.Object): void
                    public G$some(): java.lang.Object
                    public S$some(arg0: java.lang.Object): void
                    public G$forEach(): java.lang.Object
                    public S$forEach(arg0: java.lang.Object): void
                    public G$map(): java.lang.Object
                    public S$map(arg0: java.lang.Object): void
                    public G$filter(): java.lang.Object
                    public S$filter(arg0: java.lang.Object): void
                    public G$reduce(): java.lang.Object
                    public S$reduce(arg0: java.lang.Object): void
                    public G$reduceRight(): java.lang.Object
                    public public S$reduceRight(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeRangeError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeRangeError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeNumber$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$MAX_VALUE(): double
                    public G$MIN_VALUE(): double
                    public G$NaN(): double
                    public G$NEGATIVE_INFINITY(): double
                    public public G$POSITIVE_INFINITY(): double
                    public static class: java.lang.Class<any>
                }
                class NativeNumber$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toFixed(): java.lang.Object
                    public S$toFixed(arg0: java.lang.Object): void
                    public G$toExponential(): java.lang.Object
                    public S$toExponential(arg0: java.lang.Object): void
                    public G$toPrecision(): java.lang.Object
                    public S$toPrecision(arg0: java.lang.Object): void
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$toLocaleString(): java.lang.Object
                    public S$toLocaleString(arg0: java.lang.Object): void
                    public G$valueOf(): java.lang.Object
                    public public S$valueOf(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeFloat64Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeFloat64Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeArrayBuffer$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$isView(): java.lang.Object
                    public public S$isView(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeArrayBuffer$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$slice(): java.lang.Object
                    public public S$slice(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeDebug$Constructor extends jdk.nashorn.internal.runtime.ScriptObject {
                    public G$getArrayDataClass(): java.lang.Object
                    public S$getArrayDataClass(arg0: java.lang.Object): void
                    public G$getArrayData(): java.lang.Object
                    public S$getArrayData(arg0: java.lang.Object): void
                    public G$getContext(): java.lang.Object
                    public S$getContext(arg0: java.lang.Object): void
                    public G$map(): java.lang.Object
                    public S$map(arg0: java.lang.Object): void
                    public G$identical(): java.lang.Object
                    public S$identical(arg0: java.lang.Object): void
                    public G$equalWithoutType(): java.lang.Object
                    public S$equalWithoutType(arg0: java.lang.Object): void
                    public G$diffPropertyMaps(): java.lang.Object
                    public S$diffPropertyMaps(arg0: java.lang.Object): void
                    public G$getClass(): java.lang.Object
                    public S$getClass(arg0: java.lang.Object): void
                    public G$equals(): java.lang.Object
                    public S$equals(arg0: java.lang.Object): void
                    public G$toJavaString(): java.lang.Object
                    public S$toJavaString(arg0: java.lang.Object): void
                    public G$toIdentString(): java.lang.Object
                    public S$toIdentString(arg0: java.lang.Object): void
                    public G$getListenerCount(): java.lang.Object
                    public S$getListenerCount(arg0: java.lang.Object): void
                    public G$dumpCounters(): java.lang.Object
                    public S$dumpCounters(arg0: java.lang.Object): void
                    public G$getEventQueueCapacity(): java.lang.Object
                    public S$getEventQueueCapacity(arg0: java.lang.Object): void
                    public G$setEventQueueCapacity(): java.lang.Object
                    public S$setEventQueueCapacity(arg0: java.lang.Object): void
                    public G$addRuntimeEvent(): java.lang.Object
                    public S$addRuntimeEvent(arg0: java.lang.Object): void
                    public G$expandEventQueueCapacity(): java.lang.Object
                    public S$expandEventQueueCapacity(arg0: java.lang.Object): void
                    public G$clearRuntimeEvents(): java.lang.Object
                    public S$clearRuntimeEvents(arg0: java.lang.Object): void
                    public G$removeRuntimeEvent(): java.lang.Object
                    public S$removeRuntimeEvent(arg0: java.lang.Object): void
                    public G$getRuntimeEvents(): java.lang.Object
                    public S$getRuntimeEvents(arg0: java.lang.Object): void
                    public G$getLastRuntimeEvent(): java.lang.Object
                    public public S$getLastRuntimeEvent(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$captureStackTrace(): java.lang.Object
                    public S$captureStackTrace(arg0: java.lang.Object): void
                    public G$dumpStack(): java.lang.Object
                    public public S$dumpStack(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public S$message(arg0: java.lang.Object): void
                    public G$printStackTrace(): java.lang.Object
                    public S$printStackTrace(arg0: java.lang.Object): void
                    public G$getStackTrace(): java.lang.Object
                    public S$getStackTrace(arg0: java.lang.Object): void
                    public G$toString(): java.lang.Object
                    public public S$toString(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeDataView$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeDataView$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$getInt8(): java.lang.Object
                    public S$getInt8(arg0: java.lang.Object): void
                    public G$getUint8(): java.lang.Object
                    public S$getUint8(arg0: java.lang.Object): void
                    public G$getInt16(): java.lang.Object
                    public S$getInt16(arg0: java.lang.Object): void
                    public G$getUint16(): java.lang.Object
                    public S$getUint16(arg0: java.lang.Object): void
                    public G$getInt32(): java.lang.Object
                    public S$getInt32(arg0: java.lang.Object): void
                    public G$getUint32(): java.lang.Object
                    public S$getUint32(arg0: java.lang.Object): void
                    public G$getFloat32(): java.lang.Object
                    public S$getFloat32(arg0: java.lang.Object): void
                    public G$getFloat64(): java.lang.Object
                    public S$getFloat64(arg0: java.lang.Object): void
                    public G$setInt8(): java.lang.Object
                    public S$setInt8(arg0: java.lang.Object): void
                    public G$setUint8(): java.lang.Object
                    public S$setUint8(arg0: java.lang.Object): void
                    public G$setInt16(): java.lang.Object
                    public S$setInt16(arg0: java.lang.Object): void
                    public G$setUint16(): java.lang.Object
                    public S$setUint16(arg0: java.lang.Object): void
                    public G$setInt32(): java.lang.Object
                    public S$setInt32(arg0: java.lang.Object): void
                    public G$setUint32(): java.lang.Object
                    public S$setUint32(arg0: java.lang.Object): void
                    public G$setFloat32(): java.lang.Object
                    public S$setFloat32(arg0: java.lang.Object): void
                    public G$setFloat64(): java.lang.Object
                    public public S$setFloat64(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeInt16Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeInt16Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeUint8Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeUint8Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeReferenceError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeReferenceError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeInt32Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeInt32Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeJSAdapter$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeJSAdapter$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeJavaImporter$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeJavaImporter$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$__noSuchProperty__(): java.lang.Object
                    public S$__noSuchProperty__(arg0: java.lang.Object): void
                    public G$__noSuchMethod__(): java.lang.Object
                    public public S$__noSuchMethod__(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeFunction$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeFunction$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$apply(): java.lang.Object
                    public S$apply(arg0: java.lang.Object): void
                    public G$call(): java.lang.Object
                    public S$call(arg0: java.lang.Object): void
                    public G$bind(): java.lang.Object
                    public S$bind(arg0: java.lang.Object): void
                    public G$toSource(): java.lang.Object
                    public public S$toSource(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeUint32Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeUint32Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeSyntaxError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeSyntaxError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeJSON$Constructor extends jdk.nashorn.internal.runtime.ScriptObject {
                    public G$parse(): java.lang.Object
                    public S$parse(arg0: java.lang.Object): void
                    public G$stringify(): java.lang.Object
                    public public S$stringify(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeEvalError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeEvalError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeMath$Constructor extends jdk.nashorn.internal.runtime.ScriptObject {
                    public G$E(): double
                    public G$LN10(): double
                    public G$LN2(): double
                    public G$LOG2E(): double
                    public G$LOG10E(): double
                    public G$PI(): double
                    public G$SQRT1_2(): double
                    public G$SQRT2(): double
                    public G$abs(): java.lang.Object
                    public S$abs(arg0: java.lang.Object): void
                    public G$acos(): java.lang.Object
                    public S$acos(arg0: java.lang.Object): void
                    public G$asin(): java.lang.Object
                    public S$asin(arg0: java.lang.Object): void
                    public G$atan(): java.lang.Object
                    public S$atan(arg0: java.lang.Object): void
                    public G$atan2(): java.lang.Object
                    public S$atan2(arg0: java.lang.Object): void
                    public G$ceil(): java.lang.Object
                    public S$ceil(arg0: java.lang.Object): void
                    public G$cos(): java.lang.Object
                    public S$cos(arg0: java.lang.Object): void
                    public G$exp(): java.lang.Object
                    public S$exp(arg0: java.lang.Object): void
                    public G$floor(): java.lang.Object
                    public S$floor(arg0: java.lang.Object): void
                    public G$log(): java.lang.Object
                    public S$log(arg0: java.lang.Object): void
                    public G$max(): java.lang.Object
                    public S$max(arg0: java.lang.Object): void
                    public G$min(): java.lang.Object
                    public S$min(arg0: java.lang.Object): void
                    public G$pow(): java.lang.Object
                    public S$pow(arg0: java.lang.Object): void
                    public G$random(): java.lang.Object
                    public S$random(arg0: java.lang.Object): void
                    public G$round(): java.lang.Object
                    public S$round(arg0: java.lang.Object): void
                    public G$sin(): java.lang.Object
                    public S$sin(arg0: java.lang.Object): void
                    public G$sqrt(): java.lang.Object
                    public S$sqrt(arg0: java.lang.Object): void
                    public G$tan(): java.lang.Object
                    public public S$tan(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeMath$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeUint8ClampedArray$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeUint8ClampedArray$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeString$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$fromCharCode(): java.lang.Object
                    public public S$fromCharCode(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeString$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$valueOf(): java.lang.Object
                    public S$valueOf(arg0: java.lang.Object): void
                    public G$charAt(): java.lang.Object
                    public S$charAt(arg0: java.lang.Object): void
                    public G$charCodeAt(): java.lang.Object
                    public S$charCodeAt(arg0: java.lang.Object): void
                    public G$concat(): java.lang.Object
                    public S$concat(arg0: java.lang.Object): void
                    public G$indexOf(): java.lang.Object
                    public S$indexOf(arg0: java.lang.Object): void
                    public G$lastIndexOf(): java.lang.Object
                    public S$lastIndexOf(arg0: java.lang.Object): void
                    public G$localeCompare(): java.lang.Object
                    public S$localeCompare(arg0: java.lang.Object): void
                    public G$match(): java.lang.Object
                    public S$match(arg0: java.lang.Object): void
                    public G$replace(): java.lang.Object
                    public S$replace(arg0: java.lang.Object): void
                    public G$search(): java.lang.Object
                    public S$search(arg0: java.lang.Object): void
                    public G$slice(): java.lang.Object
                    public S$slice(arg0: java.lang.Object): void
                    public G$split(): java.lang.Object
                    public S$split(arg0: java.lang.Object): void
                    public G$substr(): java.lang.Object
                    public S$substr(arg0: java.lang.Object): void
                    public G$substring(): java.lang.Object
                    public S$substring(arg0: java.lang.Object): void
                    public G$toLowerCase(): java.lang.Object
                    public S$toLowerCase(arg0: java.lang.Object): void
                    public G$toLocaleLowerCase(): java.lang.Object
                    public S$toLocaleLowerCase(arg0: java.lang.Object): void
                    public G$toUpperCase(): java.lang.Object
                    public S$toUpperCase(arg0: java.lang.Object): void
                    public G$toLocaleUpperCase(): java.lang.Object
                    public S$toLocaleUpperCase(arg0: java.lang.Object): void
                    public G$trim(): java.lang.Object
                    public S$trim(arg0: java.lang.Object): void
                    public G$trimLeft(): java.lang.Object
                    public S$trimLeft(arg0: java.lang.Object): void
                    public G$trimRight(): java.lang.Object
                    public public S$trimRight(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeInt8Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeInt8Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeBoolean$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeBoolean$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$valueOf(): java.lang.Object
                    public public S$valueOf(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeUint16Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeUint16Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeTypeError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeTypeError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeURIError$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public static class: java.lang.Class<any>
                }
                class NativeURIError$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$name(): java.lang.Object
                    public S$name(arg0: java.lang.Object): void
                    public G$message(): java.lang.Object
                    public public S$message(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeFloat32Array$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public public G$BYTES_PER_ELEMENT(): int
                    public static class: java.lang.Class<any>
                }
                class NativeFloat32Array$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public G$subarray(): java.lang.Object
                    public public S$subarray(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeJava$Constructor extends jdk.nashorn.internal.runtime.ScriptObject {
                    public G$isType(): java.lang.Object
                    public S$isType(arg0: java.lang.Object): void
                    public G$synchronizedFunc(): java.lang.Object
                    public S$synchronizedFunc(arg0: java.lang.Object): void
                    public G$isJavaMethod(): java.lang.Object
                    public S$isJavaMethod(arg0: java.lang.Object): void
                    public G$isJavaFunction(): java.lang.Object
                    public S$isJavaFunction(arg0: java.lang.Object): void
                    public G$isJavaObject(): java.lang.Object
                    public S$isJavaObject(arg0: java.lang.Object): void
                    public G$isScriptObject(): java.lang.Object
                    public S$isScriptObject(arg0: java.lang.Object): void
                    public G$isScriptFunction(): java.lang.Object
                    public S$isScriptFunction(arg0: java.lang.Object): void
                    public G$type(): java.lang.Object
                    public S$type(arg0: java.lang.Object): void
                    public G$typeName(): java.lang.Object
                    public S$typeName(arg0: java.lang.Object): void
                    public G$to(): java.lang.Object
                    public S$to(arg0: java.lang.Object): void
                    public G$from(): java.lang.Object
                    public S$from(arg0: java.lang.Object): void
                    public G$extend(): java.lang.Object
                    public S$extend(arg0: java.lang.Object): void
                    public G$_super(): java.lang.Object
                    public S$_super(arg0: java.lang.Object): void
                    public G$asJSONCompatible(): java.lang.Object
                    public public S$asJSONCompatible(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeObject$Constructor extends jdk.nashorn.internal.runtime.ScriptFunction {
                    public G$setIndexedPropertiesToExternalArrayData(): java.lang.Object
                    public S$setIndexedPropertiesToExternalArrayData(arg0: java.lang.Object): void
                    public G$getPrototypeOf(): java.lang.Object
                    public S$getPrototypeOf(arg0: java.lang.Object): void
                    public G$setPrototypeOf(): java.lang.Object
                    public S$setPrototypeOf(arg0: java.lang.Object): void
                    public G$getOwnPropertyDescriptor(): java.lang.Object
                    public S$getOwnPropertyDescriptor(arg0: java.lang.Object): void
                    public G$getOwnPropertyNames(): java.lang.Object
                    public S$getOwnPropertyNames(arg0: java.lang.Object): void
                    public G$create(): java.lang.Object
                    public S$create(arg0: java.lang.Object): void
                    public G$defineProperty(): java.lang.Object
                    public S$defineProperty(arg0: java.lang.Object): void
                    public G$defineProperties(): java.lang.Object
                    public S$defineProperties(arg0: java.lang.Object): void
                    public G$seal(): java.lang.Object
                    public S$seal(arg0: java.lang.Object): void
                    public G$freeze(): java.lang.Object
                    public S$freeze(arg0: java.lang.Object): void
                    public G$preventExtensions(): java.lang.Object
                    public S$preventExtensions(arg0: java.lang.Object): void
                    public G$isSealed(): java.lang.Object
                    public S$isSealed(arg0: java.lang.Object): void
                    public G$isFrozen(): java.lang.Object
                    public S$isFrozen(arg0: java.lang.Object): void
                    public G$isExtensible(): java.lang.Object
                    public S$isExtensible(arg0: java.lang.Object): void
                    public G$keys(): java.lang.Object
                    public S$keys(arg0: java.lang.Object): void
                    public G$bindProperties(): java.lang.Object
                    public public S$bindProperties(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeObject$Prototype extends jdk.nashorn.internal.runtime.PrototypeObject {
                    public G$toString(): java.lang.Object
                    public S$toString(arg0: java.lang.Object): void
                    public G$toLocaleString(): java.lang.Object
                    public S$toLocaleString(arg0: java.lang.Object): void
                    public G$valueOf(): java.lang.Object
                    public S$valueOf(arg0: java.lang.Object): void
                    public G$hasOwnProperty(): java.lang.Object
                    public S$hasOwnProperty(arg0: java.lang.Object): void
                    public G$isPrototypeOf(): java.lang.Object
                    public S$isPrototypeOf(arg0: java.lang.Object): void
                    public G$propertyIsEnumerable(): java.lang.Object
                    public public S$propertyIsEnumerable(arg0: java.lang.Object): void
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeObject {
                    public static GET__PROTO__: java.lang.invoke.MethodHandle
                    public static SET__PROTO__: java.lang.invoke.MethodHandle
                    public static setIndexedPropertiesToExternalArrayData(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static getPrototypeOf(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static setPrototypeOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static getOwnPropertyDescriptor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static getOwnPropertyNames(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static create(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static defineProperty(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static defineProperties(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static seal(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static freeze(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static preventExtensions(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static isSealed(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isFrozen(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isExtensible(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static keys(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static toString(arg0: java.lang.Object): string
                    public static toLocaleString(arg0: java.lang.Object): java.lang.Object
                    public static valueOf(arg0: java.lang.Object): java.lang.Object
                    public static hasOwnProperty(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isPrototypeOf(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static propertyIsEnumerable(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static bindProperties(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static bindAllProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.api.scripting.ScriptObjectMirror): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeObject$2 {
                    public static class: java.lang.Class<any>
                }
                class NativeObject$1 implements java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> {
                    public call(): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class GenericPropertyDescriptor extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.PropertyDescriptor {
                    public configurable: java.lang.Object
                    public enumerable: java.lang.Object
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isWritable(): boolean
                    public getValue(): java.lang.Object
                    public getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public setConfigurable(arg0: boolean): void
                    public setEnumerable(arg0: boolean): void
                    public setWritable(arg0: boolean): void
                    public setValue(arg0: java.lang.Object): void
                    public setGetter(arg0: java.lang.Object): void
                    public setSetter(arg0: java.lang.Object): void
                    public fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public type(): int
                    public hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public public hashCode(): int
                    public static $clinit$(): void
                    public G$configurable(): java.lang.Object
                    public S$configurable(arg0: java.lang.Object): void
                    public G$enumerable(): java.lang.Object
                    public S$enumerable(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeJava {
                    public static isType(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static synchronizedFunc(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static isJavaMethod(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isJavaFunction(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isJavaObject(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isScriptObject(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static isScriptFunction(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static type(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static typeName(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static to(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static from(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static extend(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static _super(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public public static asJSONCompatible(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeFloat32Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeFloat32Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected isFloatArray(): boolean
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeFloat32Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeFloat32Array$Float32ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.FloatBuffer> {
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getInt(arg0: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeFloat32Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeFloat32Array$Float32ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeURIError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeURIError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeTypeError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeTypeError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint16Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeUint16Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeUint16Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint16Array$Uint16ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.CharBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public isUnsigned(): boolean
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeUint16Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeUint16Array$Uint16ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeBoolean extends jdk.nashorn.internal.runtime.ScriptObject {
                    public safeToString(): string
                    public toString(): string
                    public getValue(): boolean
                    public booleanValue(): boolean
                    public getClassName(): string
                    public static toString(arg0: java.lang.Object): string
                    public static valueOf(arg0: java.lang.Object): boolean
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class AccessorPropertyDescriptor extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.PropertyDescriptor {
                    public configurable: java.lang.Object
                    public enumerable: java.lang.Object
                    public get: java.lang.Object
                    public set: java.lang.Object
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isWritable(): boolean
                    public getValue(): java.lang.Object
                    public getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public setConfigurable(arg0: boolean): void
                    public setEnumerable(arg0: boolean): void
                    public setWritable(arg0: boolean): void
                    public setValue(arg0: java.lang.Object): void
                    public setGetter(arg0: java.lang.Object): void
                    public setSetter(arg0: java.lang.Object): void
                    public fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public type(): int
                    public hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public public hashCode(): int
                    public static $clinit$(): void
                    public G$configurable(): java.lang.Object
                    public S$configurable(arg0: java.lang.Object): void
                    public G$enumerable(): java.lang.Object
                    public S$enumerable(arg0: java.lang.Object): void
                    public G$get(): java.lang.Object
                    public S$get(arg0: java.lang.Object): void
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeInt8Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeInt8Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeInt8Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeInt8Array$Int8ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.ByteBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeInt8Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeInt8Array$Int8ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeString extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.OptimisticBuiltins {
                    public safeToString(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: int): boolean
                    public has(arg0: double): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: int): boolean
                    public hasOwnProperty(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public getOwnPropertyDescriptor(arg0: string): java.lang.Object
                    protected getOwnKeys(arg0: boolean, arg1: java.util.Set<java.lang.String>): java.lang.String[]
                    public static length(arg0: java.lang.Object): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, ...arg1: java.lang.Object[]): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: double): string
                    public static toString(arg0: java.lang.Object): string
                    public static valueOf(arg0: java.lang.Object): string
                    public static charAt(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static charAt(arg0: java.lang.Object, arg1: double): string
                    public static charAt(arg0: java.lang.Object, arg1: int): string
                    public static charCodeAt(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static charCodeAt(arg0: java.lang.Object, arg1: double): int
                    public static charCodeAt(arg0: java.lang.Object, arg1: long): int
                    public static charCodeAt(arg0: java.lang.Object, arg1: int): int
                    public static concat(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: double): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): int
                    public static lastIndexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static localeCompare(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static match(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static search(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static slice(arg0: java.lang.Object, arg1: int): string
                    public static slice(arg0: java.lang.Object, arg1: double): string
                    public static slice(arg0: java.lang.Object, arg1: int, arg2: int): string
                    public static slice(arg0: java.lang.Object, arg1: double, arg2: double): string
                    public static split(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static substr(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static substring(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static substring(arg0: java.lang.Object, arg1: int): string
                    public static substring(arg0: java.lang.Object, arg1: double): string
                    public static substring(arg0: java.lang.Object, arg1: int, arg2: int): string
                    public static substring(arg0: java.lang.Object, arg1: double, arg2: double): string
                    public static toLowerCase(arg0: java.lang.Object): string
                    public static toLocaleLowerCase(arg0: java.lang.Object): string
                    public static toUpperCase(arg0: java.lang.Object): string
                    public static toLocaleUpperCase(arg0: java.lang.Object): string
                    public static trim(arg0: java.lang.Object): string
                    public static trimLeft(arg0: java.lang.Object): string
                    public static trimRight(arg0: java.lang.Object): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: int): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: long): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: double): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public getLinkLogic(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                    public hasPerInstanceAssumptions(): boolean
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeString$CharCodeAtLinkLogic extends jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic {
                    public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                    public getRelinkException(): java.lang.Class<java.lang.Throwable>
                    public static class: java.lang.Class<any>
                }
                class NativeUint8ClampedArray extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeUint8ClampedArray
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeUint8ClampedArray
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint8ClampedArray$Uint8ClampedArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.ByteBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public isClamped(): boolean
                    public isUnsigned(): boolean
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeUint8ClampedArray$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeUint8ClampedArray$Uint8ClampedArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeArguments extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public getArgument(arg0: int): java.lang.Object
                    public setArgument(arg0: int, arg1: java.lang.Object): void
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public defineOwnProperty(arg0: string, arg1: java.lang.Object, arg2: boolean): boolean
                    public static allocate(arg0: java.lang.Object[], arg1: jdk.nashorn.internal.runtime.ScriptFunction, arg2: int): jdk.nashorn.internal.runtime.ScriptObject
                    public static G$length(arg0: java.lang.Object): java.lang.Object
                    public static S$length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static G$callee(arg0: java.lang.Object): java.lang.Object
                    public static S$callee(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public getLength(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeMath extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static E: double
                    public static LN10: double
                    public static LN2: double
                    public static LOG2E: double
                    public static LOG10E: double
                    public static PI: double
                    public static SQRT1_2: double
                    public static SQRT2: double
                    public static abs(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static abs(arg0: java.lang.Object, arg1: int): int
                    public static abs(arg0: java.lang.Object, arg1: long): long
                    public static abs(arg0: java.lang.Object, arg1: double): double
                    public static acos(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static acos(arg0: java.lang.Object, arg1: double): double
                    public static asin(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static asin(arg0: java.lang.Object, arg1: double): double
                    public static atan(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static atan(arg0: java.lang.Object, arg1: double): double
                    public static atan2(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static atan2(arg0: java.lang.Object, arg1: double, arg2: double): double
                    public static ceil(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static ceil(arg0: java.lang.Object, arg1: int): int
                    public static ceil(arg0: java.lang.Object, arg1: long): long
                    public static ceil(arg0: java.lang.Object, arg1: double): double
                    public static cos(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static cos(arg0: java.lang.Object, arg1: double): double
                    public static exp(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static floor(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static floor(arg0: java.lang.Object, arg1: int): int
                    public static floor(arg0: java.lang.Object, arg1: long): long
                    public static floor(arg0: java.lang.Object, arg1: double): double
                    public static log(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static log(arg0: java.lang.Object, arg1: double): double
                    public static max(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static max(arg0: java.lang.Object): double
                    public static max(arg0: java.lang.Object, arg1: int, arg2: int): int
                    public static max(arg0: java.lang.Object, arg1: long, arg2: long): long
                    public static max(arg0: java.lang.Object, arg1: double, arg2: double): double
                    public static max(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static min(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static min(arg0: java.lang.Object): double
                    public static min(arg0: java.lang.Object, arg1: int, arg2: int): int
                    public static min(arg0: java.lang.Object, arg1: long, arg2: long): long
                    public static min(arg0: java.lang.Object, arg1: double, arg2: double): double
                    public static min(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static pow(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static pow(arg0: java.lang.Object, arg1: double, arg2: double): double
                    public static random(arg0: java.lang.Object): double
                    public static round(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static sin(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static sin(arg0: java.lang.Object, arg1: double): double
                    public static sqrt(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static sqrt(arg0: java.lang.Object, arg1: double): double
                    public static tan(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public public static tan(arg0: java.lang.Object, arg1: double): double
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeEvalError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeEvalError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeJSON extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static parse(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static stringify(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeJSON$StringifyState {
                    public static class: java.lang.Class<any>
                }
                class NativeJSON$3 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeJSON$2 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeJSON$1 implements java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> {
                    public call(): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeSyntaxError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeSyntaxError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint32Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeUint32Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeUint32Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint32Array$Uint32ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.IntBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public isUnsigned(): boolean
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeUint32Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeUint32Array$Uint32ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeFunction {
                    public static TO_APPLY_ARGS: java.lang.invoke.MethodHandle
                    public static toString(arg0: java.lang.Object): string
                    public static apply(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static toApplyArgs(arg0: java.lang.Object): java.lang.Object[]
                    public static call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static bind(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static toSource(arg0: java.lang.Object): string
                    public static function(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.runtime.ScriptFunction
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeJavaImporter extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeJavaImporter
                    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static __noSuchMethod__(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public protected invokeNoSuchProperty(arg0: string, arg1: boolean, arg2: int): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeJSAdapter extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static __get__: string
                    public static __put__: string
                    public static __call__: string
                    public static __new__: string
                    public static __getIds__: string
                    public static __getKeys__: string
                    public static __getValues__: string
                    public static __has__: string
                    public static __delete__: string
                    public static __preventExtensions__: string
                    public static __isExtensible__: string
                    public static __seal__: string
                    public static __isSealed__: string
                    public static __freeze__: string
                    public static __isFrozen__: string
                    public getClassName(): string
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: double, arg1: int, arg2: int): void
                    public set(arg0: double, arg1: double, arg2: int): void
                    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: int, arg1: int, arg2: int): void
                    public set(arg0: int, arg1: double, arg2: int): void
                    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: int): boolean
                    public has(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public propertyIterator(): java.util.Iterator<java.lang.String>
                    public valueIterator(): java.util.Iterator<java.lang.Object>
                    public preventExtensions(): jdk.nashorn.internal.runtime.ScriptObject
                    public isExtensible(): boolean
                    public seal(): jdk.nashorn.internal.runtime.ScriptObject
                    public isSealed(): boolean
                    public freeze(): jdk.nashorn.internal.runtime.ScriptObject
                    public isFrozen(): boolean
                    public static construct(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeJSAdapter
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethodMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public getAdaptee(): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeInt32Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeInt32Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeInt32Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeInt32Array$Int32ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.IntBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeInt32Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeInt32Array$Int32ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeReferenceError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeReferenceError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint8Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeUint8Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeUint8Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeUint8Array$Uint8ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.ByteBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public isUnsigned(): boolean
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeUint8Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeUint8Array$Uint8ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeInt16Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeInt16Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeInt16Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeInt16Array$Int16ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.ShortBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeInt16Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeInt16Array$Int16ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class DataPropertyDescriptor extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.PropertyDescriptor {
                    public configurable: java.lang.Object
                    public enumerable: java.lang.Object
                    public writable: java.lang.Object
                    public value: java.lang.Object
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isWritable(): boolean
                    public getValue(): java.lang.Object
                    public getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public setConfigurable(arg0: boolean): void
                    public setEnumerable(arg0: boolean): void
                    public setWritable(arg0: boolean): void
                    public setValue(arg0: java.lang.Object): void
                    public setGetter(arg0: java.lang.Object): void
                    public setSetter(arg0: java.lang.Object): void
                    public fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public type(): int
                    public hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public public hashCode(): int
                    public static $clinit$(): void
                    public G$configurable(): java.lang.Object
                    public S$configurable(arg0: java.lang.Object): void
                    public G$enumerable(): java.lang.Object
                    public S$enumerable(arg0: java.lang.Object): void
                    public G$writable(): java.lang.Object
                    public S$writable(arg0: java.lang.Object): void
                    public G$value(): java.lang.Object
                    public S$value(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeDataView extends jdk.nashorn.internal.runtime.ScriptObject {
                    public buffer: java.lang.Object
                    public byteOffset: int
                    public byteLength: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeDataView
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: int): jdk.nashorn.internal.objects.NativeDataView
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: int, arg4: int): jdk.nashorn.internal.objects.NativeDataView
                    public static getInt8(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static getInt8(arg0: java.lang.Object, arg1: int): int
                    public static getUint8(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static getUint8(arg0: java.lang.Object, arg1: int): int
                    public static getInt16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getInt16(arg0: java.lang.Object, arg1: int): int
                    public static getInt16(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getUint16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getUint16(arg0: java.lang.Object, arg1: int): int
                    public static getUint16(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getInt32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getInt32(arg0: java.lang.Object, arg1: int): int
                    public static getInt32(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getUint32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): long
                    public static getUint32(arg0: java.lang.Object, arg1: int): long
                    public static getUint32(arg0: java.lang.Object, arg1: int, arg2: boolean): long
                    public static getFloat32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static getFloat32(arg0: java.lang.Object, arg1: int): double
                    public static getFloat32(arg0: java.lang.Object, arg1: int, arg2: boolean): double
                    public static getFloat64(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static getFloat64(arg0: java.lang.Object, arg1: int): double
                    public static getFloat64(arg0: java.lang.Object, arg1: int, arg2: boolean): double
                    public static setInt8(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static setInt8(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setUint8(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static setUint8(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: int, arg2: long): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: int, arg2: long, arg3: boolean): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: int, arg2: double): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: int, arg2: double, arg3: boolean): java.lang.Object
                    public static setFloat64(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setFloat64(arg0: java.lang.Object, arg1: int, arg2: double): java.lang.Object
                    public public static setFloat64(arg0: java.lang.Object, arg1: int, arg2: double, arg3: boolean): java.lang.Object
                    public static $clinit$(): void
                    public G$buffer(): java.lang.Object
                    public G$byteOffset(): int
                    public G$byteLength(): int
                    public static class: java.lang.Class<any>
                }
                class NativeError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeError
                    public static captureStackTrace(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static dumpStack(arg0: java.lang.Object): java.lang.Object
                    public static printStackTrace(arg0: java.lang.Object): java.lang.Object
                    public static getStackTrace(arg0: java.lang.Object): java.lang.Object
                    public static getLineNumber(arg0: java.lang.Object): java.lang.Object
                    public static setLineNumber(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static getColumnNumber(arg0: java.lang.Object): java.lang.Object
                    public static setColumnNumber(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static getFileName(arg0: java.lang.Object): java.lang.Object
                    public static setFileName(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static getStack(arg0: java.lang.Object): java.lang.Object
                    public static setStack(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static toString(arg0: java.lang.Object): java.lang.Object
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeDebug extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public static getArrayDataClass(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static getArrayData(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static getContext(arg0: java.lang.Object): java.lang.Object
                    public static map(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static identical(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static equalWithoutType(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static diffPropertyMaps(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static getClass(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static equals(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static toJavaString(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static toIdentString(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static getListenerCount(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static dumpCounters(arg0: java.lang.Object): java.lang.Object
                    public static getEventQueueCapacity(arg0: java.lang.Object): java.lang.Object
                    public static setEventQueueCapacity(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static addRuntimeEvent(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static expandEventQueueCapacity(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static clearRuntimeEvents(arg0: java.lang.Object): void
                    public static removeRuntimeEvent(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getRuntimeEvents(arg0: java.lang.Object): java.lang.Object
                    public public static getLastRuntimeEvent(arg0: java.lang.Object): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeArrayBuffer extends jdk.nashorn.internal.runtime.ScriptObject {
                    protected constructor(arg0: java.nio.ByteBuffer, arg1: jdk.nashorn.internal.objects.Global)
                    protected constructor(arg0: java.nio.ByteBuffer)
                    protected constructor(arg0: int)
                    protected constructor(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int)
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArrayBuffer
                    public getClassName(): string
                    public static byteLength(arg0: java.lang.Object): int
                    public static isView(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArrayBuffer
                    public static slice(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public public static slice(arg0: java.lang.Object, arg1: int): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                abstract class ArrayBufferView extends jdk.nashorn.internal.runtime.ScriptObject {
                    protected constructor(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int)
                    public static buffer(arg0: java.lang.Object): java.lang.Object
                    public static byteOffset(arg0: java.lang.Object): int
                    public static byteLength(arg0: java.lang.Object): int
                    public static length(arg0: java.lang.Object): int
                    public getLength(): java.lang.Object
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public getClassName(): string
                    protected isFloatArray(): boolean
                    protected static constructorImpl(arg0: boolean, arg1: java.lang.Object[], arg2: jdk.nashorn.internal.objects.ArrayBufferView$Factory): jdk.nashorn.internal.objects.ArrayBufferView
                    protected static setImpl(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarrayImpl(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                abstract class ArrayBufferView$Factory {
                    public constructor(arg0: int)
                    public construct(arg0: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData<any>
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
                class NativeFloat64Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeFloat64Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected isFloatArray(): boolean
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeFloat64Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeFloat64Array$Float64ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.DoubleBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getInt(arg0: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeFloat64Array$1 extends jdk.nashorn.internal.objects.ArrayBufferView$Factory {
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.NativeFloat64Array$Float64ArrayData
                    public getClassName(): string
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData
                    public static class: java.lang.Class<any>
                }
                class NativeNumber extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static MAX_VALUE: double
                    public static MIN_VALUE: double
                    public static NaN: double
                    public static NEGATIVE_INFINITY: double
                    public static POSITIVE_INFINITY: double
                    public safeToString(): string
                    public toString(): string
                    public getValue(): double
                    public doubleValue(): double
                    public getClassName(): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public static toFixed(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static toFixed(arg0: java.lang.Object, arg1: int): string
                    public static toExponential(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static toPrecision(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static toPrecision(arg0: java.lang.Object, arg1: int): string
                    public static toString(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static toLocaleString(arg0: java.lang.Object): string
                    public static valueOf(arg0: java.lang.Object): double
                    public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeRangeError extends jdk.nashorn.internal.runtime.ScriptObject {
                    public instMessage: java.lang.Object
                    public nashornException: java.lang.Object
                    public getClassName(): string
                    public public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeRangeError
                    public static $clinit$(): void
                    public G$instMessage(): java.lang.Object
                    public S$instMessage(arg0: java.lang.Object): void
                    public G$nashornException(): java.lang.Object
                    public S$nashornException(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeStrictArguments extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public getArgument(arg0: int): java.lang.Object
                    public setArgument(arg0: int, arg1: java.lang.Object): void
                    public static G$length(arg0: java.lang.Object): java.lang.Object
                    public static S$length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeRegExpExecResult extends jdk.nashorn.internal.runtime.ScriptObject {
                    public index: java.lang.Object
                    public input: java.lang.Object
                    public getClassName(): string
                    public static length(arg0: java.lang.Object): java.lang.Object
                    public public static length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static $clinit$(): void
                    public G$index(): java.lang.Object
                    public S$index(arg0: java.lang.Object): void
                    public G$input(): java.lang.Object
                    public S$input(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeArray extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.OptimisticBuiltins {
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    public defineOwnProperty(arg0: string, arg1: java.lang.Object, arg2: boolean): boolean
                    public defineOwnProperty(arg0: int, arg1: java.lang.Object): void
                    public asObjectArray(): java.lang.Object[]
                    public setIsLengthNotWritable(): void
                    public static isArray(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static length(arg0: java.lang.Object): java.lang.Object
                    public static length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getProtoLength(arg0: java.lang.Object): java.lang.Object
                    public static setProtoLength(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static toString(arg0: java.lang.Object): java.lang.Object
                    public static assertNumeric(arg0: java.lang.Object): java.lang.Object
                    public static toLocaleString(arg0: java.lang.Object): string
                    public static construct(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: int): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: long): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: double): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: int): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: long): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: double): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, ...arg1: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static join(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static popInt(arg0: java.lang.Object): int
                    public static popDouble(arg0: java.lang.Object): double
                    public static popObject(arg0: java.lang.Object): java.lang.Object
                    public static pop(arg0: java.lang.Object): java.lang.Object
                    public static push(arg0: java.lang.Object, arg1: int): double
                    public static push(arg0: java.lang.Object, arg1: long): double
                    public static push(arg0: java.lang.Object, arg1: double): double
                    public static pushObject(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static push(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static push(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static reverse(arg0: java.lang.Object): java.lang.Object
                    public static shift(arg0: java.lang.Object): java.lang.Object
                    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static sort(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static splice(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static unshift(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static lastIndexOf(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static every(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static some(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static forEach(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static map(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static filter(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static reduce(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static reduceRight(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public toString(): string
                    public getLinkLogic(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                    public hasPerInstanceAssumptions(): boolean
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeArray$PopLinkLogic extends jdk.nashorn.internal.objects.NativeArray$ArrayLinkLogic {
                    public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$PushLinkLogic extends jdk.nashorn.internal.objects.NativeArray$ArrayLinkLogic {
                    public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$ConcatLinkLogic extends jdk.nashorn.internal.objects.NativeArray$ArrayLinkLogic {
                    public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class NativeArray$ArrayLinkLogic extends jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic {
                    protected constructor()
                    protected static getContinuousArrayData(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                    public getRelinkException(): java.lang.Class<java.lang.Throwable>
                    public static class: java.lang.Class<any>
                }
                class NativeArray$12 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<java.lang.Object> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$11 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<jdk.nashorn.internal.objects.NativeArray> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$10 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<jdk.nashorn.internal.objects.NativeArray> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public applyLoopBegin(arg0: jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>): void
                    public static class: java.lang.Class<any>
                }
                class NativeArray$9 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<java.lang.Object> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$8 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<java.lang.Boolean> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$7 extends jdk.nashorn.internal.runtime.arrays.IteratorAction<java.lang.Boolean> {
                    protected forEach(arg0: java.lang.Object, arg1: double): boolean
                    public static class: java.lang.Class<any>
                }
                class NativeArray$6 implements java.util.Comparator<java.lang.Object> {
                    public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class NativeArray$5 implements java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> {
                    public call(): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeArray$4 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeArray$3 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeArray$2 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeArray$1 implements java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> {
                    public call(): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeRegExp extends jdk.nashorn.internal.runtime.ScriptObject {
                    public lastIndex: java.lang.Object
                    public getClassName(): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeRegExp
                    public static constructor(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public static newRegExp(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public safeToString(): string
                    public toString(): string
                    public static compile(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static exec(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static test(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static toString(arg0: java.lang.Object): string
                    public static source(arg0: java.lang.Object): java.lang.Object
                    public static global(arg0: java.lang.Object): java.lang.Object
                    public static ignoreCase(arg0: java.lang.Object): java.lang.Object
                    public static multiline(arg0: java.lang.Object): java.lang.Object
                    public static getLastInput(arg0: java.lang.Object): java.lang.Object
                    public static getLastMultiline(arg0: java.lang.Object): java.lang.Object
                    public static getLastMatch(arg0: java.lang.Object): java.lang.Object
                    public static getLastParen(arg0: java.lang.Object): java.lang.Object
                    public static getLeftContext(arg0: java.lang.Object): java.lang.Object
                    public static getRightContext(arg0: java.lang.Object): java.lang.Object
                    public static getGroup1(arg0: java.lang.Object): java.lang.Object
                    public static getGroup2(arg0: java.lang.Object): java.lang.Object
                    public static getGroup3(arg0: java.lang.Object): java.lang.Object
                    public static getGroup4(arg0: java.lang.Object): java.lang.Object
                    public static getGroup5(arg0: java.lang.Object): java.lang.Object
                    public static getGroup6(arg0: java.lang.Object): java.lang.Object
                    public static getGroup7(arg0: java.lang.Object): java.lang.Object
                    public static getGroup8(arg0: java.lang.Object): java.lang.Object
                    public static getGroup9(arg0: java.lang.Object): java.lang.Object
                    public exec(arg0: string): jdk.nashorn.internal.objects.NativeRegExpExecResult
                    public test(arg0: string): boolean
                    public getLastIndex(): int
                    public getLastIndexObject(): java.lang.Object
                    public setLastIndex(arg0: int): void
                    public static $clinit$(): void
                    public G$lastIndex(): java.lang.Object
                    public S$lastIndex(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class NativeRegExp$1 implements java.util.concurrent.Callable<java.lang.invoke.MethodHandle> {
                    public call(): java.lang.invoke.MethodHandle
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeDate extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public static construct(arg0: boolean, arg1: java.lang.Object): java.lang.Object
                    public static construct(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public safeToString(): string
                    public toString(): string
                    public static parse(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static UTC(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static now(arg0: java.lang.Object): double
                    public static toString(arg0: java.lang.Object): string
                    public static toDateString(arg0: java.lang.Object): string
                    public static toTimeString(arg0: java.lang.Object): string
                    public static toLocaleString(arg0: java.lang.Object): string
                    public static toLocaleDateString(arg0: java.lang.Object): string
                    public static toLocaleTimeString(arg0: java.lang.Object): string
                    public static valueOf(arg0: java.lang.Object): double
                    public static getTime(arg0: java.lang.Object): double
                    public static getFullYear(arg0: java.lang.Object): java.lang.Object
                    public static getUTCFullYear(arg0: java.lang.Object): double
                    public static getYear(arg0: java.lang.Object): double
                    public static getMonth(arg0: java.lang.Object): double
                    public static getUTCMonth(arg0: java.lang.Object): double
                    public static getDate(arg0: java.lang.Object): double
                    public static getUTCDate(arg0: java.lang.Object): double
                    public static getDay(arg0: java.lang.Object): double
                    public static getUTCDay(arg0: java.lang.Object): double
                    public static getHours(arg0: java.lang.Object): double
                    public static getUTCHours(arg0: java.lang.Object): double
                    public static getMinutes(arg0: java.lang.Object): double
                    public static getUTCMinutes(arg0: java.lang.Object): double
                    public static getSeconds(arg0: java.lang.Object): double
                    public static getUTCSeconds(arg0: java.lang.Object): double
                    public static getMilliseconds(arg0: java.lang.Object): double
                    public static getUTCMilliseconds(arg0: java.lang.Object): double
                    public static getTimezoneOffset(arg0: java.lang.Object): double
                    public static setTime(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static setMilliseconds(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCMilliseconds(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setSeconds(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCSeconds(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setMinutes(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCMinutes(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setHours(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCHours(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setDate(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCDate(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setMonth(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCMonth(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setFullYear(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setUTCFullYear(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static setYear(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static toUTCString(arg0: java.lang.Object): string
                    public static toGMTString(arg0: java.lang.Object): string
                    public static toISOString(arg0: java.lang.Object): string
                    public static toJSON(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
                class NativeDate$1 implements java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> {
                    public call(): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                namespace annotations {
                    interface Function extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        arity(): int
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                    interface Constructor extends java.lang.annotation.Annotation {
                        name(): string
                        arity(): int
                    }
                    interface Property extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        clazz(): string
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                    interface Optimistic extends java.lang.annotation.Annotation {
                    }
                    interface Getter extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                    class Where extends java.lang.Enum<jdk.nashorn.internal.objects.annotations.Where> {
                        public static CONSTRUCTOR: jdk.nashorn.internal.objects.annotations.Where
                        public static PROTOTYPE: jdk.nashorn.internal.objects.annotations.Where
                        public static INSTANCE: jdk.nashorn.internal.objects.annotations.Where
                        public static values(): jdk.nashorn.internal.objects.annotations.Where[]
                        public static valueOf(arg0: string): jdk.nashorn.internal.objects.annotations.Where
                        public static class: java.lang.Class<any>
                    }
                    interface Setter extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                    interface Attribute {
                        NOT_WRITABLE: int
                        NOT_ENUMERABLE: int
                        NOT_CONFIGURABLE: int
                        CONSTANT: int
                        NON_ENUMERABLE_CONSTANT: int
                        DEFAULT_ATTRIBUTES: int
                    }
                    interface SpecializedFunction extends java.lang.annotation.Annotation {
                        name(): string
                        linkLogic(): java.lang.Class<any>
                        isConstructor(): boolean
                        isOptimistic(): boolean
                    }
                    class SpecializedFunction$1 {
                        public static class: java.lang.Class<any>
                    }
                    abstract class SpecializedFunction$LinkLogic {
                        public static EMPTY_INSTANCE: jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                        public constructor()
                        public static getEmptyLinkLogicClass(): java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>
                        public getRelinkException(): java.lang.Class<java.lang.Throwable>
                        public static isEmpty(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): boolean
                        public isEmpty(): boolean
                        public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public needsGuard(arg0: java.lang.Object): boolean
                        public needsGuard(arg0: java.lang.Object, ...arg1: java.lang.Object[]): boolean
                        public getGuard(): java.lang.invoke.MethodHandle
                        public checkLinkable(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public static class: java.lang.Class<any>
                    }
                    class SpecializedFunction$LinkLogic$Empty extends jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic {
                        public canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public isEmpty(): boolean
                        public static class: java.lang.Class<any>
                    }
                    interface ScriptClass extends java.lang.annotation.Annotation {
                        value(): string
                    }
                }
                class Global extends jdk.nashorn.internal.runtime.Scope {
                    public arguments: java.lang.Object
                    public parseInt: java.lang.Object
                    public parseFloat: java.lang.Object
                    public isNaN: java.lang.Object
                    public isFinite: java.lang.Object
                    public encodeURI: java.lang.Object
                    public encodeURIComponent: java.lang.Object
                    public decodeURI: java.lang.Object
                    public decodeURIComponent: java.lang.Object
                    public escape: java.lang.Object
                    public unescape: java.lang.Object
                    public print: java.lang.Object
                    public load: java.lang.Object
                    public loadWithNewGlobal: java.lang.Object
                    public exit: java.lang.Object
                    public quit: java.lang.Object
                    public static NaN: double
                    public static Infinity: double
                    public static undefined: java.lang.Object
                    public eval: java.lang.Object
                    public object: java.lang.Object
                    public function: java.lang.Object
                    public array: java.lang.Object
                    public string: java.lang.Object
                    public _boolean: java.lang.Object
                    public number: java.lang.Object
                    public math: java.lang.Object
                    public error: java.lang.Object
                    public referenceError: java.lang.Object
                    public syntaxError: java.lang.Object
                    public typeError: java.lang.Object
                    public packages: java.lang.Object
                    public com: java.lang.Object
                    public edu: java.lang.Object
                    public java: java.lang.Object
                    public javafx: java.lang.Object
                    public javax: java.lang.Object
                    public org: java.lang.Object
                    public static __FILE__: java.lang.Object
                    public static __DIR__: java.lang.Object
                    public static __LINE__: java.lang.Object
                    public static getDate(arg0: java.lang.Object): java.lang.Object
                    public static setDate(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getRegExp(arg0: java.lang.Object): java.lang.Object
                    public static setRegExp(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJSON(arg0: java.lang.Object): java.lang.Object
                    public static setJSON(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJSAdapter(arg0: java.lang.Object): java.lang.Object
                    public static setJSAdapter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getEvalError(arg0: java.lang.Object): java.lang.Object
                    public static setEvalError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getRangeError(arg0: java.lang.Object): java.lang.Object
                    public static setRangeError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getURIError(arg0: java.lang.Object): java.lang.Object
                    public static setURIError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getArrayBuffer(arg0: java.lang.Object): java.lang.Object
                    public static setArrayBuffer(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getDataView(arg0: java.lang.Object): java.lang.Object
                    public static setDataView(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt8Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt8Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint8Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint8Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint8ClampedArray(arg0: java.lang.Object): java.lang.Object
                    public static setUint8ClampedArray(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt16Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt16Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint16Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint16Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt32Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint32Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getFloat32Array(arg0: java.lang.Object): java.lang.Object
                    public static setFloat32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getFloat64Array(arg0: java.lang.Object): java.lang.Object
                    public static setFloat64Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJavaImporter(arg0: java.lang.Object): java.lang.Object
                    public static setJavaImporter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJavaApi(arg0: java.lang.Object): java.lang.Object
                    public static setJavaApi(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public setScriptContext(arg0: javax.script.ScriptContext): void
                    public getScriptContext(): javax.script.ScriptContext
                    public setInitScriptContext(arg0: javax.script.ScriptContext): void
                    protected getContext(): jdk.nashorn.internal.runtime.Context
                    protected useDualFields(): boolean
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context)
                    public static instance(): jdk.nashorn.internal.objects.Global
                    public static hasInstance(): boolean
                    public getClassFilter(): jdk.nashorn.api.scripting.ClassFilter
                    public isOfContext(arg0: jdk.nashorn.internal.runtime.Context): boolean
                    public isStrictContext(): boolean
                    public initBuiltinObjects(arg0: javax.script.ScriptEngine): void
                    public wrapAsObject(arg0: java.lang.Object): java.lang.Object
                    public static primitiveLookup(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public static getPrimitiveWrapFilter(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public newObject(): jdk.nashorn.internal.runtime.ScriptObject
                    public getDefaultValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Class<any>): java.lang.Object
                    public isError(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public newError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newEvalError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newRangeError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newReferenceError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newSyntaxError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newTypeError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newURIError(arg0: string): jdk.nashorn.internal.runtime.ScriptObject
                    public newGenericDescriptor(arg0: boolean, arg1: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public newDataDescriptor(arg0: java.lang.Object, arg1: boolean, arg2: boolean, arg3: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public newAccessorDescriptor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: boolean, arg3: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public getInvokeByName(arg0: java.lang.Object, arg1: java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> | java.util.concurrent.Callable$$Lambda<jdk.nashorn.internal.runtime.linker.InvokeByName>): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public getDynamicInvoker(arg0: java.lang.Object, arg1: java.util.concurrent.Callable<java.lang.invoke.MethodHandle> | java.util.concurrent.Callable$$Lambda<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle
                    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static eval(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static directEval(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: boolean): java.lang.Object
                    public static print(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static println(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static load(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static loadWithNewGlobal(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static exit(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public getObjectPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public getFunctionPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public getTypeErrorThrower(): jdk.nashorn.internal.runtime.ScriptFunction
                    public static getBuiltinFunctionApplySwitchPoint(): java.lang.invoke.SwitchPoint
                    public static isBuiltinFunctionPrototypeApply(): boolean
                    public static isBuiltinFunctionPrototypeCall(): boolean
                    public getClassName(): string
                    public static regExpCopy(arg0: java.lang.Object): java.lang.Object
                    public static toRegExp(arg0: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public static toObject(arg0: java.lang.Object): java.lang.Object
                    public static allocate(arg0: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocate(arg0: double[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocate(arg0: int[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocateArguments(arg0: java.lang.Object[], arg1: java.lang.Object, arg2: int): jdk.nashorn.internal.runtime.ScriptObject
                    public static isEval(arg0: java.lang.Object): boolean
                    public static replaceLocationPropertyPlaceholder(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static isLocationPropertyPlaceholder(arg0: java.lang.Object): boolean
                    public static newRegExp(arg0: string, arg1: string): java.lang.Object
                    public static objectPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public static newEmptyInstance(): jdk.nashorn.internal.runtime.ScriptObject
                    public static checkObject(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static checkObjectCoercible(arg0: java.lang.Object): void
                    public getLexicalScope(): jdk.nashorn.internal.runtime.ScriptObject
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    public findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findProperty(arg0: string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    public findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public addShellBuiltins(): void
                    protected isGlobal(): boolean
                    public static $clinit$(): void
                    public G$arguments(): java.lang.Object
                    public S$arguments(arg0: java.lang.Object): void
                    public G$parseInt(): java.lang.Object
                    public S$parseInt(arg0: java.lang.Object): void
                    public G$parseFloat(): java.lang.Object
                    public S$parseFloat(arg0: java.lang.Object): void
                    public G$isNaN(): java.lang.Object
                    public S$isNaN(arg0: java.lang.Object): void
                    public G$isFinite(): java.lang.Object
                    public S$isFinite(arg0: java.lang.Object): void
                    public G$encodeURI(): java.lang.Object
                    public S$encodeURI(arg0: java.lang.Object): void
                    public G$encodeURIComponent(): java.lang.Object
                    public S$encodeURIComponent(arg0: java.lang.Object): void
                    public G$decodeURI(): java.lang.Object
                    public S$decodeURI(arg0: java.lang.Object): void
                    public G$decodeURIComponent(): java.lang.Object
                    public S$decodeURIComponent(arg0: java.lang.Object): void
                    public G$escape(): java.lang.Object
                    public S$escape(arg0: java.lang.Object): void
                    public G$unescape(): java.lang.Object
                    public S$unescape(arg0: java.lang.Object): void
                    public G$print(): java.lang.Object
                    public S$print(arg0: java.lang.Object): void
                    public G$load(): java.lang.Object
                    public S$load(arg0: java.lang.Object): void
                    public G$loadWithNewGlobal(): java.lang.Object
                    public S$loadWithNewGlobal(arg0: java.lang.Object): void
                    public G$exit(): java.lang.Object
                    public S$exit(arg0: java.lang.Object): void
                    public G$quit(): java.lang.Object
                    public S$quit(arg0: java.lang.Object): void
                    public G$NaN(): double
                    public G$Infinity(): double
                    public G$undefined(): java.lang.Object
                    public G$eval(): java.lang.Object
                    public S$eval(arg0: java.lang.Object): void
                    public G$object(): java.lang.Object
                    public S$object(arg0: java.lang.Object): void
                    public G$function(): java.lang.Object
                    public S$function(arg0: java.lang.Object): void
                    public G$array(): java.lang.Object
                    public S$array(arg0: java.lang.Object): void
                    public G$string(): java.lang.Object
                    public S$string(arg0: java.lang.Object): void
                    public G$_boolean(): java.lang.Object
                    public S$_boolean(arg0: java.lang.Object): void
                    public G$number(): java.lang.Object
                    public S$number(arg0: java.lang.Object): void
                    public G$math(): java.lang.Object
                    public S$math(arg0: java.lang.Object): void
                    public G$error(): java.lang.Object
                    public S$error(arg0: java.lang.Object): void
                    public G$referenceError(): java.lang.Object
                    public S$referenceError(arg0: java.lang.Object): void
                    public G$syntaxError(): java.lang.Object
                    public S$syntaxError(arg0: java.lang.Object): void
                    public G$typeError(): java.lang.Object
                    public S$typeError(arg0: java.lang.Object): void
                    public G$packages(): java.lang.Object
                    public S$packages(arg0: java.lang.Object): void
                    public G$com(): java.lang.Object
                    public S$com(arg0: java.lang.Object): void
                    public G$edu(): java.lang.Object
                    public S$edu(arg0: java.lang.Object): void
                    public G$java(): java.lang.Object
                    public S$java(arg0: java.lang.Object): void
                    public G$javafx(): java.lang.Object
                    public S$javafx(arg0: java.lang.Object): void
                    public G$javax(): java.lang.Object
                    public S$javax(arg0: java.lang.Object): void
                    public G$org(): java.lang.Object
                    public S$org(arg0: java.lang.Object): void
                    public G$__FILE__(): java.lang.Object
                    public G$__DIR__(): java.lang.Object
                    public G$__LINE__(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Global$LexicalScope extends jdk.nashorn.internal.runtime.ScriptObject {
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected addBoundProperty(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.Property, arg3: boolean): jdk.nashorn.internal.runtime.PropertyMap
                    public static class: java.lang.Class<any>
                }
            }
            namespace lookup {
                class MethodHandleFactory {
                    public static stripName(arg0: java.lang.Object): string
                    public static getFunctionality(): jdk.nashorn.internal.lookup.MethodHandleFunctionality
                    public static addDebugPrintout(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                    public static addDebugPrintout(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger, arg1: java.util.logging.Level, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.Object): java.lang.invoke.MethodHandle
                    public static addDebugPrintout(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: boolean, arg3: java.lang.Object): java.lang.invoke.MethodHandle
                    public static addDebugPrintout(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger, arg1: java.util.logging.Level, arg2: java.lang.invoke.MethodHandle, arg3: int, arg4: boolean, arg5: java.lang.Object): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                class MethodHandleFactory$StandardMethodHandleFunctionality implements jdk.nashorn.internal.lookup.MethodHandleFunctionality , jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor()
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    protected static describe(...arg0: java.lang.Object[]): string
                    public debug(arg0: java.lang.invoke.MethodHandle, arg1: string, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
                    public filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
                    public filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
                    public dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
                    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public bindTo(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                    public foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public arrayElementGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public arrayElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public throwException(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
                    public catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public constant(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                    public identity(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public asCollector(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    public asSpreader(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    public getter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public staticGetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public setter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public staticSetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public find(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    public findStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public findSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType, arg4: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public findVirtual(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public createSwitchPoint(): java.lang.invoke.SwitchPoint
                    public guardWithTest(arg0: java.lang.invoke.SwitchPoint, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public type(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
                    public static class: java.lang.Class<any>
                }
                class MethodHandleFactory$LookupException extends java.lang.RuntimeException {
                    public constructor(arg0: java.lang.Exception)
                    public static class: java.lang.Class<any>
                }
                interface MethodHandleFunctionality {
                    filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
                    filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
                    dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
                    foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    arrayElementGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    arrayElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    throwException(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
                    catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    constant(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                    identity(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    asCollector(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    asSpreader(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    bindTo(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                    getter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    staticGetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    setter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    staticSetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    find(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    findStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    findVirtual(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    findSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: string, arg3: java.lang.invoke.MethodType, arg4: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    createSwitchPoint(): java.lang.invoke.SwitchPoint
                    guardWithTest(arg0: java.lang.invoke.SwitchPoint, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    type(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
                }
                class Lookup {
                    public static MH: jdk.nashorn.internal.lookup.MethodHandleFunctionality
                    public static EMPTY_GETTER: java.lang.invoke.MethodHandle
                    public static EMPTY_SETTER: java.lang.invoke.MethodHandle
                    public static TYPE_ERROR_THROWER_GETTER: java.lang.invoke.MethodHandle
                    public static TYPE_ERROR_THROWER_SETTER: java.lang.invoke.MethodHandle
                    public static GET_OBJECT_TYPE: java.lang.invoke.MethodType
                    public static SET_OBJECT_TYPE: java.lang.invoke.MethodType
                    public static GET_PRIMITIVE_TYPE: java.lang.invoke.MethodType
                    public static SET_PRIMITIVE_TYPE: java.lang.invoke.MethodType
                    public static emptyGetter(arg0: java.lang.Object): java.lang.Object
                    public static emptySetter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static emptyGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static typeErrorThrowerGetter(arg0: java.lang.Object): java.lang.Object
                    public static typeErrorThrowerSetter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static filterArgumentType(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static filterReturnType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
        namespace api {
            namespace scripting {
                class NashornScriptEngine extends javax.script.AbstractScriptEngine implements javax.script.Compilable , javax.script.Invocable {
                    public static NASHORN_GLOBAL: string
                    public eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
                    public eval(arg0: string, arg1: javax.script.ScriptContext): java.lang.Object
                    public getFactory(): javax.script.ScriptEngineFactory
                    public createBindings(): javax.script.Bindings
                    public compile(arg0: java.io.Reader): javax.script.CompiledScript
                    public compile(arg0: string): javax.script.CompiledScript
                    public invokeFunction(arg0: string, ...arg1: java.lang.Object[]): java.lang.Object
                    public invokeMethod(arg0: java.lang.Object, arg1: string, ...arg2: java.lang.Object[]): java.lang.Object
                    public getInterface<T>(arg0: java.lang.Class<T>): T
                    public getInterface<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
                    public static class: java.lang.Class<any>
                }
                class NashornScriptEngine$3 extends javax.script.CompiledScript {
                    public eval(arg0: javax.script.ScriptContext): java.lang.Object
                    public getEngine(): javax.script.ScriptEngine
                    public static class: java.lang.Class<any>
                }
                class NashornScriptEngine$2 implements java.security.PrivilegedAction<jdk.nashorn.internal.objects.Global> {
                    public run(): jdk.nashorn.internal.objects.Global
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NashornScriptEngine$1 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.Context> {
                    public run(): jdk.nashorn.internal.runtime.Context
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class URLReader extends java.io.Reader {
                    public constructor(arg0: java.net.URL)
                    public constructor(arg0: java.net.URL, arg1: string)
                    public constructor(arg0: java.net.URL, arg1: java.nio.charset.Charset)
                    public read(arg0: char[], arg1: int, arg2: int): int
                    public close(): void
                    public getURL(): java.net.URL
                    public getCharset(): java.nio.charset.Charset
                    public static class: java.lang.Class<any>
                }
                class ScriptUtils {
                    public static parse(arg0: string, arg1: string, arg2: boolean): string
                    public static format(arg0: string, arg1: java.lang.Object[]): string
                    public static makeSynchronizedFunction(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static wrap(arg0: java.lang.Object): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public static unwrap(arg0: java.lang.Object): java.lang.Object
                    public static wrapArray(arg0: java.lang.Object[]): java.lang.Object[]
                    public static unwrapArray(arg0: java.lang.Object[]): java.lang.Object[]
                    public static convert(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class DefaultValueImpl {
                    public static class: java.lang.Class<any>
                }
                class NashornScriptEngineFactory implements javax.script.ScriptEngineFactory {
                    public constructor()
                    public getEngineName(): string
                    public getEngineVersion(): string
                    public getExtensions(): java.util.List<java.lang.String>
                    public getLanguageName(): string
                    public getLanguageVersion(): string
                    public getMethodCallSyntax(arg0: string, arg1: string, ...arg2: java.lang.String[]): string
                    public getMimeTypes(): java.util.List<java.lang.String>
                    public getNames(): java.util.List<java.lang.String>
                    public getOutputStatement(arg0: string): string
                    public getParameter(arg0: string): java.lang.Object
                    public getProgram(...arg0: java.lang.String[]): string
                    public getScriptEngine(): javax.script.ScriptEngine
                    public getScriptEngine(arg0: java.lang.ClassLoader): javax.script.ScriptEngine
                    public getScriptEngine(arg0: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda): javax.script.ScriptEngine
                    public getScriptEngine(...arg0: java.lang.String[]): javax.script.ScriptEngine
                    public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader): javax.script.ScriptEngine
                    public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader, arg2: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda): javax.script.ScriptEngine
                    public static class: java.lang.Class<any>
                }
                class Formatter {
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractJSObject implements jdk.nashorn.api.scripting.JSObject {
                    public constructor()
                    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public newObject(...arg0: java.lang.Object[]): java.lang.Object
                    public eval(arg0: string): java.lang.Object
                    public getMember(arg0: string): java.lang.Object
                    public getSlot(arg0: int): java.lang.Object
                    public hasMember(arg0: string): boolean
                    public hasSlot(arg0: int): boolean
                    public removeMember(arg0: string): void
                    public setMember(arg0: string, arg1: java.lang.Object): void
                    public setSlot(arg0: int, arg1: java.lang.Object): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<java.lang.Object>
                    public isInstance(arg0: java.lang.Object): boolean
                    public isInstanceOf(arg0: java.lang.Object): boolean
                    public getClassName(): string
                    public isFunction(): boolean
                    public isStrictFunction(): boolean
                    public isArray(): boolean
                    public toNumber(): double
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public static getDefaultValue(arg0: jdk.nashorn.api.scripting.JSObject, arg1: java.lang.Class<any>): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror extends jdk.nashorn.api.scripting.AbstractJSObject implements javax.script.Bindings {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public newObject(...arg0: java.lang.Object[]): java.lang.Object
                    public eval(arg0: string): java.lang.Object
                    public callMember(arg0: string, ...arg1: java.lang.Object[]): java.lang.Object
                    public getMember(arg0: string): java.lang.Object
                    public getSlot(arg0: int): java.lang.Object
                    public hasMember(arg0: string): boolean
                    public hasSlot(arg0: int): boolean
                    public removeMember(arg0: string): void
                    public setMember(arg0: string, arg1: java.lang.Object): void
                    public setSlot(arg0: int, arg1: java.lang.Object): void
                    public setIndexedPropertiesToExternalArrayData(arg0: java.nio.ByteBuffer): void
                    public isInstance(arg0: java.lang.Object): boolean
                    public getClassName(): string
                    public isFunction(): boolean
                    public isStrictFunction(): boolean
                    public isArray(): boolean
                    public clear(): void
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>
                    public get(arg0: java.lang.Object): java.lang.Object
                    public isEmpty(): boolean
                    public keySet(): java.util.Set<java.lang.String>
                    public put(arg0: string, arg1: java.lang.Object): java.lang.Object
                    public putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
                    public remove(arg0: java.lang.Object): java.lang.Object
                    public delete(arg0: java.lang.Object): boolean
                    public size(): int
                    public values(): java.util.Collection<java.lang.Object>
                    public getProto(): java.lang.Object
                    public setProto(arg0: java.lang.Object): void
                    public getOwnPropertyDescriptor(arg0: string): java.lang.Object
                    public getOwnKeys(arg0: boolean): java.lang.String[]
                    public preventExtensions(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public isExtensible(): boolean
                    public seal(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public isSealed(): boolean
                    public freeze(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public isFrozen(): boolean
                    public static isUndefined(arg0: java.lang.Object): boolean
                    public to<T>(arg0: java.lang.Class<T>): T
                    public static wrap<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static wrapAsJSONCompatible<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static unwrap<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static wrapArray<T>(arg0: java.lang.Object[], arg1: java.lang.Object): java.lang.Object[]
                    public static unwrapArray<T>(arg0: java.lang.Object[], arg1: java.lang.Object): java.lang.Object[]
                    public static identical<T>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public toNumber<T>(): double
                    public getDefaultValue<T>(arg0: java.lang.Class<any>): java.lang.Object
                    public put<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$35 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$34 implements java.util.concurrent.Callable<java.lang.Double> {
                    public call(): java.lang.Double
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$33 implements java.util.concurrent.Callable<T> {
                    public call(): T
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$32 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$31 implements java.util.concurrent.Callable<jdk.nashorn.api.scripting.ScriptObjectMirror> {
                    public call(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$30 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$29 implements java.util.concurrent.Callable<jdk.nashorn.api.scripting.ScriptObjectMirror> {
                    public call(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$28 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$27 implements java.util.concurrent.Callable<jdk.nashorn.api.scripting.ScriptObjectMirror> {
                    public call(): jdk.nashorn.api.scripting.ScriptObjectMirror
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$26 implements java.util.concurrent.Callable<java.lang.String[]> {
                    public call(): java.lang.String[]
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$25 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$24 implements java.util.concurrent.Callable<java.lang.Void> {
                    public call(): java.lang.Void
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$23 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$22 implements java.util.concurrent.Callable<java.util.Collection<java.lang.Object>> {
                    public call(): java.util.Collection<java.lang.Object>
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$21 implements java.util.concurrent.Callable<java.lang.Integer> {
                    public call(): java.lang.Integer
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$20 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$19 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$18 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$17 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$16 implements java.util.concurrent.Callable<java.util.Set<java.lang.String>> {
                    public call(): java.util.Set<java.lang.String>
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$15 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$14 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$13 implements java.util.concurrent.Callable<java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>> {
                    public call(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$12 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$11 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$10 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$9 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$8 implements java.util.concurrent.Callable<java.lang.Void> {
                    public call(): java.lang.Void
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$7 implements java.util.concurrent.Callable<java.lang.Void> {
                    public call(): java.lang.Void
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$6 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$5 implements java.util.concurrent.Callable<java.lang.Boolean> {
                    public call(): boolean
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$4 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$3 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$2 implements java.util.concurrent.Callable<java.lang.Object> {
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$2$1 implements java.security.PrivilegedAction<jdk.nashorn.internal.runtime.Context> {
                    public run(): jdk.nashorn.internal.runtime.Context
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ScriptObjectMirror$1 implements java.util.concurrent.Callable<java.lang.String> {
                    public call(): string
                    public call(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                interface ClassFilter {
                    exposeToScripts(arg0: string): boolean
                }
                interface ClassFilter$$Lambda {
                    (arg0: string): boolean
                }
                interface JSObject {
                    call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    newObject(...arg0: java.lang.Object[]): java.lang.Object
                    eval(arg0: string): java.lang.Object
                    getMember(arg0: string): java.lang.Object
                    getSlot(arg0: int): java.lang.Object
                    hasMember(arg0: string): boolean
                    hasSlot(arg0: int): boolean
                    removeMember(arg0: string): void
                    setMember(arg0: string, arg1: java.lang.Object): void
                    setSlot(arg0: int, arg1: java.lang.Object): void
                    keySet(): java.util.Set<java.lang.String>
                    values(): java.util.Collection<java.lang.Object>
                    isInstance(arg0: java.lang.Object): boolean
                    isInstanceOf(arg0: java.lang.Object): boolean
                    getClassName(): string
                    isFunction(): boolean
                    isStrictFunction(): boolean
                    isArray(): boolean
                    toNumber(): double
                }
                abstract class NashornException extends java.lang.RuntimeException {
                    protected constructor(arg0: string, arg1: string, arg2: int, arg3: int)
                    protected constructor(arg0: string, arg1: java.lang.Throwable, arg2: string, arg3: int, arg4: int)
                    protected constructor(arg0: string, arg1: java.lang.Throwable)
                    public getFileName(): string
                    public setFileName(arg0: string): void
                    public getLineNumber(): int
                    public setLineNumber(arg0: int): void
                    public getColumnNumber(): int
                    public setColumnNumber(arg0: int): void
                    public static getScriptFrames(arg0: java.lang.Throwable): java.lang.StackTraceElement[]
                    public static getScriptStackString(arg0: java.lang.Throwable): string
                    protected getThrown(): java.lang.Object
                    protected initEcmaError(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.api.scripting.NashornException
                    public getEcmaError(): java.lang.Object
                    public setEcmaError(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
