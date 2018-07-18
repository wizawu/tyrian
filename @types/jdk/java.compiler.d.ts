declare namespace javax {
    namespace annotation {
        namespace processing {
            abstract class AbstractProcessor implements javax.annotation.processing.Processor {
                protected processingEnv: javax.annotation.processing.ProcessingEnvironment
                protected constructor()
                public getSupportedOptions(): java.util.Set<java.lang.String>
                public getSupportedAnnotationTypes(): java.util.Set<java.lang.String>
                public getSupportedSourceVersion(): javax.lang.model.SourceVersion
                public init(arg0: javax.annotation.processing.ProcessingEnvironment): void
                public process(arg0: java.util.Set<javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean
                public getCompletions(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.AnnotationMirror, arg2: javax.lang.model.element.ExecutableElement, arg3: java.lang.String | string): java.lang.Iterable<javax.annotation.processing.Completion>
                protected isInitialized(): boolean
                public static class: java.lang.Class<any>
            }
            interface Completion {
                getValue(): string
                getMessage(): string
            }
            class Completions {
                public static of(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.annotation.processing.Completion
                public static of(arg0: java.lang.String | string): javax.annotation.processing.Completion
                public static class: java.lang.Class<any>
            }
            interface Filer {
                createSourceFile(arg0: java.lang.CharSequence, ...arg1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject
                createClassFile(arg0: java.lang.CharSequence, ...arg1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject
                createResource(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence, ...arg3: javax.lang.model.element.Element[]): javax.tools.FileObject
                getResource(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.CharSequence, arg2: java.lang.CharSequence): javax.tools.FileObject
            }
            class FilerException extends java.io.IOException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface Messager {
                printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence): void
                printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element): void
                printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element, arg3: javax.lang.model.element.AnnotationMirror): void
                printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element, arg3: javax.lang.model.element.AnnotationMirror, arg4: javax.lang.model.element.AnnotationValue): void
            }
            interface ProcessingEnvironment {
                getOptions(): java.util.Map<java.lang.String, java.lang.String>
                getMessager(): javax.annotation.processing.Messager
                getFiler(): javax.annotation.processing.Filer
                getElementUtils(): javax.lang.model.util.Elements
                getTypeUtils(): javax.lang.model.util.Types
                getSourceVersion(): javax.lang.model.SourceVersion
                getLocale(): java.util.Locale
            }
            interface Processor {
                getSupportedOptions(): java.util.Set<java.lang.String>
                getSupportedAnnotationTypes(): java.util.Set<java.lang.String>
                getSupportedSourceVersion(): javax.lang.model.SourceVersion
                init(arg0: javax.annotation.processing.ProcessingEnvironment): void
                process(arg0: java.util.Set<javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean
                getCompletions(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.AnnotationMirror, arg2: javax.lang.model.element.ExecutableElement, arg3: java.lang.String | string): java.lang.Iterable<javax.annotation.processing.Completion>
            }
            interface RoundEnvironment {
                processingOver(): boolean
                errorRaised(): boolean
                getRootElements(): java.util.Set<javax.lang.model.element.Element>
                getElementsAnnotatedWith(arg0: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.element.Element>
                getElementsAnnotatedWith(arg0: java.lang.Class<java.lang.annotation.Annotation>): java.util.Set<javax.lang.model.element.Element>
            }
            interface SupportedAnnotationTypes extends java.lang.annotation.Annotation {
                value(): java.lang.String[]
            }
            interface SupportedOptions extends java.lang.annotation.Annotation {
                value(): java.lang.String[]
            }
            interface SupportedSourceVersion extends java.lang.annotation.Annotation {
                value(): javax.lang.model.SourceVersion
            }
        }
    }
    namespace lang {
        namespace model {
            namespace element {
                interface AnnotationMirror {
                    getAnnotationType(): javax.lang.model.type.DeclaredType
                    getElementValues(): java.util.Map<javax.lang.model.element.ExecutableElement, javax.lang.model.element.AnnotationValue>
                }
                interface AnnotationValue {
                    getValue(): java.lang.Object
                    toString(): string
                    accept<R, P>(arg0: javax.lang.model.element.AnnotationValueVisitor<R, P>, arg1: P): R
                }
                interface AnnotationValueVisitor<R, P> {
                    visit(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
                    visit(arg0: javax.lang.model.element.AnnotationValue): R
                    visitBoolean(arg0: boolean, arg1: P): R
                    visitByte(arg0: byte, arg1: P): R
                    visitChar(arg0: char, arg1: P): R
                    visitDouble(arg0: double, arg1: P): R
                    visitFloat(arg0: float, arg1: P): R
                    visitInt(arg0: int, arg1: P): R
                    visitLong(arg0: long, arg1: P): R
                    visitShort(arg0: short, arg1: P): R
                    visitString(arg0: java.lang.String | string, arg1: P): R
                    visitType(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    visitEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    visitAnnotation(arg0: javax.lang.model.element.AnnotationMirror, arg1: P): R
                    visitArray(arg0: java.util.List<javax.lang.model.element.AnnotationValue>, arg1: P): R
                    visitUnknown(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
                }
                interface Element extends javax.lang.model.AnnotatedConstruct {
                    asType(): javax.lang.model.type.TypeMirror
                    getKind(): javax.lang.model.element.ElementKind
                    getModifiers(): java.util.Set<javax.lang.model.element.Modifier>
                    getSimpleName(): javax.lang.model.element.Name
                    getEnclosingElement(): javax.lang.model.element.Element
                    getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
                    equals(arg0: java.lang.Object): boolean
                    hashCode(): int
                    getAnnotationMirrors(): java.util.List<javax.lang.model.element.AnnotationMirror>
                    getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                    accept<R, P>(arg0: javax.lang.model.element.ElementVisitor<R, P>, arg1: P): R
                }
                class ElementKind extends java.lang.Enum<javax.lang.model.element.ElementKind> {
                    public static PACKAGE: javax.lang.model.element.ElementKind
                    public static ENUM: javax.lang.model.element.ElementKind
                    public static CLASS: javax.lang.model.element.ElementKind
                    public static ANNOTATION_TYPE: javax.lang.model.element.ElementKind
                    public static INTERFACE: javax.lang.model.element.ElementKind
                    public static ENUM_CONSTANT: javax.lang.model.element.ElementKind
                    public static FIELD: javax.lang.model.element.ElementKind
                    public static PARAMETER: javax.lang.model.element.ElementKind
                    public static LOCAL_VARIABLE: javax.lang.model.element.ElementKind
                    public static EXCEPTION_PARAMETER: javax.lang.model.element.ElementKind
                    public static METHOD: javax.lang.model.element.ElementKind
                    public static CONSTRUCTOR: javax.lang.model.element.ElementKind
                    public static STATIC_INIT: javax.lang.model.element.ElementKind
                    public static INSTANCE_INIT: javax.lang.model.element.ElementKind
                    public static TYPE_PARAMETER: javax.lang.model.element.ElementKind
                    public static OTHER: javax.lang.model.element.ElementKind
                    public static RESOURCE_VARIABLE: javax.lang.model.element.ElementKind
                    public static values(): javax.lang.model.element.ElementKind[]
                    public static valueOf(arg0: java.lang.String | string): javax.lang.model.element.ElementKind
                    public isClass(): boolean
                    public isInterface(): boolean
                    public isField(): boolean
                    public static class: java.lang.Class<any>
                }
                interface ElementVisitor<R, P> {
                    visit(arg0: javax.lang.model.element.Element, arg1: P): R
                    visit(arg0: javax.lang.model.element.Element): R
                    visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
                    visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
                    visitUnknown(arg0: javax.lang.model.element.Element, arg1: P): R
                }
                interface ExecutableElement extends javax.lang.model.element.Element , javax.lang.model.element.Parameterizable {
                    getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
                    getReturnType(): javax.lang.model.type.TypeMirror
                    getParameters(): java.util.List<javax.lang.model.element.VariableElement>
                    getReceiverType(): javax.lang.model.type.TypeMirror
                    isVarArgs(): boolean
                    isDefault(): boolean
                    getThrownTypes(): java.util.List<javax.lang.model.type.TypeMirror>
                    getDefaultValue(): javax.lang.model.element.AnnotationValue
                    getSimpleName(): javax.lang.model.element.Name
                }
                class Modifier extends java.lang.Enum<javax.lang.model.element.Modifier> {
                    public static PUBLIC: javax.lang.model.element.Modifier
                    public static PROTECTED: javax.lang.model.element.Modifier
                    public static PRIVATE: javax.lang.model.element.Modifier
                    public static ABSTRACT: javax.lang.model.element.Modifier
                    public static DEFAULT: javax.lang.model.element.Modifier
                    public static STATIC: javax.lang.model.element.Modifier
                    public static FINAL: javax.lang.model.element.Modifier
                    public static TRANSIENT: javax.lang.model.element.Modifier
                    public static VOLATILE: javax.lang.model.element.Modifier
                    public static SYNCHRONIZED: javax.lang.model.element.Modifier
                    public static NATIVE: javax.lang.model.element.Modifier
                    public static STRICTFP: javax.lang.model.element.Modifier
                    public static values(): javax.lang.model.element.Modifier[]
                    public static valueOf(arg0: java.lang.String | string): javax.lang.model.element.Modifier
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface Name extends java.lang.CharSequence {
                    equals(arg0: java.lang.Object): boolean
                    hashCode(): int
                    contentEquals(arg0: java.lang.CharSequence): boolean
                }
                class NestingKind extends java.lang.Enum<javax.lang.model.element.NestingKind> {
                    public static TOP_LEVEL: javax.lang.model.element.NestingKind
                    public static MEMBER: javax.lang.model.element.NestingKind
                    public static LOCAL: javax.lang.model.element.NestingKind
                    public static ANONYMOUS: javax.lang.model.element.NestingKind
                    public static values(): javax.lang.model.element.NestingKind[]
                    public static valueOf(arg0: java.lang.String | string): javax.lang.model.element.NestingKind
                    public isNested(): boolean
                    public static class: java.lang.Class<any>
                }
                interface PackageElement extends javax.lang.model.element.Element , javax.lang.model.element.QualifiedNameable {
                    getQualifiedName(): javax.lang.model.element.Name
                    getSimpleName(): javax.lang.model.element.Name
                    getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
                    isUnnamed(): boolean
                    getEnclosingElement(): javax.lang.model.element.Element
                }
                interface Parameterizable extends javax.lang.model.element.Element {
                    getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
                }
                interface QualifiedNameable extends javax.lang.model.element.Element {
                    getQualifiedName(): javax.lang.model.element.Name
                }
                interface TypeElement extends javax.lang.model.element.Element , javax.lang.model.element.Parameterizable , javax.lang.model.element.QualifiedNameable {
                    getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
                    getNestingKind(): javax.lang.model.element.NestingKind
                    getQualifiedName(): javax.lang.model.element.Name
                    getSimpleName(): javax.lang.model.element.Name
                    getSuperclass(): javax.lang.model.type.TypeMirror
                    getInterfaces(): java.util.List<javax.lang.model.type.TypeMirror>
                    getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
                    getEnclosingElement(): javax.lang.model.element.Element
                }
                interface TypeParameterElement extends javax.lang.model.element.Element {
                    getGenericElement(): javax.lang.model.element.Element
                    getBounds(): java.util.List<javax.lang.model.type.TypeMirror>
                    getEnclosingElement(): javax.lang.model.element.Element
                }
                class UnknownAnnotationValueException extends javax.lang.model.UnknownEntityException {
                    public constructor(arg0: javax.lang.model.element.AnnotationValue, arg1: java.lang.Object)
                    public getUnknownAnnotationValue(): javax.lang.model.element.AnnotationValue
                    public getArgument(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class UnknownElementException extends javax.lang.model.UnknownEntityException {
                    public constructor(arg0: javax.lang.model.element.Element, arg1: java.lang.Object)
                    public getUnknownElement(): javax.lang.model.element.Element
                    public getArgument(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                interface VariableElement extends javax.lang.model.element.Element {
                    getConstantValue(): java.lang.Object
                    getSimpleName(): javax.lang.model.element.Name
                    getEnclosingElement(): javax.lang.model.element.Element
                }
            }
            namespace type {
                interface ArrayType extends javax.lang.model.type.ReferenceType {
                    getComponentType(): javax.lang.model.type.TypeMirror
                }
                interface DeclaredType extends javax.lang.model.type.ReferenceType {
                    asElement(): javax.lang.model.element.Element
                    getEnclosingType(): javax.lang.model.type.TypeMirror
                    getTypeArguments(): java.util.List<javax.lang.model.type.TypeMirror>
                }
                interface ErrorType extends javax.lang.model.type.DeclaredType {
                }
                interface ExecutableType extends javax.lang.model.type.TypeMirror {
                    getTypeVariables(): java.util.List<javax.lang.model.type.TypeVariable>
                    getReturnType(): javax.lang.model.type.TypeMirror
                    getParameterTypes(): java.util.List<javax.lang.model.type.TypeMirror>
                    getReceiverType(): javax.lang.model.type.TypeMirror
                    getThrownTypes(): java.util.List<javax.lang.model.type.TypeMirror>
                }
                interface IntersectionType extends javax.lang.model.type.TypeMirror {
                    getBounds(): java.util.List<javax.lang.model.type.TypeMirror>
                }
                class MirroredTypeException extends javax.lang.model.type.MirroredTypesException {
                    public constructor(arg0: javax.lang.model.type.TypeMirror)
                    public getTypeMirror(): javax.lang.model.type.TypeMirror
                    public static class: java.lang.Class<any>
                }
                class MirroredTypesException extends java.lang.RuntimeException {
                    public constructor(arg0: java.util.List<javax.lang.model.type.TypeMirror>)
                    public getTypeMirrors(): java.util.List<javax.lang.model.type.TypeMirror>
                    public static class: java.lang.Class<any>
                }
                interface NoType extends javax.lang.model.type.TypeMirror {
                }
                interface NullType extends javax.lang.model.type.ReferenceType {
                }
                interface PrimitiveType extends javax.lang.model.type.TypeMirror {
                }
                interface ReferenceType extends javax.lang.model.type.TypeMirror {
                }
                class TypeKind extends java.lang.Enum<javax.lang.model.type.TypeKind> {
                    public static BOOLEAN: javax.lang.model.type.TypeKind
                    public static BYTE: javax.lang.model.type.TypeKind
                    public static SHORT: javax.lang.model.type.TypeKind
                    public static INT: javax.lang.model.type.TypeKind
                    public static LONG: javax.lang.model.type.TypeKind
                    public static CHAR: javax.lang.model.type.TypeKind
                    public static FLOAT: javax.lang.model.type.TypeKind
                    public static DOUBLE: javax.lang.model.type.TypeKind
                    public static VOID: javax.lang.model.type.TypeKind
                    public static NONE: javax.lang.model.type.TypeKind
                    public static NULL: javax.lang.model.type.TypeKind
                    public static ARRAY: javax.lang.model.type.TypeKind
                    public static DECLARED: javax.lang.model.type.TypeKind
                    public static ERROR: javax.lang.model.type.TypeKind
                    public static TYPEVAR: javax.lang.model.type.TypeKind
                    public static WILDCARD: javax.lang.model.type.TypeKind
                    public static PACKAGE: javax.lang.model.type.TypeKind
                    public static EXECUTABLE: javax.lang.model.type.TypeKind
                    public static OTHER: javax.lang.model.type.TypeKind
                    public static UNION: javax.lang.model.type.TypeKind
                    public static INTERSECTION: javax.lang.model.type.TypeKind
                    public static values(): javax.lang.model.type.TypeKind[]
                    public static valueOf(arg0: java.lang.String | string): javax.lang.model.type.TypeKind
                    public isPrimitive(): boolean
                    public static class: java.lang.Class<any>
                }
                interface TypeMirror extends javax.lang.model.AnnotatedConstruct {
                    getKind(): javax.lang.model.type.TypeKind
                    equals(arg0: java.lang.Object): boolean
                    hashCode(): int
                    toString(): string
                    accept<R, P>(arg0: javax.lang.model.type.TypeVisitor<R, P>, arg1: P): R
                }
                interface TypeVariable extends javax.lang.model.type.ReferenceType {
                    asElement(): javax.lang.model.element.Element
                    getUpperBound(): javax.lang.model.type.TypeMirror
                    getLowerBound(): javax.lang.model.type.TypeMirror
                }
                interface TypeVisitor<R, P> {
                    visit(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    visit(arg0: javax.lang.model.type.TypeMirror): R
                    visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    visitNull(arg0: javax.lang.model.type.NullType, arg1: P): R
                    visitArray(arg0: javax.lang.model.type.ArrayType, arg1: P): R
                    visitDeclared(arg0: javax.lang.model.type.DeclaredType, arg1: P): R
                    visitError(arg0: javax.lang.model.type.ErrorType, arg1: P): R
                    visitTypeVariable(arg0: javax.lang.model.type.TypeVariable, arg1: P): R
                    visitWildcard(arg0: javax.lang.model.type.WildcardType, arg1: P): R
                    visitExecutable(arg0: javax.lang.model.type.ExecutableType, arg1: P): R
                    visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
                    visitUnknown(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                }
                interface UnionType extends javax.lang.model.type.TypeMirror {
                    getAlternatives(): java.util.List<javax.lang.model.type.TypeMirror>
                }
                class UnknownTypeException extends javax.lang.model.UnknownEntityException {
                    public constructor(arg0: javax.lang.model.type.TypeMirror, arg1: java.lang.Object)
                    public getUnknownType(): javax.lang.model.type.TypeMirror
                    public getArgument(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                interface WildcardType extends javax.lang.model.type.TypeMirror {
                    getExtendsBound(): javax.lang.model.type.TypeMirror
                    getSuperBound(): javax.lang.model.type.TypeMirror
                }
            }
            namespace util {
                abstract class AbstractAnnotationValueVisitor6<R, P> implements javax.lang.model.element.AnnotationValueVisitor<R, P> {
                    protected constructor()
                    public visit(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
                    public visit(arg0: javax.lang.model.element.AnnotationValue): R
                    public visitUnknown(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractAnnotationValueVisitor7<R, P> extends javax.lang.model.util.AbstractAnnotationValueVisitor6<R, P> {
                    protected constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractAnnotationValueVisitor8<R, P> extends javax.lang.model.util.AbstractAnnotationValueVisitor7<R, P> {
                    protected constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractElementVisitor6<R, P> implements javax.lang.model.element.ElementVisitor<R, P> {
                    protected constructor()
                    public visit(arg0: javax.lang.model.element.Element, arg1: P): R
                    public visit(arg0: javax.lang.model.element.Element): R
                    public visitUnknown(arg0: javax.lang.model.element.Element, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractElementVisitor7<R, P> extends javax.lang.model.util.AbstractElementVisitor6<R, P> {
                    protected constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractElementVisitor8<R, P> extends javax.lang.model.util.AbstractElementVisitor7<R, P> {
                    protected constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractTypeVisitor6<R, P> implements javax.lang.model.type.TypeVisitor<R, P> {
                    protected constructor()
                    public visit(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    public visit(arg0: javax.lang.model.type.TypeMirror): R
                    public visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    public visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                    public visitUnknown(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractTypeVisitor7<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
                    protected constructor()
                    public visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                abstract class AbstractTypeVisitor8<R, P> extends javax.lang.model.util.AbstractTypeVisitor7<R, P> {
                    protected constructor()
                    public visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class ElementFilter {
                    public static fieldsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.VariableElement>
                    public static fieldsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.VariableElement>
                    public static constructorsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
                    public static constructorsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
                    public static methodsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
                    public static methodsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
                    public static typesIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.TypeElement>
                    public static typesIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.TypeElement>
                    public static packagesIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.PackageElement>
                    public static packagesIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.PackageElement>
                    public static class: java.lang.Class<any>
                }
                class ElementKindVisitor6<R, P> extends javax.lang.model.util.SimpleElementVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
                    public visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitTypeAsAnnotationType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitTypeAsClass(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitTypeAsEnum(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitTypeAsInterface(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsExceptionParameter(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsField(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsLocalVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsParameter(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitVariableAsResourceVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitExecutableAsConstructor(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitExecutableAsInstanceInit(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitExecutableAsMethod(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitExecutableAsStaticInit(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class ElementKindVisitor7<R, P> extends javax.lang.model.util.ElementKindVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitVariableAsResourceVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class ElementKindVisitor8<R, P> extends javax.lang.model.util.ElementKindVisitor7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public static class: java.lang.Class<any>
                }
                class ElementScanner6<R, P> extends javax.lang.model.util.AbstractElementVisitor6<R, P> {
                    protected DEFAULT_VALUE: R
                    protected constructor()
                    protected constructor(arg0: R)
                    public scan(arg0: java.lang.Iterable<javax.lang.model.element.Element>, arg1: P): R
                    public scan(arg0: javax.lang.model.element.Element, arg1: P): R
                    public scan(arg0: javax.lang.model.element.Element): R
                    public visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
                    public visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class ElementScanner7<R, P> extends javax.lang.model.util.ElementScanner6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class ElementScanner8<R, P> extends javax.lang.model.util.ElementScanner7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public static class: java.lang.Class<any>
                }
                interface Elements {
                    getPackageElement(arg0: java.lang.CharSequence): javax.lang.model.element.PackageElement
                    getTypeElement(arg0: java.lang.CharSequence): javax.lang.model.element.TypeElement
                    getElementValuesWithDefaults(arg0: javax.lang.model.element.AnnotationMirror): java.util.Map<javax.lang.model.element.ExecutableElement, javax.lang.model.element.AnnotationValue>
                    getDocComment(arg0: javax.lang.model.element.Element): string
                    isDeprecated(arg0: javax.lang.model.element.Element): boolean
                    getBinaryName(arg0: javax.lang.model.element.TypeElement): javax.lang.model.element.Name
                    getPackageOf(arg0: javax.lang.model.element.Element): javax.lang.model.element.PackageElement
                    getAllMembers(arg0: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.Element>
                    getAllAnnotationMirrors(arg0: javax.lang.model.element.Element): java.util.List<javax.lang.model.element.AnnotationMirror>
                    hides(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.Element): boolean
                    overrides(arg0: javax.lang.model.element.ExecutableElement, arg1: javax.lang.model.element.ExecutableElement, arg2: javax.lang.model.element.TypeElement): boolean
                    getConstantExpression(arg0: java.lang.Object): string
                    printElements(arg0: java.io.Writer | java.io.Writer$$Lambda, ...arg1: javax.lang.model.element.Element[]): void
                    getName(arg0: java.lang.CharSequence): javax.lang.model.element.Name
                    isFunctionalInterface(arg0: javax.lang.model.element.TypeElement): boolean
                }
                class SimpleAnnotationValueVisitor6<R, P> extends javax.lang.model.util.AbstractAnnotationValueVisitor6<R, P> {
                    protected DEFAULT_VALUE: R
                    protected constructor()
                    protected constructor(arg0: R)
                    protected defaultAction(arg0: java.lang.Object, arg1: P): R
                    public visitBoolean(arg0: boolean, arg1: P): R
                    public visitByte(arg0: byte, arg1: P): R
                    public visitChar(arg0: char, arg1: P): R
                    public visitDouble(arg0: double, arg1: P): R
                    public visitFloat(arg0: float, arg1: P): R
                    public visitInt(arg0: int, arg1: P): R
                    public visitLong(arg0: long, arg1: P): R
                    public visitShort(arg0: short, arg1: P): R
                    public visitString(arg0: java.lang.String | string, arg1: P): R
                    public visitType(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    public visitEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitAnnotation(arg0: javax.lang.model.element.AnnotationMirror, arg1: P): R
                    public visitArray(arg0: java.util.List<javax.lang.model.element.AnnotationValue>, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class SimpleAnnotationValueVisitor7<R, P> extends javax.lang.model.util.SimpleAnnotationValueVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public static class: java.lang.Class<any>
                }
                class SimpleAnnotationValueVisitor8<R, P> extends javax.lang.model.util.SimpleAnnotationValueVisitor7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public static class: java.lang.Class<any>
                }
                class SimpleElementVisitor6<R, P> extends javax.lang.model.util.AbstractElementVisitor6<R, P> {
                    protected DEFAULT_VALUE: R
                    protected constructor()
                    protected constructor(arg0: R)
                    protected defaultAction(arg0: javax.lang.model.element.Element, arg1: P): R
                    public visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
                    public visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class SimpleElementVisitor7<R, P> extends javax.lang.model.util.SimpleElementVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class SimpleElementVisitor8<R, P> extends javax.lang.model.util.SimpleElementVisitor7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public static class: java.lang.Class<any>
                }
                class SimpleTypeVisitor6<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
                    protected DEFAULT_VALUE: R
                    protected constructor()
                    protected constructor(arg0: R)
                    protected defaultAction(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
                    public visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitNull(arg0: javax.lang.model.type.NullType, arg1: P): R
                    public visitArray(arg0: javax.lang.model.type.ArrayType, arg1: P): R
                    public visitDeclared(arg0: javax.lang.model.type.DeclaredType, arg1: P): R
                    public visitError(arg0: javax.lang.model.type.ErrorType, arg1: P): R
                    public visitTypeVariable(arg0: javax.lang.model.type.TypeVariable, arg1: P): R
                    public visitWildcard(arg0: javax.lang.model.type.WildcardType, arg1: P): R
                    public visitExecutable(arg0: javax.lang.model.type.ExecutableType, arg1: P): R
                    public visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class SimpleTypeVisitor7<R, P> extends javax.lang.model.util.SimpleTypeVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class SimpleTypeVisitor8<R, P> extends javax.lang.model.util.SimpleTypeVisitor7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class TypeKindVisitor6<R, P> extends javax.lang.model.util.SimpleTypeVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsBoolean(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsByte(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsShort(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsInt(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsLong(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsChar(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsFloat(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitPrimitiveAsDouble(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
                    public visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
                    public visitNoTypeAsVoid(arg0: javax.lang.model.type.NoType, arg1: P): R
                    public visitNoTypeAsPackage(arg0: javax.lang.model.type.NoType, arg1: P): R
                    public visitNoTypeAsNone(arg0: javax.lang.model.type.NoType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class TypeKindVisitor7<R, P> extends javax.lang.model.util.TypeKindVisitor6<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                class TypeKindVisitor8<R, P> extends javax.lang.model.util.TypeKindVisitor7<R, P> {
                    protected constructor()
                    protected constructor(arg0: R)
                    public visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                interface Types {
                    asElement(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.element.Element
                    isSameType(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
                    isSubtype(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
                    isAssignable(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
                    contains(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
                    isSubsignature(arg0: javax.lang.model.type.ExecutableType, arg1: javax.lang.model.type.ExecutableType): boolean
                    directSupertypes(arg0: javax.lang.model.type.TypeMirror): java.util.List<javax.lang.model.type.TypeMirror>
                    erasure(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror
                    boxedClass(arg0: javax.lang.model.type.PrimitiveType): javax.lang.model.element.TypeElement
                    unboxedType(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.PrimitiveType
                    capture(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror
                    getPrimitiveType(arg0: javax.lang.model.type.TypeKind): javax.lang.model.type.PrimitiveType
                    getNullType(): javax.lang.model.type.NullType
                    getNoType(arg0: javax.lang.model.type.TypeKind): javax.lang.model.type.NoType
                    getArrayType(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.ArrayType
                    getWildcardType(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): javax.lang.model.type.WildcardType
                    getDeclaredType(arg0: javax.lang.model.element.TypeElement, ...arg1: javax.lang.model.type.TypeMirror[]): javax.lang.model.type.DeclaredType
                    getDeclaredType(arg0: javax.lang.model.type.DeclaredType, arg1: javax.lang.model.element.TypeElement, ...arg2: javax.lang.model.type.TypeMirror[]): javax.lang.model.type.DeclaredType
                    asMemberOf(arg0: javax.lang.model.type.DeclaredType, arg1: javax.lang.model.element.Element): javax.lang.model.type.TypeMirror
                }
            }
            interface AnnotatedConstruct {
                getAnnotationMirrors(): java.util.List<javax.lang.model.element.AnnotationMirror>
                getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
            }
            class SourceVersion extends java.lang.Enum<javax.lang.model.SourceVersion> {
                public static RELEASE_0: javax.lang.model.SourceVersion
                public static RELEASE_1: javax.lang.model.SourceVersion
                public static RELEASE_2: javax.lang.model.SourceVersion
                public static RELEASE_3: javax.lang.model.SourceVersion
                public static RELEASE_4: javax.lang.model.SourceVersion
                public static RELEASE_5: javax.lang.model.SourceVersion
                public static RELEASE_6: javax.lang.model.SourceVersion
                public static RELEASE_7: javax.lang.model.SourceVersion
                public static RELEASE_8: javax.lang.model.SourceVersion
                public static values(): javax.lang.model.SourceVersion[]
                public static valueOf(arg0: java.lang.String | string): javax.lang.model.SourceVersion
                public static latest(): javax.lang.model.SourceVersion
                public static latestSupported(): javax.lang.model.SourceVersion
                public static isIdentifier(arg0: java.lang.CharSequence): boolean
                public static isName(arg0: java.lang.CharSequence): boolean
                public static isKeyword(arg0: java.lang.CharSequence): boolean
                public static class: java.lang.Class<any>
            }
            class UnknownEntityException extends java.lang.RuntimeException {
                protected constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
        }
    }
    namespace tools {
        interface Diagnostic<S> {
            NOPOS: long
            getKind(): javax.tools.Diagnostic$Kind
            getSource(): S
            getPosition(): long
            getStartPosition(): long
            getEndPosition(): long
            getLineNumber(): long
            getColumnNumber(): long
            getCode(): string
            getMessage(arg0: java.util.Locale): string
        }
        class DiagnosticCollector<S> implements javax.tools.DiagnosticListener<S> {
            public constructor()
            public report(arg0: javax.tools.Diagnostic<S>): void
            public getDiagnostics(): java.util.List<javax.tools.Diagnostic<S>>
            public static class: java.lang.Class<any>
        }
        interface DiagnosticListener<S> {
            report(arg0: javax.tools.Diagnostic<S>): void
        }
        interface DiagnosticListener$$Lambda<S> {
            (arg0: javax.tools.Diagnostic<S>): void
        }
        interface DocumentationTool extends javax.tools.Tool , javax.tools.OptionChecker {
            getTask(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.tools.JavaFileManager, arg2: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg3: java.lang.Class<any>, arg4: java.lang.Iterable<java.lang.String>, arg5: java.lang.Iterable<javax.tools.JavaFileObject>): javax.tools.DocumentationTool$DocumentationTask
            getStandardFileManager(arg0: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg1: java.util.Locale, arg2: java.nio.charset.Charset): javax.tools.StandardJavaFileManager
        }
        interface FileObject {
            toUri(): java.net.URI
            getName(): string
            openInputStream(): java.io.InputStream
            openOutputStream(): java.io.OutputStream
            openReader(arg0: boolean): java.io.Reader
            getCharContent(arg0: boolean): java.lang.CharSequence
            openWriter(): java.io.Writer
            getLastModified(): long
            delete(): boolean
        }
        class ForwardingFileObject<F extends javax.tools.FileObject> implements javax.tools.FileObject {
            protected fileObject: F
            protected constructor(arg0: F)
            public toUri(): java.net.URI
            public getName(): string
            public openInputStream(): java.io.InputStream
            public openOutputStream(): java.io.OutputStream
            public openReader(arg0: boolean): java.io.Reader
            public getCharContent(arg0: boolean): java.lang.CharSequence
            public openWriter(): java.io.Writer
            public getLastModified(): long
            public delete(): boolean
            public static class: java.lang.Class<any>
        }
        class ForwardingJavaFileManager<M extends javax.tools.JavaFileManager> implements javax.tools.JavaFileManager {
            protected fileManager: M
            protected constructor(arg0: M)
            public getClassLoader(arg0: javax.tools.JavaFileManager$Location): java.lang.ClassLoader
            public list(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.util.Set<javax.tools.JavaFileObject$Kind>, arg3: boolean): java.lang.Iterable<javax.tools.JavaFileObject>
            public inferBinaryName(arg0: javax.tools.JavaFileManager$Location, arg1: javax.tools.JavaFileObject): string
            public isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
            public handleOption(arg0: java.lang.String | string, arg1: java.util.Iterator<java.lang.String>): boolean
            public hasLocation(arg0: javax.tools.JavaFileManager$Location): boolean
            public isSupportedOption(arg0: java.lang.String | string): int
            public getJavaFileForInput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: javax.tools.JavaFileObject$Kind): javax.tools.JavaFileObject
            public getJavaFileForOutput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: javax.tools.JavaFileObject$Kind, arg3: javax.tools.FileObject): javax.tools.JavaFileObject
            public getFileForInput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.tools.FileObject
            public getFileForOutput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.tools.FileObject): javax.tools.FileObject
            public flush(): void
            public close(): void
            public static class: java.lang.Class<any>
        }
        class ForwardingJavaFileObject<F extends javax.tools.JavaFileObject> extends javax.tools.ForwardingFileObject<F> implements javax.tools.JavaFileObject {
            protected constructor(arg0: F)
            public getKind(): javax.tools.JavaFileObject$Kind
            public isNameCompatible(arg0: java.lang.String | string, arg1: javax.tools.JavaFileObject$Kind): boolean
            public getNestingKind(): javax.lang.model.element.NestingKind
            public getAccessLevel(): javax.lang.model.element.Modifier
            public static class: java.lang.Class<any>
        }
        interface JavaCompiler extends javax.tools.Tool , javax.tools.OptionChecker {
            getTask(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: javax.tools.JavaFileManager, arg2: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg3: java.lang.Iterable<java.lang.String>, arg4: java.lang.Iterable<java.lang.String>, arg5: java.lang.Iterable<javax.tools.JavaFileObject>): javax.tools.JavaCompiler$CompilationTask
            getStandardFileManager(arg0: javax.tools.DiagnosticListener<javax.tools.JavaFileObject> | javax.tools.DiagnosticListener$$Lambda<javax.tools.JavaFileObject>, arg1: java.util.Locale, arg2: java.nio.charset.Charset): javax.tools.StandardJavaFileManager
        }
        interface JavaFileManager extends java.io.Closeable , java.io.Flushable , javax.tools.OptionChecker {
            getClassLoader(arg0: javax.tools.JavaFileManager$Location): java.lang.ClassLoader
            list(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.util.Set<javax.tools.JavaFileObject$Kind>, arg3: boolean): java.lang.Iterable<javax.tools.JavaFileObject>
            inferBinaryName(arg0: javax.tools.JavaFileManager$Location, arg1: javax.tools.JavaFileObject): string
            isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
            handleOption(arg0: java.lang.String | string, arg1: java.util.Iterator<java.lang.String>): boolean
            hasLocation(arg0: javax.tools.JavaFileManager$Location): boolean
            getJavaFileForInput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: javax.tools.JavaFileObject$Kind): javax.tools.JavaFileObject
            getJavaFileForOutput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: javax.tools.JavaFileObject$Kind, arg3: javax.tools.FileObject): javax.tools.JavaFileObject
            getFileForInput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.tools.FileObject
            getFileForOutput(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.tools.FileObject): javax.tools.FileObject
            flush(): void
            close(): void
        }
        interface JavaFileObject extends javax.tools.FileObject {
            getKind(): javax.tools.JavaFileObject$Kind
            isNameCompatible(arg0: java.lang.String | string, arg1: javax.tools.JavaFileObject$Kind): boolean
            getNestingKind(): javax.lang.model.element.NestingKind
            getAccessLevel(): javax.lang.model.element.Modifier
        }
        interface OptionChecker {
            isSupportedOption(arg0: java.lang.String | string): int
        }
        interface OptionChecker$$Lambda {
            (arg0: java.lang.String | string): int
        }
        class SimpleJavaFileObject implements javax.tools.JavaFileObject {
            protected uri: java.net.URI
            protected kind: javax.tools.JavaFileObject$Kind
            protected constructor(arg0: java.net.URI, arg1: javax.tools.JavaFileObject$Kind)
            public toUri(): java.net.URI
            public getName(): string
            public openInputStream(): java.io.InputStream
            public openOutputStream(): java.io.OutputStream
            public openReader(arg0: boolean): java.io.Reader
            public getCharContent(arg0: boolean): java.lang.CharSequence
            public openWriter(): java.io.Writer
            public getLastModified(): long
            public delete(): boolean
            public getKind(): javax.tools.JavaFileObject$Kind
            public isNameCompatible(arg0: java.lang.String | string, arg1: javax.tools.JavaFileObject$Kind): boolean
            public getNestingKind(): javax.lang.model.element.NestingKind
            public getAccessLevel(): javax.lang.model.element.Modifier
            public toString(): string
            public static class: java.lang.Class<any>
        }
        interface StandardJavaFileManager extends javax.tools.JavaFileManager {
            isSameFile(arg0: javax.tools.FileObject, arg1: javax.tools.FileObject): boolean
            getJavaFileObjectsFromFiles(arg0: java.lang.Iterable<java.io.File>): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjects(...arg0: java.io.File[]): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjectsFromStrings(arg0: java.lang.Iterable<java.lang.String>): java.lang.Iterable<javax.tools.JavaFileObject>
            getJavaFileObjects(...arg0: java.lang.String[]): java.lang.Iterable<javax.tools.JavaFileObject>
            setLocation(arg0: javax.tools.JavaFileManager$Location, arg1: java.lang.Iterable<java.io.File>): void
            getLocation(arg0: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.io.File>
        }
        class StandardLocation extends java.lang.Enum<javax.tools.StandardLocation> implements javax.tools.JavaFileManager$Location {
            public static CLASS_OUTPUT: javax.tools.StandardLocation
            public static SOURCE_OUTPUT: javax.tools.StandardLocation
            public static CLASS_PATH: javax.tools.StandardLocation
            public static SOURCE_PATH: javax.tools.StandardLocation
            public static ANNOTATION_PROCESSOR_PATH: javax.tools.StandardLocation
            public static PLATFORM_CLASS_PATH: javax.tools.StandardLocation
            public static NATIVE_HEADER_OUTPUT: javax.tools.StandardLocation
            public static values(): javax.tools.StandardLocation[]
            public static valueOf(arg0: java.lang.String | string): javax.tools.StandardLocation
            public static locationFor(arg0: java.lang.String | string): javax.tools.JavaFileManager$Location
            public getName(): string
            public isOutputLocation(): boolean
            public static class: java.lang.Class<any>
        }
        interface Tool {
            run(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, ...arg3: java.lang.String[]): int
            getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>
        }
        class ToolProvider {
            public static getSystemJavaCompiler(): javax.tools.JavaCompiler
            public static getSystemDocumentationTool(): javax.tools.DocumentationTool
            public static getSystemToolClassLoader(): java.lang.ClassLoader
            public static class: java.lang.Class<any>
        }
    }
}
